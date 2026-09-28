import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Project Enquiry | NIVORA Digital Studio",
  description:
    "Connect directly with lead engineers at NIVORA Digital Studio. Inquire about custom Next.js web applications, PHP flight booking portals, or WordPress Elementor builds. Quick response in 2-4 hours.",
  keywords: [
    "Contact NIVORA",
    "Hire Next.js Developer",
    "Hire PHP Developer",
    "Hire WordPress Elementor Developer",
    "Web Application Quotation",
    "Project Enquiry",
    "Website Cost Estimate",
  ],
  alternates: {
    canonical: "https://nivora.studio/contact",
  },
  openGraph: {
    title: "Contact Us & Project Enquiry | NIVORA Digital Studio",
    description:
      "Speak directly with experienced web engineers. No middle-layers, zero spam. Inquire today for accurate estimates & architecture recommendations.",
    url: "https://nivora.studio/contact",
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
