import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { LastUpdated } from "@/components/content/LastUpdated";

export function PageHero({
  title,
  intro,
  crumbs,
  lastUpdated,
  children,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  lastUpdated?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-border bg-white">
      <Container className="py-8 sm:py-12">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">{title}</h1>
        {intro && <p className="mt-3 max-w-3xl text-lg leading-relaxed text-grey">{intro}</p>}
        {lastUpdated && (
          <div className="mt-4">
            <LastUpdated date={lastUpdated} />
          </div>
        )}
        {children}
      </Container>
    </div>
  );
}
