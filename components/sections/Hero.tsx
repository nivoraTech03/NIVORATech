"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const { hero, projects } = siteContent;
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  const activeProject = projects[activeTab] || projects[0];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#070B16] via-[#0B1327] to-[#070B16] text-white border-b border-slate-800"
    >
      {/* Dynamic ambient lighting & glow spots */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-[140px] opacity-40 bg-indigo-600/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-[350px] w-[350px] rounded-full blur-[120px] opacity-30 bg-sky-500/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30"
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left: Compelling Copy */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>{hero.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-white">
            Websites engineered to make your business{" "}
            <span className="text-gradient-indigo">stand out &amp; convert.</span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            From high-conversion PHP booking applications to bespoke WordPress &amp; Next.js platforms, we design and build blazing-fast websites with clean code, intuitive UI, and measurable business results.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#work"
              size="lg"
              variant="accent"
              icon
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30"
            >
              Explore Client Work
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className="text-white hover:text-indigo-400 border border-slate-700 hover:border-indigo-500 rounded-full bg-slate-900/60 backdrop-blur-sm"
            >
              Start Your Project
            </Button>
          </div>

          {/* Value Proof Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3.5 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60">
              <Icon name="check" size={13} className="text-indigo-400" />
              PHP &amp; MySQL Portals
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60">
              <Icon name="check" size={13} className="text-indigo-400" />
              WordPress &amp; Elementor
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60">
              <Icon name="check" size={13} className="text-indigo-400" />
              Sub-second Speed
            </span>
          </div>
        </div>

        {/* Right: Interactive Live Production Showcase */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Project Switcher Tabs */}
            <div className="flex items-center gap-2 mb-3 bg-[#0E1528] border border-slate-800 p-1.5 rounded-xl max-w-fit shadow-lg">
              <button
                type="button"
                onClick={() => setActiveTab(0)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 0
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ✈️ SkyOdeals (PHP)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 1
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🎓 HIT IAS (WordPress)
              </button>
            </div>

            {/* Desktop Browser Window */}
            <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-[#0E1528] shadow-2xl shadow-black/80 transition-all duration-300">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#090E1D] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/90 px-3.5 py-1 text-xs font-mono text-slate-300 shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-indigo-400">https://</span>
                  <span>
                    {activeProject.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>

                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="Open live website"
                >
                  <Icon name="externalLink" size={14} />
                </a>
              </div>

              {/* Showcase Image Canvas */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 group">
                {activeProject.image && (
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} Live Preview`}
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B16]/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Metric 1: Top-Right Glass Badge */}
                <div className="absolute top-4 right-4 rounded-xl border border-white/20 bg-[#070B16]/85 backdrop-blur-md px-3.5 py-2 shadow-xl flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
                    <Icon name="sparkles" size={14} />
                  </span>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Mobile Performance
                    </span>
                    <span className="block text-xs font-extrabold text-white">
                      98/100 Core Web Vitals
                    </span>
                  </div>
                </div>

                {/* Floating Metric 2: Bottom-Left Glass Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-[#070B16]/85 backdrop-blur-md px-3.5 py-2 shadow-xl flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                    <Icon name="check" size={14} />
                  </span>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Architecture
                    </span>
                    <span className="block text-xs font-extrabold text-white">
                      {activeProject.architecture || "Production Ready"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Showcase Footer Details */}
              <div className="p-4 bg-[#090E1D] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeProject.category}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    View Case Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
