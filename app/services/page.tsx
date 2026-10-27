import type { Metadata } from "next";
import siteContent from "@/lib/content";
import PageBanner from "@/components/layout/PageBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export const metadata: Metadata = {
  title: "Web Development Services in Delhi NCR & India",
  description:
    "Professional website development services by Nexnify — business websites, responsive landing pages, React & Next.js web apps, WordPress builds, and custom web portals in Delhi NCR and across India.",
  alternates: {
    canonical: "https://nexnify.in/services",
  },
  openGraph: {
    title: "Web Development Services in Delhi NCR & India | Nexnify",
    description:
      "Professional website development services by Nexnify — business websites, responsive landing pages, React & Next.js web apps, and WordPress builds.",
    url: "https://nexnify.in/services",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Delhi NCR & India | Nexnify",
    description:
      "Professional website development services — business websites, landing pages, React/Next.js apps, and WordPress builds by Nexnify.",
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
      name: "Services",
      item: "https://nexnify.in/services",
    },
  ],
};

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nexnify Web Development Services",
  description: "Comprehensive website development and digital engineering services in Delhi NCR and across India.",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Business Website Development",
      url: "https://nexnify.in/services/business-websites",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Next.js & React Development",
      url: "https://nexnify.in/services/nextjs-react-development",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "WordPress Website Development",
      url: "https://nexnify.in/services/wordpress-development",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Custom Web Application Development",
      url: "https://nexnify.in/services/web-applications",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 5,
      name: "Landing Page Design & Development",
      url: "https://nexnify.in/services/landing-pages",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 6,
      name: "Website Redesign & Maintenance",
      url: "https://nexnify.in/services/website-maintenance-redesign",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
    {
      "@type": "Service",
      position: 7,
      name: "Mobile App Development",
      url: "https://nexnify.in/services/mobile-apps",
      provider: { "@type": "Organization", name: "Nexnify" },
    },
  ],
};

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <PageBanner
        badge="TAILORED WEB SOLUTIONS"
        title={services.title}
        description={services.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <ServicesGrid />
      <ProcessSection />
      <WhyChooseUs />
      <ProjectCtaBanner />
    </>
  );
}
