import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Fare Breakup | Nivora Tech',
  description: 'View our transparent pricing and fare breakup for new websites, redesigns, maintenance, and add-ons.',
  alternates: {
    canonical: 'https://nivora-tech.vercel.app/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <PageBanner
        badge="FARES & PACKAGES"
        title="Transparent Pricing"
        description="Flexible website solutions for businesses, startups and growing brands. Choose what you need and build only what your business requires."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />
      <PricingSection />
    </>
  );
}
