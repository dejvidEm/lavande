import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightedText } from "@/components/ui/HighlightedText";

export const metadata: Metadata = {
  title: "Stránka sa nenašla",
  description:
    "Táto stránka neexistuje alebo bola presunutá. Vráť sa na hlavnú stránku Lavande Studio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-section-sm md:py-section">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">CHYBA 404</Eyebrow>
          <h1 className="text-balance text-[2.25rem] font-medium leading-[1.06] tracking-[-0.04em] text-text-primary sm:text-[2.75rem] lg:text-[3.25rem]">
            <HighlightedText
              text="Túto stránku sa nám nepodarilo nájsť."
              highlight="nepodarilo"
            />
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            Skontroluj odkaz alebo pokračuj na hlavnú stránku, kde nájdeš všetky
            lekcie aj cenník.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/">Späť na hlavnú stránku</Button>
            <Button href="/#lekcie" variant="secondary">
              Pozrieť lekcie
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
