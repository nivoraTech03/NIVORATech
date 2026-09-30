import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import siteContent from "@/lib/content";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const { site } = siteContent;

// Self-hosted Google fonts via next/font (ZERO external CDN runtime requests)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Comprehensive Search Engine Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://nivora-tech.vercel.app/"),
  title: {
    default: "NIVORA — Web Development & Digital Studio",
    template: "%s | NIVORA",
  },
  verification: {
    google: "9_ig4T7BLdksFSR3upAKndtwr3ZrlFCpVCjH4y1vcO0",
  },
  description:
    "NIVORA builds modern responsive websites using technologies such as React, Next.js and WordPress. We are an independent digital studio serving businesses and startups.",
  keywords: [
    "NIVORA",
    "web developer",
    "freelance web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "website development",
    "business website development",
    "WordPress website development",
    "responsive website development",
  ],
  authors: [{ name: "NIVORA Digital Studio", url: "https://nivora-tech.vercel.app/" }],
  creator: "NIVORA Studio",
  publisher: "NIVORA",
  alternates: {
    canonical: "https://nivora-tech.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NIVORA — Web Development & Digital Studio",
    description:
      "NIVORA builds modern responsive websites using technologies such as React, Next.js and WordPress.",
    url: "https://nivora-tech.vercel.app/",
    siteName: "NIVORA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/skyodeals.jpg",
        width: 1200,
        height: 630,
        alt: "NIVORA Web Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIVORA — Web Development & Digital Studio",
    description:
      "NIVORA builds modern responsive websites using technologies such as React, Next.js and WordPress.",
    images: ["/images/skyodeals.jpg"],
  },
};

// Google Schema.org JSON-LD Structured Data
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nivora-tech.vercel.app/#organization",
      name: "NIVORA",
      alternateName: "NIVORA Web Development",
      url: "https://nivora-tech.vercel.app/",
      logo: "https://nivora-tech.vercel.app/favicon.ico",
      image: "https://nivora-tech.vercel.app/images/skyodeals.jpg",
      description:
        "Independent digital studio and freelance web developer specializing in responsive websites using React, Next.js, and WordPress.",
      email: "nivora1403@gmail.com",
      telephone: "+91-9575450177",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
      sameAs: [
        "https://wa.me/919575450177",
        "https://linkedin.com",
      ],
      knowsAbout: [
        "Web Development",
        "React Development",
        "Next.js Development",
        "WordPress Website Development",
        "Frontend Development",
        "Responsive Web Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nivora-tech.vercel.app/#website",
      url: "https://nivora-tech.vercel.app/",
      name: "NIVORA — Web Development & Digital Studio",
      publisher: {
        "@id": "https://nivora-tech.vercel.app/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* NO EXTERNAL CDN LINKS: Fonts are 100% self-hosted locally by Next.js */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingActions />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
