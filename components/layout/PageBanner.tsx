import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

interface PageBannerProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({
  badge,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070B16] via-[#0B1327] to-[#070B16] text-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none translate-y-1/2"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumb row */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-6 font-medium"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Icon name="arrowUpRight" size={12} className="rotate-45" />}
                    <span>{crumb.label}</span>
                  </Link>
                ) : (
                  <span className="text-slate-200 font-semibold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-slate-600">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge Pill */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/40 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
          {title}
        </h1>

        {/* Subtitle */}
        {description && (
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
