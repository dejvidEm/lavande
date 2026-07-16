import type { Variants, Transition } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const defaultTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export const reducedMotionTransition: Transition = {
  duration: 0.01,
};

export function getMotionTransition(
  prefersReducedMotion: boolean
): Transition {
  return prefersReducedMotion ? reducedMotionTransition : defaultTransition;
}
