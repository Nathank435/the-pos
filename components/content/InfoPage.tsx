import { Mail } from "lucide-react";
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
  contactEmail,
  header,
}: {
  title: string;
  intro?: string;
  crumbLabel: string;
  path: string;
  sections: InfoSection[];
  lastUpdated?: string;
  /** If set, renders a prominent "Email us" mailto button under the intro. */
  contactEmail?: string;
  /** Optional block rendered above the sections (e.g. a founder card). */
  header?: React.ReactNode;
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
            {header}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover"
              >
                <Mail className="h-4 w-4" /> Email us at {contactEmail}
              </a>
            )}
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
