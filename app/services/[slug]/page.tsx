import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service Not Found | Nexnify" };
  }

  const canonicalUrl = `https://nexnify.in/services/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: "Nexnify",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/images/auralux.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} - Nexnify`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/images/auralux.webp"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const relatedProject = service.relatedProjectSlug
    ? siteContent.projects.find((p) => p.slug === service.relatedProjectSlug)
    : null;

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
        name: "Services",
        item: "https://nexnify.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://nexnify.in/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Nexnify",
      url: "https://nexnify.in/",
      logo: "https://nexnify.in/icon.png",
      telephone: "+91-9575450177",
      email: "nexnifytech@gmail.com",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Delhi NCR, India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.deliverables.map((item, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
        position: index + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const whatsappText = encodeURIComponent(
    `Hi Nexnify, I am interested in ${service.title} for my business. Could you share details and a timeline?`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageBanner
        badge={service.heroBadge}
        title={service.h1}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Main Service Narrative & Highlights */}
      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="space-y-10 lg:col-span-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  Service Overview
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  Engineered with intention, built for real business growth.
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                  {service.overview}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Icon name="check" size={18} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    Who Is This Service For?
                  </h3>
                </div>
                <ul className="space-y-3 pt-2">
                  {service.targetAudience.map((aud, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                        ✓
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {aud}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  What You Get
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
                  Key Deliverables Included
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <Icon name="check" size={12} />
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] leading-snug">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process Steps */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  Our Engineering Methodology
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
                  How We Deliver Your Project
                </h3>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col sm:flex-row gap-4 items-start"
                    >
                      <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-600 text-white shrink-0">
                        STEP {step.step}
                      </span>
                      <div>
                        <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Quick Action & Related Project */}
            <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-28">
              {/* Consultation & WhatsApp Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-indigo-200 dark:border-indigo-500/25 bg-gradient-to-br from-indigo-50/50 via-white dark:via-slate-900 to-indigo-100/30 dark:to-slate-950 shadow-xl space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for New Projects
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Ready to discuss your {service.title}?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Connect directly with our lead developer for honest architectural guidance, scope estimation, and confirmed timelines.
                </p>

                <div className="space-y-3 pt-2">
                  <Button href="/contact" size="lg" className="w-full justify-center">
                    <span>Request a Custom Quote</span>
                    <Icon name="arrowRight" size={16} className="ml-2" />
                  </Button>
                  <a
                    href={`https://wa.me/919575450177?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>WhatsApp Chat (+91 95754 50177)</span>
                  </a>
                </div>

                {/* Technologies Badge Cloud */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Core Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-[11px] font-medium text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Real Case Study */}
              {relatedProject && (
                <div className="p-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Featured Case Study
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">Verified Work</span>
                  </div>

                  {relatedProject.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-950">
                        <Image
                          src={relatedProject.image}
                          alt={`${relatedProject.title} by Nexnify`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                    </div>
                  )}

                  <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                    {relatedProject.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                    {relatedProject.description}
                  </p>

                  <Link
                    href={`/work/${relatedProject.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-1"
                  >
                    <span>Read Complete Case Study</span>
                    <Icon name="arrowRight" size={12} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Service-Specific FAQs */}
          <div className="mt-20 pt-16 border-t border-[var(--border-subtle)]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                Questions &amp; Answers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Frequently Asked Questions about {service.title}
              </h3>
            </div>
            <div className="max-w-3xl mx-auto">
              <FaqAccordion
                items={service.faqs.map((faq, idx) => ({
                  id: `faq-${idx}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
          </div>

          {/* Related Services Links */}
          <div className="mt-20 pt-12 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                Explore Other Services
              </h3>
              <Link
                href="/services"
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View all services &rarr;
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(servicesData)
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-indigo-500/50 hover:shadow-lg transition-all group"
                  >
                    <h4 className="font-display text-base font-bold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {s.title}
                    </h4>
                    <p className="mt-1 text-xs text-[var(--text-secondary)] line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <ProjectCtaBanner />
    </>
  );
}
