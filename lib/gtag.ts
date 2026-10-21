export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Log specific page views (used if manual pageview tracking is required)
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Log custom GA4 events (e.g. form submission, CTA button click, WhatsApp chat click)
export const trackEvent = (
  action: string,
  params: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};
