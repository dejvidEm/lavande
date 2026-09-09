"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AvatarImage } from "@/components/ui/AvatarImage";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      const total = testimonials.length;
      setActiveIndex(((index % total) + total) % total);
    },
    [testimonials.length]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const active = testimonials[activeIndex];

  return (
    <div className="relative">
      <div className="mb-8 flex items-center gap-3">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "relative h-11 w-11 overflow-hidden rounded-full border-2 transition-colors",
              index === activeIndex
                ? "border-lavender"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            aria-label={`Zobraziť referenciu od ${item.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <AvatarImage src={item.avatar} alt="" />
          </button>
        ))}
      </div>

      <div className="relative">
        <span
          className="pointer-events-none absolute -left-2 -top-6 select-none text-[120px] leading-none text-lavender lg:-left-3 lg:-top-7 lg:text-[150px] xl:text-[165px]"
          aria-hidden="true"
        >
          “
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.35 }}
            className="gradient-testimonial-card rounded-card-sm border border-border/60 p-7 sm:p-9"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <AvatarImage src={active.avatar} alt={active.avatarAlt} />
              </div>
              <div>
                <p className="text-base font-medium text-text-primary">{active.name}</p>
                <p className="text-sm text-text-muted">{active.label}</p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-[1.6]">
              “{active.quote}”
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Predchádzajúca referencia"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Ďalšia referencia"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
