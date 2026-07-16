"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
};

export function MotionSection({
  children,
  className,
  id,
  stagger = false,
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerContainer : fadeUp}
      transition={prefersReducedMotion ? { duration: 0.01 } : defaultTransition}
    >
      {children}
    </motion.section>
  );
}
