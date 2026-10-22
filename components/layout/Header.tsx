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
import { trackWhatsAppClick } from "@/lib/gtag";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }
  const scrolled = useScrolled();
  const { navigation } = siteContent;

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

            <nav className="hidden items-center gap-1 lg:flex p-1 rounded-xl bg-[var(--bg-surface-alt)]/80 border border-[var(--border-subtle)] backdrop-blur-md">
              {navigation.links.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200",
                      active
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Button href={navigation.cta.href} size="sm" className="rounded-lg">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-alt)] active:scale-95"
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
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-[100dvh] w-[310px] max-w-[88vw] flex flex-col bg-[var(--bg-surface)] border-l border-[var(--border-subtle)] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3.5 shrink-0 bg-[var(--bg-surface)]">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors active:scale-95"
          >
            <Icon name="close" size={16} />
          </button>
        </div>

        {/* Nav Links with Smooth Custom Scrollbar */}
        <nav
          className="flex-1 overflow-y-auto px-3.5 py-4 overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--border-strong) transparent" }}
        >
          <div className="mb-2 px-2.5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Main Menu
            </span>
            <span className="text-[10px] font-mono text-emerald-500 font-bold">Online</span>
          </div>

          <ul className="space-y-1">
            {navigation.links.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      )}
                      <span className="truncate">{item.label}</span>
                    </div>
                    {active && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400">
                        Active
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick links & Special Pages */}
          <div className="my-4 border-t border-[var(--border-subtle)]" />

          <p className="mb-2 px-2.5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Explore &amp; Audits
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/free-website-audit"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Free 15-Point Website Audit
                </span>
                <span>&rarr;</span>
              </Link>
            </li>
            <li>
              <Link
                href="/annual-care-plan"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span>Annual Care &amp; Support Plan</span>
                <span className="text-[var(--text-muted)]">&rarr;</span>
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span>Accessibility Statement (WCAG 2.2)</span>
                <span className="text-[var(--text-muted)]">&rarr;</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span>Pricing &amp; Milestone Plans</span>
                <span className="text-[var(--text-muted)]">&rarr;</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="border-t border-[var(--border-subtle)] px-4 py-3.5 shrink-0 bg-[var(--bg-surface)] space-y-2.5">
          <Button href={navigation.cta.href} className="w-full text-xs font-bold py-2.5 rounded-xl" onClick={() => setOpen(false)}>
            {navigation.cta.label}
          </Button>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Replies instantly on</span>
            <a
              href="https://wa.me/919575450177"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("mobile_drawer_bottom", "quick_chat")}
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
