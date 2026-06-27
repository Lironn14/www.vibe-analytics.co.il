import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE = "https://www.vibe-analytics.co.il";
const LANGS = ["he", "en"] as const;

const staticPages = ["", "/services", "/about", "/blog", "/contact", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.flatMap((page) =>
    LANGS.map((lang) => ({
      url: `${BASE}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const blogEntries = posts.flatMap((post) =>
    LANGS.map((lang) => ({
      url: `${BASE}/${lang}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
