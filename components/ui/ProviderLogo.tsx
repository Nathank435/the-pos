"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getProviderLogo } from "@/data/providers";

/**
 * Provider logo. Renders the real brand SVG (from data/providers.ts → PROVIDER_LOGOS)
 * inside a white tile with `mix-blend-multiply` so transparent vectors sit cleanly on
 * any background. If no logo is mapped — or the asset fails to load — it falls back to a
 * tidy navy initials tile, so the UI never shows a broken image.
 */
export function ProviderLogo({
  name,
  slug,
  className,
  size = "md",
}: {
  name: string;
  slug?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const src = slug ? getProviderLogo(slug) : undefined;
  const [failed, setFailed] = useState(false);

  const heights = { sm: "h-8", md: "h-10", lg: "h-12" };
  const initialSizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };

  if (src && !failed) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-white px-2",
          heights[size],
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-3/5 w-auto max-w-[110px] object-contain mix-blend-multiply"
        />
      </span>
    );
  }

  const initials = name
    .replace(/PayPal\s/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg bg-navy font-bold text-white",
        initialSizes[size],
        className,
      )}
    >
      {initials}
    </span>
  );
}
