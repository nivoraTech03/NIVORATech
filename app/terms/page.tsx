import type { Metadata } from "next";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Terms & Privacy | NIVORA — Independent Digital Studio",
  description: "Terms and privacy policies for NIVORA independent digital studio.",
};

export default function TermsPage() {
  const { site } = siteContent;

  return (
    <>
      <PageBanner
        badge="LEGAL & POLICIES"
        title="Terms of Service & Privacy Policy"
        description={`Policies, codes of confidentiality, and principles guiding client engagements with ${site.name}.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Privacy" },
        ]}
      />

      <section className="bg-[var(--bg-surface)] py-16 sm:py-24">
        <Container className="max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] space-y-8">
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-8 space-y-3 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Client Engagements &amp; Scope
            </h2>
            <p>
              All design and development engagements are scoped with clear deliverables, milestones, and timelines outlined before project commencement. Revisions and additional feature requests outside the agreed scope are evaluated transparently.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-8 space-y-3 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              Upon final milestone completion and settlement of project invoices, full ownership of custom client deliverables, frontend code, and tailored assets is transferred directly to the client.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-8 space-y-3 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Privacy &amp; Data Confidentiality
            </h2>
            <p>
              Information shared with {site.name} during discovery and project delivery—including business documents, proprietary designs, and credentials—is held in strict confidence and never shared with third parties.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] p-6 sm:p-8 space-y-3 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
              Contact &amp; Questions
            </h2>
            <p>
              For questions regarding engagements, terms, or privacy, please write to{" "}
              <a href={site.socials.email} className="text-[var(--color-accent)] font-semibold underline">
                {site.email}
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
