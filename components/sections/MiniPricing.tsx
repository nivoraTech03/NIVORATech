import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import siteContent from '@/lib/content';

export function MiniPricing({ 
  pricingOverrides 
}: { 
  pricingOverrides?: { landing?: string; website?: string; maintenance?: string; } 
}) {
  const { pricing } = siteContent;
  
  // Apply overrides if they exist
  const landingPrice = pricingOverrides?.landing || pricing.landing.price;
  const websitePrice = pricingOverrides?.website || pricing.website.price;
  const maintenancePrice = pricingOverrides?.maintenance || pricing.maintenance.price;

  const landingFeatures = [
    "Single-page custom layout",
    "Modern & conversion-focused design",
    "Lead capture / enquiry form",
    "WhatsApp CTA integration",
    "Mobile responsive",
    "Fast-loading structure",
    "Clear Call-to-Action sections",
    "Basic on-page SEO",
    "Social media links",
    "Contact information integration",
    "Cross-browser compatibility",
    "Deployment assistance"
  ];

  const websiteFeatures = [
    "Custom UI Design",
    "Up to 5 standard pages",
    "Mobile Responsive",
    "Fast & Lightweight Development",
    "Basic On-page SEO",
    "Contact / Enquiry Form",
    "WhatsApp Integration",
    "Social Media Integration",
    "Clear Call-to-Action Sections",
    "Basic Cross-Browser Compatibility",
    "Deployment Assistance"
  ];

  const maintenanceIncluded = [
    "Minor text/content updates",
    "Image replacement/update",
    "Small UI/design changes",
    "Existing section updates",
    "Contact/enquiry form checking",
    "Basic website health monitoring",
    "Minor bug fixes",
    "Basic mobile responsiveness checks",
    "Broken links/basic functionality checks",
    "Basic technical support",
    "Website backup assistance",
    "Basic security/update checks"
  ];

  const maintenanceExcluded = [
    "New website/page development",
    "Complete website redesign",
    "Major new features",
    "Custom web applications",
    "Major database changes",
    "Third-party paid services",
    "Domain & hosting charges",
    "Premium plugins/themes/licenses",
    "Large content/data entry work"
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-t border-[var(--border-subtle)]" style={{ background: "var(--bg-surface)" }}>
      {/* Premium ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[var(--color-accent)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-soft)] border border-[var(--color-accent-border)] text-[var(--color-accent)] text-sm font-semibold tracking-wide mb-6">
            <Icon name="sparkles" size={14} />
            PRICING
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            High-performance digital solutions tailored to your budget. No hidden fees, just quality engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 items-start">
          {/* Landing Page */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-8 hover:border-[var(--border-strong)] transition-all shadow-sm group">
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">{pricing.landing.title}</h3>
            <p className="text-sm text-[var(--text-muted)] mb-6 h-10">{pricing.landing.subtitle}</p>
            <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-[var(--text-muted)] block mb-1 uppercase tracking-wider">Starting from</span>
              <div className="font-display text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {landingPrice.replace('+', '')}<span className="text-xl text-[var(--text-muted)] font-normal">+</span>
              </div>
            </div>
            <div className="h-[400px] overflow-y-auto pr-2 mb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
              <ul className="space-y-4">
                {pricing.landing.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={12} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed italic">
                {pricing.landing.note}
              </div>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20need%20a%20Landing%20Page." variant="outline" className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)]">
              Inquire Now
            </Button>
          </div>

          {/* New Website */}
          <div className="bg-gradient-to-b from-indigo-950 to-slate-950 border border-indigo-500/30 rounded-[2rem] p-8 md:-mt-4 shadow-2xl shadow-indigo-500/20 relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-indigo-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Most Popular
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 mt-2">{pricing.website.title}</h3>
            <p className="text-sm text-indigo-200/70 mb-6 h-10">{pricing.website.subtitle}</p>
            <div className="mb-6 pb-6 border-b border-indigo-500/20">
              <span className="text-xs font-semibold text-indigo-400 block mb-1 uppercase tracking-wider">Starting from</span>
              <div className="font-display text-5xl font-extrabold text-white tracking-tight">
                {websitePrice.replace('+', '')}<span className="text-2xl text-indigo-300 font-normal">+</span>
              </div>
            </div>
            <div className="h-[400px] overflow-y-auto pr-2 mb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-indigo-500/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/50" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99, 102, 241, 0.3) transparent' }}>
              <ul className="space-y-4">
                {pricing.website.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                      <Icon name="check" size={12} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-indigo-500/20 text-xs text-indigo-300/70 leading-relaxed italic">
                {pricing.website.note}
              </div>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20am%20interested%20in%20the%20New%20Website%20Package." className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20">
              Start Project
            </Button>
          </div>

          {/* Maintenance */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-8 hover:border-[var(--border-strong)] transition-all shadow-sm group">
            <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">{pricing.maintenance.title}</h3>
            <p className="text-sm text-[var(--text-muted)] mb-6 h-10">{pricing.maintenance.subtitle}</p>
            <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-semibold text-[var(--text-muted)] block mb-1 uppercase tracking-wider">Starting from</span>
              <div className="font-display text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {maintenancePrice.replace('/mo', '')}<span className="text-base text-[var(--text-muted)] font-normal">/mo</span>
              </div>
            </div>
            <div className="h-[400px] overflow-y-auto pr-2 mb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
              <ul className="space-y-4 mb-6">
                {pricing.maintenance.included.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={12} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">What&apos;s Not Included</span>
                <ul className="space-y-3">
                  {pricing.maintenance.excluded.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                        <Icon name="close" size={10} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20need%20Website%20Maintenance." variant="outline" className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)]">
              Inquire Now
            </Button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[var(--border-subtle)] max-w-3xl mx-auto">
          <p className="text-[var(--text-secondary)] mb-6">Need a custom web application, ecommerce store, or SEO optimization?</p>
          <Button href="/pricing" size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 font-semibold px-8 py-6 rounded-2xl transition-all hover:-translate-y-0.5">
            <Icon name="layout" size={18} className="mr-2" />
            View Full Fare Breakup &amp; Options
          </Button>
        </div>
      </Container>
    </section>
  );
}
