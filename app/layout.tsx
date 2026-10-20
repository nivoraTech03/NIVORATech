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
  metadataBase: new URL("https://nexnify.in/"),

  title: {
    default: "Website Development Company in Delhi NCR | NEXNIFY Tech",
    template: "%s | NEXNIFY Tech",
  },

  verification: {
    google: "9_ig4T7BLdksFSR3upAKndtwr3ZrlFCpVCjH4y1vcO0",
  },

  description:
    "NEXNIFY Tech is a premier website development company in Delhi NCR building fast, responsive, and conversion-focused websites for startups, businesses, and luxury brands. Free consultation & custom tailored solutions.",

  keywords: [
    "website development company in Delhi NCR",
    "web development company in Delhi NCR",
    "website developer in Delhi NCR",
    "website design company in Delhi NCR",
    "web development company in Gurugram",
    "website designer Golf Course Road Gurugram",
    "website development in Noida",
    "website development company in Gwalior",
    "web development company in Agra",
    "website design in Mathura",
    "luxury PG and hospitality website design",
    "business website development Delhi NCR",
    "professional website development Delhi NCR",
    "website redesign company Delhi NCR",
    "custom website development Delhi NCR",
    "Next.js website development",
    "React website development",
    "WordPress website development",
    "PHP website development",
    "responsive website development",
    "local business website development",
    "NEXNIFY Tech",
  ],

  authors: [
    {
      name: "NEXNIFY Tech",
      url: "https://nexnify.in/",
    },
  ],

  creator: "NEXNIFY Tech",
  publisher: "NEXNIFY Tech",

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
    title: "Website Development Company in Delhi NCR | NEXNIFY Tech",
    description:
      "NEXNIFY Tech builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
    url: "https://nexnify.in/",
    siteName: "NEXNIFY Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/auralux.webp",
        width: 1200,
        height: 630,
        alt: "NEXNIFY Tech — Website Development Company in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi NCR | NEXNIFY Tech",
    description:
      "NEXNIFY Tech builds fast, responsive, modern, and business-focused websites for startups and brands across Delhi NCR, Gurugram, and Noida. Free consultation.",
    images: ["/images/auralux.webp"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://nexnify.in/#organization",
      name: "NEXNIFY Tech",
      alternateName: "NEXNIFY Web Development",
      url: "https://nexnify.in/",
      logo: "https://nexnify.in/icon.png",
      image: "https://nexnify.in/images/skyodeals.webp",
      description:
        "NEXNIFY Tech is a website development company in Delhi NCR building fast, responsive, and business-focused websites for startups and local businesses.",
      email: "nexnifytech@gmail.com",
      telephone: "+91-9575450177",
      priceRange: "₹₹",
      areaServed: [
        "Delhi", "Noida", "Gurugram", "Gwalior", "Agra", "Mathura",
        "Faridabad", "Indore", "Bhopal", "India"
      ],
      sameAs: [
        "https://www.linkedin.com/company/nexnifytech",
        "https://github.com/nexnifytech",
        "https://twitter.com/nexnifytech",
        "https://www.instagram.com/nexnify.in/"
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
      name: "NEXNIFY Tech — Website Development Company",
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