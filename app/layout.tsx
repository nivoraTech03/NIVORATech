import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import siteContent from "@/lib/content";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const { site } = siteContent;

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

export const metadata: Metadata = {
  metadataBase: new URL("https://nivora-tech.vercel.app/"),

  title: {
    default: "Web & App Development Agency in Delhi NCR | Nivora Tech",
    template: "%s | Nivora Tech",
  },

  verification: {
    google: "9_ig4T7BLdksFSR3upAKndtwr3ZrlFCpVCjH4y1vcO0",
  },

  description:
    "Nivora Tech is a top web & app development agency in Delhi NCR offering custom software and UI/UX design for startups. Get a free consultation today!",

  keywords: [
    "web development agency in Delhi NCR",
    "software development services Delhi",
    "app development company",
    "custom software Delhi NCR",
    "UI/UX design agency",
    "Nivora Tech",
  ],

  authors: [
    {
      name: "Nivora Tech",
      url: "https://nivora-tech.vercel.app/",
    },
  ],

  creator: "Nivora Tech",
  publisher: "Nivora Tech",

  alternates: {
    canonical: "/",
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
    title: "Web & App Development Agency in Delhi NCR | Nivora Tech",
    description:
      "Nivora Tech is a top web & app development agency in Delhi NCR offering custom software and UI/UX design for startups. Get a free consultation today!",
    url: "https://nivora-tech.vercel.app/",
    siteName: "Nivora Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/skyodeals.webp",
        width: 1200,
        height: 630,
        alt: "Nivora Tech - Web and App Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Agency in Delhi NCR | Nivora Tech",
    description:
      "Nivora Tech is a top web & app development agency in Delhi NCR offering custom software and UI/UX design for startups. Get a free consultation today!",
    images: ["/images/skyodeals.webp"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://nivora-tech.vercel.app/#organization",
      name: "Nivora Tech",
      alternateName: "Nivora Web Development",
      url: "https://nivora-tech.vercel.app/",
      logo: "https://nivora-tech.vercel.app/favicon.ico",
      image: "https://nivora-tech.vercel.app/images/skyodeals.webp",
      description:
        "Nivora Tech is a top web & app development agency in Delhi NCR offering custom software and UI/UX design for startups.",
      email: "nivora1403@gmail.com",
      telephone: "+91-9575450177",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
        postalCode: "110001"
      },
      areaServed: ["Delhi", "Noida", "Gurgaon", "Global"],
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
        "https://www.linkedin.com/company/nivoratech",
        "https://github.com/nivoratech",
        "https://twitter.com/nivoratech",
        "https://www.instagram.com/nivorat.ech/"
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
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${plusJakarta.variable} min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] antialiased`}
      >
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