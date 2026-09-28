import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function TechStack() {
  const { technologies } = siteContent;

  return (
    <section
      className="border-y border-[var(--border-subtle)] py-10 sm:py-12"
      style={{ background: "var(--bg-surface)" }}
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-500 text-center md:text-left whitespace-nowrap">
            {technologies.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {technologies.items.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] cursor-default"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--color-accent)] transition-colors" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
