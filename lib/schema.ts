/* JSON-LD schema builders. Output is injected via <JsonLd>. */
import { SITE, COMPANY, AUTHOR } from "./site";
import type { Provider } from "@/data/providers";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.publisher,
    legalName: COMPANY.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    foundingDate: "2021",
    description: SITE.description,
    email: SITE.email,
    sameAs: [
      `https://x.com/${SITE.twitter.replace("@", "")}`,
      AUTHOR.linkedin,
      `https://find-and-check.company-information.service.gov.uk/company/${COMPANY.number}`,
    ],
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
  image?: string;
  author?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: `${SITE.url}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    ...(input.image ? { image: `${SITE.url}${input.image}` } : {}),
    author:
      input.author === AUTHOR.name
        ? { "@type": "Person", name: AUTHOR.name, jobTitle: AUTHOR.role, url: `${SITE.url}/authors/nathan-keeble`, image: `${SITE.url}${AUTHOR.photo}`, sameAs: [AUTHOR.linkedin] }
        : { "@type": input.author ? "Person" : "Organization", name: input.author || SITE.publisher },
    publisher: { "@type": "Organization", name: SITE.publisher, logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` } },
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
      brand: { "@type": "Brand", name: provider.name },
      ...(provider.logo ? { image: provider.logo.startsWith("http") ? provider.logo : `${SITE.url}${provider.logo}` } : {}),
    },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: provider.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })),
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: provider.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: provider.editorialRating.overall,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Person", name: AUTHOR.name, jobTitle: AUTHOR.role, url: `${SITE.url}/authors/nathan-keeble`, image: `${SITE.url}${AUTHOR.photo}`, sameAs: [AUTHOR.linkedin] },
    publisher: { "@type": "Organization", name: SITE.publisher, logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` } },
    url: `${SITE.url}${path}`,
    datePublished: provider.lastChecked,
  };
}

/** Ranked provider list for comparison pages - carousel/AI-citation eligibility. */
export function providerItemListSchema(providers: Provider[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE.url}/reviews/${p.slug}`,
    })),
  };
}

/** The fee calculator as a free FinanceApplication. */
export function calculatorSchema(path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Card Machine Fee Calculator UK",
    url: `${SITE.url}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: 0, priceCurrency: "GBP" },
    publisher: { "@type": "Organization", name: SITE.publisher },
  };
}
