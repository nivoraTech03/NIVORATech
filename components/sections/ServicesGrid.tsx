import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const iconMap: Record<string, "layout" | "globe" | "code" | "sparkles"> = {
  "business-websites": "layout",
  "landing-pages": "globe",
  "react-nextjs-websites": "code",
  "wordpress-websites": "sparkles",
};

export function ServicesGrid({ limit }: { limit?: number }) {
  const { services } = siteContent;
  const list = limit ? services.items.slice(0, limit) : services.items;

  return (
    <section
      id="services"
      className="scroll-mt-20 py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "var(--bg-surface-alt)" }}
    >
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service, idx) => {
            const icon = iconMap[service.id] ?? "code";
            const isFeatured = idx === 2;

            return (
              <div
                key={service.id}
                className={
                  "group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl " +
                  (isFeatured
                    ? "border-indigo-500/50 bg-gradient-to-b from-[#131E38] to-[#0A0F1D] text-white shadow-xl"
                    : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--color-accent-border)]")
                }
              >
                {/* Glowing top line */}
                <div
                  className={
                    "absolute inset-x-8 top-0 h-1 rounded-b-full transition-all duration-300 " +
                    (isFeatured
                      ? "bg-indigo-500 shadow-[0_0_12px_#6366F1]"
                      : "bg-transparent group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_10px_var(--color-accent)]")
                  }
                />

                {/* Card Top: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-current/10 mb-5">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                      SERVICE {service.number}
                    </span>
                    <span
                      className={
                        "flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors " +
                        (isFeatured
                          ? "border-indigo-500/40 bg-indigo-500/20 text-indigo-300"
                          : "border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-[var(--text-secondary)] group-hover:border-[var(--color-accent-border)] group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]")
                      }
                    >
                      <Icon name={icon} size={19} />
                    </span>
                  </div>

                  <h3
                    className={
                      "font-display text-xl font-bold tracking-tight " +
                      (isFeatured ? "text-white" : "text-[var(--text-primary)]")
                    }
                  >
                    {service.title}
                  </h3>

                  <p
                    className={
                      "mt-3 text-sm leading-relaxed " +
                      (isFeatured ? "text-slate-300" : "text-[var(--text-secondary)]")
                    }
                  >
                    {service.shortDescription}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div
                  className={
                    "mt-6 border-t pt-5 space-y-2.5 " +
                    (isFeatured ? "border-white/10" : "border-[var(--border-subtle)]")
                  }
                >
                  <span
                    className={
                      "block text-[11px] font-bold uppercase tracking-wider mb-2 " +
                      (isFeatured ? "text-indigo-300" : "text-[var(--text-muted)]")
                    }
                  >
                    What&apos;s Included:
                  </span>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Icon name="check" size={10} />
                      </span>
                      <span
                        className={
                          "text-xs leading-tight " +
                          (isFeatured ? "text-slate-300" : "text-[var(--text-secondary)]")
                        }
                      >
                        {item}
                      </span>
                    </div>
                  ))}

                  <div className="pt-3">
                    <Link
                      href="/contact"
                      className={
                        "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors " +
                        (isFeatured
                          ? "text-indigo-300 hover:text-white"
                          : "text-indigo-600 dark:text-indigo-400 hover:underline")
                      }
                    >
                      <span>Inquire regarding this</span>
                      <Icon name="arrowRight" size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
