import { ButtonLink } from "@/components/ui/Button";

export function InlineQuoteCTA({
  title = "Not sure what you need?",
  copy = "Tell us how your business takes payments and we'll point you towards providers that actually fit — not just the one with the loudest sales team.",
  primary = { label: "Get My POS Matches", href: "/get-pos-quotes" },
  secondary = { label: "Take the 60-second quiz", href: "/get-pos-quotes#quiz" },
}: {
  title?: string;
  copy?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="rounded-xl bg-navy p-6 text-white sm:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">{copy}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={primary.href} size="lg">
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
