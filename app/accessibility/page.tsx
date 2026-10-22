import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export const metadata: Metadata = {
  title: "Accessibility Statement & WCAG 2.2 AA Compliance | Nexnify",
  description:
    "Nexnify is committed to digital inclusion. Read our formal Accessibility Statement, WCAG 2.2 Level AA compliance standards, keyboard support, and contact info for accessibility feedback.",
  alternates: {
    canonical: "https://nexnify.in/accessibility",
  },
  openGraph: {
    title: "Accessibility Statement | Nexnify",
    description: "Our commitment to WCAG 2.2 Level AA digital accessibility standards across every client build and internal platform.",
    url: "https://nexnify.in/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-medium">Accessibility Statement</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            WCAG 2.2 Level AA Standard
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
            Accessibility Statement
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Nexnify is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards to our studio platform and every client website we engineer.
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-3">
            Last updated: February 2026 &bull; Conformance Target: WCAG 2.2 Level AA
          </p>
        </div>

        {/* Core Principles */}
        <div className="space-y-10">
          <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Icon name="check" size={18} />
              </span>
              Conformance Status
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              The Nexnify website is engineered to conform with <strong>WCAG 2.2 Level AA</strong>. Our code adheres to semantic HTML5 standards, ARIA authoring practices, and mobile responsiveness guidelines to ensure seamless usability with screen readers, braille displays, and keyboard-only navigation.
            </p>
          </section>

          {/* Technical Measures */}
          <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Icon name="layout" size={18} />
              </span>
              Native Source-Code Compliance vs. Widgets
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Unlike third-party accessibility overlay widgets (such as EqualWeb, AccessiBe, or UserWay) that inject surface-level JavaScript scripts without fixing underlying HTML markup, Nexnify engineers accessibility <strong>directly into the source code</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[var(--border-subtle)] rounded-xl p-5 bg-[var(--bg-surface-alt)]">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2 flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Semantic HTML5 Structure
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Proper use of <code className="text-xs">&lt;header&gt;</code>, <code className="text-xs">&lt;nav&gt;</code>, <code className="text-xs">&lt;main&gt;</code>, <code className="text-xs">&lt;section&gt;</code>, and hierarchical headings (<code className="text-xs">&lt;h1&gt;</code>–<code className="text-xs">&lt;h6&gt;</code>) for clean DOM navigation.
                </p>
              </div>

              <div className="border border-[var(--border-subtle)] rounded-xl p-5 bg-[var(--bg-surface-alt)]">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2 flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Full Keyboard Operability
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Every button, modal, form input, and dropdown is fully navigable using the <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-strong)] text-[11px]">Tab</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-strong)] text-[11px]">Enter</kbd>, and <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-strong)] text-[11px]">Esc</kbd> keys, complete with high-contrast visible focus rings.
                </p>
              </div>

              <div className="border border-[var(--border-subtle)] rounded-xl p-5 bg-[var(--bg-surface-alt)]">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2 flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Color Contrast Ratios
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  All standard text meets or exceeds the WCAG 4.5:1 contrast requirement against its background. Large headers and interactive UI controls exceed the 3:1 threshold in both light and dark themes.
                </p>
              </div>

              <div className="border border-[var(--border-subtle)] rounded-xl p-5 bg-[var(--bg-surface-alt)]">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2 flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Unrestricted Viewport Zoom
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  We never disable mobile zooming. Users can pinch-to-zoom up to 500% without horizontal scrolling clipping or loss of page functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Screen Reader & Assistive Technologies */}
          <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
              Assistive Technology Compatibility
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Nexnify websites are tested for compatibility with modern assistive technologies:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-[var(--text-secondary)]">
              <li className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">&bull;</span>
                <span>NVDA (NonVisual Desktop Access) on Google Chrome &amp; Mozilla Firefox</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">&bull;</span>
                <span>JAWS (Job Access With Speech) on Windows</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">&bull;</span>
                <span>Apple VoiceOver on macOS and iOS Safari</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">&bull;</span>
                <span>TalkBack on Android</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500 font-bold">&bull;</span>
                <span>Automated auditing with Axe-Core, Lighthouse Accessibility, and Pa11y</span>
              </li>
            </ul>
          </section>

          {/* Feedback & Grievance */}
          <section className="bg-gradient-to-br from-indigo-950 via-[#0A0F1D] to-[#050812] border border-indigo-500/30 text-white rounded-2xl p-5 sm:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Feedback &amp; Accessibility Grievance Contact
            </h2>
            <p className="text-sm sm:text-base text-indigo-200/90 leading-relaxed mb-6">
              We welcome your feedback on the accessibility of the Nexnify website. If you encounter accessibility barriers or have suggestions for improvement, please contact our technical team:
            </p>

            <div className="space-y-3 text-sm text-indigo-100">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@nexnify.in" className="text-indigo-300 underline hover:text-white transition-colors">
                  contact@nexnify.in
                </a>
              </p>
              <p>
                <strong>WhatsApp / Phone:</strong>{" "}
                <a href="tel:+919575450177" className="text-indigo-300 underline hover:text-white transition-colors">
                  +91 95754 50177
                </a>
              </p>
              <p>
                <strong>Response Target:</strong> We aim to acknowledge accessibility inquiries within 48 business hours and provide an estimated resolution schedule.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-500/20 flex flex-wrap gap-4">
              <WhatsAppCta
                href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20have%20an%20accessibility%20question%20or%20feedback."
                ctaLocation="accessibility_page"
                serviceCategory="accessibility_support"
                size="md"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
              >
                Reach Out on WhatsApp
              </WhatsAppCta>
              <Link
                href="/free-website-audit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/20"
              >
                Request Free WCAG Audit for Your Site &rarr;
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
