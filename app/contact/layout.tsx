import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NEXNIFY Tech | Start Your Web Project",
  description:
    "Get in touch with NEXNIFY Tech to discuss your website development project. We specialize in React, Next.js, WordPress, and custom web applications across Delhi NCR.",
  keywords: [
    "Contact NEXNIFY Tech",
    "website development quote Delhi NCR",
    "freelance web developer India",
    "React developer Delhi NCR",
    "Next.js developer India",
    "website cost estimate India",
    "web project enquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact NEXNIFY Tech | Start Your Web Project",
    description:
      "Get in touch with NEXNIFY Tech to discuss your website development project across Delhi NCR.",
    url: "/contact",
    siteName: "NEXNIFY Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NEXNIFY Tech | Start Your Web Project",
    description:
      "Get in touch with NEXNIFY Tech to discuss your website development project. Free consultation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
