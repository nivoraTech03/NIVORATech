import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ProjectCtaBanner() {
  const { contact, site } = siteContent;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full opacity-25"
        style={{ background: "radial-gradient(ellipse at center, var(--accent-primary) 0%, transparent 70%)" }}
      />

      <Container className="relative z-10 text-center">
        <span className="font-display inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          {contact.eyebrow}
        </span>

        <h2 className="font-display mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {contact.title}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {contact.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="accent" size="lg" icon>
            Start a Project
          </Button>
          <a
            href={site.socials.email}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            <Icon name="mail" size={16} />
            <span>{site.email}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
