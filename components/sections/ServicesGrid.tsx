"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const iconMap: Record<string, "layout" | "globe" | "code" | "sparkles"> = {
  "business-websites": "layout",
  "landing-pages": "globe",
  "react-nextjs-websites": "code",
  "wordpress-websites": "sparkles",
};

export function ServicesGrid({ limit }: { limit?: number }) {
  const { services } = siteContent;
  const list = limit ? services.items.slice(0, limit) : services.items;
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [maxDots, setMaxDots] = useState(0);

  useEffect(() => {
    const updateDots = () => {
      if (!sliderRef.current) return;
      const { scrollWidth, clientWidth } = sliderRef.current;
      // Number of dots = total items - visible items + 1
      const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // 1.5rem gap
      const visibleItems = Math.floor(clientWidth / (itemWidth + gap)) || 1;
      setMaxDots(Math.max(1, list.length - visibleItems + 1));
    };

    updateDots();
    window.addEventListener("resize", updateDots);
    return () => window.removeEventListener("resize", updateDots);
  }, [list.length]);

  useEffect(() => {
    if (isPaused || !sliderRef.current || maxDots <= 1) return;
    
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      
      const nextDot = (activeDot + 1) % maxDots;
      scrollToDot(nextDot);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, activeDot, maxDots]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setActiveDot(Math.min(index, maxDots - 1));
  };

  const scrollToDot = (index: number) => {
    if (!sliderRef.current) return;
    const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    sliderRef.current.scrollTo({
      left: index * (itemWidth + gap),
      behavior: "smooth"
    });
  };

  const scrollPrev = () => {
    const nextDot = Math.max(0, activeDot - 1);
    scrollToDot(nextDot);
  };

  const scrollNext = () => {
    const nextDot = Math.min(maxDots - 1, activeDot + 1);
    scrollToDot(nextDot);
  };

  return (
    <section
      id="services"
      className="scroll-mt-20 py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          align="center"
        />

        <div 
          className="mt-14 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows (Hidden on mobile) */}
          <button
            onClick={scrollPrev}
            disabled={activeDot === 0}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-lg hover:bg-[var(--bg-surface-alt)] hover:text-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous Slide"
          >
            <Icon name="arrowRight" size={20} className="rotate-180" />
          </button>
          <button
            onClick={scrollNext}
            disabled={activeDot === maxDots - 1}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-lg hover:bg-[var(--bg-surface-alt)] hover:text-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next Slide"
          >
            <Icon name="arrowRight" size={20} />
          </button>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {list.map((service, idx) => {
              const icon = iconMap[service.id] ?? "code";
              const isFeatured = idx === 2;

              return (
                <div
                  key={service.id}
                  className={
                    "snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl " +
                    (isFeatured
                      ? "border-indigo-500/50 bg-gradient-to-b from-[#131E38] to-[#0A0F1D] text-white shadow-xl"
                      : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-accent-border)]")
                  }
                >
                  {/* Glowing top line */}
                  <div
                    className={
                      "absolute inset-x-8 top-0 h-1 rounded-b-full transition-all duration-300 " +
                      (isFeatured
                        ? "bg-indigo-500 shadow-[0_0_12px_#6366F1]"
                        : "bg-transparent group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_10px_var(--color-accent)]")
                    }
                  />

                  {/* Card Top: Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-current/10 mb-5">
                      <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                        SERVICE 0{idx + 1}
                      </span>
                      <span
                        className={
                          "flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors " +
                          (isFeatured
                            ? "border-indigo-500/40 bg-indigo-500/20 text-indigo-300"
                            : "border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-[var(--text-secondary)] group-hover:border-[var(--color-accent-border)] group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]")
                        }
                      >
                        <Icon name={icon} size={19} />
                      </span>
                    </div>

                    <h3
                      className={
                        "font-display text-xl font-bold tracking-tight " +
                        (isFeatured ? "text-white" : "text-[var(--text-primary)]")
                      }
                    >
                      {service.title}
                    </h3>

                    <p
                      className={
                        "mt-3 text-sm leading-relaxed " +
                        (isFeatured ? "text-slate-300" : "text-[var(--text-secondary)]")
                      }
                    >
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div
                    className={
                      "mt-6 border-t pt-5 space-y-2.5 " +
                      (isFeatured ? "border-white/10" : "border-[var(--border-subtle)]")
                    }
                  >
                    <span
                      className={
                        "block text-[11px] font-bold uppercase tracking-wider mb-2 " +
                        (isFeatured ? "text-indigo-300" : "text-[var(--text-muted)]")
                      }
                    >
                      What&apos;s Included:
                    </span>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon name="check" size={10} />
                        </span>
                        <span
                          className={
                            "text-xs leading-tight " +
                            (isFeatured ? "text-slate-300" : "text-[var(--text-secondary)]")
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}

                    <div className="pt-3">
                      <Link
                        href="/contact"
                        className={
                          "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors " +
                          (isFeatured
                            ? "text-indigo-300 hover:text-white"
                            : "text-indigo-600 dark:text-indigo-400 hover:underline")
                        }
                      >
                        <span>Inquire regarding this</span>
                        <Icon name="arrowRight" size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Dots Navigation */}
          {maxDots > 1 && (
            <div className="flex justify-center gap-2 mt-2">
              {Array.from({ length: maxDots }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToDot(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDot === i ? "w-8 bg-indigo-600" : "w-2 bg-indigo-200 hover:bg-indigo-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--text-secondary)] mb-4">Want to see a detailed breakdown of our pricing?</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
          >
            <Icon name="layout" size={16} />
            View Fare Breakup & Pricing
          </Link>
        </div>
      </Container>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
