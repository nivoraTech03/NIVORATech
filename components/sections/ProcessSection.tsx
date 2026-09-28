import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  const { process } = siteContent;

  return (
    <section
      id="process"
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--bg-surface)]"
    >
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {process.steps.map((step, index) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:border-[var(--color-accent-border)] hover:-translate-y-2 hover:shadow-2xl shadow-sm"
            >
              {/* Step number watermark */}
              <span
                className="absolute -right-2 -top-4 font-mono text-8xl font-black text-[var(--text-primary)]/[0.04] dark:text-white/[0.04] select-none pointer-events-none transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                {step.step}
              </span>

              {/* Step indicator header */}
              <div className="flex items-center gap-2.5 mb-5 relative z-10">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] font-mono text-xs font-bold text-[var(--color-accent)] border border-[var(--color-accent-border)]">
                  {step.step}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Phase 0{index + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {step.name}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent glow bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-b-3xl" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
