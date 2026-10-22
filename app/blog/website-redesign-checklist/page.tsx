import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Website Redesign Checklist: 10 Critical Steps (2026 Guide)",
  description:
    "A step-by-step website redesign checklist to revamp your site without losing SEO rankings, organic traffic, or existing client leads in 2026.",
  alternates: {
    canonical: "https://nexnify.in/blog/website-redesign-checklist",
  },
  openGraph: {
    title: "Website Redesign Checklist: 10 Critical Steps for 2026 | Nexnify",
    description:
      "Avoid post-launch traffic drops. Follow this comprehensive pre- and post-launch checklist for redesigning your business website safely.",
    url: "https://nexnify.in/blog/website-redesign-checklist",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-10-18T00:00:00.000Z",
    modifiedTime: "2026-10-18T00:00:00.000Z",
    authors: ["Nexnify"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign Checklist: 10 Critical Steps (2026 Guide)",
    description:
      "A complete guide to redesigning your website without dropping Google rankings or losing lead conversions.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nexnify.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog & Guides",
      item: "https://nexnify.in/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Website Redesign Checklist",
      item: "https://nexnify.in/blog/website-redesign-checklist",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://nexnify.in/blog/website-redesign-checklist",
  },
  headline: "Website Redesign Checklist: 10 Critical Steps Before Relaunching in 2026",
  description:
    "A step-by-step website redesign checklist to revamp your site without losing SEO rankings, organic traffic, or existing client leads in 2026.",
  author: {
    "@type": "Organization",
    name: "Nexnify",
    url: "https://nexnify.in/",
  },
  publisher: {
    "@type": "Organization",
    name: "Nexnify",
    url: "https://nexnify.in/",
    logo: {
      "@type": "ImageObject",
      url: "https://nexnify.in/icon.png",
    },
  },
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do websites lose traffic after a redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "The most common reasons are missing 301 redirects, altered URL paths without redirects, accidental noindex tags left in production, broken internal links, and deleted high-ranking content pages. Following a structured checklist prevents these issues.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical website redesign take?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "A standard 5–10 page corporate website redesign typically takes 2 to 3 weeks including UI design, development, and SEO migration. Larger custom applications or e-commerce sites take 4 to 8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Will my Google rankings improve immediately after a redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Search engines typically take 1 to 3 weeks to recrawl and reindex the updated architecture. When mobile responsiveness, Core Web Vitals, and structured data are properly implemented, organic rankings and conversion rates improve steadily.",
      },
    },
  ],
};

const CHECKLIST_STEPS = [
  {
    num: "01",
    phase: "Pre-Launch Audit",
    title: "Crawl and Inventory Every Existing URL",
    desc: "Export every indexable URL from your existing site, Google Search Console, and analytics. Identify your top 20% traffic-generating URLs so their content and keywords are preserved verbatim.",
  },
  {
    num: "02",
    phase: "SEO Architecture",
    title: "Build a Strict 1-to-1 301 Permanent Redirect Map",
    desc: "If any URL structure changes, map the old URL to the most relevant new page using server-level 301 redirects. Never redirect all old pages to the homepage — that causes soft-404 penalties.",
  },
  {
    num: "03",
    phase: "Performance Benchmark",
    title: "Benchmark Baseline Speed and Core Web Vitals",
    desc: "Record existing Mobile Lighthouse and CWV scores. The new design must achieve equal or superior LCP (< 2.5s) and CLS (< 0.1) before going live.",
  },
  {
    num: "04",
    phase: "Conversion UX",
    title: "Optimize Lead Generation & WhatsApp Funnels",
    desc: "Audit forms and CTAs. Remove unnecessary input fields, add direct WhatsApp enquiry links with pre-filled context, and ensure buttons are easily clickable on touchscreens.",
  },
  {
    num: "05",
    phase: "Metadata Audit",
    title: "Verify Title Tags, Meta Descriptions & Canonical URLs",
    desc: "Ensure every page has a unique, descriptive H1, compelling meta description, and an absolute canonical tag pointing to https://nexnify.in/ to prevent duplicate content issues.",
  },
  {
    num: "06",
    phase: "Schema Validation",
    title: "Implement Valid JSON-LD Structured Data",
    desc: "Inject relevant Organization, WebSite, BreadcrumbList, and Service schema without inventing reviews, ratings, or fake aggregate scores.",
  },
  {
    num: "07",
    phase: "Analytics Verification",
    title: "Set Up GA4 and Custom Event Tracking",
    desc: "Instrument custom tracking for WhatsApp clicks, contact form submissions, and pricing CTA clicks before launching to avoid blind spots in your conversion data.",
  },
  {
    num: "08",
    phase: "Security & Crawling",
    title: "Verify robots.txt, sitemap.xml & Remove noindex",
    desc: "Double-check that staging `noindex, nofollow` headers are removed in production. Ensure robots.txt allows crawling of critical pages and links directly to sitemap.xml.",
  },
  {
    num: "09",
    phase: "Deployment Cutover",
    title: "Perform Zero-Downtime DNS Cutover with SSL",
    desc: "Update DNS A/CNAME records with short TTL values (300s) during transition. Verify that both www and non-www versions resolve properly with valid HTTPS certificates.",
  },
  {
    num: "10",
    phase: "Post-Launch Monitoring",
    title: "Monitor 404 Logs & Resubmit Sitemaps in GSC",
    desc: "Immediately after launch, submit the new sitemap to Google Search Console and monitor server logs for 404 errors for 14 days to catch any unexpected broken links.",
  },
];

export default function WebsiteRedesignChecklistPage() {
  const whatsappMsg =
    "Hi Nexnify, I am planning a website redesign and would like a consultation on preserving my SEO.";
  const whatsappLink = `https://wa.me/919575450177?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-slate-950 pb-20 pt-32 lg:pt-40 text-slate-300">
        <Container>
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 mb-6 font-medium"
            >
              <Link href="/" className="hover:text-indigo-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/blog" className="hover:text-indigo-400 transition-colors">
                Blog &amp; Guides
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
                Redesign Checklist
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span>SEO &amp; Growth Blueprint</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Website Redesign Checklist:{" "}
              <span className="text-indigo-400">10 Critical Steps for 2026</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed max-w-2xl mx-auto">
              A website redesign should grow your business, not destroy your search engine rankings. Follow this step-by-step checklist to modernize your UI while protecting existing organic traffic and client enquiries.
            </p>
          </header>

          {/* Checklist Grid */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {CHECKLIST_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-indigo-500/40 hover:bg-slate-900/90"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 font-mono font-bold text-lg border border-indigo-500/20">
                      {step.num}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <span>{step.phase}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {step.title}
                      </h2>
                      <p className="text-sm text-slate-400 leading-relaxed pt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Advice Banner */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                <span>⚠️</span> The #1 Mistake in Website Redesigns
              </h3>
              <p className="text-sm text-amber-200/90 leading-relaxed">
                Many businesses hire a visual designer who launches a redesign without auditing existing URL structures. When Google finds that hundreds of established URLs now return 404 errors, all keyword rankings and domain authority are lost. Always pair UI redesign with technical SEO migration.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/website-maintenance-redesign"
                  className="text-xs font-bold text-amber-300 hover:text-white underline inline-flex items-center gap-1"
                >
                  <span>Learn about our SEO-safe website redesign services</span>
                  <Icon name="arrowRight" size={12} />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Why do websites lose traffic after a redesign?</h3>
                <p className="text-slate-400 text-sm">
                  The most common reasons are missing 301 redirects, altered URL paths, accidental noindex tags left in production, broken internal links, and deleted high-ranking content pages. Following a structured checklist prevents these issues.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">How long does a typical website redesign take?</h3>
                <p className="text-slate-400 text-sm">
                  A standard 5–10 page corporate website redesign typically takes 2 to 3 weeks including UI design, development, and SEO migration. Larger custom applications or e-commerce sites take 4 to 8 weeks.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Will my Google rankings improve immediately after a redesign?</h3>
                <p className="text-slate-400 text-sm">
                  Search engines typically take 1 to 3 weeks to recrawl and reindex the updated architecture. When mobile responsiveness, Core Web Vitals, and structured data are properly implemented, organic rankings and conversion rates improve steadily.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Planning a website revamp?
                </h2>
                <p className="text-indigo-100 max-w-xl mx-auto text-sm sm:text-base">
                  Let Nexnify execute your website redesign with zero SEO disruption, sub-second speed, and high-converting modern layouts.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    href={whatsappLink}
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-xl shadow-[#25D366]/30 border-none"
                  >
                    <Icon name="whatsapp" size={18} className="mr-2" />
                    Discuss Redesign on WhatsApp
                  </Button>
                  <Button
                    href="/pricing"
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-sm"
                  >
                    View Redesign Pricing
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
