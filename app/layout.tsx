import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#070B16" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexnify.in/"),

  title: {
    default: "Website Development Company in Delhi NCR | Nexnify",
    template: "%s | Nexnify",
  },

  verification: {
    google: "9_ig4T7BLdksFSR3upAKndtwr3ZrlFCpVCjH4y1vcO0",
  },

  description:
    "Nexnify is an independent website development studio in Delhi NCR building fast, responsive, and conversion-focused websites for businesses, startups, and luxury brands. Free consultation & tailored web solutions.",

  keywords: [
    "website development company in Delhi NCR",
    "web development company in Delhi NCR",
    "website developer in Delhi NCR",
    "website design company in Delhi",
    "web development company in Gurugram",
    "website development in Noida",
    "custom website development services",
    "business website development",
    "Next.js development services",
    "React.js development services",
    "WordPress website development",
    "custom web application development",
    "mobile app development company in India",
    "website redesign services",
    "website maintenance services",
    "landing page design and development",
    "Nexnify",
  ],

  authors: [
    {
      name: "Nexnify",
      url: "https://nexnify.in/",
    },
  ],

  creator: "Nexnify",
  publisher: "Nexnify",

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
    title: "Website Development Company in Delhi NCR | Nexnify",
    description:
      "Nexnify builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
    url: "https://nexnify.in/",
    siteName: "Nexnify",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/auralux.webp",
        width: 1200,
        height: 630,
        alt: "Nexnify — Website Development Company in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi NCR | Nexnify",
    description:
      "Nexnify builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
    images: ["/images/auralux.webp"],
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://nexnify.in/#organization",
      name: "Nexnify",
      alternateName: "Nexnify Web Development",
      url: "https://nexnify.in/",
      logo: "https://nexnify.in/icon.png",
      image: "https://nexnify.in/icon.png",
      description:
        "Nexnify is an independent website development studio in Delhi NCR building fast, responsive, and business-focused websites for startups and local businesses.",
      email: "nexnifytech@gmail.com",
      telephone: "+91-9575450177",
      priceRange: "₹₹",
      areaServed: [
        "Delhi", "Gurugram", "Noida", "Faridabad", "Gwalior", "Agra", "Mathura",
        "Indore", "Bhopal", "India"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9575450177",
        contactType: "customer service",
        email: "nexnifytech@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi NCR",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/nexnify/",
        "https://github.com/nexnifytech03"
      ],
      knowsAbout: [
        "Website Development",
        "Web Development",
        "React Development",
        "Next.js Development",
        "WordPress Website Development",
        "PHP Development",
        "Frontend Development",
        "Responsive Web Design",
        "Mobile App Development",
        "Landing Page Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nexnify.in/#website",
      url: "https://nexnify.in/",
      name: "Nexnify — Website Development Company",
      publisher: {
        "@id": "https://nexnify.in/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900 transition-all"
          >
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>

            <Footer />

            <FloatingActions />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}