import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MiniPricing } from "@/components/sections/MiniPricing";
import { LocalPartnerSection } from "@/components/sections/LocalPartnerSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Website Development Company in Delhi NCR & India | Nexnify",
  },
  description: "Nexnify builds fast, responsive, and conversion-focused websites, Next.js web applications, and mobile apps for businesses and startups in Delhi NCR, Gurugram, Noida, and across India.",
  alternates: {
    canonical: "https://nexnify.in/",
  },
  openGraph: {
    title: "Website Development Company in Delhi NCR & India | Nexnify",
    description: "Nexnify builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
    url: "https://nexnify.in/",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi NCR & India | Nexnify",
    description: "Nexnify builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsShowcase />
      <WhyChooseUs />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <MiniPricing />
      <LocalPartnerSection />
      <NewsletterSection />
      <ProjectCtaBanner />
    </>
  );
}
