import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InstructorsSection } from "@/components/sections/InstructorsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import {
  buildFaqSchema,
  buildLessonListSchema,
  buildOfferCatalogSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    absolute: siteConfig.title,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildFaqSchema(),
          buildLessonListSchema(),
          buildOfferCatalogSchema(),
        ]}
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <InstructorsSection />
      <StepsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
