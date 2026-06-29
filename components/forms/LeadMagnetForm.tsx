"use client";

import { useEffect, useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type Props = {
  source: "quiz" | "calculator";
  title: string;
  copy: string;
  submitLabel: string;
  /** Extra context sent with the lead (e.g. businessType, quizTopMatch, cheapestProvider). */
  context?: Record<string, string | number | boolean | undefined>;
  onSuccess: () => void;
};

/** Value-gate capture: First name · Company · Phone (optional) · Email + consent. */
export function LeadMagnetForm({ source, title, copy, submitLabel, context, onSuccess }: Props) {
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    track("magnet_view", { magnet: source });
    const p = new URLSearchParams(window.location.search);
    const g = (k: string) => p.get(k) || "";
    setUtm({ utmSource: g("utm_source"), utmMedium: g("utm_medium"), utmCampaign: g("utm_campaign"), gclid: g("gclid") });
  }, [source]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!firstName || !company || !email || !consent) {
      setError("Please fill in your name, company and email, and tick consent.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          company,
          phone,
          email,
          consent,
          leadSource: source,
          sourcePage: window.location.pathname,
          ...context,
          ...utm,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data.errors && data.errors[0]) || "Something went wrong. Please try again.");
      }
      track("magnet_submit", { magnet: source, business_type: context?.businessType });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-accent/30 bg-accent-soft/40 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-accent ring-1 ring-border">
          <Lock className="h-4 w-4" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
          <p className="mt-1 text-sm text-grey">{copy}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Field label="First name *" value={firstName} onChange={setFirstName} autoComplete="given-name" required />
        <Field label="Company name *" value={company} onChange={setCompany} autoComplete="organization" required />
        <Field label="Company phone (optional)" value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
        <Field label="Email *" value={email} onChange={setEmail} type="email" autoComplete="email" required />
      </div>

      <label className="mt-3 flex items-start gap-2.5 text-xs text-grey">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-accent"
          required
        />
        <span>
          Email me my results and occasional payment tips. I can unsubscribe anytime - see the{" "}
          <a href="/privacy-policy" className="font-medium text-deepblue underline">
            privacy policy
          </a>
          . *
        </span>
      </label>

      {error && <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-2.5 text-sm text-red-700">{error}</p>}

      <Button type="submit" disabled={submitting} className="mt-4 w-full">
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {submitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-accent"
      />
    </label>
  );
}
