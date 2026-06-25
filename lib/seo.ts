import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // leading slash, e.g. "/compare-pos-systems"
  type?: "website" | "article";
};

/** Build per-page metadata with canonical + OG/Twitter wired up. */
export function pageMeta({ title, description, path, type = "website" }: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE.name,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
    },
  };
}
