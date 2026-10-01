import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-[var(--border-strong)]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials } = siteContent;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface-alt)] via-[var(--bg-surface)] to-[var(--bg-surface-alt)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--accent-soft) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.08) 0%, transparent 40%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
          align="center"
        />

        {/* Cards grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-2xl hover:bg-[var(--bg-surface)] hover:border-[var(--color-accent-border)] hover:-translate-y-2"
            >
              {/* Glow effect behind the card on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: item.avatarBg }}
              />
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${item.avatarBg}80, ${item.avatarBg})`,
                }}
              />

              {/* Quote icon */}
              <div className="mb-6 flex items-start justify-between">
                <svg
                  className="h-10 w-10 text-[var(--color-accent)] opacity-20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                </svg>
                <StarRating rating={item.rating} />
              </div>

              {/* Quote text */}
              <blockquote className="flex-1 mb-8">
                <p className="text-base leading-relaxed text-[var(--text-primary)] font-medium sm:text-[17px]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>

              {/* Divider */}
              <div className="border-t border-[var(--border-subtle)] pt-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-slate-900 shadow-md"
                      style={{ background: item.avatarBg }}
                      aria-hidden="true"
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {item.role},{" "}
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--color-accent)] transition-colors"
                        >
                          {item.company}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Project tag + link */}
                  <Link
                    href={`/work/${item.projectSlug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] px-3 py-1.5 text-[11px] font-semibold text-[var(--text-muted)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)] transition-all duration-150"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.avatarBg }}
                    />
                    {item.tag}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust badge */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-2.5 shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.items.map((item) => (
                <div
                  key={item.id}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-slate-900 ring-2 ring-[var(--bg-surface)]"
                  style={{ background: item.avatarBg }}
                >
                  {item.avatar}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 pl-1">
              <StarRating rating={5} />
              <span className="text-xs font-semibold text-[var(--text-secondary)] tracking-wide">
                5.0 Average Rating · Projects & Client Reviews
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
