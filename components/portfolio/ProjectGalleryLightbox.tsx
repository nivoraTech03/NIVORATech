"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

interface GalleryItem {
  src: string;
  caption: string;
}

interface ProjectGalleryLightboxProps {
  gallery: GalleryItem[];
  projectTitle: string;
}

export function ProjectGalleryLightbox({
  gallery,
  projectTitle,
}: ProjectGalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;
  const currentItem = selectedIndex !== null ? gallery[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null || prev === 0 ? gallery.length - 1 : prev - 1
    );
  }, [selectedIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null || prev === gallery.length - 1 ? 0 : prev + 1
    );
  }, [selectedIndex, gallery.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  // Touch swipe support for mobile lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="mt-12">
      {/* Gallery Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-accent)] block mb-1">
            Visual Documentation
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            Production UI Gallery & Specifications
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
            Click any image to expand
          </span>
          <button
            type="button"
            onClick={() => setSelectedIndex(0)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent-border)] hover:bg-[var(--color-accent)] hover:text-black transition-colors shadow-xs cursor-pointer"
          >
            <span>Open Gallery View ({gallery.length})</span>
            <Icon name="arrowUpRight" size={12} />
          </button>
        </div>
      </div>

      {/* Marquee Reel Animation Styles */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: scrollMarquee 35s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Interactive Marquee Container */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-slate-950/60 py-6 sm:py-8 shadow-inner group/reel">
        {/* Gradient edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

        <div className="animate-marquee flex gap-6 px-4">
          {[...gallery, ...gallery].map((img, idx) => {
            const actualIndex = idx % gallery.length;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(actualIndex)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 w-[280px] sm:w-[340px] flex-shrink-0 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent-border)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label={`View full image: ${img.caption}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={700}
                    height={440}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle hover overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 shadow-lg">
                      <Icon name="arrowUpRight" size={13} className="text-[var(--color-accent)]" />
                      <span>Click to Expand</span>
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-slate-900/90 border-t border-slate-800">
                  <p className="text-xs font-medium text-slate-200 line-clamp-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {img.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} Fullscreen Image Gallery`}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-all animate-fadeIn"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Title, Counter, and Close Button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-white z-20">
            <div className="min-w-0 pr-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-accent)] block">
                {projectTitle}
              </span>
              <h4 className="text-sm sm:text-base font-semibold truncate text-slate-200">
                {currentItem.caption}
              </h4>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              {/* Counter */}
              <div className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300">
                <span className="text-white font-bold">{selectedIndex + 1}</span>
                <span className="text-slate-500 mx-1">/</span>
                <span>{gallery.length}</span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="Close Gallery"
              >
                <Icon name="close" size={20} />
              </button>
            </div>
          </div>

          {/* Main Stage: Center Image + Prev / Next Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[var(--color-accent)] hover:text-black text-white border border-white/20 transition-all shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-label="Previous Image"
            >
              <Icon name="arrowLeft" size={20} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[var(--color-accent)] hover:text-black text-white border border-white/20 transition-all shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-label="Next Image"
            >
              <Icon name="arrowRight" size={20} />
            </button>

            {/* Click backdrop to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={handleClose}
            />

            {/* Active Full Resolution Image */}
            <div className="relative z-10 max-h-[75vh] max-w-[92vw] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black">
              <Image
                src={currentItem.src}
                alt={currentItem.caption}
                width={1600}
                height={1000}
                priority
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>

          {/* Bottom Bar: Thumbnail Navigation Strip */}
          <div className="border-t border-white/10 pt-3 z-20">
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-1 px-2">
              {gallery.map((thumb, tIdx) => {
                const isActive = tIdx === selectedIndex;
                return (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setSelectedIndex(tIdx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "border-[var(--color-accent)] scale-105 shadow-[0_0_12px_rgba(255,122,0,0.6)]"
                        : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                    }`}
                    aria-label={`Jump to slide ${tIdx + 1}: ${thumb.caption}`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.caption}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
