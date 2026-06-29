"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { recommend, type QuizAnswers } from "@/lib/recommendationEngine";
import { ProviderLogo } from "@/components/ui/ProviderLogo";
import { RatingStars } from "@/components/comparison/ProviderRating";
import { ProviderCTA } from "@/components/comparison/ProviderCTA";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type QKey = keyof QuizAnswers;
type Question = { key: QKey; q: string; options: { label: string; value: string }[] };

const QUESTIONS: Question[] = [
  {
    key: "businessType",
    q: "What type of business do you run?",
    options: [
      { label: "Café", value: "cafe" },
      { label: "Restaurant", value: "restaurant" },
      { label: "Pub / bar", value: "pub-bar" },
      { label: "Retail shop", value: "retail" },
      { label: "Salon / barber", value: "salon" },
      { label: "Tradesperson", value: "tradesperson" },
      { label: "Market stall", value: "market-stall" },
      { label: "Takeaway", value: "takeaway" },
      { label: "Mobile business", value: "mobile" },
      { label: "Other", value: "other" },
    ],
  },
  {
    key: "monthlyTurnover",
    q: "How much do you take by card each month?",
    options: [
      { label: "Under £2k", value: "under-2k" },
      { label: "£2k–£10k", value: "2k-10k" },
      { label: "£10k–£30k", value: "10k-30k" },
      { label: "Over £30k", value: "over-30k" },
    ],
  },
  {
    key: "systemType",
    q: "Do you need a full till/POS system or just a card reader?",
    options: [
      { label: "Just a card reader", value: "card-reader" },
      { label: "Full POS / till", value: "full-pos" },
    ],
  },
  {
    key: "avoidContracts",
    q: "Do you want to avoid contracts?",
    options: [
      { label: "Yes, no contract", value: "yes" },
      { label: "Don't mind one", value: "no" },
      { label: "Either", value: "either" },
    ],
  },
  {
    key: "sellOnline",
    q: "Do you sell online too?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    key: "needInventory",
    q: "Do you need inventory management?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    key: "needHospitality",
    q: "Do you need hospitality features (tables, tabs, tipping)?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    key: "fastPayouts",
    q: "Is getting paid fast important?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "Not really", value: "no" },
    ],
  },
  {
    key: "priority",
    q: "What matters most to you?",
    options: [
      { label: "Lowest fees", value: "lowest-fees" },
      { label: "Simplicity", value: "simplicity" },
      { label: "Software features", value: "software" },
      { label: "Flexibility", value: "flexibility" },
    ],
  },
];

export function QuizForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [done, setDone] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [started, setStarted] = useState(false);

  const choose = (key: QKey, value: string) => {
    if (!started) {
      setStarted(true);
      track("quiz_start", {});
    }
    const nextAnswers = { ...answers, [key]: value } as Partial<QuizAnswers>;
    setAnswers(nextAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
      track("quiz_question_answered", { step: step + 1, question: QUESTIONS[step].key, answer: value });
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
    setCaptured(false);
  };

  // Quiz finished — gate the full results behind the lead-magnet capture.
  if (done && !captured) {
    const preview = recommend(answers as QuizAnswers);
    return (
      <div className="rounded-lg border border-border bg-white p-5 sm:p-7">
        <h2 className="font-heading text-xl font-bold text-navy">Your matches are ready 🎉</h2>
        <p className="mt-2 text-sm leading-relaxed text-grey">
          Based on your answers, <span className="font-semibold text-navy">{preview.bestOverall.provider.name}</span> looks
          like a strong fit. Pop in your details to unlock your full results — best overall, cheapest, best no-contract
          and software picks — plus tailored quotes.
        </p>
        <div className="mt-5">
          <LeadMagnetForm
            source="quiz"
            title="Unlock your full POS matches"
            copy="We'll show your results instantly and email you a copy."
            submitLabel="Show my matches"
            context={{
              businessType: answers.businessType,
              monthlyTurnover: answers.monthlyTurnover,
              priority: answers.priority,
              quizTopMatch: preview.bestOverall.provider.name,
            }}
            onSuccess={() => {
              setCaptured(true);
              track("quiz_complete", { business_type: answers.businessType, top_match: preview.bestOverall.provider.name });
            }}
          />
        </div>
        <button type="button" onClick={reset} className="mt-4 text-xs font-medium text-grey underline">
          Start over
        </button>
      </div>
    );
  }

  if (done && captured) {
    const result = recommend(answers as QuizAnswers);
    const picks = [
      { label: "Best overall match", rec: result.bestOverall, tone: "accent" as const },
      { label: "Cheapest likely option", rec: result.cheapest, tone: "neutral" as const },
      { label: "Best no-contract option", rec: result.bestNoContract, tone: "neutral" as const },
      { label: "Best for software", rec: result.bestForSoftware, tone: "neutral" as const },
    ];
    const seen = new Set<string>();

    return (
      <div className="rounded-lg border border-border bg-white p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-heading text-xl font-bold text-navy">Your POS matches</h2>
          <Button type="button" variant="outline" size="sm" onClick={reset}>
            <RotateCcw className="h-4 w-4" /> Start over
          </Button>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-grey">{result.summary}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {picks.map(({ label, rec, tone }) => {
            const dup = seen.has(rec.provider.slug);
            seen.add(rec.provider.slug);
            return (
              <div key={label} className={cn("rounded-lg border p-4", dup ? "border-border bg-cream/40" : "border-border bg-white")}>
                <Badge tone={tone}>{label}</Badge>
                <div className="mt-3 flex items-center gap-3">
                  <ProviderLogo name={rec.provider.name} slug={rec.provider.slug} size="sm" />
                  <div>
                    <Link href={`/reviews/${rec.provider.slug}`} className="font-heading font-bold text-navy hover:underline">
                      {rec.provider.name}
                    </Link>
                    <RatingStars value={rec.provider.editorialRating.overall} />
                  </div>
                </div>
                {rec.reasons.length > 0 && (
                  <p className="mt-2 text-xs text-grey">Why: {rec.reasons.join(", ")}.</p>
                )}
                <div className="mt-3">
                  <ProviderCTA provider={rec.provider} size="sm" sourcePage="quiz" className="w-full" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/get-pos-quotes"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white hover:bg-deepblue"
          >
            Get tailored quotes
          </Link>
          <Link
            href="/compare-pos-systems"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-white px-5 text-sm font-semibold text-navy hover:bg-cream"
          >
            See full comparison
          </Link>
        </div>
        <p className="mt-4 text-xs text-grey">
          This is comparison guidance based on your answers, not financial advice. Always check provider terms before
          signing.
        </p>
      </div>
    );
  }

  const current = QUESTIONS[step];
  return (
    <div className="rounded-lg border border-border bg-white p-5 sm:p-7">
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-grey">
            Question {step + 1} of {QUESTIONS.length}
          </span>
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-1 text-xs font-medium text-deepblue">
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </button>
          )}
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
      </div>

      <h2 className="font-heading text-xl font-bold text-navy">{current.q}</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {current.options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => choose(current.key, o.value)}
            className="group flex items-center justify-between rounded-xl border border-border bg-cream px-4 py-3 text-left text-sm font-medium text-navy transition-colors hover:border-accent hover:bg-accent-soft"
          >
            {o.label}
            <ArrowRight className="h-4 w-4 text-grey transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
          </button>
        ))}
      </div>
    </div>
  );
}
