import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";

export async function generateStaticParams() {
  return siteContent.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = siteContent.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found | NIVORA" };
  }

  return {
    title: `${project.title} Project | NIVORA`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = siteContent.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const displayUrl = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <>
      {/* Dark Studio Header Banner */}
      <PageBanner
        badge={`CASE STUDY • PROJECT ${project.number}`}
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Selected Work", href: "/work" },
          { label: project.title },
        ]}
      />

      {/* Main Case Study Content */}
      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container className="space-y-16 sm:space-y-20">
          {/* Real Project Visual Mockup in Browser Chrome */}
          <div className="overflow-hidden rounded-3xl border border-[var(--border-strong)]/30 bg-[var(--bg-surface-alt)] p-4 sm:p-8 md:p-10 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 text-xs font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-medium">LIVE PRODUCTION PREVIEW</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-accent)] font-semibold">https://{displayUrl}</span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#071311] font-bold text-xs transition-colors shadow-sm"
                  >
                    <span>Visit Live Website</span>
                    <Icon name="externalLink" size={12} />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-slate-950 shadow-2xl relative">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} High Resolution Showcase`}
                  width={1400}
                  height={875}
                  priority
                  className="w-full h-auto object-cover object-top"
                />
              ) : (
                <div className="aspect-[16/10] flex items-center justify-center text-slate-400">
                  Mockup Preview
                </div>
              )}
            </div>
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">App Showcase Reel</h3>
                  <span className="flex items-center gap-2 text-xs font-medium text-[var(--color-accent)] animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                    Live Preview
                  </span>
                </div>
                
                <style>{`
                  @keyframes scrollMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); }
                  }
                  .animate-marquee {
                    animation: scrollMarquee 30s linear infinite;
                    width: max-content;
                  }
                  .animate-marquee:hover {
                    animation-play-state: paused;
                  }
                `}</style>
                
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-slate-950/50 py-8 shadow-inner">
                  {/* Gradient Masks for smooth fading edges */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent"></div>
                  
                  <div className="animate-marquee flex gap-8 px-4">
                    {[...project.gallery, ...project.gallery].map((img, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 w-[280px] sm:w-[320px] flex-shrink-0 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                        <Image
                          src={img.src}
                          alt={img.caption}
                          width={600}
                          height={1200}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-semibold text-white">{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Structured Detail Grid: Overview, Challenge, Approach */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-10 lg:col-span-8">
              {/* Overview */}
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  The Challenge
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  Our Approach
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.approach}
                </p>
              </div>

              {/* What Was Built */}
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  What Was Built
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.whatWasBuilt.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] sm:text-base">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Icon name="check" size={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar: Metadata & Tech */}
            <div className="space-y-8 lg:col-span-4">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Project
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </p>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Category
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-primary)]">
                    {project.category}
                  </p>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Technologies
                  </h3>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.architecture && (
                  <div className="border-t border-[var(--border-subtle)] pt-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Architecture & Stack
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {project.stats && (
                  <div className="border-t border-[var(--border-subtle)] pt-4 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                          <span className="block text-[10px] text-[var(--text-muted)] uppercase">{s.label}</span>
                          <span className="block text-xs font-bold text-[var(--text-primary)]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Availability
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    Open for similar website projects.
                  </p>
                  <div className="mt-3">
                    <Button href="/contact" size="sm" className="w-full">
                      Start a Project
                    </Button>
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
