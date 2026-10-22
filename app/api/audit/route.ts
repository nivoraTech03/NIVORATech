import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit, sanitizeSingleLine, sanitizeSafeUrl, getClientIp } from '@/lib/rateLimit';

function escapeHtml(unsafe: string) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);

    // 1. Sliding Window Rate Limiting (Prevent DDoS & SMTP Abuse)
    const rateLimit = checkRateLimit(`audit:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting another audit request.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil(rateLimit.resetInMs / 1000)),
          },
        }
      );
    }

    const body = await req.json();

    // 2. Honeypot spam defense
    if (body.website_hp || body.hp_field || body.company_url_hp) {
      return NextResponse.json({
        success: true,
        message: 'Audit request received! Our engineering team will deliver your report within 24 hours.',
      });
    }

    const { websiteUrl, email, phone, name, industry, concerns } = body;

    // 3. Strict Input Validation & URL Scheme Hardening (SSRF / javascript: XSS defense)
    const validatedUrl = sanitizeSafeUrl(websiteUrl);
    if (!validatedUrl || validatedUrl.length > 255) {
      return NextResponse.json({ error: 'Please enter a valid website URL (e.g. https://yourbusiness.com)' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.length > 25 || phone.length < 7) {
      return NextResponse.json({ error: 'Please enter a valid phone or WhatsApp number' }, { status: 400 });
    }

    // 4. CRLF / Header Injection Sanitization
    const cleanEmail = sanitizeSingleLine(email);
    const cleanPhone = sanitizeSingleLine(phone);
    const cleanName = sanitizeSingleLine(name || 'Website Owner');
    const cleanIndustry = sanitizeSingleLine(industry || 'General Business');
    const cleanConcerns = typeof concerns === 'string' && concerns.length <= 1500 ? concerns : 'Full Performance & WCAG Audit requested.';
    const cleanUserAgent = sanitizeSingleLine(req.headers.get('user-agent') || 'Unknown Device');

    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.warn('SMTP credentials not configured; logging audit submission locally.');
      return NextResponse.json({
        success: true,
        message: 'Audit request received! Our engineering team will review your site within 24 hours.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const safeUrl = escapeHtml(validatedUrl);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeName = escapeHtml(cleanName);
    const safeIndustry = escapeHtml(cleanIndustry);
    const safeConcerns = escapeHtml(cleanConcerns);

    // 1. Notify Admin
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; margin-top: 0;">🚀 New Website Audit Request</h2>
        <p style="color: #475569; font-size: 14px;">A new website audit request was submitted via nexnify.in.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Website URL:</td><td style="padding: 8px 0; color: #4f46e5; font-weight: bold;"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeUrl}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Client Name:</td><td style="padding: 8px 0; color: #0f172a;">${safeName}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Email:</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Phone / WhatsApp:</td><td style="padding: 8px 0; color: #0f172a;"><a href="https://wa.me/${cleanPhone.replace(/\D/g, '')}">${safePhone}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Industry:</td><td style="padding: 8px 0; color: #0f172a;">${safeIndustry}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Specific Concerns:</td><td style="padding: 8px 0; color: #0f172a;">${safeConcerns}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">IP / Source:</td><td style="padding: 8px 0; color: #94a3b8; font-size: 12px;">${ip}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #334155;">Device / Browser:</td><td style="padding: 8px 0; color: #94a3b8; font-size: 12px;">${escapeHtml(cleanUserAgent)}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Nexnify Audit Bot" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      replyTo: cleanEmail,
      subject: `[Audit Request] ${safeUrl} - ${cleanPhone}`,
      html: adminHtml,
      text: `New Audit Request:\nURL: ${validatedUrl}\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nIndustry: ${cleanIndustry}\nConcerns: ${cleanConcerns}`,
    });

    // 2. User Confirmation Email
    const userHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; margin-top: 0;">We've received your audit request!</h2>
        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
          Hi ${safeName},<br><br>
          Thank you for requesting a Free Technical Website Audit for <strong>${safeUrl}</strong>.
        </p>
        <p style="color: #475569; font-size: 14px; line-height: 1.6;">
          Our senior engineering team will manually inspect your site against:
        </p>
        <ul style="color: #334155; font-size: 14px; line-height: 1.8;">
          <li>Mobile Core Web Vitals (LCP, INP, CLS) &amp; PageSpeed</li>
          <li>WCAG 2.2 AA Accessibility &amp; contrast check</li>
          <li>Technical SEO, meta tags &amp; LocalBusiness Schema</li>
          <li>Mobile responsiveness &amp; conversion leakages</li>
        </ul>
        <p style="color: #475569; font-size: 14px; line-height: 1.6;">
          You will receive your personalized report within 24 hours. If you need immediate assistance or want to talk to an engineer right now, feel free to WhatsApp us directly at <a href="https://wa.me/919575450177?text=Hi%20Nexnify,%20I%20just%20submitted%20an%20audit%20request%20for%20${encodeURIComponent(validatedUrl)}" style="color: #4f46e5; font-weight: bold;">+91 95754 50177</a>.
        </p>
        <p style="color: #64748b; font-size: 13px; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
          Best regards,<br>
          <strong>Nexnify Technical Studio</strong><br>
          Delhi NCR, India &bull; <a href="https://nexnify.in" style="color: #64748b;">nexnify.in</a>
        </p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `"Nexnify Technical Studio" <${SMTP_EMAIL}>`,
        to: cleanEmail,
        replyTo: SMTP_EMAIL,
        subject: `Your Free Website Audit for ${safeUrl} is in progress [Nexnify]`,
        html: userHtml,
        text: `Hi ${cleanName},\n\nWe received your request to audit ${validatedUrl}. Our engineering team is running our 15-point Mobile Performance, WCAG 2.2 AA, and Technical SEO scan.\n\nYou will receive your report within 24 hours.\n\nNeed immediate answers? WhatsApp us at +91 95754 50177.\n\nBest,\nNexnify Technical Studio`,
      });
    } catch (userMailErr) {
      console.warn('Could not send user confirmation email:', userMailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Audit request received! Our engineering team will deliver your report within 24 hours.',
    });
  } catch (error) {
    console.error('Audit submission error:', error);
    return NextResponse.json({ error: 'Server error processing audit request' }, { status: 500 });
  }
}
