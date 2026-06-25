import { Badge } from "@/components/ui/Badge";

export function BestForTags({ tags, tone = "accent" }: { tags: string[]; tone?: "accent" | "neutral" }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Badge key={t} tone={tone}>
          {t}
        </Badge>
      ))}
    </div>
  );
}
