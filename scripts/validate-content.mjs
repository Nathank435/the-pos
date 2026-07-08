/* Content integrity validator - runs before every build (prebuild).
 *
 * Encodes the checks we previously did by hand after each content batch:
 * broken cross-links, missing images and drifting data ship as build
 * FAILURES instead of production surprises. Zero dependencies - Node's
 * native TypeScript type-stripping loads the data modules directly. */
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const check = (cond, msg) => cond || errors.push(msg);

// Assemble posts from the chunk files directly - Node ESM can't resolve the
// extensionless chunk imports inside data/blog.ts (Next's bundler can).
const BLOG_POSTS = [
  ...(await import(join(root, "data/blog/posts-1.ts"))).POSTS_1,
  ...(await import(join(root, "data/blog/posts-2.ts"))).POSTS_2,
  ...(await import(join(root, "data/blog/posts-3.ts"))).POSTS_3,
];
const { PROVIDERS } = await import(join(root, "data/providers.ts"));
const { CALC_PROVIDERS } = await import(join(root, "lib/calculator.ts"));
const { REVIEWS } = await import(join(root, "data/reviews.ts"));
const { VERSUS_PAGES } = await import(join(root, "data/versusPages.ts"));

const CATEGORIES = new Set(["Comparisons", "Fees & saving", "How-to", "By business"]);
const blogSlugs = new Set(BLOG_POSTS.map((p) => p.slug));
const providerSlugs = new Set(PROVIDERS.map((p) => p.slug));

// --- blog posts -----------------------------------------------------------
check(blogSlugs.size === BLOG_POSTS.length, "duplicate blog slugs");
for (const p of BLOG_POSTS) {
  check(CATEGORIES.has(p.category), `${p.slug}: unknown category '${p.category}'`);
  check(/^\d{4}-\d{2}-\d{2}$/.test(p.date), `${p.slug}: bad date '${p.date}'`);
  if (p.featuredImage) {
    check(existsSync(join(root, "public", p.featuredImage)), `${p.slug}: missing image ${p.featuredImage}`);
    check(p.featuredImage.endsWith(".webp") || p.featuredImage.endsWith(".jpg"),
      `${p.slug}: featured image should be webp/jpg`);
  }
  for (const rel of p.relatedPosts) {
    check(blogSlugs.has(rel), `${p.slug}: relatedPosts -> unknown slug '${rel}'`);
  }
  for (const s of p.sections) {
    if (s.image) check(existsSync(join(root, "public", s.image.src)), `${p.slug}: missing inline image ${s.image.src}`);
  }
}

// --- providers ------------------------------------------------------------
check(providerSlugs.size === PROVIDERS.length, "duplicate provider slugs");
for (const p of PROVIDERS) {
  check(/^\d{4}-\d{2}-\d{2}$/.test(p.lastChecked), `${p.slug}: bad lastChecked`);
  check(/^\d{4}-\d{2}-\d{2}$/.test(p.lastChanged), `${p.slug}: bad lastChanged`);
  check(p.changelog.length > 0, `${p.slug}: empty changelog`);
  check(p.lastChanged >= p.changelog[p.changelog.length - 1].date, `${p.slug}: lastChanged older than first changelog entry`);
}

// --- reviews join to providers --------------------------------------------
for (const r of REVIEWS) {
  check(providerSlugs.has(r.slug), `review '${r.slug}' has no matching provider`);
  for (const alt of r.alternatives ?? []) {
    check(providerSlugs.has(alt), `review '${r.slug}': unknown alternative '${alt}'`);
  }
  if (r.image) check(existsSync(join(root, "public", r.image.src)), `review '${r.slug}': missing image ${r.image.src}`);
}
for (const p of PROVIDERS) {
  check(REVIEWS.some((r) => r.slug === p.slug), `provider '${p.slug}' has no review content`);
}

// --- calculator joins to providers -----------------------------------------
for (const c of CALC_PROVIDERS) {
  check(providerSlugs.has(c.slug), `calculator provider '${c.slug}' not in PROVIDERS`);
}

// --- versus pages join to providers ----------------------------------------
for (const v of VERSUS_PAGES) {
  check(providerSlugs.has(v.a), `versus '${v.slug ?? v.a}': unknown provider '${v.a}'`);
  check(providerSlugs.has(v.b), `versus '${v.slug ?? v.b}': unknown provider '${v.b}'`);
}

// --- report ----------------------------------------------------------------
if (errors.length) {
  console.error(`\ncontent validation FAILED (${errors.length}):`);
  for (const e of errors) console.error("  ✗", e);
  process.exit(1);
}
console.log(`content validation OK: ${BLOG_POSTS.length} posts, ${PROVIDERS.length} providers, ${REVIEWS.length} reviews, ${VERSUS_PAGES.length} versus pages`);
