"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { useScrolled } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();
  const { navigation } = siteContent;

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-md transition-all duration-200",
          scrolled && "shadow-xs shadow-black/5"
        )}
      >
        <Container className="flex items-center justify-between py-3.5 sm:py-4">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.links.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--text-primary)]",
                    active
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href={navigation.cta.href} size="sm">
              {navigation.cta.label}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-alt)]"
            >
              <Icon name={open ? "close" : "menu"} size={18} />
            </button>
          </div>
        </Container>
      </div>

      {open && (
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.links.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--bg-surface-alt)] text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button href={navigation.cta.href} size="sm" className="w-full">
                {navigation.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
