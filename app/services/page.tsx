import type { Metadata } from "next";
import siteContent from "@/lib/content";
import PageBanner from "@/components/layout/PageBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export const metadata: Metadata = {
  title: "Web Development Services in Delhi NCR | Nexnify",
  description:
    "Professional website development services by Nexnify — business websites, responsive landing pages, React & Next.js web apps, WordPress builds, and custom web portals in Delhi NCR and across India.",
  alternates: {
    canonical: "https://nexnify.in/services",
  },
  openGraph: {
    title: "Web Development Services in Delhi NCR | Nexnify",
    description:
      "Professional website development services by Nexnify — business websites, responsive landing pages, React & Next.js web apps, and WordPress builds.",
    url: "https://nexnify.in/services",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Delhi NCR | Nexnify",
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

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
