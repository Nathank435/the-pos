"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calculator, X } from "lucide-react";
import { track } from "@/lib/analytics";

/* ------------------------------------------------------------------ *
 * Exit-intent modal → fee calculator.
 *
 * Timing rules are based on what actually works for exit-intent (vs. just
 * firing on the first mouse-out, which tanks conversion and annoys people):
 *
 *  1. ENGAGEMENT GATE - don't arm until the visitor has shown intent:
 *     at least ENGAGE_MS on the page OR scrolled past ENGAGE_SCROLL.
 *     Firing instantly catches bouncers who never engaged; gating lifts
 *     conversion and cuts complaints.
 *  2. DESKTOP TRIGGER - cursor leaves through the TOP of the viewport
 *     (toward the tab bar / close button). Side/bottom exits are ignored.
 *  3. MOBILE TRIGGER - there's no cursor, so true exit-intent doesn't exist.
 *     We use the best available proxy: a fast UPWARD scroll (reaching for the
 *     back button / address bar) after they've scrolled down, plus a quiet
 *     time fallback so engaged readers still see it once.
 *  4. FREQUENCY CAP - show at most once, then suppress for SUPPRESS_DAYS
 *     (and permanently for this visitor once they click through). Repeated
 *     pop-ups are the #1 reason these get hated.
 *  5. EXCLUSIONS - never on the calculator itself or the lead/thank-you
 *     pages (they're already converting).
 * ------------------------------------------------------------------ */

const CALCULATOR_PATH = "/card-machine-fee-calculator";
const ENGAGE_MS = 12_000; // ~12s on page before arming
const ENGAGE_SCROLL = 0.25; // …or 25% scroll depth, whichever first
const MOBILE_FALLBACK_MS = 35_000; // engaged mobile reader sees it by ~35s
const SUPPRESS_DAYS = 14;
const STORAGE_KEY = "tp_exit_intent_v1";

const EXCLUDED = [CALCULATOR_PATH, "/get-pos-quotes", "/thanks"];

function suppressed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { until } = JSON.parse(raw) as { until: number };
    return typeof until === "number" && Date.now() < until;
  } catch {
    return false;
  }
}

function suppressFor(days: number) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ until: Date.now() + days * 86_400_000 }));
  } catch {
    /* ignore */
  }
}

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);

  const fire = useCallback(() => {
    if (firedRef.current || suppressed()) return;
    firedRef.current = true;
    suppressFor(SUPPRESS_DAYS); // count it as shown even across reloads
    setOpen(true);
    track("exit_intent_view", { path: pathname });
  }, [pathname]);

  useEffect(() => {
    if (EXCLUDED.some((p) => pathname?.startsWith(p))) return;
    if (suppressed()) return;

    let armed = false;
    const arm = () => {
      armed = true;
    };

    // (1) Engagement gate: time OR scroll depth.
    const timer = window.setTimeout(arm, ENGAGE_MS);
    const onScrollDepth = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= ENGAGE_SCROLL) arm();
    };
    window.addEventListener("scroll", onScrollDepth, { passive: true });

    // (2) Desktop: cursor exits through the top edge.
    const onMouseOut = (e: MouseEvent) => {
      if (armed && e.clientY <= 0 && !e.relatedTarget) fire();
    };

    // (3) Mobile: fast upward scroll after scrolling down + a time fallback.
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let lastY = window.scrollY;
    let lastT = Date.now();
    let wentDown = false;
    const onScrollIntent = () => {
      const y = window.scrollY;
      const now = Date.now();
      if (y > lastY + 5) wentDown = true;
      const dv = (lastY - y) / Math.max(now - lastT, 1); // upward px/ms
      if (armed && wentDown && y < 120 && dv > 1.2) fire();
      lastY = y;
      lastT = now;
    };
    let mobileFallback: number | undefined;
    if (isTouch) {
      window.addEventListener("scroll", onScrollIntent, { passive: true });
      mobileFallback = window.setTimeout(() => armed && fire(), MOBILE_FALLBACK_MS);
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      window.clearTimeout(timer);
      if (mobileFallback) window.clearTimeout(mobileFallback);
      window.removeEventListener("scroll", onScrollDepth);
      window.removeEventListener("scroll", onScrollIntent);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [pathname, fire]);

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close("dismiss");
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close(reason: "dismiss" | "convert") {
    if (reason === "dismiss") track("exit_intent_dismiss", { path: pathname });
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => close("dismiss")} />

      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-white shadow-2xl">
        <button
          onClick={() => close("dismiss")}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-grey transition-colors hover:bg-cream hover:text-navy"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
            <Calculator className="h-6 w-6" />
          </span>

          <h2 id="exit-intent-title" className="mt-4 font-heading text-2xl font-bold leading-tight text-navy">
            Before you go - are you overpaying on card fees?
          </h2>
          <p className="mt-2 text-grey">
            Most UK small businesses are on the wrong plan for their turnover. Pop in your numbers and see your real
            all-in rate and the cheapest provider for you - takes about 60 seconds, no signup.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              href={CALCULATOR_PATH}
              onClick={() => {
                track("exit_intent_click", { path: pathname });
                suppressFor(365); // converted - don't nag again
                close("convert");
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-bold tracking-tight text-white transition-colors hover:bg-accent-hover"
            >
              <Calculator className="h-4 w-4" /> Calculate my card fees
            </Link>
            <button
              onClick={() => close("dismiss")}
              className="h-10 text-sm font-medium text-grey transition-colors hover:text-navy"
            >
              No thanks, I&apos;m happy with my fees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
