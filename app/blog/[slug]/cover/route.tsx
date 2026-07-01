import { ImageResponse } from "next/og";
import { getPost } from "@/data/blog";

/* Auto-generated, on-brand blog cover (1200x630). Used as the featured image +
 * social OG for any post that doesn't set its own photo. Zero licensing, always
 * consistent, one per post. */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const post = getPost(slug);
  const title = (post?.title ?? "ThePOS.co.uk").slice(0, 96);
  const category = post?.category ?? "Guide";
  const readMinutes = post?.readMinutes;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e1c40",
          backgroundImage: "linear-gradient(135deg, #12224a, #0b1530)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 10, backgroundColor: "#1d4ed8" }} />

        {/* faint receipt motif, right side */}
        <svg
          width="520"
          height="520"
          viewBox="0 0 32 32"
          fill="none"
          style={{ position: "absolute", right: -60, top: 70, opacity: 0.06 }}
        >
          <path
            d="M7 4.5h13.5a2 2 0 0 1 2 2V23l-2.4-1.5L17.7 23l-2.4-1.5L12.9 23l-2.4-1.5L8.1 23a2 2 0 0 1-1.1-1.8V6.5a2 2 0 0 1 2-2Z"
            fill="#ffffff"
          />
          <path d="M10.5 9h8.5M10.5 12.5h8.5M10.5 16h5" stroke="#0b1530" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

        {/* top row: wordmark + category chip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: "#ffffff" }}>The</span>
            <span style={{ color: "#60a5fa" }}>POS</span>
            <span style={{ color: "#94a3b8", fontWeight: 600 }}>.co.uk</span>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#1d4ed8",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            {category}
          </div>
        </div>

        {/* title */}
        <div style={{ display: "flex", maxWidth: 940 }}>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 62 : 74, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>
            {title}
          </div>
        </div>

        {/* footer strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ display: "flex", fontWeight: 700, letterSpacing: 3, color: "#60a5fa" }}>
            INDEPENDENT · UK-FOCUSED · PLAIN ENGLISH
          </div>
          {readMinutes ? (
            <div style={{ display: "flex", color: "#94a3b8", fontWeight: 600 }}>{readMinutes} min read</div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
