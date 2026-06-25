"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FormState = {
  businessType: string;
  monthlyTurnover: string;
  needsCardMachine: string;
  needsFullPOS: string;
  needsOnlinePayments: string;
  locations: string;
  currentProvider: string;
  priority: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  postcode: string;
  consent: boolean;
};

const EMPTY: FormState = {
  businessType: "",
  monthlyTurnover: "",
  needsCardMachine: "",
  needsFullPOS: "",
  needsOnlinePayments: "",
  locations: "1",
  currentProvider: "",
  priority: "",
  name: "",
  businessName: "",
  email: "",
  phone: "",
  postcode: "",
  consent: false,
};

const BUSINESS_TYPES = [
  "Café",
  "Restaurant",
  "Pub / bar",
  "Retail shop",
  "Salon / barber",
  "Tradesperson",
  "Market stall",
  "Takeaway",
  "Mobile business",
  "Other",
];
const TURNOVERS = ["Under £2,000", "£2,000–£10,000", "£10,000–£30,000", "Over £30,000"];
const PRIORITIES = [
  "Cheapest fees",
  "No contract",
  "Fast payouts",
  "Better POS software",
  "Restaurant features",
  "Retail inventory",
  "Just need simple payments",
];

const STEP_TITLES = ["Business details", "Payment needs", "Current setup", "Contact details"];

export function LeadForm({ defaultProvider }: { defaultProvider?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({ ...EMPTY, currentProvider: defaultProvider ?? "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const grab = (k: string) => params.get(k) || "";
    setUtm({
      utmSource: grab("utm_source"),
      utmMedium: grab("utm_medium"),
      utmCampaign: grab("utm_campaign"),
      gclid: grab("gclid"),
    });
  }, []);

  const set = (patch: Partial<FormState>) => {
    if (!started) {
      setStarted(true);
      track("lead_form_start", {});
    }
    setForm((p) => ({ ...p, ...patch }));
  };

  const canAdvance = () => {
    if (step === 0) return Boolean(form.businessType && form.monthlyTurnover);
    if (step === 1) return Boolean(form.needsCardMachine && form.priority);
    if (step === 2) return true;
    return false;
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.businessName || !form.email || !form.consent) {
      setError("Please complete the required fields and tick consent.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          needsCardMachine: form.needsCardMachine === "Yes",
          needsFullPOS: form.needsFullPOS === "Yes",
          needsOnlinePayments: form.needsOnlinePayments === "Yes",
          sourcePage: window.location.pathname,
          ...utm,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data.errors && data.errors[0]) || "Something went wrong. Please try again.");
      }
      track("lead_form_submit", { businessType: form.businessType, priority: form.priority });
      router.push("/thanks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  const progressLabel =
    step === 3 ? "Last bit — where should we send your matches?" : step === 2 ? "Nearly there" : `Step ${step + 1} of 4`;

  return (
    <form onSubmit={submit} className="rounded-lg border border-border bg-white p-5 sm:p-7">
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-semibold text-navy">{STEP_TITLES[step]}</span>
          <span className="text-xs text-grey">{progressLabel}</span>
        </div>
        <div className="mt-2 flex gap-1.5">
          {STEP_TITLES.map((_, i) => (
            <div
              key={i}
              className={cn("h-1.5 flex-1 rounded-full", i <= step ? "bg-accent" : "bg-border")}
            />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <ChoiceGroup
            label="What type of business do you run?"
            options={BUSINESS_TYPES}
            value={form.businessType}
            onChange={(v) => set({ businessType: v })}
          />
          <ChoiceGroup
            label="How much do you take by card each month?"
            options={TURNOVERS}
            value={form.monthlyTurnover}
            onChange={(v) => set({ monthlyTurnover: v })}
          />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <ChoiceGroup
            label="Do you need a card machine / reader?"
            options={["Yes", "No", "Not sure"]}
            value={form.needsCardMachine}
            onChange={(v) => set({ needsCardMachine: v })}
          />
          <ChoiceGroup
            label="Do you need a full POS / till system?"
            options={["Yes", "No", "Not sure"]}
            value={form.needsFullPOS}
            onChange={(v) => set({ needsFullPOS: v })}
          />
          <ChoiceGroup
            label="Do you need to take online payments too?"
            options={["Yes", "No", "Not sure"]}
            value={form.needsOnlinePayments}
            onChange={(v) => set({ needsOnlinePayments: v })}
          />
          <ChoiceGroup
            label="What matters most?"
            options={PRIORITIES}
            value={form.priority}
            onChange={(v) => set({ priority: v })}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <TextField
            label="How many locations?"
            type="number"
            value={form.locations}
            onChange={(v) => set({ locations: v })}
          />
          <TextField
            label="Current provider (if any)"
            value={form.currentProvider}
            onChange={(v) => set({ currentProvider: v })}
            placeholder="e.g. SumUp, Square, none"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Your name *" value={form.name} onChange={(v) => set({ name: v })} required />
            <TextField
              label="Business name *"
              value={form.businessName}
              onChange={(v) => set({ businessName: v })}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Email *" type="email" value={form.email} onChange={(v) => set({ email: v })} required />
            <TextField label="Phone" type="tel" value={form.phone} onChange={(v) => set({ phone: v })} />
          </div>
          <TextField label="Postcode" value={form.postcode} onChange={(v) => set({ postcode: v })} />

          <label className="flex items-start gap-3 rounded-xl border border-border bg-cream p-3 text-sm text-grey">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => set({ consent: e.target.checked })}
              className="mt-0.5 h-4 w-4 accent-accent"
              required
            />
            <span>
              I agree to The POS contacting me about matching providers and accept the{" "}
              <a href="/privacy-policy" className="font-medium text-deepblue underline">
                privacy policy
              </a>
              . *
            </span>
          </label>
        </div>
      )}

      {error && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>
      )}

      {/* Nav */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <Button type="button" onClick={next} disabled={!canAdvance()}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {submitting ? "Sending…" : "Get My POS Matches"}
          </Button>
        )}
      </div>
    </form>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-navy">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              aria-pressed={on}
              className={cn(
                "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                on ? "border-accent bg-accent text-white" : "border-border bg-cream text-navy hover:border-accent",
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-cream px-3 py-2.5 text-sm text-navy outline-none focus:border-accent"
      />
    </label>
  );
}
