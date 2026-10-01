import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import siteContent from '@/lib/content';

export function PricingSection() {
  const { pricing } = siteContent;


  const addOns = [
    { name: "Extra Website Page", price: "₹499+" },
    { name: "WhatsApp Integration", price: "₹499+" },
    { name: "Contact / Lead Form", price: "₹499+" },
    { name: "Google Analytics Setup", price: "₹499+" },
    { name: "Google Search Console", price: "₹499+" },
    { name: "Basic SEO Setup", price: "₹999+" },
    { name: "Speed Optimization", price: "₹999+" },
    { name: "Deployment Assistance", price: "₹499+" },
    { name: "Additional Custom Feature", price: "Contact for quote" }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium tracking-wide mb-6">
            <Icon name="sparkles" size={14} />
            PRICING & SERVICES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="font-body text-lg text-slate-300 leading-relaxed">
            Flexible website solutions for businesses, startups and growing brands. Choose what you need and build only what your business requires.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Card: New Website */}
          <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8 bg-slate-900/80 border-2 border-indigo-500 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-indigo-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6">
              <span className="flex items-center gap-1.5 bg-indigo-500 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Primary Service
              </span>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{pricing.website.title.toUpperCase()}</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-md">{pricing.website.subtitle}</p>
              <div className="mb-8">
                <span className="text-sm font-medium text-slate-400 block mb-1">Starting from</span>
                <div className="font-display text-5xl font-extrabold text-white">
                  {pricing.website.price.replace('+', '')}<span className="text-indigo-400">+</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20am%20interested%20in%20your%20New%20Website%20package." size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20">
                  Discuss Your Project
                </Button>
                <Button href="/blog/cost-of-building-a-website-in-india-2026" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                  View Detailed Pricing Guide
                </Button>
              </div>
            </div>

            <div className="lg:border-l lg:border-slate-800 lg:pl-10">
              <h4 className="font-semibold text-white mb-6">What's included:</h4>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {pricing.website.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Existing Website Redesign */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/80 transition-all">
            <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.redesign.title.toUpperCase()}</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{pricing.redesign.subtitle}</p>
            <div className="mb-8">
              <span className="text-xs font-medium text-slate-500 block mb-1">Starting from</span>
              <div className="font-display text-3xl font-bold text-white">
                {pricing.redesign.price.replace('+', '')}<span className="text-slate-500">+</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing.redesign.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="check" size={16} className="text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Enhancement */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/80 transition-all">
            <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.enhancement.title.toUpperCase()}</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{pricing.enhancement.subtitle}</p>
            <div className="mb-8">
              <span className="text-xs font-medium text-slate-500 block mb-1">Starting from</span>
              <div className="font-display text-3xl font-bold text-white">
                {pricing.enhancement.price.replace('+', '')}<span className="text-slate-500">+</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing.enhancement.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="check" size={16} className="text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Modification */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/80 transition-all">
            <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.modification.title.toUpperCase()}</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{pricing.modification.subtitle}</p>
            <div className="mb-8">
              <span className="text-xs font-medium text-slate-500 block mb-1">Starting from</span>
              <div className="font-display text-3xl font-bold text-white">
                {pricing.modification.price.replace('+', '')}<span className="text-slate-500">+</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing.modification.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="check" size={16} className="text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Maintenance & Add-ons Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Maintenance Card */}
          <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-2">{pricing.maintenance.title.toUpperCase()}</h3>
            <p className="text-slate-400 text-sm mb-6">{pricing.maintenance.subtitle}</p>
            <div className="mb-6">
              <span className="text-xs font-medium text-slate-500 block mb-1">Starting from</span>
              <div className="font-display text-3xl font-bold text-white">
                {pricing.maintenance.price.replace('/mo', '')}<span className="text-slate-500 text-lg">/month+</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {pricing.maintenance.included.slice(0, 6).map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="check" size={16} className="text-slate-600 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 italic border-t border-slate-800 pt-4">
              *Maintenance pricing starts at ₹899/month and can increase depending on the website size, technology and required support.
            </p>
          </div>

          {/* Add-ons Section */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800 rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Icon name="plus" size={20} className="text-indigo-400" />
              Optional Add-ons
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {addOns.map((addon, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-slate-300 text-sm">{addon.name}</span>
                  <span className="text-indigo-300 font-semibold text-sm">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Important Notes */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-bold text-slate-200 mb-2 text-sm uppercase tracking-wider">Important Pricing Note</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prices shown are starting prices. Final pricing depends on the website type, number of pages, features, integrations, content requirements and overall project scope.
            </p>
          </div>
          
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h4 className="font-bold text-amber-500 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              Hosting & Domain
            </h4>
            <p className="text-amber-200/70 text-sm leading-relaxed mb-3">
              Domain name and hosting are <strong>NOT included</strong> in the above prices. The domain and hosting account will remain under the client’s ownership. We can assist with purchasing, configuration and deployment if required.
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              Third-party services, premium plugins, paid themes, APIs, hosting, domains and other external services are billed separately where applicable.
            </p>
          </div>
        </div>

        {/* Client CTA */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Not sure which option is right for you?</h3>
          <p className="text-indigo-200/80 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we’ll recommend the most suitable solution based on your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/919575450177?text=Hi%20Nivora%20Tech,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20website%20project." size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20">
              <Icon name="whatsapp" size={18} className="mr-2" />
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
              Discuss Your Project
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}
