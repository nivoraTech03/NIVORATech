import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <FaqSection />
      <NewsletterSection />
      <ProjectCtaBanner />
    </>
  );
}

