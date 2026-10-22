import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'Website Development Plans & Pricing | Nexnify',
  description: 'Explore tailored website plans, custom Next.js builds, website redesigns, and maintenance services by Nexnify. Free technical consultation & transparent custom quotes.',
  alternates: {
    canonical: 'https://nexnify.in/pricing',
  },
  openGraph: {
    title: 'Website Development Plans & Pricing | Nexnify',
    description: 'Explore tailored website plans, custom Next.js builds, website redesigns, and maintenance services. Free consultation & transparent custom quotes.',
    url: 'https://nexnify.in/pricing',
    siteName: 'Nexnify',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Plans & Pricing | Nexnify',
    description: 'Tailored website plans, custom Next.js builds, and maintenance services. Transparent pricing by Nexnify.',
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
      name: "Pricing",
      item: "https://nexnify.in/pricing",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageBanner
        badge="PLANS &amp; TAILORED SOLUTIONS"
        title="Tailored Plans &amp; Custom Solutions"
        description="Flexible web engineering solutions for ambitious businesses, startups, and luxury brands. Transparent scoping with zero hidden agency costs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing & Plans" },
        ]}
      />
      <PricingSection />
    </>
  );
}
