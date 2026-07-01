import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Badge } from "@/components/ui/Badge";
import { LastUpdated } from "@/components/content/LastUpdated";
import { RichText } from "@/components/content/RichText";
import { BlogCard } from "@/components/content/BlogCard";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { InlineQuoteCTA } from "@/components/forms/InlineQuoteCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { BLOG_POSTS, getPost, blogCover } from "@/data/blog";
import { Clock } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: `${post.title} | The POS Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    image: blogCover(post).src,
    canonical: post.canonicalUrl,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const cover = blogCover(post);
  const related = post.relatedPosts.map(getPost).filter(Boolean);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path,
          datePublished: post.date,
          dateModified: post.date,
          image: cover.src,
          author: post.author,
        })}
      />

      <div className="border-b border-border bg-white">
        <Container className="py-8 sm:py-10">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path }]} />
          <div className="mt-4 max-w-3xl">
            <Badge tone="accent">{post.category}</Badge>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">{post.title}</h1>
            <p className="mt-3 text-lg leading-relaxed text-grey">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-grey">
              <span>By {post.author}</span>
              <LastUpdated date={post.date} label="Published" />
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="max-w-3xl">
            <EditorialImage
              src={cover.src}
              alt={cover.alt}
              ratio="16 / 9"
              priority
              className="mb-8"
            />

            <p className="text-lg leading-relaxed text-navy">{post.intro}</p>

            {post.sections.map((s, i) => (
              <section key={i} className="mt-8">
                {s.heading && <h2 className="font-heading text-2xl font-bold text-navy">{s.heading}</h2>}
                {s.paragraphs.filter(Boolean).map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-grey">
                    <RichText>{p}</RichText>
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2 text-grey">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          <RichText>{b}</RichText>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.image && (
                  <figure className="mt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image.src}
                      alt={s.image.alt}
                      loading="lazy"
                      className="w-full rounded-xl border border-border"
                    />
                    {s.image.caption && (
                      <figcaption className="mt-2 text-xs text-grey">{s.image.caption}</figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="font-heading text-2xl font-bold text-navy">FAQs</h2>
                <div className="mt-4">
                  <FAQAccordion faqs={post.faqs} />
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-heading text-base font-semibold text-navy">Useful links</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {post.relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-deepblue hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-accent-soft/40 p-5">
              <h3 className="font-heading text-base font-semibold text-navy">Not sure what you need?</h3>
              <p className="mt-1.5 text-sm text-grey">Take the 60-second quiz and we'll point you to providers that fit.</p>
              <Link
                href="/get-pos-quotes#quiz"
                className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-bold text-white hover:bg-[#1e3a8a]"
              >
                Find my match
              </Link>
            </div>
          </aside>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section muted>
          <Container>
            <h2 className="font-heading text-2xl font-bold text-navy">Keep reading</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => p && <BlogCard key={p.slug} post={p} />)}
            </div>
            <div className="mt-10">
              <InlineQuoteCTA />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
