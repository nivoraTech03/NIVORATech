import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NIVORA | Start a Web Project",
  description:
    "Get in touch with NIVORA to discuss your next web development project. We specialize in React, Next.js, and WordPress websites.",
  keywords: [
    "Contact NIVORA",
    "freelance web developer",
    "React developer",
    "Next.js developer",
    "Project Enquiry",
    "Website Cost Estimate",
  ],
  alternates: {
    canonical: "https://nivora-tech.vercel.app/contact",
  },
  openGraph: {
    title: "Contact NIVORA | Start a Web Project",
    description:
      "Get in touch with NIVORA to discuss your next web development project.",
    url: "https://nivora-tech.vercel.app/contact",
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
