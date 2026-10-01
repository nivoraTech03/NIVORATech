import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Icon } from "@/components/ui/Icon";

export function FaqSection() {
  const { faqs } = siteContent;

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--bg-surface-alt)]"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            {faqs.eyebrow}
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {faqs.title}
          </h2>

          <p className="font-body text-base leading-relaxed text-slate-600">
            {faqs.description}
          </p>

          {/* Contact nudge card */}
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-7 space-y-4 shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon name="sparkles" size={15} />
              </span>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                Have a specific question?
              </h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Not sure about technology choice, timelines, or pricing for your project? Talk directly to our lead developer.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="sm" icon>
                Send an Inquiry
              </Button>
              <a
                href="https://wa.me/919575450177?text=Hi%20NIVORA,%20I%20have%20a%20question%20regarding%20website%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-semibold text-emerald-800 dark:text-[#25D366] transition-colors"
              >
                <Icon name="whatsapp" size={14} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <FaqAccordion items={faqs.items} />
        </div>
      </Container>
    </section>
  );
}
