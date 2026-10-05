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
    default: "Website Development Company in Delhi NCR | NIVORA Tech",
    template: "%s | NIVORA Tech",
  },

  verification: {
    google: "9_ig4T7BLdksFSR3upAKndtwr3ZrlFCpVCjH4y1vcO0",
  },

  description:
    "NIVORA Tech is a website development company in Delhi NCR building fast, responsive, and business-focused websites for startups and local businesses. Landing pages from ₹2,999. Free consultation.",

  keywords: [
    "website development company in Delhi NCR",
    "web development company in Delhi NCR",
    "website developer in Delhi NCR",
    "website design company in Delhi NCR",
    "business website development Delhi NCR",
    "professional website development Delhi NCR",
    "website redesign company Delhi NCR",
    "custom website development Delhi NCR",
    "Next.js website development",
    "React website development",
    "WordPress website development",
    "PHP website development",
    "responsive website development",
    "affordable website development",
    "small business website development",
    "NIVORA Tech",
  ],

  authors: [
    {
      name: "NIVORA Tech",
      url: "https://nivora-tech.vercel.app/",
    },
  ],

  creator: "NIVORA Tech",
  publisher: "NIVORA Tech",

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
    title: "Website Development Company in Delhi NCR | NIVORA Tech",
    description:
      "NIVORA Tech builds fast, responsive, and business-focused websites for startups and local businesses across Delhi NCR. Landing pages from ₹2,999. Free consultation.",
    url: "https://nivora-tech.vercel.app/",
    siteName: "NIVORA Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/skyodeals.webp",
        width: 1200,
        height: 630,
        alt: "NIVORA Tech — Website Development Company in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi NCR | NIVORA Tech",
    description:
      "NIVORA Tech builds fast, responsive, and business-focused websites for startups and local businesses across Delhi NCR. Landing pages from ₹2,999.",
    images: ["/images/skyodeals.webp"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://nivora-tech.vercel.app/#organization",
      name: "NIVORA Tech",
      alternateName: "NIVORA Web Development",
      url: "https://nivora-tech.vercel.app/",
      logo: "https://nivora-tech.vercel.app/icon.png",
      image: "https://nivora-tech.vercel.app/images/skyodeals.webp",
      description:
        "NIVORA Tech is a website development company in Delhi NCR building fast, responsive, and business-focused websites for startups and local businesses.",
      email: "nivora1403@gmail.com",
      telephone: "+91-9575450177",
      priceRange: "₹₹",
      areaServed: [
        "Delhi", "Noida", "Gurugram", "Gwalior", "Agra", "Mathura",
        "Faridabad", "Indore", "Bhopal", "India"
      ],
      sameAs: [
        "https://www.linkedin.com/company/nivoratech",
        "https://github.com/nivoratech",
        "https://twitter.com/nivoratech",
        "https://www.instagram.com/nivorat.ech/"
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
      "@id": "https://nivora-tech.vercel.app/#website",
      url: "https://nivora-tech.vercel.app/",
      name: "NIVORA Tech — Website Development Company",
      publisher: {
        "@id": "https://nivora-tech.vercel.app/#organization",
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