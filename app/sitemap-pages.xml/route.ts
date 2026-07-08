import sitemap from "../sitemap";

/** Alternate sitemap URL with a clean fetch history for Search Console.
 *  GSC's record for /sitemap.xml got stuck on a transient failure from its
 *  very first fetch; this serves identical content at a fresh path. */
export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const entries = sitemap();
  const items = entries
    .map((e) => {
      const lastmod =
        e.lastModified instanceof Date
          ? e.lastModified.toISOString()
          : e.lastModified
            ? String(e.lastModified)
            : undefined;
      return [
        "<url>",
        `<loc>${e.url}</loc>`,
        lastmod ? `<lastmod>${lastmod}</lastmod>` : "",
        e.changeFrequency ? `<changefreq>${e.changeFrequency}</changefreq>` : "",
        e.priority !== undefined ? `<priority>${e.priority}</priority>` : "",
        "</url>",
      ]
        .filter(Boolean)
        .join("");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
