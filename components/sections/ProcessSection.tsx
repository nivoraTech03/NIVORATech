"use client";

import { useState } from "react";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const STEPS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(109,40,217,0.35)",
    borderColor: "rgba(139,92,246,0.4)",
    accentHex: "#8B5CF6",
    bgGlow: "radial-gradient(ellipse at 30% 40%, rgba(109,40,217,0.18) 0%, transparent 60%)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="8" y="2" width="8" height="4" rx="1.5" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6,182,212,0.30)",
    borderColor: "rgba(6,182,212,0.35)",
    accentHex: "#06B6D4",
    bgGlow: "radial-gradient(ellipse at 70% 30%, rgba(6,182,212,0.15) 0%, transparent 60%)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-pink-500",
    glowColor: "rgba(217,70,239,0.28)",
    borderColor: "rgba(217,70,239,0.35)",
    accentHex: "#D946EF",
    bgGlow: "radial-gradient(ellipse at 20% 70%, rgba(217,70,239,0.14) 0%, transparent 60%)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(16,185,129,0.28)",
    borderColor: "rgba(16,185,129,0.35)",
    accentHex: "#10B981",
    bgGlow: "radial-gradient(ellipse at 80% 80%, rgba(16,185,129,0.14) 0%, transparent 60%)",
  },
];

export function ProcessSection() {
  const { process } = siteContent;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative py-24 sm:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060A18 0%, #080D1E 50%, #05091A 100%)" }}
    >
      {/* Ambient noise texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* Large decorative glow orbs */}
      <div className="pointer-events-none absolute -left-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-64 top-1/3 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }} />

      <Container className="relative">

        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
              {process.eyebrow}
            </span>
          </div>
          <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
            {process.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
            {process.description}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const meta = STEPS[index];
            const isActive = active === index;

            return (
              <div
                key={step.step}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className="group relative cursor-default overflow-hidden rounded-3xl transition-all duration-500"
                style={{
                  border: `1px solid ${isActive ? meta!.borderColor : "rgba(255,255,255,0.12)"}`,
                  background: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.035)",
                  boxShadow: isActive
                    ? `0 0 60px -10px ${meta!.glowColor}, 0 20px 40px -10px rgba(0,0,0,0.6)`
                    : "none",
                  transform: isActive ? "translateY(-6px) scale(1.015)" : "none",
                }}
              >
                {/* Per-card background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: meta!.bgGlow }}
                />

                {/* Giant step number watermark */}
                <span
                  className="absolute -right-4 -top-6 select-none font-black text-[120px] leading-none transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                  style={{
                    color: meta!.accentHex,
                    opacity: isActive ? 0.12 : 0.06,
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full min-h-[280px]">

                  {/* Icon with gradient ring */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${meta!.gradient} p-[1.5px] shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-[13px] bg-[#080D1E] text-white">
                        {meta!.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step label */}
                  <p
                    className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300"
                    style={{ color: isActive ? meta!.accentHex : "rgba(255,255,255,0.6)" }}
                  >
                    Step {step.step}
                  </p>

                  {/* Name */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200 mb-3">
                    {step.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-300 flex-1">
                    {step.description}
                  </p>

                  {/* Bottom gradient bar */}
                  <div
                    className={`mt-6 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r ${meta!.gradient} transition-all duration-500 ease-out`}
                  />
                </div>

                {/* Corner shine */}
                <div
                  className="absolute -top-px left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${meta!.accentHex}80, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Arrow connectors between cards (desktop) */}
        <div className="mt-8 hidden lg:flex items-center justify-around px-[12.5%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 60 12" className="w-14 text-white/10" fill="none">
                <path d="M0 6 H52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                <path d="M48 2 L56 6 L48 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 backdrop-blur-sm">
            <div className="flex -space-x-1">
              {STEPS.map((s, i) => (
                <span
                  key={i}
                  className="flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-[#080D1E] text-[9px] font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${s.accentHex}, ${s.accentHex}99)` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/50">
              Simple 4-step process · <span className="font-semibold text-white/80">2–4 week delivery</span>
            </p>
          </div>

          <Button href="/contact" size="sm">
            Start Your Project →
          </Button>
        </div>
      </Container>
    </section>
  );
}
