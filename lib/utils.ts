type ClassValue = string | number | null | undefined | false | ClassValue[];

/**
 * Tiny classnames merger so components can compose conditional Tailwind
 * classes without pulling in an extra dependency.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (value: ClassValue) => {
    if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (value) {
      out.push(String(value));
    }
  };

  inputs.forEach(walk);
  return out.join(" ");
}

/** Formats large numbers like 20000 -> "20K" for stat counters. */
export function formatStatValue(value: number): string {
  if (value >= 1000) {
    const thousands = value / 1000;
    return `${thousands % 1 === 0 ? thousands : thousands.toFixed(1)}K`;
  }
  return `${value}`;
}

/** Formats an ISO date string into a readable "Mon D, YYYY" label. */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Builds a mailto link with a prefilled subject, used across CTAs. */
export function mailtoLink(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
