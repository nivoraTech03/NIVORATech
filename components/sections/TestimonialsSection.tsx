"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const fill = Math.max(0, Math.min(1, rating - i));
          return (
            <div key={i} className="relative h-4 w-4 shrink-0">
              {/* Background empty star */}
              <svg
                className="h-4 w-4 text-slate-200 dark:text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {/* Foreground filled star */}
              {fill > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${Math.round(fill * 100)}%` }}
                >
                  <svg
                    className="h-4 w-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <span className="font-mono text-xs font-bold text-amber-500 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials } = siteContent;
  const items = testimonials.items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive items-per-view tracking
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
      setCurrentIndex((prev) => Math.min(prev, e.matches ? Math.max(0, items.length - 2) : items.length - 1));
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [items.length]);

  const maxIndex = isDesktop ? Math.max(0, items.length - 2) : items.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  const totalSteps = maxIndex + 1;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface-alt)] via-[var(--bg-surface)] to-[var(--bg-surface-alt)]" />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--accent-soft) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.08) 0%, transparent 40%)",
        }}
      />

      <Container className="relative z-10">
        {/* Top Header Bar with Section Heading & Slider Navigation Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            description={testimonials.description}
          />

          <div className="flex items-center gap-2.5 sm:gap-3 self-start md:self-end shrink-0">
            {/* Step Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)] shadow-xs">
              <span className="text-[var(--color-accent)] font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>{String(totalSteps).padStart(2, "0")}</span>
            </div>

            {/* Prev Arrow Button */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--color-accent)] hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              <Icon name="arrowLeft" size={16} />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--color-accent)] hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
        </div>

        {/* Client Brand Quick Jump Selector */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {items.map((item, idx) => {
            const isSelected = isDesktop
              ? currentIndex === idx || (idx > 0 && currentIndex === idx - 1)
              : currentIndex === idx;

            return (
              <button
                key={item.id}
                onClick={() => goToSlide(idx)}
                type="button"
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer flex items-center gap-2 border shrink-0 ${isSelected
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-semibold shadow-xs"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  }`}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: item.avatarBg }}
                />
                {item.company}
              </button>
            );
          })}
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden mt-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (isDesktop ? 50 : 100)}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-3 md:w-1/2 flex"
              >
                <div className="group relative flex flex-col justify-between w-full rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/75 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-2xl hover:bg-[var(--bg-surface)] hover:border-[var(--color-accent-border)] hover:-translate-y-1">
                  {/* Glow effect behind the card on hover */}
                  <div
                    className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20 pointer-events-none"
                    style={{ background: item.avatarBg }}
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${item.avatarBg}80, ${item.avatarBg})`,
                    }}
                  />

                  {/* Top: Quote icon + Rating */}
                  <div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <svg
                        className="h-9 w-9 text-[var(--color-accent)] opacity-20 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                      </svg>
                      <div className="flex flex-col items-end gap-1.5">
                        <StarRating rating={item.rating} />
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Verified Project
                        </span>
                      </div>
                    </div>

                    {/* Quote text */}
                    <blockquote className="mb-6">
                      <p className="text-sm sm:text-base leading-relaxed text-[var(--text-primary)] font-medium">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  {/* Bottom: Divider & Author Details */}
                  <div className="border-t border-[var(--border-subtle)] pt-5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      {/* Author info */}
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-xs sm:text-sm font-bold text-white shadow-md ring-2 ring-white/10"
                          style={{ background: item.avatarBg }}
                          aria-hidden="true"
                        >
                          {item.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[var(--text-primary)]">
                            {item.name}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            {item.role},{" "}
                            {item.companyUrl ? (
                              <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[var(--color-accent)] transition-colors underline decoration-dotted underline-offset-2"
                              >
                                {item.company}
                              </a>
                            ) : (
                              <span>{item.company}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Project Tag & Link */}
                      <Link
                        href={`/work/${item.projectSlug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] px-3 py-1.5 text-[11px] font-semibold text-[var(--text-secondary)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)] hover:bg-[var(--bg-surface)] transition-all duration-150"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ background: item.avatarBg }}
                        />
                        <span>{item.tag}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dots & Trust Badge */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Slider Step Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${currentIndex === idx
                    ? "w-8 bg-[var(--color-accent)]"
                    : "w-2 bg-[var(--border-strong)]/40 hover:bg-[var(--border-strong)]"
                  }`}
              />
            ))}
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 shadow-xs">
            <div className="flex -space-x-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-[var(--bg-surface)] shadow-xs"
                  style={{ background: item.avatarBg }}
                >
                  {item.avatar}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pl-1">
              <StarRating rating={4.9} />
              <span className="text-xs font-semibold text-[var(--text-secondary)] tracking-wide">
                Average across 28+ verified client projects
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
