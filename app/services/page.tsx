import type { Metadata } from "next";
import siteContent from "@/lib/content";
import PageBanner from "@/components/layout/PageBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export const metadata: Metadata = {
  title: "Web Development Services in Delhi NCR | NEXNIFY Tech",
  description:
    "Professional website development services by NEXNIFY Tech — business websites, responsive landing pages, React/Next.js web apps, WordPress builds, and custom solutions across Delhi NCR.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development Services in Delhi NCR | NEXNIFY Tech",
    description:
      "Professional website development services by NEXNIFY Tech — business websites, responsive landing pages, React/Next.js web apps, and WordPress builds.",
    url: "/services",
    siteName: "NEXNIFY Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in Delhi NCR | NEXNIFY Tech",
    description:
      "Professional website development services — business websites, landing pages, React/Next.js apps, and WordPress builds by NEXNIFY Tech.",
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
