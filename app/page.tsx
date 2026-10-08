import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MiniPricing } from "@/components/sections/MiniPricing";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
      <TestimonialsSection />
      <ServicesGrid />
      <MiniPricing />
      <ProjectCtaBanner />
    </>
  );
}

