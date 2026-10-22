import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';
import siteContent from '@/lib/content';

export function MiniPricing() {
  const { pricing } = siteContent;

  return (
    <section 
      id="pricing-plans"
      className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--border-subtle)]" 
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Background ambient lighting */}
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-indigo-600/10 blur-[130px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="sm:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-500 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
            <Icon name="sparkles" size={13} />
            PLANS &amp; TAILORED SOLUTIONS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-5 tracking-tight">
            Flexible Plans for Growing Brands
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            Every business has distinct requirements. We evaluate your goals, features, and timeline to build high-performance digital products within your scope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 items-stretch">
          {/* Landing Page */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-8 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Starter &amp; MVP
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">{pricing.landing.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 min-h-[40px] leading-relaxed">{pricing.landing.subtitle}</p>
              
              <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
                <span className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 block mb-1 uppercase tracking-wider">Project Investment</span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Custom Scope
                </div>
                <span className="text-xs text-[var(--text-muted)] mt-1 block">Transparent milestone estimate</span>
              </div>

              <div className="h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Included Features</span>
                <ul className="space-y-3.5">
                  {pricing.landing.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <Icon name="check" size={12} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed italic">
                  {pricing.landing.note}
                </div>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20discuss%20a%20Landing%20Page%20project."
              ctaLocation="home_mini_pricing_landing"
              serviceCategory="landing_page"
              variant="outline"
              size="md"
              className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)] font-semibold"
            >
              Request Custom Quote
            </WhatsAppCta>
          </div>

          {/* New Website - Flagship / Most Popular */}
          <div className="bg-gradient-to-b from-[#131E38] via-[#0E1528] to-[#0A0F1D] border-2 border-indigo-500/60 rounded-[2rem] p-8 md:-mt-4 shadow-2xl shadow-indigo-950/60 relative group flex flex-col justify-between text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_25px_rgba(99,102,241,0.6)] border border-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-3 mt-2">
                Growth &amp; Full Suite
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{pricing.website.title}</h3>
              <p className="text-sm text-indigo-200/80 mb-6 min-h-[40px] leading-relaxed">{pricing.website.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-indigo-500/20">
                <span className="text-[11px] font-bold text-indigo-300 block mb-1 uppercase tracking-wider">Project Investment</span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Custom Scope
                </div>
                <span className="text-xs text-indigo-200/70 mt-1 block">Full-service design, engineering &amp; SEO</span>
              </div>

              <div className="h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-indigo-500/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/50" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99, 102, 241, 0.3) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-300/90 mb-4">What&apos;s Included</span>
                <ul className="space-y-3.5">
                  {pricing.website.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                        <Icon name="check" size={12} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-indigo-500/20 text-xs text-indigo-300/70 leading-relaxed italic">
                  {pricing.website.note}
                </div>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20building%20a%20New%20Website%20with%20your%20team."
              ctaLocation="home_mini_pricing_website"
              serviceCategory="new_website"
              size="md"
              className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 font-bold py-3.5"
            >
              Get Free Consultation
            </WhatsAppCta>
          </div>

          {/* Maintenance */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-8 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Continuous Care
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">{pricing.maintenance.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 min-h-[40px] leading-relaxed">{pricing.maintenance.subtitle}</p>

              <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
                <span className="text-[11px] font-bold text-emerald-500 dark:text-emerald-400 block mb-1 uppercase tracking-wider">Support Plan</span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Flexible Retainer
                </div>
                <span className="text-xs text-[var(--text-muted)] mt-1 block">Monthly health, security &amp; content updates</span>
              </div>

              <div className="h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Included Support</span>
                <ul className="space-y-3.5 mb-6">
                  {pricing.maintenance.included.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <Icon name="check" size={12} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20inquire%20about%20Website%20Maintenance."
              ctaLocation="home_mini_pricing_maintenance"
              serviceCategory="maintenance"
              variant="outline"
              size="md"
              className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)] font-semibold"
            >
              Inquire About Support
            </WhatsAppCta>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[var(--border-subtle)] max-w-3xl mx-auto">
          <p className="text-[var(--text-secondary)] mb-6 font-medium">
            Need a custom web application, ecommerce store, luxury portal, or custom mobile app?
          </p>
          <Button href="/pricing" size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 font-bold px-8 py-5 rounded-2xl transition-all hover:-translate-y-0.5">
            <Icon name="layout" size={18} className="mr-2" />
            Explore All Plans &amp; Custom Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
