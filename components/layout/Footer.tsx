import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const { site, navigation } = siteContent;

  return (
    <footer
      className="border-t border-white/8 text-white"
      style={{ background: "var(--bg-dark-section)" }}
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-5">
            <Logo inverted />
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs text-[var(--color-accent)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                Available for select projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4 lg:pl-8">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                >
                  <Icon name="linkedin" size={15} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={site.socials.email}
                  className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                >
                  <Icon name="mail" size={15} />
                  <span>{site.email}</span>
                </a>
              </li>
              {site.socials.whatsapp && (
                <li>
                  <a
                    href={site.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[#25D366]"
                  >
                    <Icon name="whatsapp" size={15} />
                    <span>WhatsApp</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-white/40 sm:flex-row">
          <p>{site.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Privacy
            </Link>
            <a href="#top" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
