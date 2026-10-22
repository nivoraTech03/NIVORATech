import Link from "next/link";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { locations } from "@/data/locations";

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
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              {site.description}
            </p>
            <div className="pt-4">
              <div className="group relative inline-flex">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-cyan-500 opacity-30 blur transition duration-1000 group-hover:opacity-60 group-hover:duration-200 animate-pulse"></div>
                <span className="relative inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--bg-dark-section)] px-4 py-2 text-sm font-medium text-indigo-400 shadow-xl backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"></span>
                  </span>
                  Available for select projects
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/services/business-websites" className="text-slate-300 transition-colors hover:text-white">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services/nextjs-react-development" className="text-slate-300 transition-colors hover:text-white">
                  Next.js &amp; React Dev
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-development" className="text-slate-300 transition-colors hover:text-white">
                  WordPress Websites
                </Link>
              </li>
              <li>
                <Link href="/services/web-applications" className="text-slate-300 transition-colors hover:text-white">
                  Custom Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services/landing-pages" className="text-slate-300 transition-colors hover:text-white">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance-redesign" className="text-slate-300 transition-colors hover:text-white">
                  Redesign &amp; Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Studio
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
              <li>
                <Link
                  href="/free-website-audit"
                  className="text-amber-300 font-semibold transition-colors hover:text-white flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Free Website Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/annual-care-plan"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Annual Care Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Guides &amp; Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Locations
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              {Object.values(locations).slice(0, 5).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-indigo-400 hover:text-indigo-300">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.socials.instagram && (
                <li>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                  >
                    <Icon name="instagram" size={15} />
                    <span>Instagram</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={site.socials.email}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Icon name="mail" size={15} />
                  <span>Email</span>
                </a>
              </li>
              {site.socials.whatsapp && (
                <li>
                  <WhatsAppCta
                    href={site.socials.whatsapp}
                    ctaLocation="footer_connect"
                    serviceCategory="social_connect"
                    className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#25D366]"
                  >
                    <Icon name="whatsapp" size={15} />
                    <span>WhatsApp</span>
                  </WhatsAppCta>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-slate-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nexnify. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
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
