/* Blog posts - /blog and /blog/[slug].
 * Body text supports inline markdown links: [label](/internal-path).
 * Keep internal links pointing at commercial pages (reviews, comparisons,
 * hubs, calculator, quotes) and other posts - that's the whole point. */

export type { BlogSection, BlogPost } from "./blog/types";
import type { BlogPost } from "./blog/types";

import { POSTS_1 } from "./blog/posts-1";
import { POSTS_2 } from "./blog/posts-2";
import { POSTS_3 } from "./blog/posts-3";

export const BLOG_POSTS: BlogPost[] = [...POSTS_1, ...POSTS_2, ...POSTS_3];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Featured image for a post: its real photo, or the auto-generated brand cover. */
export function blogCover(post: BlogPost): { src: string; alt: string } {
  if (post.featuredImage) return { src: post.featuredImage, alt: post.featuredAlt ?? post.title };
  return { src: `/blog/${post.slug}/cover`, alt: post.title };
}

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** Newest first. */
export function postsByDate(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
