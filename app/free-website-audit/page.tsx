import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon, type IconName } from '@/components/ui/Icon';
import { AuditForm } from '@/components/audit/AuditForm';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';

export const metadata: Metadata = {
  title: 'Free 15-Point Technical Website Audit (Speed & SEO)',
  description:
    'Claim a free 15-point technical website audit by Nexnify engineers. We inspect Mobile PageSpeed, Core Web Vitals, WCAG 2.2 AA accessibility, and Schema.org markup.',
  alternates: {
    canonical: 'https://nexnify.in/free-website-audit',
  },
  openGraph: {
    title: 'Free Technical Website Audit | Nexnify',
    description: 'Manual 15-point inspection of your website speed, accessibility, and Google SEO ranking factors.',
    url: 'https://nexnify.in/free-website-audit',
  },
};

const auditChecklist: { category: string; icon: IconName; items: string[] }[] = [
  {
    category: '1. Mobile Speed & Core Web Vitals',
    icon: 'zap',
    items: [
      'Largest Contentful Paint (LCP) test on real 4G/5G mobile networks',
      'Interaction to Next Paint (INP) responsiveness score',
      'Cumulative Layout Shift (CLS) visual stability check',
      'Unused CSS & third-party JavaScript bloat identification',
    ],
  },
  {
    category: '2. WCAG 2.2 AA Accessibility',
    icon: 'layout',
    items: [
      'Color contrast verification (4.5:1 text, 3:1 interactive controls)',
      'Full keyboard navigation operability and focus-visible indicators',
      'Pinch-to-zoom unrestricted viewport compliance (no user-scalable=no)',
      'Screen-reader compatibility for alt tags and ARIA markup',
    ],
  },
  {
    category: '3. Technical Search Engine Optimization',
    icon: 'trending',
    items: [
      'Single <h1> tag hierarchy and meta title/description audit',
      'LocalBusiness / Organization / FAQ JSON-LD Schema implementation',
      'Canonical tag validation to eliminate duplicate indexation',
      'XML sitemap and robots.txt health inspection',
    ],
  },
  {
    category: '4. Conversion & Trust Architecture',
    icon: 'shield',
    items: [
      'Above-the-fold value proposition clarity and CTA visibility',
      'Direct WhatsApp and lead-capture form usability on mobile',
      'SSL/TLS certificate security and modern asset formats (AVIF/WebP)',
      'Review of mobile conversion friction points causing drop-offs',
    ],
  },
];

const faqs = [
  {
    q: 'Is this website audit genuinely 100% free?',
    a: 'Yes, 100% free with zero obligation. We run automated Core Web Vitals scans and have a senior web developer manually review your page source code to give you actionable findings.',
  },
  {
    q: 'How long does it take to receive the audit report?',
    a: 'We deliver your audit report within 24 business hours directly to your email and WhatsApp with prioritized high, medium, and low impact recommendations.',
  },
  {
    q: 'How is this different from running a free tool like PageSpeed Insights myself?',
    a: 'PageSpeed Insights only shows raw synthetic scores without explaining why your scripts are blocking or how to fix them in your specific CMS/framework. We diagnose the exact code culprits (heavy plugins, unoptimized fonts, missing schema, contrast fails) and provide clear engineering steps.',
  },
  {
    q: 'Will you try to sell me a complete redesign?',
    a: 'No. If your current website only needs quick performance optimizations, caching, or accessibility fixes, we will tell you honestly. You can implement the fixes yourself or engage our team for implementation.',
  },
];

export default function FreeWebsiteAuditPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-medium">Free Website Audit</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Comprehensive Technical Review
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
              Get a Free 15-Point <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600">
                Speed, WCAG &amp; SEO Audit
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              Most agencies give you an auto-generated PDF from a free online scanner. Nexnify engineers manually inspect your source code: <strong>real mobile Core Web Vitals, native WCAG 2.2 AA accessibility, schema markup</strong>, and lead conversion leaks.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-display">15</div>
                <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">Key Code Factors</div>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <div className="text-2xl font-extrabold text-emerald-500 font-display">24h</div>
                <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">Turnaround Time</div>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-[var(--text-primary)] font-display">₹0</div>
                <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">Zero Obligation</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-indigo-100 text-xs sm:text-sm leading-relaxed">
              <strong>Why audit now?</strong> Google now penalizes slow mobile pages through the INP (Interaction to Next Paint) Core Web Vital metric. Fixing performance and native WCAG compliance directly doubles inbound mobile conversions.
            </div>
          </div>

          <div className="lg:col-span-5">
            <AuditForm />
          </div>
        </div>

        {/* 15-Point Breakdown */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
              What We Check in Your Audit
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Every audit report includes concrete before-and-after recommendations prioritized by technical impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditChecklist.map((section, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 hover:border-indigo-500/40 transition-all shadow-sm"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Icon name={section.icon} size={18} />
                  </span>
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Contrast Callout */}
        <div className="mb-20 rounded-2xl bg-gradient-to-br from-[#131E38] via-[#0E1528] to-[#0A0F1D] border border-indigo-500/30 p-5 sm:p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-2">
              The Nexnify Technical Advantage
            </span>
            <h2 className="font-display text-xl sm:text-3xl font-extrabold mb-3">
              Real Code Fixes &gt; JavaScript Overlay Widgets
            </h2>
            <p className="text-xs sm:text-base text-indigo-200/90 leading-relaxed mb-6">
              Platforms like EqualWeb charge monthly subscriptions to inject a JavaScript widget that slows down page speed and fails to fix underlying source code flaws. Traditional agencies like SEOToWebDesign hide prices and block mobile zoom. Nexnify builds native, lightning-fast Next.js code with permanent WCAG 2.2 compliance and 100% client code ownership.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all"
              >
                View Transparent Pricing Plans &rarr;
              </Link>
              <WhatsAppCta
                href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20want%20to%20discuss%20improving%20my%20website%20speed."
                ctaLocation="audit_page_banner"
                serviceCategory="website_audit"
                size="md"
                variant="outline"
                className="border-indigo-400 text-white hover:bg-indigo-500/20 font-semibold text-xs sm:text-sm rounded-xl"
              >
                Inquire on WhatsApp
              </WhatsAppCta>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
