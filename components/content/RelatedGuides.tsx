import { getGuide } from "@/data/guides";
import { GuideCard } from "./GuideCard";

export function RelatedGuides({ slugs }: { slugs: string[] }) {
  const guides = slugs.map(getGuide).filter(Boolean);
  if (!guides.length) return null;
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-navy">Related guides</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => g && <GuideCard key={g.slug} guide={g} />)}
      </div>
    </div>
  );
}
