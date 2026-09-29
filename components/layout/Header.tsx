"use client";

import { useState, useEffect } from "react";
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

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-alt)]"
              >
                <Icon name={open ? "close" : "menu"} size={18} />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Full-height Side Drawer Overlay */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] flex flex-col bg-[var(--bg-surface)] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Icon name="close" size={16} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Navigation
          </p>
          <ul className="space-y-1">
            {navigation.links.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-[var(--accent-soft)] text-[var(--accent-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] flex-shrink-0" />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="my-6 border-t border-[var(--border-subtle)]" />

          {/* Quick links */}
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Quick Links
          </p>
          <ul className="space-y-1">
            {[
              { label: "View Our Work", href: "/work" },
              { label: "Our Services", href: "/services" },
              { label: "Get a Quote", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-all duration-150"
                >
                  <span className="text-[var(--accent-primary)]">→</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="border-t border-[var(--border-subtle)] px-5 py-5 space-y-3">
          <Button href={navigation.cta.href} className="w-full" onClick={() => setOpen(false)}>
            {navigation.cta.label}
          </Button>
          <p className="text-center text-[11px] text-[var(--text-muted)]">
            Quick reply via WhatsApp ·{" "}
            <a
              href="https://wa.me/919575450177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline"
            >
              Chat now
            </a>
          </p>
        </div>
      </aside>
    </>
  );
}
