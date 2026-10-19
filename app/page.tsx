import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MiniPricing } from "@/components/sections/MiniPricing";
import { LocalPartnerSection } from "@/components/sections/LocalPartnerSection";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company in Delhi NCR | Gurugram, Noida, Gwalior | NIVORA Tech",
  description: "NIVORA Tech builds fast, responsive, and conversion-focused websites and Next.js applications for startups, local businesses, and luxury brands across Delhi NCR, Gurugram, Noida, and MP.",
  alternates: {
    canonical: "/",
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
      <ProjectCtaBanner />
    </>
  );
}
