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

export default function HomePage() {
  return (
    <>
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
