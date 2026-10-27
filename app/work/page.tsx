import type { Metadata } from "next";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Web Development Projects & Case Studies",
  description:
    "Explore Nexnify's production website projects — luxury hospitality portals, custom booking engines, and business websites built with Next.js, React, and WordPress.",
  alternates: {
    canonical: "https://nexnify.in/work",
  },
  openGraph: {
    title: "Web Development Projects & Case Studies | Nexnify",
    description:
      "Explore Nexnify's production website projects — luxury hospitality portals, custom booking engines, and business websites built with modern web technologies.",
    url: "https://nexnify.in/work",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Projects & Case Studies | Nexnify",
    description:
      "Production website projects by Nexnify — luxury portals, custom booking engines, and business websites.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nexnify.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Work",
      item: "https://nexnify.in/work",
    },
  ],
};

export default function WorkPage() {
  const { projects } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBanner
        badge="PRODUCTION CASE STUDIES"
        title="Websites crafted with intention & precision."
        description="Explore our production engagements. From 5-star Next.js luxury serviced living portals to custom flight booking engines and institutional platforms, each project is built for high conversion, speed, and real business growth."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Selected Work" },
        ]}
      />

      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            {projects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const displayUrl = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

              return (
                <article
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[var(--color-accent-border)]"
                >
                  <div
                    className={`grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 ${isReversed ? "lg:grid-flow-dense" : ""
                      }`}
                  >
                    {/* Visual Preview in Browser Chrome */}
                    <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="block overflow-hidden rounded-2xl border border-[var(--border-strong)]/40 bg-[var(--bg-surface)] shadow-md transition-all duration-500 group-hover:scale-[1.015] group-hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 bg-[var(--bg-surface-alt)]">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{displayUrl ? `https://${displayUrl}` : `nexnify.in/work/${project.slug}`}</span>
                          </div>
                          <div className="w-8" />
                        </div>

                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={`${project.title} Preview`}
                              width={1200}
                              height={750}
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              Preview unavailable
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </Link>
                    </div>

                    {/* Information */}
                    <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:col-start-1" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[var(--color-accent)] tracking-wider px-2.5 py-1 rounded-md bg-[var(--color-accent-soft)]">
                          PROJECT {project.number}
                        </span>
                        {(project.id === "auralux-pg" || project.id === "aurabridal-studio") && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-emerald-500/20 to-teal-500/15 text-emerald-400 border border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.25)] animate-pulse">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span>NEW ADDITION</span>
                          </span>
                        )}
                        {project.clientType && (
                          <span className="text-xs font-medium text-[var(--text-muted)] border border-[var(--border-subtle)] px-2 py-0.5 rounded">
                            {project.clientType}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl leading-snug">
                        <Link
                          href={`/work/${project.slug}`}
                          className="hover:text-[var(--color-accent)] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {project.description}
                      </p>

                      {/* Stats if available */}
                      {project.stats && (
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          {project.stats.slice(0, 2).map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3"
                            >
                              <span className="block text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                                {stat.label}
                              </span>
                              <span className="block text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Button href={`/work/${project.slug}`} icon>
                          View Case Study
                        </Button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-alt)] hover:border-[var(--color-accent)] text-xs font-semibold text-[var(--text-primary)] transition-all shadow-sm"
                          >
                            <span>Live Website</span>
                            <Icon name="externalLink" size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Before & After Case Study Transformation Grid */}
          <div className="mt-24 pt-16 border-t border-[var(--border-subtle)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block mb-2">
                Proven Engineering Impact
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
                Client Transformations: Before vs. After Nexnify
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)]">
                Real code, real architectural upgrades, and measurable business performance improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Case 1: AuraLux */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      Hospitality &bull; Real Estate
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">Case #1</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                    AuraLux Residences
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-bold text-rose-500 block mb-0.5 uppercase tracking-wide">The Challenge:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Unresponsive template, uncompressed high-res images freezing mobile browsers, and zero direct booking inquiries from corporate executives.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5 uppercase tracking-wide">Technical Solution:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Next.js 15 App Router architecture, LodgingBusiness Schema, 1-tap WhatsApp private visit scheduler, and modern WebP picture elements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">Before / After Metrics:</span>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Mobile PageSpeed</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 38] &rarr; <span className="text-emerald-500">[PLACEHOLDER: 99/100]</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Direct Inquiries</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 4/mo] &rarr; <span className="text-emerald-500">[PLACEHOLDER: +140%]</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Accessibility</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: Failing] &rarr; <span className="text-emerald-500">WCAG 2.2 AA</span></span>
                  </div>
                </div>
              </div>

              {/* Case 2: Aura Bridal */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      Luxury Atelier &bull; Beauty
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">Case #2</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                    Aura Bridal Studio
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-bold text-rose-500 block mb-0.5 uppercase tracking-wide">The Challenge:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Leads trapped in Instagram DMs, friction checking high-muhurat wedding dates, and lack of luxury brand differentiation for destination weddings.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5 uppercase tracking-wide">Technical Solution:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Interactive wedding date reservation checker (`/book`), automated WhatsApp concierge routing with pre-filled venue fields, and BeautySalon Schema.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">Before / After Metrics:</span>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Date Inquiry Surge</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: Baseline] &rarr; <span className="text-emerald-500">[PLACEHOLDER: +165%]</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Lead Booking Speed</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 24h] &rarr; <span className="text-emerald-500">&lt; 5 mins</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Core Web Vitals</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 52] &rarr; <span className="text-emerald-500">99/100</span></span>
                  </div>
                </div>
              </div>

              {/* Case 3: SkyOdeals */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      Flight Booking &bull; Travel
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">Case #3</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                    SkyOdeals Travel Portal
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-bold text-rose-500 block mb-0.5 uppercase tracking-wide">The Challenge:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Complex multi-city flight searches lagging heavily on mobile 4G networks, causing travelers to drop off before submitting quote requests.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5 uppercase tracking-wide">Technical Solution:</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Custom PHP architecture with indexed MySQL database queries, vanilla JS search widgets, and instant quote capture without page reloads.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">Before / After Metrics:</span>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Search Response Time</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 4.8s] &rarr; <span className="text-emerald-500">0.6s</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Quote Conversions</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: Low] &rarr; <span className="text-emerald-500">[PLACEHOLDER: +64%]</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[var(--bg-surface-alt)]">
                    <span className="text-[var(--text-muted)]">Mobile Usability</span>
                    <span className="font-bold text-[var(--text-primary)]">[PLACEHOLDER: 61] &rarr; <span className="text-emerald-500">98/100</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProjectCtaBanner />
    </>
  );
}
