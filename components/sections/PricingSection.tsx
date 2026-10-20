import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import siteContent from '@/lib/content';

export function PricingSection() {
  const { pricing } = siteContent;

  const addOns = [
    { name: "Extra Custom Page", badge: "Scope Based" },
    { name: "WhatsApp Chat Integration", badge: "Direct Connect" },
    { name: "Custom Lead Generation Form", badge: "High Conversion" },
    { name: "Google Analytics & Tag Manager", badge: "Tracking" },
    { name: "Google Search Console Setup", badge: "Indexing" },
    { name: "Comprehensive On-Page SEO", badge: "Organic Growth" },
    { name: "Core Web Vitals Optimization", badge: "Speed & Score" },
    { name: "Cloud Server Deployment", badge: "Production Ready" },
    { name: "Custom API & CRM Integration", badge: "Enterprise" }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
            <Icon name="sparkles" size={13} />
            PLANS &amp; TAILORED SOLUTIONS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Tailored Plans &amp; Custom Solutions
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed">
            Flexible website and software solutions tailored for startups, local businesses, and growing brands in Delhi NCR and across India. We scope each project transparently with zero hidden agency costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Card: New Website */}
          <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-slate-900/90 to-[#0B1224] border-2 border-indigo-500 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-indigo-950/60 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6">
              <span className="flex items-center gap-1.5 bg-indigo-500 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Featured Package
              </span>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">{pricing.website.title.toUpperCase()}</h3>
                <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-md leading-relaxed">{pricing.website.subtitle}</p>
                <div className="mb-8 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                  <span className="text-xs font-bold text-indigo-400 block mb-1 uppercase tracking-wider">Project Investment</span>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Custom Quote
                  </div>
                  <span className="text-xs text-indigo-200/80 mt-1 block">Transparent milestone estimate based on your exact page count &amp; features</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20discussing%20a%20New%20Website%20project." size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 font-bold">
                  Discuss Your Project
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 font-semibold">
                  Request Free Proposal
                </Button>
              </div>
            </div>

            <div className="lg:border-l lg:border-slate-800 lg:pl-10">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                Comprehensive Deliverables:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {pricing.website.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed italic">
                Includes responsive layout testing across iOS &amp; Android viewports, speed optimization, and production deployment assistance.
              </div>
            </div>
          </div>

          {/* Landing Page */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">Campaign &amp; Lead Gen</span>
              <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.landing.title.toUpperCase()}</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">{pricing.landing.subtitle}</p>
              <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-semibold text-slate-500 block mb-1 uppercase tracking-wider">Project Investment</span>
                <div className="font-display text-2xl font-bold text-white">
                  Custom Quote
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">High-conversion landing page structure</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.landing.features.slice(0, 6).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check" size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20need%20a%20Landing%20Page." variant="outline" className="w-full justify-center border-slate-700 text-white hover:bg-slate-800">
              Inquire Now
            </Button>
          </div>

          {/* Existing Website Redesign */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">Modernization</span>
              <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.redesign.title.toUpperCase()}</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">{pricing.redesign.subtitle}</p>
              <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-semibold text-slate-500 block mb-1 uppercase tracking-wider">Project Investment</span>
                <div className="font-display text-2xl font-bold text-white">
                  Custom Quote
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Full UI/UX overhaul &amp; mobile speed boost</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.redesign.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check" size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20want%20to%20redesign%20my%20existing%20website." variant="outline" className="w-full justify-center border-slate-700 text-white hover:bg-slate-800">
              Discuss Redesign
            </Button>
          </div>

          {/* Website Enhancement */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">Enhancement &amp; Fixes</span>
              <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.enhancement.title.toUpperCase()}</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">{pricing.enhancement.subtitle}</p>
              <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-semibold text-slate-500 block mb-1 uppercase tracking-wider">Project Investment</span>
                <div className="font-display text-2xl font-bold text-white">
                  Custom Quote
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Targeted fixes, new sections, or speed optimization</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricing.enhancement.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check" size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20need%20enhancements%20for%20my%20website." variant="outline" className="w-full justify-center border-slate-700 text-white hover:bg-slate-800">
              Inquire Regarding Fixes
            </Button>
          </div>
        </div>

        {/* Maintenance & Add-ons Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Maintenance Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/80 to-[#090F1E] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Dedicated Support</span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{pricing.maintenance.title.toUpperCase()}</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">{pricing.maintenance.subtitle}</p>
              <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs font-semibold text-slate-400 block mb-1 uppercase tracking-wider">Monthly Retainer</span>
                <div className="font-display text-3xl font-bold text-white">
                  Custom Plan
                </div>
                <span className="text-xs text-slate-400 mt-1 block">Proactive monitoring, updates &amp; technical health checks</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pricing.maintenance.included.slice(0, 6).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check" size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20discuss%20a%20Monthly%20Maintenance%20plan." variant="outline" className="w-full justify-center border-slate-700 text-white hover:bg-slate-800 mt-4">
              Discuss Maintenance Needs
            </Button>
          </div>

          {/* Add-ons Section */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Icon name="plus" size={20} className="text-indigo-400" />
              Specialized Modules &amp; Add-ons
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Need advanced functionality? Add modular enhancements to your web build seamlessly.
            </p>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {addOns.map((addon, i) => (
                <div key={i} className="flex justify-between items-center p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                  <span className="text-slate-200 text-sm font-medium">{addon.name}</span>
                  <span className="text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">{addon.badge}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
              <p className="text-xs text-indigo-200/90 leading-relaxed">
                Have a specialized custom requirement? We engineer bespoke APIs, booking engines, and dashboard integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Scoping Transparency Notes */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-bold text-slate-200 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
              <Icon name="check" size={16} className="text-indigo-400" />
              Transparent Scoping Guarantee
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every project is individually scoped based on your specific requirements, design fidelity, database structure, and timeline. You receive a clear, fixed quote with documented milestones before any coding begins.
            </p>
          </div>
          
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              Hosting &amp; Domain Ownership
            </h4>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              Domain names and cloud hosting remain 100% under your business ownership. We assist you with provider selection (Vercel, AWS, Hostinger), DNS configuration, and automated deployment with zero vendor lock-in.
            </p>
          </div>
        </div>

        {/* Client CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-950 via-[#10172E] to-slate-950 border border-indigo-500/40 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Zero-Obligation Consultation
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Not sure which package fits your business?</h3>
          <p className="text-indigo-200/80 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tell us about your idea, reference websites, or feature list. We’ll analyze your goals and share a tailored roadmap and quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20website%20project." size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 font-bold">
              <Icon name="whatsapp" size={18} className="mr-2" />
              Chat on WhatsApp for Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 font-semibold">
              Fill Consultation Form
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}
