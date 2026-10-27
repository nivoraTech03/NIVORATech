import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'Website Development Cost in India & Pricing Plans (2026)',
  description: 'Explore transparent website development cost in India for 2026. Compare static websites from ₹4,999, dynamic web apps from ₹13,500, e-commerce, and maintenance plans by Nexnify.',
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

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does website development cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development cost in India ranges from ₹4,999 to ₹25,000 for standard static business websites, ₹13,500 to ₹75,000 for custom dynamic Next.js web applications, and ₹49,999+ for full-featured e-commerce platforms with Indian payment gateways.",
      },
    },
    {
      "@type": "Question",
      name: "What factors influence website development pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key cost factors include the number of unique pages, custom UI/UX design versus pre-made layouts, dynamic database functionality (e.g. user authentication or booking engines), CMS selection, payment gateway integrations, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to pay recurring monthly builder fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nexnify builds with modern Next.js and clean code architectures with zero recurring builder subscriptions. You own 100% of your source code and design assets.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a custom quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach out directly via WhatsApp at +91 95754 50177 or submit our website consultation form with your required features. We analyze your requirements and provide a milestone-based scope within 24 hours.",
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
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
