import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "secondary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] border border-[var(--color-accent-border)] hover:opacity-90 hover:-translate-y-0.5",
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

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    icon = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {icon && <Icon name="arrowRight" size={15} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon && <Icon name="arrowRight" size={15} />}
    </button>
  );
}
