"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const { hero, projects } = siteContent;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slideTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 280);
    },
    [animating, current]
  );

  // Auto-slide every 4s
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 280);
        return (c + 1) % projects.length;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [projects.length]);

  const active = projects[current] ?? projects[0]!;

  return (
    <section className="relative overflow-hidden bg-[#060B18] text-white border-b border-white/[0.06]" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>

      {/* ─── Animated Grid Background ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Drifting grid — moves diagonally, very transparent */}
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 35%, transparent 100%)",
            animation: "driftGrid 18s linear infinite",
          }}
        />

        {/* Glowing intersection dots — also drift */}
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 25%, transparent 100%)",
            animation: "driftGrid 18s linear infinite",
          }}
        />

        {/* Large ambient glow — center top */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[700px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)" }}
        />
        {/* Right side glow */}
        <div
          className="absolute top-1/3 -right-24 h-[320px] w-[320px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 70%)" }}
        />
        {/* Bottom left glow */}
        <div
          className="absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        />

        {/* Floating animated orbs */}
        <div
          className="absolute top-1/4 left-[15%] h-3 w-3 rounded-full bg-indigo-400/60"
          style={{ animation: "floatOrb 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 right-[20%] h-2 w-2 rounded-full bg-violet-400/50"
          style={{ animation: "floatOrb 10s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute bottom-1/3 left-[30%] h-1.5 w-1.5 rounded-full bg-sky-400/50"
          style={{ animation: "floatOrb 12s ease-in-out infinite 2s" }}
        />
      </div>

      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-12 py-24 lg:py-0">

        {/* ─── Left: Copy ─── */}
        <div className="lg:col-span-6 space-y-7">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </span>
            {hero.eyebrow}
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight">
            Modern Websites Built for{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #818CF8 0%, #6366F1 35%, #38BDF8 75%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Growing Businesses
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-lg text-base sm:text-lg leading-relaxed text-slate-300/80">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              href="/work"
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              View Our Work
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
            >
              Start a Project
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {["PHP & MySQL Portals", "WordPress & Elementor", "Next.js / React", "Sub-second Speed"].map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300"
              >
                <Icon name="check" size={11} className="text-indigo-400" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Right: Auto-sliding project showcase ─── */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

            {/* Stacked Background Cards for Depth */}
            <div className="absolute -inset-1 z-0 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-indigo-500/30 group-hover:via-purple-500/20" />

            <div className="absolute top-4 -right-4 z-0 h-full w-full rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-1" />
            <div className="absolute top-8 -right-8 z-0 h-full w-full rounded-3xl border border-white/5 bg-white/[0.005] backdrop-blur-2xl transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-2" />

            {/* Main Clean Glass Card Presentation */}
            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A101F]/80 p-2.5 shadow-2xl shadow-indigo-900/50 backdrop-blur-xl transition-all duration-700 hover:border-white/20 hover:bg-[#0A101F]/90">

              {/* Inner card containing the image */}
              <div className="relative overflow-hidden rounded-2xl bg-black">

                {/* Minimal Header */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                  </div>
                  <div className="rounded-full bg-black/50 px-3 py-1 backdrop-blur-md border border-white/10">
                    <p className="text-[10px] font-medium tracking-widest text-white/70 uppercase">
                      Featured Work
                    </p>
                  </div>
                </div>

                {/* Image Slider */}
                <div className="relative aspect-[16/11] w-full">
                  {projects.map((p, i) => (
                    <div
                      key={p.id}
                      className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: i === current ? (animating ? 0 : 1) : 0,
                        transform: i === current
                          ? animating ? "scale(1.05)" : "scale(1)"
                          : "scale(1.05)",
                        zIndex: i === current ? 10 : 0,
                      }}
                    >
                      {p.image && (
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={1200}
                          height={825}
                          priority={i === 0}
                          className="h-full w-full object-cover object-top"
                        />
                      )}

                      {/* Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                      {/* Project Details overlaid on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-7 z-20 transform transition-transform duration-700" style={{ transform: i === current && !animating ? 'translateY(0)' : 'translateY(15px)' }}>
                        <div className="flex items-end justify-between gap-4">
                          <div className="space-y-3">
                            <div className="inline-block rounded-md bg-indigo-500 px-2.5 py-1 shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                              <p className="text-[10px] font-extrabold text-white uppercase tracking-widest drop-shadow-sm">{p.category}</p>
                            </div>
                            <h2 className="text-[26px] font-extrabold text-white leading-tight drop-shadow-md">{p.title}</h2>
                            <div className="flex flex-wrap gap-2 pt-1">
                              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10 shadow-inner">
                                <Icon name="sparkles" size={12} className="text-indigo-400" />
                                {p.stats?.[2]?.value ?? "98/100"} Perf
                              </span>
                              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10 shadow-inner">
                                <Icon name="code" size={12} className="text-emerald-400" />
                                {p.architecture?.split(",")[0] ?? "React"}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={`/work/${p.slug}`}
                            aria-label={`View project ${p.title}`}
                            className="group/btn relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black overflow-hidden transition-all hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          >
                            <div className="absolute inset-0 bg-indigo-100 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                            <Icon name="arrowUpRight" size={22} className="relative z-10 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Slider dots + progress bar ─── */}
            <div className="mt-4 flex items-center justify-center gap-3">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`View ${p.title}`}
                  onClick={() => slideTo(i)}
                  className="group flex flex-col items-center gap-1.5"
                >
                  {/* Project label */}
                  <span
                    className={`text-[11px] font-bold tracking-wider transition-all duration-300 ${i === current ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                  >
                    {p.title.includes('Sky') ? "✈ SkyOdeals" : p.title.includes('HIT IAS') ? "🎓 HIT IAS" : p.title.includes('XChat') ? "💬 XChat" : p.title.split(' ')[0]}
                  </span>
                  {/* Progress track */}
                  <span className="relative h-0.5 w-16 overflow-hidden rounded-full bg-white/10">
                    {i === current && (
                      <span
                        className="absolute left-0 top-0 h-full rounded-full bg-indigo-500"
                        style={{ animation: "slideProgress 4s linear infinite" }}
                      />
                    )}
                    {i !== current && (
                      <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-white/30 group-hover:w-full transition-all duration-300" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 opacity-60">
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </div>

      <style>{`
        @keyframes driftGrid {
          0%   { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-18px) translateX(8px); }
          66%       { transform: translateY(10px) translateX(-6px); }
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
