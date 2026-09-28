"use client";

import { useTheme } from "@/context/ThemeContext";
import { Icon } from "@/components/ui/Icon";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] " +
        (className ?? "")
      }
    >
      <Icon name={theme === "light" ? "moon" : "sun"} size={17} />
    </button>
  );
}
