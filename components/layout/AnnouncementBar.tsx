"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ArrowRight, X } from "lucide-react";
import { track } from "@/lib/analytics";

/** Slim promo bar above the header — drives traffic to the 60-second quiz. */
export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative bg-accent text-white">
      <Link
        href="/get-pos-quotes#quiz"
        onClick={() => track("quiz_start", { source: "announcement_bar" })}
        className="group mx-auto flex max-w-6xl items-center justify-center gap-2 px-9 py-2 text-center text-[13px] font-medium sm:text-sm"
      >
        <Zap className="hidden h-4 w-4 shrink-0 fill-white/30 sm:block" />
        <span>
          <span className="hidden sm:inline">Not sure which POS fits your business? </span>
          <span className="font-bold underline decoration-white/40 underline-offset-2 group-hover:decoration-white">
            Take the free 60-second quiz
          </span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-white/70 hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
