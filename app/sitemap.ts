import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROVIDER_SLUGS, latestProviderUpdate, PROVIDERS } from "@/data/providers";
import { BUSINESS_TYPE_SLUGS } from "@/data/businessTypes";
import { VERSUS_SLUGS } from "@/data/versusPages";
import { GUIDE_SLUGS, GUIDES } from "@/data/guides";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const updated = new Date(latestProviderUpdate());

  const staticPaths = [
    "",
    "/compare-pos-systems",
    "/compare-card-machines",
    "/card-readers-no-monthly-fee",
    "/card-machine-fee-calculator",
    "/get-pos-quotes",
    "/reviews",
    "/pos-systems",
    "/guides",
    "/blog",
    "/about",
    "/how-we-make-money",
    "/methodology",
    "/contact",
    "/editorial-policy",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/changelog",
    "/authors/nathan-keeble",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: updated,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));

  for (const p of PROVIDERS) {
    entries.push({ url: `${base}/reviews/${p.slug}`, lastModified: new Date(p.lastChanged), changeFrequency: "monthly", priority: 0.7 });
  }
  for (const slug of BUSINESS_TYPE_SLUGS) {
    entries.push({ url: `${base}/pos-systems/${slug}`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const slug of VERSUS_SLUGS) {
    entries.push({ url: `${base}/compare/${slug}`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const slug of GUIDE_SLUGS) {
    const g = GUIDES.find((x) => x.slug === slug);
    entries.push({
      url: `${base}/guides/${slug}`,
      lastModified: g ? new Date(g.lastUpdated) : updated,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const post of BLOG_POSTS) {
    if (post.canonicalUrl) continue; // canonicalised to a money/guide page - don't list as its own URL
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
