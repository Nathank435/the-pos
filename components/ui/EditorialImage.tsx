"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Art-directed image frame. Renders a treated photo when `src` resolves —
 * slightly desaturated + higher contrast, warm navy gradient at the foot for
 * editorial depth (per the brand guide's documentary aesthetic).
 *
 * When `src` is missing or fails to load, it falls back to an on-brand panel
 * (cream → soft-accent gradient) carrying the shot's context label — so layouts
 * look intentional, never broken. Drop a real photo at the mapped path and it
 * appears with no code change.
 */
export function EditorialImage({
  src,
  alt,
  label,
  ratio = "16 / 9",
  className,
  priority,
}: {
  src?: string;
  alt: string;
  /** Short context shown on the placeholder, e.g. "Café POS". */
  label?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg ring-1 ring-border bg-cream", className)}
      style={{ aspectRatio: ratio }}
    >
      {showImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover [filter:saturate(0.92)_contrast(1.04)]"
          />
          {/* Warm editorial depth at the foot */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-white via-accent-soft/40 to-accent-soft">
          {/* Subtle dot texture */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(var(--color-sky) 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-accent ring-1 ring-border">
              <ImageIcon className="h-5 w-5" />
            </span>
            {label && <span className="text-xs font-semibold uppercase tracking-wide text-grey">{label}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
