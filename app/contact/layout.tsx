import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Technical Team & Request a Quote",
  description:
    "Get in touch with Nexnify to discuss your website development project. We build custom Next.js, React, WordPress, and custom web applications across Delhi NCR and India.",
  keywords: [
    "Contact Nexnify",
    "website development quote Delhi NCR",
    "web developer Delhi NCR",
    "React developer Delhi NCR",
    "Next.js developer India",
    "website cost estimate India",
    "web project enquiry",
  ],
  alternates: {
    canonical: "https://nexnify.in/contact",
  },
  openGraph: {
    title: "Contact Nexnify | Website & Web Application Consultation",
    description:
      "Get in touch with Nexnify to discuss your website development project across Delhi NCR.",
    url: "https://nexnify.in/contact",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nexnify | Website & Web Application Consultation",
    description:
      "Get in touch with Nexnify to discuss your website development project. Free technical consultation.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nexnify.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://nexnify.in/contact",
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://nexnify.in/contact#webpage",
  url: "https://nexnify.in/contact",
  name: "Contact Nexnify — Website Development Consultation",
  description:
    "Get in touch with Nexnify to discuss your website or web application development project. Direct technical consultation with no sales intermediaries.",
  isPartOf: {
    "@id": "https://nexnify.in/#website",
  },
  about: {
    "@id": "https://nexnify.in/#organization",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
