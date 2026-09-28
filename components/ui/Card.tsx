import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  highlight = false,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        highlight
          ? "border-[var(--color-accent-border)] bg-gradient-to-br from-[var(--bg-dark-section)] to-[#1a3330] text-white shadow-xl"
          : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-accent-border)] hover:-translate-y-1",
        className
      )}
      style={{
        boxShadow: highlight ? undefined : "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        if (!highlight) {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (!highlight) {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card)";
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
