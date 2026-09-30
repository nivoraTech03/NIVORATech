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
              href="#work"
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

            {/* Browser mockup */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)] bg-[#0C1222]">

              {/* Browser chrome */}
              <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#080D1A] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex flex-1 items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-indigo-400/80">https://</span>
                  <span
                    className="transition-all duration-300"
                    style={{ opacity: animating ? 0 : 1 }}
                  >
                    {active.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label="Open live site"
                >
                  <Icon name="externalLink" size={13} />
                </a>
              </div>

              {/* Image canvas */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      opacity: i === current ? (animating ? 0 : 1) : 0,
                      transform: i === current
                        ? animating ? "scale(1.03)" : "scale(1)"
                        : "scale(1.03)",
                    }}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={1200}
                        height={750}
                        priority={i === 0}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                ))}

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating metric — top right */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md px-3 py-2 transition-opacity duration-300"
                  style={{ opacity: animating ? 0 : 1 }}
                >
                  <Icon name="sparkles" size={13} className="text-indigo-400" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Performance</p>
                    <p className="text-xs font-bold text-white">{active.stats?.[2]?.value ?? "98/100"}</p>
                  </div>
                </div>

                {/* Floating metric — bottom left */}
                <div
                  className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md px-3 py-2 transition-opacity duration-300"
                  style={{ opacity: animating ? 0 : 1 }}
                >
                  <Icon name="check" size={13} className="text-emerald-400" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Stack</p>
                    <p className="text-xs font-bold text-white">{active.architecture?.split(",")[0] ?? "Production Ready"}</p>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div
                className="flex items-center justify-between gap-3 border-t border-white/[0.07] bg-[#080D1A] px-4 py-3 transition-opacity duration-300"
                style={{ opacity: animating ? 0 : 1 }}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{active.title}</p>
                  <p className="truncate text-xs text-slate-500">{active.category}</p>
                </div>
                <Link
                  href={`/work/${active.slug}`}
                  className="shrink-0 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Case Study →
                </Link>
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
                    className={`text-[10px] font-semibold transition-colors ${
                      i === current ? "text-indigo-400" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {i === 0 ? "✈ SkyOdeals" : "🎓 HIT IAS"}
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
