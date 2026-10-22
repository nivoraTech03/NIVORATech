import type { MetadataRoute } from "next";
import siteContent from "@/lib/content";
import { locations } from "@/data/locations";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexnify.in";

  const routeConfig: Record<
    string,
    {
      priority: number;
      changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never";
      lastModified?: Date;
    }
  > = {
    "": { priority: 1.0, changeFrequency: "daily", lastModified: new Date("2026-10-22") },
    "/services": { priority: 0.95, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
    "/work": { priority: 0.9, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
    "/pricing": { priority: 0.9, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
    "/contact": { priority: 0.95, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
    "/about": { priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2026-10-22") },
    "/locations": { priority: 0.85, changeFrequency: "monthly", lastModified: new Date("2026-10-22") },
    "/blog": { priority: 0.85, changeFrequency: "weekly", lastModified: new Date("2026-10-22") },
    "/blog/cost-of-building-a-website-in-india-2026": {
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: new Date("2026-10-01"),
    },
    "/blog/nextjs-vs-wordpress-for-business-websites": {
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: new Date("2026-10-15"),
    },
    "/blog/website-redesign-checklist": {
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: new Date("2026-10-18"),
    },
    "/terms": { priority: 0.3, changeFrequency: "yearly", lastModified: new Date("2026-10-22") },
  };

  const staticRoutes: MetadataRoute.Sitemap = Object.entries(routeConfig).map(
    ([route, config]) => ({
      url: `${baseUrl}${route}`,
      lastModified: config.lastModified || new Date("2026-10-22"),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    })
  );

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = siteContent.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date("2026-10-22"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = Object.keys(locations).map((citySlug) => ({
    url: `${baseUrl}/locations/${citySlug}`,
    lastModified: new Date("2026-10-22"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...locationRoutes];
}
