"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

/** Compact newsletter signup for the footer. Posts to /api/newsletter → Klaviyo
 *  (tagged lead_source=newsletter). Email-only for low friction. */
export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading" || status === "done") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("failed");
      track("newsletter_signup", { source });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-white/80">
        You&apos;re in 🎉 Keep an eye on your inbox for card-machine tips and deals.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.co.uk"
          autoComplete="email"
          className="w-full rounded-md border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1e3a8a] disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-300">Something went wrong — please try again.</p>
      )}
      <p className="mt-2 text-xs text-white/45">
        Card-machine tips and the occasional deal. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
