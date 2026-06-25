"use client";

import { ExternalLink } from "lucide-react";
import type { Provider } from "@/data/providers";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** Affiliate CTA. Uses rel="sponsored nofollow" and fires analytics. */
export function ProviderCTA({
  provider,
  size = "md",
  variant = "primary",
  label,
  className,
  sourcePage = "unknown",
}: {
  provider: Provider;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  label?: string;
  className?: string;
  sourcePage?: string;
}) {
  const href = provider.affiliateUrl || provider.quoteUrl || "/get-pos-quotes";
  const isAffiliate = Boolean(provider.affiliateUrl);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-accent text-white hover:bg-[#1e3a8a]",
    secondary: "bg-navy text-white hover:bg-deepblue",
    outline: "border border-border bg-white text-navy hover:bg-cream",
  };
  const sizes = { sm: "h-9 px-3 text-sm", md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-base" };

  return (
    <a
      href={href}
      target={isAffiliate ? "_blank" : undefined}
      rel={isAffiliate ? "sponsored nofollow noopener" : undefined}
      className={cn(base, variants[variant], sizes[size], className)}
      data-provider={provider.slug}
      onClick={() => {
        track("provider_cta_click", { provider: provider.slug, source: sourcePage });
        if (isAffiliate) track("affiliate_click", { provider: provider.slug, source: sourcePage });
      }}
    >
      {label || `Visit ${provider.name}`}
      {isAffiliate && <ExternalLink className="h-4 w-4" />}
    </a>
  );
}
