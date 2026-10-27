import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon, type IconName } from '@/components/ui/Icon';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';

export const metadata: Metadata = {
  title: 'Annual Website Care Plan & Maintenance Retainers',
  description:
    'Protect your investment with the Nexnify Annual Website Care Plan: managed hosting, proactive security updates, daily backups, and monthly speed & WCAG 2.2 accessibility scans.',
  alternates: {
    canonical: 'https://nexnify.in/annual-care-plan',
  },
  openGraph: {
    title: 'Annual Website Care Plan | Nexnify',
    description: 'Managed hosting, automated backups, monthly speed scans, and dedicated developer support.',
    url: 'https://nexnify.in/annual-care-plan',
  },
};

const planFeatures: { title: string; desc: string; icon: IconName }[] = [
  {
    title: 'Managed Edge Cloud Hosting',
    desc: 'High-speed global CDN (Vercel / Cloudflare) with automated SSL renewal, 99.9% uptime SLA, and zero-downtime deployments.',
    icon: 'zap',
  },
  {
    title: 'Daily Automated Backups & Recovery',
    desc: 'Full off-site snapshots of your source code, database, and media assets with 1-click disaster recovery.',
    icon: 'shield',
  },
  {
    title: 'Monthly Speed & Core Web Vitals Scans',
    desc: 'Automated and manual testing of LCP, INP, and CLS scores. We proactively squash code regressions before they hurt Google rankings.',
    icon: 'trending',
  },
  {
    title: 'Monthly WCAG 2.2 Accessibility Audits',
    desc: 'Continuous scanning against WCAG 2.2 AA standards so new content never violates contrast, keyboard focus, or screen-reader rules.',
    icon: 'layout',
  },
  {
    title: 'Core Software & Dependency Updates',
    desc: 'Regular updates to Next.js, React, Node packages, and security patches without breaking custom UI features.',
    icon: 'check',
  },
  {
    title: 'Dedicated Developer Support Retainer',
    desc: 'Direct priority WhatsApp line to a senior engineer for content edits, banner updates, bug fixes, and technical advice.',
    icon: 'message',
  },
];

export default function AnnualCarePlanPage() {
  return (
    <div className="relative">
      {/* ── Section 1: Hero & Pricing Spotlight ── */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[var(--bg-surface-alt)] via-[var(--bg-surface)] to-[var(--bg-surface-alt)]/50 border-b border-[var(--border-subtle)]">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-[350px] h-[250px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Continuous Peace of Mind
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6">
              Nexnify Annual Website <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600">
                Care &amp; Performance Plan
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              A website is never &quot;done.&quot; Without maintenance, plugins get outdated, security vulnerabilities emerge, and page speed degrades. We handle hosting, security, monthly speed scans, and WCAG accessibility audits so you can focus on growing your business.
            </p>
          </div>

          {/* Pricing Spotlight Card */}
          <div className="w-full bg-gradient-to-b from-[#131E38] via-[#0E1528] to-[#0A0F1D] border-2 border-indigo-500/50 rounded-2xl p-5 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
                  All-in-One Retainer
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
                  Comprehensive Annual Care
                </h2>
                <p className="text-xs sm:text-sm text-indigo-200/80 leading-relaxed mb-6">
                  Designed for ambitious businesses that cannot afford downtime, sluggish mobile speeds, or security breaches.
                </p>

                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 block mb-1">Annual Investment</span>
                  <div className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                    Starting from ₹14,999<span className="text-xs sm:text-sm font-normal text-indigo-200/70"> / year</span>
                  </div>
                  <span className="text-xs text-indigo-200/70 mt-1 block">Billed annually &bull; Flexible milestone options available</span>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <WhatsAppCta
                    href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20interested%20in%20the%20Annual%20Website%20Care%20Plan."
                    ctaLocation="annual_care_plan_card"
                    serviceCategory="annual_care_plan"
                    size="md"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 sm:px-8 shadow-lg shadow-indigo-600/40 rounded-xl"
                  >
                    Inquire for Your Website
                  </WhatsAppCta>
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
                  >
                    Audit My Site First &rarr;
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-sm">
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3 sm:mb-4">
                  What&apos;s Included Every Year
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Managed edge hosting &amp; SSL renewal</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Daily automated code &amp; data backups</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Monthly Core Web Vitals speed audits</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Monthly WCAG 2.2 AA accessibility scan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Up to 4 hours of dedicated developer updates/month</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">✓</span>
                    <span>Direct WhatsApp line with senior developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Why Businesses Choose Nexnify Care ── */}
      <section className="py-20 sm:py-28 bg-[var(--bg-surface-alt)] border-b border-[var(--border-subtle)] relative">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
              Zero Headaches &bull; Continuous Protection
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
              Why Businesses Choose Nexnify Care
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)]">
              Traditional web agencies charge hourly emergency rates when something breaks. We monitor your website 24/7 and fix problems before you notice them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {planFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon name={feat.icon} size={20} />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 3: DIY vs. Care Plan Comparison ── */}
      <section className="py-20 sm:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Clear Comparison
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
              DIY vs. Nexnify Care Plan
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Compare unmanaged website hosting with dedicated Nexnify engineering care.
            </p>
          </div>

          <div className="overflow-x-auto border border-[var(--border-subtle)] rounded-2xl bg-[var(--bg-card)] shadow-lg shadow-black/5">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface-alt)]">
                  <th className="p-4 sm:p-5 font-bold text-[var(--text-primary)]">Maintenance Pillar</th>
                  <th className="p-4 sm:p-5 font-bold text-[var(--text-muted)]">Without Care Plan</th>
                  <th className="p-4 sm:p-5 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/5">Nexnify Annual Care</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                <tr className="hover:bg-[var(--bg-surface-alt)]/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[var(--text-primary)]">Speed Monitoring</td>
                  <td className="p-4 sm:p-5 text-[var(--text-muted)]">Only noticed when inquiries drop</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600 dark:text-emerald-400 bg-indigo-500/5">Monthly Core Web Vitals checks &amp; fixes</td>
                </tr>
                <tr className="hover:bg-[var(--bg-surface-alt)]/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[var(--text-primary)]">Accessibility &amp; WCAG</td>
                  <td className="p-4 sm:p-5 text-[var(--text-muted)]">Ignored; legal exposure</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600 dark:text-emerald-400 bg-indigo-500/5">Monthly automated Axe/WCAG 2.2 AA scan</td>
                </tr>
                <tr className="hover:bg-[var(--bg-surface-alt)]/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[var(--text-primary)]">Security &amp; Backups</td>
                  <td className="p-4 sm:p-5 text-[var(--text-muted)]">Manual or missing; high data risk</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600 dark:text-emerald-400 bg-indigo-500/5">Daily encrypted cloud backups &amp; recovery</td>
                </tr>
                <tr className="hover:bg-[var(--bg-surface-alt)]/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[var(--text-primary)]">Emergency Bug Fixes</td>
                  <td className="p-4 sm:p-5 text-[var(--text-muted)]">High hourly rates; slow response</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600 dark:text-emerald-400 bg-indigo-500/5">Included developer hours &amp; priority SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── Section 4: Bottom Callout Banner ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#0A0F1D] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
              Get Started Today
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Protect Your Website with Proactive Engineering
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200/80 mb-8 max-w-lg mx-auto">
              Get an exact quote tailored to your website architecture, traffic, and monthly update requirements.
            </p>
            <WhatsAppCta
              href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20a%20quote%20for%20the%20Annual%20Care%20Plan."
              ctaLocation="annual_care_plan_bottom"
              serviceCategory="annual_care_plan"
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 shadow-lg shadow-indigo-600/30 rounded-xl"
            >
              Request Custom Care Plan Quote &rarr;
            </WhatsAppCta>
          </div>
        </Container>
      </section>
    </div>
  );
}
