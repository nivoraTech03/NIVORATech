"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface FeaturedProject {
  id: string;
  tabLabel: string;
  tabSub: string;
  category: string;
  title: string;
  location: string;
  metric: string;
  techBadge: string;
  slug: string;
  image: string;
  liveUrl?: string;
  glowColor: string;
  isNew?: boolean;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "auralux-pg",
    tabLabel: "✨ AURA LUXE",
    tabSub: "Luxury PG Gurugram",
    category: "Next.js 15 & React Luxury Coliving Portal",
    title: "AURA LUXE SUITES — Luxury Executive PG & Serviced Residence",
    location: "Sector 43, Golf Course Road, Gurugram",
    metric: "99/100 Perf · +140% Direct Inquiries",
    techBadge: "Next.js 15",
    slug: "auralux-pg",
    image: "/images/auralux.webp",
    liveUrl: "http://auraluxpg.vercel.app/",
    glowColor: "rgba(212, 175, 55, 0.25)",
    isNew: true,
  },
  {
    id: "aurabridal-studio",
    tabLabel: "💄 Aura Bridal",
    tabSub: "Bridal Atelier",
    category: "Next.js 15 Luxury Bridal & Beauty Platform",
    title: "Aura Bridal Studio — Luxury Editorial Bridal Makeup Atelier",
    location: "Mehrauli Atelier, Delhi NCR",
    metric: "99/100 Perf · +165% Bookings",
    techBadge: "Next.js 15",
    slug: "aurabridal-studio",
    image: "/images/aurabridal.webp",
    liveUrl: "https://aurabridalstudio-one.vercel.app/",
    glowColor: "rgba(244, 114, 182, 0.25)",
    isNew: true,
  },
  {
    id: "skyodeals",
    tabLabel: "✈ SkyOdeals",
    tabSub: "Flight Portal",
    category: "PHP Web Application & Booking Platform",
    title: "SkyOdeals — Flight Booking & Travel Portal",
    location: "Delhi NCR & Global Travel Booking",
    metric: "98/100 Perf · 1,200+ Bookings",
    techBadge: "Custom PHP",
    slug: "skyodeals",
    image: "/images/skyodeals.webp",
    liveUrl: "https://skyodeals.com",
    glowColor: "rgba(14, 165, 233, 0.25)",
  },
  {
    id: "hitias-academy",
    tabLabel: "🎓 HIT IAS",
    tabSub: "Civil Services",
    category: "WordPress & Elementor Educational Platform",
    title: "HIT IAS Academy — UPSC & State PCS Portal",
    location: "Delhi & Gwalior Centers",
    metric: "< 1.2s Load · 2,500+ Aspirants",
    techBadge: "WordPress CMS",
    slug: "hitias-academy",
    image: "/images/hitias.webp",
    liveUrl: "https://hitias.renutech.in/",
    glowColor: "rgba(234, 179, 8, 0.25)",
  },
  {
    id: "xchat",
    tabLabel: "💬 XChat",
    tabSub: "Mobile App",
    category: "React Native Mobile Application",
    title: "XChat — Real-time Messaging & Community",
    location: "iOS & Android Cross-Platform",
    metric: "60 FPS Native · 45k+ Users",
    techBadge: "React Native",
    slug: "xchat",
    image: "/images/xchat.webp",
    liveUrl: "https://github.com/nivoraTech03",
    glowColor: "rgba(168, 85, 247, 0.25)",
  },
];

const CORE_TECHS = [
  { name: "Next.js / React", tag: "Frontend & Fullstack" },
  { name: "React Native", tag: "iOS & Android Apps" },
  { name: "PHP & MySQL", tag: "Custom Web Portals" },
  { name: "WordPress & Elementor", tag: "High-Converting CMS" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slideTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 240);
    },
    [animating, current]
  );

  const nextSlide = useCallback(() => {
    slideTo((current + 1) % FEATURED_PROJECTS.length);
  }, [current, slideTo]);

  const prevSlide = useCallback(() => {
    slideTo((current - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  }, [current, slideTo]);

  // Auto slide every 6.5s
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 240);
        return (c + 1) % FEATURED_PROJECTS.length;
      });
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const active = FEATURED_PROJECTS[current] ?? FEATURED_PROJECTS[0]!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c1228] via-[#080d20] to-[#040713] text-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* ─── Ambient Glow Mesh ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Perspective Grid */}
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)",
            animation: "driftGrid 32s linear infinite",
          }}
        />

        {/* Dynamic Project Ambient Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[950px] rounded-full blur-[160px] transition-all duration-1000 ease-out"
          style={{ background: active.glowColor }}
        />

        {/* Deep Studio Auras */}
        <div
          className="absolute -top-36 left-1/2 -translate-x-1/2 h-[520px] w-[850px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(56,189,248,0.15) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* ─── Grand Centered Hero Header ─── */}
        <div className="mx-auto max-w-4xl text-center space-y-6">
          {/* Eyebrow Studio Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-indigo-500/20 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-indigo-300 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.25)] ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>DIGITAL DEVELOPMENT STUDIO</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300 font-medium">DELHI NCR &amp; GURUGRAM</span>
          </div>

          {/* Epic Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-black leading-[1.08] tracking-tight text-white drop-shadow-sm">
            Custom Web &amp; App Development{" "}
            <span className="block mt-2 bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              in Delhi NCR &amp; Gurugram
            </span>
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300/90 font-normal">
            Nivora Tech is a premier digital agency crafting blazing-fast Next.js websites, custom web applications, and mobile apps for businesses in Delhi NCR, Gurugram, Noida, and across India.
          </p>

          {/* CTA Buttons & WhatsApp Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/work"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all px-8 py-3.5 text-sm"
            >
              <span>View Selected Work</span>
              <Icon name="arrowRight" size={16} className="ml-2" />
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/15 backdrop-blur-md hover:-translate-y-0.5 transition-all px-8 py-3.5 text-sm font-semibold shadow-lg shadow-black/20"
            >
              Start a Project
            </Button>
            <a
              href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20am%20interested%20in%20discussing%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-all bg-emerald-950/50 px-5 py-3 rounded-full backdrop-blur-md shadow-lg shadow-black/20 ring-1 ring-emerald-500/30 hover:ring-emerald-400/50"
            >
              <Icon name="whatsapp" size={16} />
              <span>WhatsApp Us (+91 95754 50177)</span>
            </a>
          </div>

          {/* Core Tech Stack Badges Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider mr-1 hidden sm:inline">
              Engineered With:
            </span>
            {CORE_TECHS.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-200 text-xs font-medium backdrop-blur-md shadow-sm ring-1 ring-white/10 hover:ring-indigo-400/40 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── Seamless Elevated Showcase Card (No Harsh Borders) ─── */}
        <div className="mt-14 sm:mt-16 mx-auto max-w-5xl">
          {/* Interactive Project Switcher Tabs */}
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FEATURED_PROJECTS.map((p, idx) => {
              const isSelected = idx === current;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => slideTo(idx)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl shadow-md ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-600/35 to-purple-600/25 text-white shadow-xl shadow-indigo-500/20 scale-[1.02] ring-1 ring-indigo-400/50"
                      : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-900/90 ring-1 ring-white/5"
                  }`}
                >
                  {isSelected && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 via-sky-400 to-amber-300"
                      style={{ animation: "tabProgress 6.5s linear infinite" }}
                    />
                  )}
                  <span className="flex items-center gap-2">
                    <span>{p.tabLabel}</span>
                    {p.isNew && (
                      <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 shadow-sm animate-pulse">
                        NEW
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                      • {p.tabSub}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Elevated Card Shell Designed with Soft Shadows & Glassmorphism (No Harsh Borders) */}
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-[#060a18]/95 p-3 sm:p-5 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_60px_rgba(99,102,241,0.18)] backdrop-blur-2xl ring-1 ring-inset ring-white/[0.08]">
            {/* Top Bar with Live Indicator & Prev/Next Arrows */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  Featured Client System
                </span>
                {active.isNew && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40 animate-pulse">
                    ✨ NEW PROJECT 2026
                  </span>
                )}
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="text-[11px] text-indigo-300 font-mono hidden md:inline">
                  {active.liveUrl ? active.liveUrl.replace(/^https?:\/\//, '') : active.slug}
                </span>
              </div>

              {/* Slider Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous project"
                  className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Icon name="arrowRight" size={13} className="rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project"
                  className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Icon name="arrowRight" size={13} />
                </button>
              </div>
            </div>

            {/* ─── Main Showcase Canvas (Full 100% Width) ─── */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-[26px] bg-slate-950 shadow-2xl">
              {FEATURED_PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: i === current ? (animating ? 0 : 1) : 0,
                    transform: i === current ? (animating ? "scale(1.015)" : "scale(1)") : "scale(1.02)",
                    zIndex: i === current ? 10 : 0,
                  }}
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} - Showcase by NIVORA Tech`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                    className="object-cover object-center"
                  />
                </div>
              ))}

              {/* Floating Metrics Pill on Main Slide */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold shadow-lg ring-1 ring-white/15">
                  {active.metric}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg ring-1 ring-indigo-400/30 hidden sm:inline">
                  {active.techBadge}
                </span>
              </div>
            </div>

            {/* Bottom Meta & Action Bar */}
            <div className="mt-3 sm:mt-4 p-3 sm:p-5 rounded-2xl bg-slate-950/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 ring-1 ring-inset ring-white/[0.06]">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-indigo-500/25 text-indigo-300">
                    {active.category}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    📍 {active.location}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {active.title}
                </h2>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href={`/work/${active.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <span>Case Study</span>
                  <Icon name="arrowRight" size={13} />
                </Link>
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30 active:scale-95"
                  >
                    <span>Visit Live Site</span>
                    <Icon name="externalLink" size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ─── Trust Counter Row ─── */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">99.4%</div>
              <div className="text-xs text-slate-400 mt-0.5">Core Web Vitals Avg</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-indigo-400">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Bespoke Engineering</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400">5.0 ★</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified Client Rating</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-300">Delhi NCR</div>
              <div className="text-xs text-slate-400 mt-0.5">Gurugram · Noida · Global</div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes driftGrid {
          0%   { transform: translate(0px, 0px); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes tabProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
