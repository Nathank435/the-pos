import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/content/BlogCard";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { pageMeta } from "@/lib/seo";
import { postsByDate } from "@/data/blog";

export const metadata: Metadata = pageMeta({
  title: "The POS Blog - UK Card Machine & POS Tips",
  description:
    "Plain-English tips, comparisons and money-saving advice on UK card machines, POS systems and payment fees for small businesses.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = postsByDate();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        title="The POS Blog"
        intro="Sharp, practical tips on card machines, POS systems and payment fees - written for busy UK business owners, not fintech insiders."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <Section>
        <Container>
          {/* Featured post (latest) */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2 lg:col-span-3">
              <BlogCard post={featured} priority />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>
      <Section muted>
        <Container>
          <InlineQuoteCTA />
        </Container>
      </Section>
    </>
  );
}
