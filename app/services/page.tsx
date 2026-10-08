import type { Metadata } from "next";
import siteContent from "@/lib/content";
import PageBanner from "@/components/layout/PageBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export const metadata: Metadata = {
  title: "Web Development Services | NIVORA",
  description: "Focused website development services including business websites, responsive landing pages, React/Next.js platforms, and WordPress builds.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development Services | NIVORA",
    description: "Focused website development services including business websites, responsive landing pages, React/Next.js platforms, and WordPress builds.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
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
