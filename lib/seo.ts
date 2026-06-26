import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // leading slash, e.g. "/compare-pos-systems"
  type?: "website" | "article";
  /** Optional featured image (leading-slash path), used for OG/Twitter cards. */
  image?: string;
};

/** Build per-page metadata with canonical + OG/Twitter wired up. */
export function pageMeta({ title, description, path, type = "website", image }: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const images = image ? [{ url: `${SITE.url}${image}` }] : undefined;
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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      images,
    },
  };
}
