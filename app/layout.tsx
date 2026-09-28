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
  metadataBase: new URL("https://nivora.studio"),
  title: {
    default: "NIVORA — Digital Studio | Next.js, PHP & WordPress Web Development",
    template: "%s | NIVORA Digital Studio",
  },
  description:
    "NIVORA is an independent digital studio engineering high-performance web applications, custom PHP booking portals, and modern WordPress platforms. Built for speed, scale & conversion.",
  keywords: [
    "NIVORA",
    "NIVORA Digital Studio",
    "Web Development Agency",
    "Next.js Web Application",
    "Custom PHP Web Development",
    "Flight Booking Portal Development",
    "WordPress Elementor Agency",
    "Coaching Institute Website",
    "Educational Portal Development",
    "Full Stack Web Engineering",
    "High Performance Websites",
    "Landing Page Development",
    "Website Redesign Services",
  ],
  authors: [{ name: "NIVORA Digital Studio", url: "https://nivora.studio" }],
  creator: "NIVORA Studio",
  publisher: "NIVORA",
  alternates: {
    canonical: "https://nivora.studio",
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
    title: "NIVORA — Digital Studio | Modern Web Architecture & Engineering",
    description:
      "Engineering production websites with Next.js, custom PHP, and WordPress. Explore live client platforms including SkyOdeals travel portal & HIT IAS academy.",
    url: "https://nivora.studio",
    siteName: "NIVORA Digital Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/skyodeals.jpg",
        width: 1200,
        height: 630,
        alt: "NIVORA Digital Studio Client Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIVORA — Digital Studio | Modern Web Architecture",
    description:
      "Engineering next-generation web applications, travel portals & educational systems.",
    images: ["/images/skyodeals.jpg"],
  },
};

// Google Schema.org JSON-LD Structured Data
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nivora.studio/#organization",
      name: "NIVORA Digital Studio",
      alternateName: "NIVORA",
      url: "https://nivora.studio",
      logo: "https://nivora.studio/favicon.ico",
      image: "https://nivora.studio/images/skyodeals.jpg",
      description:
        "Independent digital engineering studio specializing in Next.js, custom PHP, and WordPress web development.",
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
        "Web Application Development",
        "Next.js Development",
        "React",
        "PHP & MySQL Development",
        "WordPress & Elementor",
        "Booking Engine Architecture",
        "Frontend Engineering",
        "Responsive Web Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nivora.studio/#website",
      url: "https://nivora.studio",
      name: "NIVORA Digital Studio",
      publisher: {
        "@id": "https://nivora.studio/#organization",
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
