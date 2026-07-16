import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function LessonNotFound() {
  return (
    <section className="py-section-sm md:py-section">
      <Container>
        <SectionHeading
          eyebrow="404"
          title="Táto lekcia neexistuje."
          description="Skontroluj odkaz alebo sa vráť na prehľad lekcií."
        />
        <Link
          href="/#lekcie"
          className="mt-8 inline-flex text-sm font-medium text-lavender hover:text-lavender-medium"
        >
          ← Späť na lekcie
        </Link>
      </Container>
    </section>
  );
}
