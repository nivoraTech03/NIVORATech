import type { Metadata } from "next";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Web Development Projects | NIVORA",
  description: "A showcase of web development projects designed and developed with a focus on modern technologies, performance, and responsive experience.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Web Development Projects | NIVORA",
    description: "A showcase of web development projects designed and developed with a focus on modern technologies, performance, and responsive experience.",
    url: "/work",
  },
};

export default function WorkPage() {
  const { projects } = siteContent;

  return (
    <>
      <PageBanner
        badge="PRODUCTION CASE STUDIES"
        title="Websites crafted with intention & precision."
        description="Explore our production engagements. From custom PHP booking engines to bespoke WordPress & Elementor institutional platforms, each project is built for conversion, speed, and real business results."
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
                            <span>{displayUrl ? `https://${displayUrl}` : `nivora.tech/work/${project.slug}`}</span>
                          </div>
                          <div className="w-8" />
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={`${project.title} Preview`}
                              width={1200}
                              height={750}
                              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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
        </Container>
      </section>

      <ProjectCtaBanner />
    </>
  );
}
