import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';
export function MiniPricing() {
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

        <div className="flex md:hidden items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-4 font-medium">
          <Icon name="arrowRight" size={14} className="text-indigo-500 animate-pulse" />
          <span>Swipe cards horizontally to compare plans</span>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* 1. Static Business Website */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 md:shrink snap-center bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-7 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-3">
                Static &bull; SEO First
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">Static Website</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-5 leading-relaxed">Fast Next.js static site for clinics, consultants &amp; local businesses.</p>
              
              <div className="mb-5 pb-5 border-b border-[var(--border-subtle)]">
                <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Starting from ₹14,999
                </div>
                <span className="text-xs text-[var(--text-muted)] mt-1 block">Transparent milestone scope &bull; Zero lock-in</span>
              </div>

              <div className="h-[320px] sm:h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Included Features</span>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Up to 5 custom-designed pages</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>100/100 Mobile PageSpeed target</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>WCAG 2.2 AA accessibility built-in</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Local SEO &amp; Schema.org setup</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Direct WhatsApp &amp; lead capture</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Free SSL &amp; edge deployment</span>
                  </li>
                </ul>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20discuss%20a%20Static%20Website%20project."
              ctaLocation="home_mini_pricing_static"
              serviceCategory="static_website"
              variant="outline"
              size="md"
              className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)] font-semibold text-xs sm:text-sm"
            >
              Inquire for Static Site
            </WhatsAppCta>
          </div>

          {/* Dynamic Web App - Flagship / Most Popular */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 md:shrink snap-center bg-gradient-to-b from-[#131E38] via-[#0E1528] to-[#0A0F1D] border-2 border-indigo-500/60 rounded-2xl p-5 sm:p-7 md:-mt-4 shadow-2xl shadow-indigo-950/60 relative group flex flex-col justify-between text-white">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-[0_0_25px_rgba(99,102,241,0.6)] border border-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Most Popular Choice
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-3 mt-1">
                Dynamic &amp; Interactive
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Dynamic Web Application</h3>
              <p className="text-xs sm:text-sm text-indigo-200/80 mb-5 leading-relaxed">
                Full-stack web applications with authentication, dashboards, APIs &amp; database backend.
              </p>

              <div className="mb-5 pb-5 border-b border-indigo-500/20">
                <span className="text-[10px] font-bold text-indigo-300 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Starting from ₹34,999
                </div>
                <span className="text-xs text-indigo-200/70 mt-1 block">Full-stack Next.js, API &amp; database backend</span>
              </div>

              <div className="h-[320px] sm:h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-indigo-500/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/50" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99, 102, 241, 0.3) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-300/90 mb-4">Included Features</span>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Custom Next.js App Router architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Custom CMS or Admin Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Authentication, RBAC &amp; user profiles</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Database integration (PostgreSQL / MongoDB)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>WCAG 2.2 AA compliant UI components</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-indigo-300">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Automated email &amp; webhook integrations</span>
                  </li>
                </ul>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20a%20Dynamic%20Web%20Application%20project."
              ctaLocation="home_mini_pricing_dynamic"
              serviceCategory="dynamic_webapp"
              size="md"
              className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 font-bold py-3 text-xs sm:text-sm"
            >
              Discuss Dynamic App
            </WhatsAppCta>
          </div>

          {/* E-Commerce Store */}
          <div className="w-[86vw] max-w-[340px] sm:max-w-none sm:w-auto shrink-0 md:shrink snap-center bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-7 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                High-Conversion Sales
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">E-Commerce Store</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-5 leading-relaxed">
                Storefront with native Razorpay/Cashfree checkout, product filters, cart &amp; tracking.
              </p>

              <div className="mb-5 pb-5 border-b border-[var(--border-subtle)]">
                <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 block mb-1 uppercase tracking-wider">Starting Investment</span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Starting from ₹49,999
                </div>
                <span className="text-xs text-[var(--text-muted)] mt-1 block">Custom storefront + payment gateway setup</span>
              </div>

              <div className="h-[320px] sm:h-[360px] overflow-y-auto pr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--text-muted)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-strong) transparent' }}>
                <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Included Features</span>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Custom catalog, category &amp; filter system</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Payment gateway (Razorpay / Cashfree / Stripe)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Cart, checkout &amp; automated order tracking</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Admin inventory &amp; order management</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Abandoned cart &amp; WhatsApp checkout alerts</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <Icon name="check" size={11} />
                    </span>
                    <span>Product schema for Google Shopping SEO</span>
                  </li>
                </ul>
              </div>
            </div>

            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20discuss%20an%20E-Commerce%20Store%20project."
              ctaLocation="home_mini_pricing_ecommerce"
              serviceCategory="ecommerce_store"
              variant="outline"
              size="md"
              className="w-full justify-center border-[var(--border-strong)] group-hover:bg-[var(--bg-surface-alt)] font-semibold text-xs sm:text-sm"
            >
              Inquire for E-Commerce
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
