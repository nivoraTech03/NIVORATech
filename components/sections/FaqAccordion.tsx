"use client";

import { useState } from "react";
import type { Faq } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {items.map((faq) => {
        const open = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-300 shadow-sm",
              open
                ? "border-[var(--color-accent-border)] bg-[var(--bg-surface)] shadow-md"
                : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] hover:shadow"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? null : faq.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 sm:py-5 text-left transition-colors"
            >
              <span
                className={cn(
                  "text-sm font-bold sm:text-base transition-colors",
                  open ? "text-[var(--color-accent)]" : "text-[var(--text-primary)]"
                )}
              >
                {faq.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                  open
                    ? "border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-[var(--color-accent)] rotate-45"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-[var(--text-secondary)]"
                )}
              >
                <Icon name="plus" size={14} />
              </span>
            </button>
            {open && (
              <div className="border-t border-[var(--border-subtle)] px-6 pt-3.5 pb-5 text-sm leading-relaxed text-[var(--text-secondary)] animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
