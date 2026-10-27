import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industries, cities } from '@/data/industries';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';
import { Button } from '@/components/ui/Button';

interface IndustryCityPageProps {
  params: Promise<{
    industry: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const params: { industry: string; city: string }[] = [];
  for (const industry of Object.keys(industries)) {
    for (const city of Object.keys(cities)) {
      params.push({ industry, city });
    }
  }
  return params;
}

export async function generateMetadata({ params }: IndustryCityPageProps): Promise<Metadata> {
  const { industry: indKey, city: cityKey } = await params;
  const industry = industries[indKey];
  const city = cities[cityKey];

  if (!industry || !city) {
    return { title: 'Page Not Found' };
  }

  const title = `${industry.name} Website Development in ${city.name}`;
  const description = `Premier ${industry.name.toLowerCase()} website development company in ${city.name}, ${city.state}. Fast Next.js architecture, WCAG 2.2 AA accessibility, WhatsApp lead capture & Local SEO.`;

  return {
    title,
    description,
    keywords: [
      `${industry.name} website development in ${city.name}`,
      `web development for ${industry.name} ${city.name}`,
      `${city.name} ${industry.name.toLowerCase()} website design`,
      `custom web developers ${city.name}`,
      `SEO optimized ${industry.name.toLowerCase()} website ${city.name}`,
      `Nexnify ${city.name}`,
    ],
    alternates: {
      canonical: `https://nexnify.in/industries/${indKey}/${cityKey}`,
    },
    openGraph: {
      title: `${title} | Nexnify`,
      description,
      url: `https://nexnify.in/industries/${indKey}/${cityKey}`,
      siteName: 'Nexnify',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Nexnify`,
      description,
    },
  };
}

export default async function IndustryCityPage({ params }: IndustryCityPageProps) {
  const { industry: indKey, city: cityKey } = await params;
  const industry = industries[indKey];
  const city = cities[cityKey];

  if (!industry || !city) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexnify.in/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://nexnify.in/#services' },
      { '@type': 'ListItem', position: 3, name: `${industry.name} in ${city.name}`, item: `https://nexnify.in/industries/${indKey}/${cityKey}` },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': industry.schemaType || 'LocalBusiness',
    name: `Nexnify - ${industry.name} Website Development ${city.name}`,
    description: `Custom website engineering for ${industry.name.toLowerCase()} businesses in ${city.name}, ${city.state}.`,
    url: `https://nexnify.in/industries/${indKey}/${cityKey}`,
    telephone: '+919575450177',
    priceRange: 'Starting from ₹[PLACEHOLDER]',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-muted)]">Industries</span>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-medium">{industry.name} in {city.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {industry.badge} &bull; {city.name}, {city.state}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight max-w-4xl">
            {industry.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600">
              {city.name}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-8">
            {industry.heroSubheadline} Serving businesses across {city.region} with under-2s mobile loading, native WCAG 2.2 AA accessibility, and direct lead generation.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppCta
              href={`https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20am%20looking%20for%20${encodeURIComponent(industry.name)}%20website%20development%20in%20${encodeURIComponent(city.name)}.`}
              ctaLocation={`industry_${indKey}_${cityKey}_hero`}
              serviceCategory={indKey}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30 px-7"
            >
              Discuss Your {industry.name} Project
            </WhatsAppCta>
            <Link
              href="/free-website-audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-sm font-semibold transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Claim Free Website Audit &rarr;
            </Link>
          </div>
        </div>

        {/* Local Area Coverage Badge */}
        <div className="mb-16 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Local Commercial Coverage in {city.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {city.landmarks.map((landmark, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-secondary)]"
              >
                📍 {landmark}
              </span>
            ))}
          </div>
        </div>

        {/* Pain Points vs Nexnify Solution */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
              Common Challenges We Solve for {city.name} {industry.name} Brands
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              Most generic agency templates cost thousands without generating qualified leads. Here is how we engineer measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-indigo-500/40 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-sm mb-4">
                    ✕
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
              Engineered Deliverables for {industry.name}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              Every deliverable is purpose-built for speed, conversion rate optimization, and search dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Teaser Banner */}
        <div className="mb-20 rounded-3xl bg-gradient-to-br from-[#131E38] via-[#0E1528] to-[#0A0F1D] border border-indigo-500/40 p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
                Transparent &bull; No Hidden Agency Margins
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
                Starting from ₹[PLACEHOLDER] for {industry.name} Solutions
              </h2>
              <p className="text-sm sm:text-base text-indigo-200/90 leading-relaxed mb-6">
                Unlike competitors who hide prices behind endless sales calls, we provide transparent milestone-based scopes with 100% source code ownership and zero monthly lock-in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/pricing"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30"
                >
                  View All 3 Package Scopes &rarr;
                </Button>
                <WhatsAppCta
                  href={`https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(industry.name)}%20in%20${encodeURIComponent(city.name)}.`}
                  ctaLocation={`industry_${indKey}_${cityKey}_pricing_box`}
                  serviceCategory={indKey}
                  variant="outline"
                  className="border-indigo-400 text-white hover:bg-indigo-500/20 font-semibold"
                >
                  Inquire on WhatsApp
                </WhatsAppCta>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">
                Included Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {industry.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] text-center mb-8">
            Frequently Asked Questions ({city.name} {industry.name})
          </h2>
          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
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

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto pt-8 border-t border-[var(--border-subtle)]">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Build a Fast, High-Converting Website in {city.name}?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Get in touch directly with our senior engineering team. No salespeople, no delays.
          </p>
          <WhatsAppCta
            href={`https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20let's%20discuss%20a%20project%20in%20${encodeURIComponent(city.name)}.`}
            ctaLocation={`industry_${indKey}_${cityKey}_bottom`}
            serviceCategory={indKey}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 shadow-lg shadow-indigo-600/30"
          >
            Start Your Project on WhatsApp
          </WhatsAppCta>
        </div>
      </Container>
    </div>
  );
}
