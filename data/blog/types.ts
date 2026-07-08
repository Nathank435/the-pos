/* Blog content types - shared by the post chunk files and the assembly. */
export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional in-content image (WebP), rendered as a captioned figure. */
  image?: { src: string; alt: string; caption?: string };
};

export type BlogPost = {
  slug: string;
  /** If set, canonical URL points here instead of self (de-dupe vs a money/guide page). */
  canonicalUrl?: string;
  title: string;
  excerpt: string;
  category: "Comparisons" | "Fees & saving" | "How-to" | "By business";
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  /** Optional real photo. If omitted, an on-brand cover is auto-generated at
   *  /blog/<slug>/cover (see blogCover()). */
  featuredImage?: string; // /images/blog/<slug>.jpg
  featuredAlt?: string;
  intro: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
  /** Other post slugs to cross-link. */
  relatedPosts: string[];
  /** Commercial/internal pages to link in the sidebar + CTA. */
  relatedLinks: { label: string; href: string }[];
};
