import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ---------------------------------------------------------------
      // Default rule for all crawlers
      // Allow public pages; protect API routes and sensitive endpoints.
      // ---------------------------------------------------------------
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // Google – web search indexing
      // ---------------------------------------------------------------
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // Google-Extended – Gemini AI and Vertex AI training
      // Allowed: Nexnify has no paywalled content.
      // Change to disallow: ["/"] to opt out of Gemini training.
      // ---------------------------------------------------------------
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // Bing – web search indexing
      // ---------------------------------------------------------------
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // OAI-SearchBot – ChatGPT Search (search discovery, not training)
      // Allow: required for Nexnify to appear in ChatGPT Search results.
      // ---------------------------------------------------------------
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // GPTBot – OpenAI model training
      // Allowed: helps brand recognition in ChatGPT and OpenAI tools.
      // Change to disallow: ["/"] to opt out of OpenAI training data.
      // ---------------------------------------------------------------
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // PerplexityBot – Perplexity AI search discovery
      // Allow: required for Nexnify to appear in Perplexity answers.
      // ---------------------------------------------------------------
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // ClaudeBot – Anthropic Claude model training and search
      // Allowed: helps brand recognition in Claude-powered products.
      // Change to disallow: ["/"] to opt out of Claude training data.
      // ---------------------------------------------------------------
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ---------------------------------------------------------------
      // Applebot-Extended – Apple Intelligence and Siri training
      // Allowed: helps discoverability in Apple's AI features.
      // Change to disallow: ["/"] to opt out.
      // ---------------------------------------------------------------
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://nexnify.in/sitemap.xml",
  };
}
