"use client";

import React from "react";
import { trackWhatsAppClick } from "@/lib/gtag";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-500/40 hover:brightness-110 hover:-translate-y-0.5",
  accent:
    "bg-[var(--color-accent)] text-white shadow-sm shadow-[var(--color-accent)]/20 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5",
  secondary:
    "bg-[var(--bg-surface-alt)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--color-accent-border)] hover:bg-[var(--bg-surface)]",
  outline:
    "border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-surface-alt)]",
  ghost:
    "text-[var(--text-primary)] hover:text-[var(--color-accent)]",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs font-medium",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-6 py-3 text-sm font-medium sm:text-base",
};

export interface WhatsAppCtaProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  ctaLocation: string;
  serviceCategory?: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

/**
 * Reusable WhatsApp CTA component with automatic, non-PII GA4 tracking.
 * Safe for use across both Server Components and Client Components.
 * Supports design system button variants or custom anchor styling.
 */
export function WhatsAppCta({
  href,
  ctaLocation,
  serviceCategory = "general",
  variant,
  size,
  className,
  children,
  onClick,
  ...props
}: WhatsAppCtaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppClick(ctaLocation, serviceCategory);
    if (onClick) {
      onClick(e);
    }
  };

  const classes = variant || size
    ? cn(base, variant && variants[variant], size && sizes[size], className)
    : className;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={classes}
      {...props}
    >
      {children}
    </a>
  );
}
