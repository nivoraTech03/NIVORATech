import type { Metadata } from "next";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/Button";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectCtaBanner } from "@/components/layout/ProjectCtaBanner";
import { Icon } from "@/components/ui/Icon";
import { LocalPartnerSection } from "@/components/sections/LocalPartnerSection";

export const metadata: Metadata = {
  title: "About NEXNIFY Tech — Website Development Studio in Delhi NCR",
  description:
    "NEXNIFY Tech is a professional website development studio in Delhi NCR building modern, responsive websites and digital experiences with clean code for startups and businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About NEXNIFY Tech — Website Development Studio in Delhi NCR",
    description:
      "NEXNIFY Tech is a professional website development studio building modern, responsive websites with clean code for startups and businesses across Delhi NCR.",
    url: "/about",
    siteName: "NEXNIFY Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NEXNIFY Tech — Website Development Studio",
    description:
      "NEXNIFY Tech is a professional website development studio building modern, responsive websites for startups and businesses across Delhi NCR.",
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      {/* Modern Dark Page Banner */}
      <PageBanner
        badge="STUDIO CRAFT & PHILOSOPHY"
        title={about.title}
        description={about.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About NEXNIFY Tech" },
        ]}
      />

      {/* Narrative & Principles Section */}
      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg lg:col-span-7">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact" icon>
                  Start a Project
                </Button>
                <Button href="/work" variant="secondary">
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Principles Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-8 space-y-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-primary)]">
                    Core Studio Principles
                  </h2>
                </div>

                <div className="space-y-5">
                  {about.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="border-b border-[var(--border-subtle)] pb-4 last:border-b-0 last:pb-0 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon name="check" size={12} />
                        </span>
                        <h3 className="font-display text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 pl-7 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <LocalPartnerSection />
      <WhyChooseUs />
      <ProcessSection />
      <ProjectCtaBanner />
    </>
  );
}
