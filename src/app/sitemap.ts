import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/terms-and-conditions", priority: 0.3 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
