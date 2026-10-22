export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Log page views on initial load and client-side route changes.
 * Sends page_location, page_path, and page_title to GA4.
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: url,
      page_title: title || (typeof document !== "undefined" ? document.title : ""),
    });
  }
};

/**
 * Log custom GA4 events with safety checks and undefined filtering.
 */
export const trackEvent = (
  action: string,
  params: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const cleanParams: Record<string, string | number | boolean> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        cleanParams[key] = value;
      }
    }
    window.gtag("event", action, cleanParams);
  }
};

/**
 * Standardized WhatsApp Click Event
 * Strictly non-personally identifiable (only location and category).
 */
export const trackWhatsAppClick = (
  location: string,
  serviceCategory: string = "general"
) => {
  trackEvent("whatsapp_click", {
    cta_location: location,
    service_category: serviceCategory,
  });
};

/**
 * Standardized Lead Form Submit Event
 * Only fired AFTER backend returns HTTP 200/OK (strictly non-personally identifiable).
 */
export const trackLeadFormSubmit = (
  formId: string,
  formName: string,
  category: string = "general"
) => {
  trackEvent("lead_form_submit", {
    form_id: formId,
    form_name: formName,
    project_type: category,
  });
  // Also track standard GA4 generate_lead for compatibility with default conversion models
  trackEvent("generate_lead", {
    form_id: formId,
    project_type: category,
  });
};
