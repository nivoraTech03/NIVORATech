import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'Website Plans & Tailored Solutions | NEXNIFY Tech',
  description: 'Explore tailored website plans, custom Next.js builds, existing website redesigns, and maintenance services by NEXNIFY Tech. Free consultation & transparent custom quotes.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Website Plans & Tailored Solutions | NEXNIFY Tech',
    description: 'Explore tailored website plans, custom Next.js builds, website redesigns, and maintenance services. Free consultation & transparent custom quotes.',
    url: '/pricing',
    siteName: 'NEXNIFY Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Plans & Tailored Solutions | NEXNIFY Tech',
    description: 'Tailored website plans, custom Next.js builds, and maintenance services. Transparent pricing by NEXNIFY Tech.',
  },
};

export default function PricingPage() {
  return (
    <>
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
