import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';
import siteContent from '@/lib/content';

import Link from 'next/link';

export function PricingSection() {
  const { pricing } = siteContent;

  const staticPkg = pricing.staticSite || {
    title: "Static Business Website",
    subtitle: "Blazing fast, SEO-optimized website built with Next.js/HTML5 for professionals, clinics, and local services.",
    price: "Starting from ₹14,999",
    features: [
      "Up to 5 custom-designed pages",
      "100/100 Google PageSpeed mobile score target",
      "WCAG 2.2 AA accessibility built-in",
      "Local SEO & Schema.org integration",
      "Direct WhatsApp & lead capture forms",
      "Free SSL & cloud edge deployment",
      "100% full source code handover",
      "Zero recurring builder plugin fees"
    ],
    note: "Best for: Doctors, Clinics, Consultants, Real Estate Agents, and Local Businesses."
  };

  const dynamicPkg = pricing.dynamicSite || {
    title: "Dynamic Web Application",
    subtitle: "Interactive, database-driven portal with admin panel, user logins, appointment booking, or custom workflows.",
    price: "Starting from ₹34,999",
    features: [
      "Custom database & REST/GraphQL API integration",
      "User authentication & role-based dashboard",
      "Dynamic appointment booking / enquiry workflow",
      "Instant WhatsApp & email notifications via SMTP",
      "Fast Next.js SSR/ISR rendering pipeline",
      "High-security XSS, CSRF & SQLi prevention",
      "Automated daily database backups",
      "Full technical training & admin walkthrough"
    ],
    note: "Best for: Coaching Academies, Diagnostic Centers, Booking Engines, and Real Estate Portals."
  };

  const ecommercePkg = pricing.ecommerce || {
    title: "E-Commerce & Online Store",
    subtitle: "High-converting online store with seamless payment gateway, automated cart recovery, and inventory management.",
    price: "Starting from ₹49,999",
    features: [
      "Product catalog with smart filters & search",
      "Indian payment gateways (Razorpay, Cashfree, UPI)",
      "Mobile-first 1-page checkout flow",
      "Automated WhatsApp & email order confirmation",
      "Discount coupons, banners & offer management",
      "Customer accounts & order tracking portal",
      "Shipping partner / courier tracking integration",
      "Comprehensive sales & visitor analytics"
    ],
    note: "Best for: D2C Brands, Boutiques, Fashion Ateliers, and Product Manufacturers."
  };

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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
            <Icon name="sparkles" size={13} />
            TRANSPARENT PACKAGES &amp; PRICING
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Clear Packages Built for High ROI
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed">
            Transparent pricing with zero hidden agency markups. Whether you need a static business website, a custom dynamic web app, or an e-commerce platform, every build includes WCAG 2.2 accessibility, sub-3s speed, and complete code ownership.
          </p>
        </div>

        <div className="flex lg:hidden items-center justify-center gap-1.5 text-xs text-slate-400 mb-4 font-medium">
          <Icon name="arrowRight" size={14} className="text-indigo-400 animate-pulse" />
          <span>Swipe cards horizontally to compare plans</span>
        </div>

        {/* 3 Core Packages (Static, Dynamic, E-commerce) - Mobile Slider */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* 1. Static Business Website */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 lg:shrink snap-center bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 hover:border-slate-700 hover:bg-slate-900/80 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Fast &amp; SEO-First
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{staticPkg.title}</h3>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">{staticPkg.subtitle}</p>
              
              <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-bold text-indigo-400 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {staticPkg.price}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Milestone-based billing &bull; Zero monthly lock-in</span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Included in Package:</span>
                <ul className="space-y-3">
                  {staticPkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Icon name="check" size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 text-[11px] text-slate-400 mb-4 italic">
                {staticPkg.note}
              </div>
              <WhatsAppCta
                href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20the%20Static%20Business%20Website%20package."
                ctaLocation="pricing_static_package"
                serviceCategory="static_website"
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-700 text-white hover:bg-slate-800 font-semibold"
              >
                Inquire for Static Site
              </WhatsAppCta>
            </div>
          </div>

          {/* 2. Dynamic Web Application (Featured) */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 lg:shrink snap-center bg-gradient-to-b from-[#131E38] via-[#0E1528] to-[#0A0F1D] border-2 border-indigo-500 rounded-2xl p-5 sm:p-7 shadow-2xl shadow-indigo-950/80 relative flex flex-col justify-between text-white lg:-mt-3 lg:mb-[-12px]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_25px_rgba(99,102,241,0.6)] border border-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Most Popular Architecture
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-3 mt-2">
                Custom CMS &amp; Portals
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">{dynamicPkg.title}</h3>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">{dynamicPkg.subtitle}</p>
              
              <div className="mb-6 p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/30">
                <span className="text-[11px] font-bold text-indigo-300 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {dynamicPkg.price}
                </div>
                <span className="text-[11px] text-indigo-200/70 mt-1 block">Full stack Next.js + DB &bull; Scalable cloud backend</span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block mb-3">Included in Package:</span>
                <ul className="space-y-3">
                  {dynamicPkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Icon name="check" size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-[11px] text-indigo-200/80 mb-4 italic">
                {dynamicPkg.note}
              </div>
              <WhatsAppCta
                href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20the%20Dynamic%20Web%20Application%20package."
                ctaLocation="pricing_dynamic_package"
                serviceCategory="dynamic_app"
                size="md"
                className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30"
              >
                Discuss Dynamic Build
              </WhatsAppCta>
            </div>
          </div>

          {/* 3. E-Commerce & Online Store */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 lg:shrink snap-center bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 hover:border-slate-700 hover:bg-slate-900/80 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-3">
                High-Conversion Stores
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{ecommercePkg.title}</h3>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">{ecommercePkg.subtitle}</p>
              
              <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-bold text-cyan-400 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {ecommercePkg.price}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">UPI &amp; Card Gateway ready &bull; Zero commission cut</span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Included in Package:</span>
                <ul className="space-y-3">
                  {ecommercePkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Icon name="check" size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 text-[11px] text-slate-400 mb-4 italic">
                {ecommercePkg.note}
              </div>
              <WhatsAppCta
                href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20want%20to%20build%20an%20E-Commerce%20Store."
                ctaLocation="pricing_ecommerce_package"
                serviceCategory="ecommerce"
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-700 text-white hover:bg-slate-800 font-semibold"
              >
                Inquire for E-Commerce
              </WhatsAppCta>
            </div>
          </div>

        </div>

        {/* Free Audit & Annual Care Banner Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Free Audit Callout */}
          <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-3">
                100% Free &bull; No Obligation
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Want to benchmark your current site first?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Request our free 15-point website audit covering Mobile Speed, Core Web Vitals, On-Page SEO, and WCAG 2.2 accessibility flaws.
              </p>
            </div>
            <Link
              href="/free-website-audit"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors mt-2"
            >
              Get Your Free 15-Point Audit Report &rarr;
            </Link>
          </div>

          {/* Annual Care Callout */}
          <div className="bg-gradient-to-br from-cyan-950/30 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-3">
                Year-Round Peace of Mind
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Need ongoing maintenance &amp; monitoring?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Our Annual Care Plan bundles managed cloud hosting, automated backups, monthly speed/accessibility scans, and priority developer hours.
              </p>
            </div>
            <Link
              href="/annual-care-plan"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
            >
              Explore Annual Care Plans &amp; Retainers &rarr;
            </Link>
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
                <span className="text-xs font-semibold text-slate-300 block mb-1 uppercase tracking-wider">Monthly Retainer</span>
                <div className="font-display text-3xl font-bold text-white">
                  Custom Plan
                </div>
                <span className="text-xs text-slate-300 mt-1 block">Proactive monitoring, updates &amp; technical health checks</span>
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
            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20discuss%20a%20Monthly%20Maintenance%20plan."
              ctaLocation="pricing_maintenance"
              serviceCategory="maintenance"
              variant="outline"
              size="md"
              className="w-full justify-center border-slate-700 text-white hover:bg-slate-800 mt-4"
            >
              Discuss Maintenance Needs
            </WhatsAppCta>
          </div>

          {/* Add-ons Section */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Icon name="plus" size={20} className="text-indigo-400" />
              Specialized Modules &amp; Add-ons
            </h3>
            <p className="text-slate-300 text-sm mb-6">
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
            <p className="text-slate-300 text-sm leading-relaxed">
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
            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20website%20project."
              ctaLocation="pricing_bottom_banner"
              serviceCategory="free_quote"
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 font-bold"
            >
              <Icon name="whatsapp" size={18} className="mr-2" />
              Chat on WhatsApp for Quote
            </WhatsAppCta>
            <Button href="/contact" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 font-semibold">
              Fill Consultation Form
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}
