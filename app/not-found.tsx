import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Nexnify",
  description:
    "The page you are looking for does not exist. Navigate back to Nexnify for website development services in Delhi NCR.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[var(--bg-surface)]">
      <Container>
        <div className="max-w-lg mx-auto text-center space-y-6 py-20">
          <span className="inline-block font-mono text-7xl sm:text-8xl font-black text-[var(--color-accent)] opacity-80">
            404
          </span>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Page Not Found
          </h1>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/" icon>
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>

          <div className="pt-8 border-t border-[var(--border-subtle)]">
            <p className="text-sm text-[var(--text-muted)]">
              Looking for something specific? Try these:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm">
              <Link
                href="/services"
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Our Work
              </Link>
              <Link
                href="/pricing"
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
