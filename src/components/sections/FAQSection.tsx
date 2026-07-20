"use client";

import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/ui/MotionSection";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/site";

export function FAQSection() {
  return (
    <MotionSection id="faq" className="py-section-sm md:py-section">
      <Container>
        <div className="rounded-card bg-beige-light px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Odpovede na otázky pred prvou lekciou."
                highlight="otázky"
                description="Nenašla si odpoveď? Napíš nám a radi ti poradíme s výberom vhodnej lekcie."
              />
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="outline"
                className="mt-8"
              >
                Napísať nám
              </Button>
            </div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
