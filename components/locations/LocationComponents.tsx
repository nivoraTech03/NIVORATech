'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { BusinessType } from '@/data/locations';
import siteContent from "@/lib/content";
import Link from 'next/link';

export function LocationHero({ city }: { city: string }) {
  const { projects } = siteContent;
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

  const whatsappMsg = `Hi Nivora Tech, I need a website for my business in ${city}.`;
  const whatsappLink = `https://wa.me/919575450177?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative overflow-hidden bg-[#060B18] text-white border-b border-white/[0.06]" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* ─── Animated Grid Background ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 25%, transparent 100%)",
            animation: "driftGrid 18s linear infinite",
          }}
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[700px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -right-24 h-[320px] w-[320px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        />
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
          <nav className="flex items-center text-sm font-medium text-slate-400 space-x-2 pb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rarr;</span>
            <span className="text-slate-500">Locations</span>
            <span>&rarr;</span>
            <span className="text-white">{city}</span>
          </nav>
          
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </span>
            Website Development for Businesses in {city}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.06] tracking-tight">
            Professional Website Development in{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #818CF8 0%, #6366F1 35%, #38BDF8 75%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {city}
            </span>
          </h1>

          <p className="max-w-lg text-base sm:text-lg leading-relaxed text-slate-300/80">
            We help local businesses in {city} dominate their market with ultra-fast, visually stunning, and highly converting websites & mobile apps.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              href="/contact"
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote
            </Button>
            <Button
              href={whatsappLink}
              size="lg"
              className="border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
            >
              <Icon name="whatsapp" size={18} className="mr-2" />
              WhatsApp Us
            </Button>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {["Next.js / React", "React Native", "PHP & MySQL", "WordPress & Elementor"].map((b) => (
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
            <div className="absolute -inset-1 z-0 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-indigo-500/30 group-hover:via-purple-500/20" />
            <div className="absolute top-4 -right-4 z-0 h-full w-full rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-1" />
            <div className="absolute top-8 -right-8 z-0 h-full w-full rounded-3xl border border-white/5 bg-white/[0.005] backdrop-blur-2xl transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-2" />

            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A101F]/80 p-2.5 shadow-2xl shadow-indigo-900/50 backdrop-blur-xl transition-all duration-700 hover:border-white/20 hover:bg-[#0A101F]/90">
              <div className="relative overflow-hidden rounded-2xl bg-black">
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

                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  {projects.map((p, i) => (
                    <div
                      key={p.id}
                      className="absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: i === current ? (animating ? 0 : 1) : 0,
                        transform: i === current ? (animating ? "scale(1.05)" : "scale(1)") : "scale(1.05)",
                        zIndex: i === current ? 10 : 0,
                      }}
                    >
                      {p.image && (
                        <Image
                          src={p.image}
                          alt={`${p.title} - App & Web Development Project in ${city} by Nivora Tech`}
                          width={1200}
                          height={825}
                          priority={true}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="h-full w-full object-cover object-top"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20 transform transition-transform duration-700" style={{ transform: i === current && !animating ? 'translateY(0)' : 'translateY(15px)' }}>
                        <div className="flex items-end justify-between gap-3 sm:gap-4">
                          <div className="space-y-2 sm:space-y-3">
                            <div className="inline-block rounded-md bg-indigo-500 px-2 py-0.5 sm:px-2.5 sm:py-1 shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                              <p className="text-[9px] sm:text-[10px] font-extrabold text-white uppercase tracking-widest drop-shadow-sm">{p.category}</p>
                            </div>
                            <h2 className="text-xl sm:text-[26px] font-extrabold text-white leading-tight drop-shadow-md line-clamp-2">{p.title}</h2>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                              <span className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-black/40 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10 shadow-inner">
                                <Icon name="sparkles" size={10} className="text-indigo-400 sm:w-3 sm:h-3" />
                                {p.stats?.[2]?.value ?? "98/100"} Perf
                              </span>
                              <span className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-black/40 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-white/90 backdrop-blur-md border border-white/10 shadow-inner">
                                <Icon name="code" size={10} className="text-emerald-400 sm:w-3 sm:h-3" />
                                {p.architecture?.split(",")[0] ?? "React"}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={`/work/${p.slug}`}
                            aria-label={`View project ${p.title}`}
                            className="group/btn relative flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white text-black overflow-hidden transition-all hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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

            <div className="mt-4 flex items-center justify-center gap-3">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`View ${p.title}`}
                  onClick={() => slideTo(i)}
                  className="group flex flex-col items-center gap-1.5"
                >
                  <span
                    className={`text-[11px] font-bold tracking-wider transition-colors duration-300 ${i === current ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                  >
                    {p.title.includes('Sky') ? "✈ SkyOdeals" : p.title.includes('HIT IAS') ? "🎓 HIT IAS" : p.title.includes('XChat') ? "💬 XChat" : p.title.split(' ')[0]}
                  </span>
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 opacity-60">
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </div>

      <style>{`
        @keyframes driftGrid {
          0%   { transform: translate(0px, 0px); }
          100% { transform: translate(60px, 60px); }
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

export function LocationIntro({ introParagraphs }: { introParagraphs: string[] }) {
  return (
    <section className="py-20 bg-[var(--bg-surface)]">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg text-[var(--text-secondary)]">
          {introParagraphs.map((p, i) => (
            <p key={i} className="mb-6 leading-relaxed">{p}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LocationServices({ city }: { city: string }) {
  const services = [
    { title: "New Website Development", desc: "Custom designed, fast-loading business websites.", icon: "layout" as const },
    { title: "Website Redesign", desc: "Modernize your existing outdated website.", icon: "sparkles" as const },
    { title: "Landing Page Development", desc: "High-converting single pages for ads.", icon: "code" as const },
    { title: "Website Maintenance", desc: "Keep your site fast, updated, and secure.", icon: "check" as const },
  ];
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#060B18] text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Website Development Services in {city}</h2>
          <p className="text-slate-400">Everything you need to establish and grow your business online.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Icon name={s.icon} size={20} />
              </div>
              <h3 className="font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{s.desc}</p>
              <Link href="/services" className="text-sm text-indigo-400 font-semibold flex items-center gap-1 hover:text-indigo-300">
                Learn more <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LocationBusinessTypes({ businessTypes, city }: { businessTypes: BusinessType[], city: string }) {
  return (
    <section className="py-24 bg-[#060B18] text-white border-y border-white/[0.06]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Businesses We Serve in {city}</h2>
          <p className="text-slate-400">Tailored website solutions for various local industries.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {businessTypes.map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Icon name={b.icon} size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LocationFeatures() {
  const features = [
    "Custom UI Design", "Mobile Responsive", "Fast & Lightweight", "Basic On-page SEO",
    "Contact / Enquiry Form", "WhatsApp Integration", "Social Media Integration", "Cross-Browser Compatibility"
  ];
  return (
    <section className="py-24 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">What&apos;s Included in Our Websites</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-subtle)] p-4 rounded-xl">
              <Icon name="check" size={16} className="text-emerald-500 shrink-0" />
              <span className="text-sm font-semibold text-[var(--text-secondary)]">{f}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LocationPerformance() {
  return (
    <section className="py-24 bg-[#060B18] text-white border-y border-white/[0.06]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Website Performance &amp; SEO</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            A beautiful website is useless if it&apos;s slow or invisible. We build websites with clean semantic HTML, mobile-first responsive layouts, and basic on-page SEO best practices right out of the box. We focus on fast-loading speeds and proper technical structure to help your business get discovered naturally.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function LocationCta({ city }: { city: string }) {
  const whatsappMsg = `Hi Nivora Tech, I want to discuss a website project for my business in ${city}.`;
  const whatsappLink = `https://wa.me/919575450177?text=${encodeURIComponent(whatsappMsg)}`;
  return (
    <section className="py-24 bg-[#060B18] text-white border-t border-white/[0.06]">
      <Container>
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6">Need a Website for Your Business in {city}?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Tell us about your business and requirements. We&apos;ll help you choose a suitable website solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold border-none shadow-lg shadow-indigo-500/30">
                Start Your Project
              </Button>
              <Button href={whatsappLink} size="lg" variant="outline" className="w-full sm:w-auto border-white/15 bg-white/5 text-white hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30 transition-colors">
                <Icon name="whatsapp" size={18} className="mr-2" />
                WhatsApp NIVORA
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
