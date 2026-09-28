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

  return (
    <section id="work" className="scroll-mt-20 bg-[var(--bg-surface)] py-20 sm:py-28 relative">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="SELECTED CLIENT WORK"
            title="Real-World Projects & Case Studies"
            description="Explore our production deployments spanning custom PHP web applications and bespoke WordPress & Elementor platforms."
          />
          <Button href="/work" variant="secondary" icon className="self-start md:self-end">
            All Projects ({projects.length})
          </Button>
        </div>

        <div className="mt-14 space-y-14 sm:space-y-20">
          {list.map((project, idx) => {
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
                  {/* Visual Mockup Container with Browser Chrome */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}>
                    <Link
                      href={`/work/${project.slug}`}
                      className="block overflow-hidden rounded-2xl border border-[var(--border-strong)]/40 bg-[var(--bg-surface)] shadow-md transition-all duration-500 group-hover:scale-[1.015] group-hover:shadow-xl"
                    >
                      {/* Browser Mockup Header Bar */}
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 bg-[var(--bg-surface-alt)]">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>https://{displayUrl}</span>
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Mockup Canvas with Real Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview Mockup`}
                            width={1200}
                            height={750}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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

                    <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl leading-snug">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                      {project.description}
                    </p>

                    {/* Stats pills if available */}
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

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
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
                          <span>Visit Live Website</span>
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
  );
}
