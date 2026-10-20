import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NEXNIFY | Start a Web Project",
  description:
    "Get in touch with NEXNIFY to discuss your next web development project. We specialize in React, Next.js, and WordPress websites.",
  keywords: [
    "Contact NEXNIFY",
    "freelance web developer",
    "React developer",
    "Next.js developer",
    "Project Enquiry",
    "Website Cost Estimate",
  ],
  alternates: {
    canonical: "https://nexnify.in/contact",
  },
  openGraph: {
    title: "Contact NEXNIFY | Start a Web Project",
    description:
      "Get in touch with NEXNIFY to discuss your next web development project.",
    url: "https://nexnify.in/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
