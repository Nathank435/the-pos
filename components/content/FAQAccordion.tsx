import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export type FAQ = { q: string; a: string };

export function FAQAccordion({ faqs, withSchema = true }: { faqs: FAQ[]; withSchema?: boolean }) {
  if (!faqs?.length) return null;
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-white">
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f, i) => (
        <details key={i} className="group p-5" name="faq">
          <summary className="flex items-center justify-between gap-4 font-heading text-base font-semibold text-navy">
            {f.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-grey transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-grey">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
