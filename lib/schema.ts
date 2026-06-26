/* JSON-LD schema builders. Output is injected via <JsonLd>. */
import { SITE, COMPANY } from "./site";
import type { Provider } from "@/data/providers";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.publisher,
    legalName: COMPANY.legalName,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.addressLines[0]}, ${COMPANY.addressLines[1]}`,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: "GB",
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en-GB",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/compare-pos-systems?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: `${SITE.url}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { "@type": "Organization", name: SITE.publisher },
    publisher: { "@type": "Organization", name: SITE.publisher },
  };
}

/** Review schema for a provider review page. */
export function reviewSchema(provider: Provider, path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: provider.name,
      description: provider.summary,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: provider.editorialRating.overall,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: SITE.publisher },
    publisher: { "@type": "Organization", name: SITE.publisher },
    url: `${SITE.url}${path}`,
    datePublished: provider.lastChecked,
  };
}
