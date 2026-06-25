import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export type InfoSection = { heading?: string; paragraphs?: string[]; bullets?: string[] };

export function InfoPage({
  title,
  intro,
  crumbLabel,
  path,
  sections,
  lastUpdated,
}: {
  title: string;
  intro?: string;
  crumbLabel: string;
  path: string;
  sections: InfoSection[];
  lastUpdated?: string;
}) {
  return (
    <>
      <PageHero
        title={title}
        intro={intro}
        crumbs={[{ name: crumbLabel, path }]}
        lastUpdated={lastUpdated}
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-8">
            {sections.map((s, i) => (
              <section key={i}>
                {s.heading && <h2 className="font-heading text-xl font-bold text-navy">{s.heading}</h2>}
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-grey">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-grey">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
