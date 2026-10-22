/**
 * Production Security Utilities:
 * 1. In-Memory Sliding Window Rate Limiting (per-IP DDoS & SMTP flooding defense)
 * 2. Single-line string sanitization (CRLF / Header Injection defense)
 * 3. URL protocol validator (SSRF / javascript: XSS defense)
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 5 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      // Remove timestamps older than 1 hour
      record.timestamps = record.timestamps.filter((ts) => now - ts < 60 * 60 * 1000);
      if (record.timestamps.length === 0) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  limit: number; // Max allowed requests
  windowMs: number; // Time window in milliseconds
}

/**
 * Checks if a given identifier (usually IP + endpoint prefix) has exceeded rate limits.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 5, windowMs: 10 * 60 * 1000 }
): { success: boolean; remaining: number; resetInMs: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier) || { timestamps: [] };

  // Keep only timestamps within the current window
  const windowStart = now - options.windowMs;
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= options.limit) {
    const oldestTimestamp = record.timestamps[0];
    const resetInMs = Math.max(0, oldestTimestamp + options.windowMs - now);
    rateLimitStore.set(identifier, record);
    return {
      success: false,
      remaining: 0,
      resetInMs,
    };
  }

  // Record this request
  record.timestamps.push(now);
  rateLimitStore.set(identifier, record);

  return {
    success: true,
    remaining: options.limit - record.timestamps.length,
    resetInMs: options.windowMs,
  };
}

/**
 * Sanitize single-line header/subject inputs to strictly prevent CRLF / Email Header Injection.
 * Strips \r, \n, and normalizes consecutive whitespace.
 */
export function sanitizeSingleLine(input?: string | null): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Validates and safely sanitizes a URL to ensure it starts with http:// or https://.
 * Blocks dangerous schemes (javascript:, data:, file:, vbscript:).
 */
export function sanitizeSafeUrl(inputUrl?: string | null): string | null {
  if (!inputUrl || typeof inputUrl !== 'string') return null;
  const trimmed = inputUrl.trim();
  if (!trimmed) return null;

  // Disallow forbidden schemes
  if (/^(javascript|data|vbscript|file):/i.test(trimmed)) {
    return null;
  }

  try {
    const parsed = new URL(trimmed.startsWith('http://') || trimmed.startsWith('https://') ? trimmed : `https://${trimmed}`);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Client IP extractor from Next.js request headers
 */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') || '127.0.0.1';
}
