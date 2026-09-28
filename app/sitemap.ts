import type { MetadataRoute } from "next";
import siteContent from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nivora.studio";

  const routeConfig: Record<string, { priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = {
    "": { priority: 1.0, changeFrequency: "daily" },
    "/work": { priority: 0.9, changeFrequency: "weekly" },
    "/services": { priority: 0.9, changeFrequency: "weekly" },
    "/contact": { priority: 0.95, changeFrequency: "weekly" },
    "/about": { priority: 0.8, changeFrequency: "monthly" },
    "/terms": { priority: 0.3, changeFrequency: "yearly" },
  };

  const staticRoutes: MetadataRoute.Sitemap = Object.entries(routeConfig).map(
    ([route, config]) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = siteContent.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes];
}
