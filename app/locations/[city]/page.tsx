import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { 
  LocationHero, 
  LocationIntro, 
  LocationServices, 
  LocationBusinessTypes, 
  LocationFeatures, 
  LocationPerformance, 
  LocationCta 
} from '@/components/locations/LocationComponents';
import { MiniPricing } from '@/components/sections/MiniPricing';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { FaqSection } from '@/components/sections/FaqSection';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

interface LocationPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(locations).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const location = locations[city];
  
  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: location.title,
    description: location.description,
    keywords: [
      `Website Development in ${location.name}`,
      `Web Developer in ${location.name}`,
      `App Development in ${location.name}`,
      `Website Development for Businesses in ${location.name}`,
      `Professional Website Design in ${location.name}`,
      `Nivora Tech ${location.name}`,
      `SEO Optimized Website in ${location.name}`,
      `Mobile App Developer ${location.name}`,
      `E-commerce Website Developer ${location.name}`,
      `Web Design Agency ${location.name}`
    ],
    alternates: {
      canonical: `https://nivora-tech.vercel.app/locations/${city}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `https://nivora-tech.vercel.app/locations/${city}`,
      type: 'website',
    }
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = locations[city];

  if (!location) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nivora-tech.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://nivora-tech.vercel.app/locations" },
      { "@type": "ListItem", "position": 3, "name": location.name, "item": `https://nivora-tech.vercel.app/locations/${location.slug}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development",
    "provider": {
      "@type": "Organization",
      "name": "NIVORA Tech",
      "url": "https://nivora-tech.vercel.app/"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "State",
        "name": location.state
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">

        <LocationHero city={location.name} />
        <LocationIntro introParagraphs={location.introParagraphs} />
        <LocationServices city={location.name} />
        <MiniPricing pricingOverrides={location.pricingOverrides} />
        <LocationBusinessTypes businessTypes={location.businessTypes} city={location.name} />
        <LocationFeatures />
        <ProcessSection />
        <ProjectsShowcase />
        <LocationPerformance />
        <FaqSection title={`Frequently Asked Questions about Websites in ${location.name}`} description="Everything you need to know about starting your web project." />
        <LocationCta city={location.name} />
      </main>
    </>
  );
}
