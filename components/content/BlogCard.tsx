import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { blogCover, type BlogPost } from "@/data/blog";

export function BlogCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  const cover = blogCover(post);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent"
    >
      <EditorialImage
        src={cover.src}
        alt={cover.alt}
        label={post.category}
        ratio="16 / 9"
        priority={priority}
        className="rounded-none ring-0"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge tone="accent">{post.category}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-grey">
            <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-bold text-navy group-hover:text-deepblue">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-grey">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-grey">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-accent">
            Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
