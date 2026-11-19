import { EditorialImage } from "@/components/ui/EditorialImage";
import { cn } from "@/lib/utils";

/**
 * Generated scene-setting photo with the mandatory "Illustrative image." caption
 * (see docs/IMAGE-BRIEF.md). Always lazy-loaded; keep it below any comparison table.
 */
export function IllustrativeFigure({
  src,
  alt,
  ratio,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
  /** Extra classes for the image frame, e.g. a mobile aspect-ratio override. */
  imageClassName?: string;
}) {
  return (
    <figure className={cn(className)}>
      <EditorialImage src={src} alt={alt} ratio={ratio} className={imageClassName} />
      <figcaption className="mt-2 text-xs text-grey">Illustrative image.</figcaption>
    </figure>
  );
}
