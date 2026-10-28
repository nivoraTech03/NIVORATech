"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "../ui/Icon";

export function ProjectsShowcase({ limit }: { limit?: number }) {
  const { projects } = siteContent;
  const list = limit ? projects.slice(0, limit) : projects;
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="work" className="scroll-mt-20 bg-[var(--bg-surface)] py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header with Title and Slider Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="SELECTED CLIENT WORK"
            title="Real-World Projects & Case Studies"
            description="Explore our production deployments spanning bespoke Next.js luxury web portals, custom booking engines, and high-performance enterprise platforms."
          />

          <div className="flex items-center gap-2.5 sm:gap-3 self-start md:self-end">
            {/* Slider Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)] shadow-xs">
              <span className="text-[var(--text-primary)] font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>{String(list.length).padStart(2, "0")}</span>
            </div>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous project"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-surface-alt)] hover:bg-indigo-600 hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              <Icon name="arrowLeft" size={16} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next project"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-surface-alt)] hover:bg-indigo-600 hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              <Icon name="arrowRight" size={16} />
            </button>

            <Button href="/work" variant="secondary" icon size="sm" className="hidden sm:inline-flex rounded-xl">
              All ({projects.length})
            </Button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden mt-8 sm:mt-12 rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {list.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const displayUrl = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

              return (
                <div key={project.id} className="w-full shrink-0">
                  <article className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/40">
                    <div
                      className={`grid items-center gap-6 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12 ${
                        isReversed ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      {/* Visual Mockup Container with Browser Chrome */}
                      <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}>
                        <Link
                          href={`/work/${project.slug}`}
                          className="block overflow-hidden rounded-xl border border-[var(--border-strong)]/40 bg-[var(--bg-surface)] shadow-md transition-all duration-500 group-hover:scale-[1.012] group-hover:shadow-xl"
                        >
                          {/* Browser Mockup Header Bar */}
                          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[var(--bg-surface-alt)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] sm:text-[11px] font-mono text-[var(--text-secondary)] min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                              <span className="truncate max-w-[140px] sm:max-w-[240px] lg:max-w-none">
                                {displayUrl ? `https://${displayUrl}` : `nexnify.in/work/${project.slug}`}
                              </span>
                            </div>
                            <div className="w-6 sm:w-8" />
                          </div>

                          {/* Mockup Canvas with Real Image */}
                          <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={`${project.title} - Nexnify Case Study`}
                                width={1200}
                                height={750}
                                priority={idx === 0}
                                loading={idx === 0 ? "eager" : "lazy"}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                Project Preview
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                        </Link>
                      </div>

                      {/* Project Info & Details */}
                      <div className={`lg:col-span-5 space-y-4 sm:space-y-5 ${isReversed ? "lg:col-start-1" : ""}`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] sm:text-xs font-bold text-indigo-500 tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                            PROJECT {project.number}
                          </span>
                          {project.id === "pactiva-energy" ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.25)] animate-pulse">
                              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                              <span>LATEST DEPLOYED FOR HAPPY CLIENT</span>
                            </span>
                          ) : (project.id === "auralux-pg" || project.id === "aurabridal-studio") ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>FEATURED</span>
                            </span>
                          ) : null}
                          {project.clientType && (
                            <span className="text-[11px] font-medium text-[var(--text-secondary)] border border-[var(--border-strong)] px-2.5 py-0.5 rounded-md bg-[var(--bg-surface)]">
                              {project.clientType}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] lg:text-3xl leading-snug">
                          <Link
                            href={`/work/${project.slug}`}
                            className="hover:text-indigo-500 transition-colors"
                          >
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] lg:text-base line-clamp-3 sm:line-clamp-4">
                          {project.description}
                        </p>

                        {/* Stats pills if available */}
                        {project.stats && (
                          <div className="grid grid-cols-2 gap-2.5 pt-1">
                            {project.stats.slice(0, 2).map((stat, sIdx) => (
                              <div
                                key={sIdx}
                                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5 sm:p-3 shadow-xs"
                              >
                                <span className="block text-[10px] sm:text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                                  {stat.label}
                                </span>
                                <span className="block text-xs sm:text-sm font-bold text-[var(--text-primary)] mt-0.5">
                                  {stat.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-primary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <Button href={`/work/${project.slug}`} icon size="sm" aria-label={`View case study for ${project.title}`}>
                            View Case Study
                          </Button>
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-alt)] hover:border-indigo-500/40 text-xs font-semibold text-[var(--text-primary)] transition-all shadow-xs"
                            >
                              <span>Visit Live Site</span>
                              <Icon name="externalLink" size={12} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Tabs / Dots */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Clickable tabs for desktop & tablet */}
          <div className="hidden sm:flex items-center gap-2 overflow-x-auto py-1 scrollbar-hide max-w-2xl">
            {list.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                type="button"
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  currentIndex === idx
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold"
                    : "bg-[var(--bg-surface-alt)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-card)]"
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">0{idx + 1}</span>
                <span className="truncate max-w-[130px]">{project.title.split("-")[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex sm:hidden items-center justify-center gap-2 py-2">
            {list.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  currentIndex === idx ? "w-7 bg-indigo-600" : "w-2 bg-[var(--border-strong)]"
                }`}
              />
            ))}
          </div>

          {/* Mobile All Projects CTA */}
          <div className="sm:hidden w-full">
            <Button href="/work" variant="secondary" size="sm" icon className="w-full justify-center rounded-xl">
              Explore All Projects ({projects.length})
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
