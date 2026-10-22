"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { trackPageView } from "@/lib/gtag";

interface GoogleAnalyticsProps {
  gaId?: string;
}

/**
 * Tracks initial pageview and subsequent client-side App Router navigations.
 * Uses usePathname and useSearchParams inside Suspense to prevent build de-opt.
 */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const queryString = searchParams?.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    // Small delay ensures Next.js has mounted and document.title is up to date
    const timer = setTimeout(() => {
      trackPageView(url, typeof document !== "undefined" ? document.title : "");
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}

/**
 * GA4 Initialization Component
 * - Single script injection via Next.js next/script
 * - send_page_view: false to prevent duplicate page views on config
 * - PageViewTracker handles single-page route changes cleanly
 */
export function GoogleAnalytics({
  gaId = process.env.NEXT_PUBLIC_GA_ID,
}: GoogleAnalyticsProps) {
  // If no Measurement ID is configured in the environment, render nothing safely
  if (!gaId) return null;

  return (
    <>
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              send_page_view: false,
              anonymize_ip: true
            });
          `,
        }}
      />
      <Script
        id="google-analytics-gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
