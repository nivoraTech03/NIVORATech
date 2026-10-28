import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";
import { Icon } from "@/components/ui/Icon";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export const metadata: Metadata = {
  title: "Web Development Guides & Digital Insights",
  description:
    "Explore actionable guides, realistic website development costs in India, technology comparisons, and practical digital growth advice from Nexnify.",
  alternates: {
    canonical: "https://nexnify.in/blog",
  },
  openGraph: {
    title: "Web Development Guides & Digital Insights | Nexnify",
    description:
      "Explore actionable guides, realistic website development costs in India, technology comparisons, and practical digital growth advice from Nexnify.",
    url: "https://nexnify.in/blog",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Guides & Digital Insights | Nexnify",
    description:
      "Actionable web development guides, cost estimates, and technology insights from Nexnify.",
  },
};

export default function BlogHubPage() {
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
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nexnify Guides & Insights",
    url: "https://nexnify.in/blog",
    description:
      "Practical website development guides, Indian market cost breakdowns, and digital architecture advice.",
    publisher: {
      "@type": "Organization",
      name: "Nexnify",
      url: "https://nexnify.in/",
    },
  };

  const articles = [
    {
      slug: "accessibility-widget-vs-real-fix",
      title: "Why Accessibility Widgets Can't Fix Bad Code: Overlays vs. Native WCAG 2.2 AA",
      description:
        "An in-depth technical analysis of why accessibility overlay widgets fail to deliver true WCAG compliance, hurt Core Web Vitals, and how to fix accessibility in the source code.",
      category: "WCAG & Compliance",
      readTime: "11 min read",
      date: "February 2026",
      featured: true,
    },
    {
      slug: "website-development-cost-india",
      title: "Website Development Cost in India: A Practical Pricing Guide (2026)",
      description:
        "Honest, comprehensive breakdown of website development cost in India for 2026. Compare static websites from ₹4,999, dynamic web apps, WordPress builds, and e-commerce stores.",
      category: "Pricing & Budgeting",
      readTime: "14 min read",
      date: "Updated October 2026",
      featured: true,
    },
    {
      slug: "cost-of-building-a-website-in-india-2026",
      title: "Cost of Building a Business Website in India (2026 Practical Guide)",
      description:
        "A transparent breakdown of website design costs, freelance rates, agency pricing, and custom Next.js vs template platform expenses for Indian startups and businesses.",
      category: "Pricing & Budgeting",
      readTime: "6 min read",
      date: "October 2026",
      featured: false,
    },
    {
      slug: "nextjs-vs-wordpress-for-business-websites",
      title: "Next.js vs WordPress for Business Websites: Choosing the Right Engine in 2026",
      description:
        "An objective architectural comparison of Next.js and WordPress. Compare Core Web Vitals, security risks, plugin maintenance, and conversion advantages.",
      category: "Tech Stack & Architecture",
      readTime: "7 min read",
      date: "October 2026",
      featured: false,
    },
    {
      slug: "website-redesign-checklist",
      title: "Website Redesign Checklist: 10 Critical Steps Before Relaunching in 2026",
      description:
        "Avoid post-launch traffic drops and 404 errors. Follow this step-by-step pre- and post-launch checklist for redesigning your business website safely.",
      category: "SEO & Growth",
      readTime: "5 min read",
      date: "October 2026",
      featured: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <PageBanner
        badge="KNOWLEDGE BASE &amp; GUIDES"
        title="Web Development Insights &amp; Guides"
        description="Clear, honest guides on website development costs, modern tech stacks, and digital strategy for businesses in Delhi NCR and across India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides & Insights" },
        ]}
      />

      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
                Featured Industry Guide
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Our latest research and pricing analysis to help business owners make informed digital investments.
              </p>
            </div>

            <div className="space-y-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-10 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-[var(--color-accent-border)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-bold uppercase tracking-wider text-[11px]">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[10px] border border-emerald-400/30">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-[var(--text-muted)] font-mono">
                      {article.readTime} · {article.date}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                    {article.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                    >
                      <span>Read Complete Guide</span>
                      <Icon name="arrowUpRight" size={16} />
                    </Link>
                    <span className="text-xs text-[var(--text-muted)]">
                      By Nexnify Engineering Team
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Upcoming Editorial Roadmaps */}
            <div className="mt-16 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                More Guides Coming Soon
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                We are actively writing technical and commercial resources for business founders. Upcoming topics include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  <span>Next.js vs WordPress: Choosing the Right Engine in 2026</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  <span>Core Web Vitals Guide for Delhi NCR Local Businesses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  <span>How to Plan a Custom Web App MVP with Zero Waste</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  <span>Website Redesign Checklist: Retaining SEO &amp; Traffic</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ProjectCtaBanner />
    </>
  );
}
