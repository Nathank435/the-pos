import { Container, Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl py-12 text-center">
          <p className="tabular font-heading text-5xl font-bold text-accent">404</p>
          <h1 className="mt-3 font-heading text-2xl font-bold text-navy">Page not found</h1>
          <p className="mt-2 text-grey">
            That page has wandered off. Let's get you back to comparing providers.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/compare-pos-systems">Compare POS systems</ButtonLink>
            <ButtonLink href="/" variant="outline">
              Back to home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
