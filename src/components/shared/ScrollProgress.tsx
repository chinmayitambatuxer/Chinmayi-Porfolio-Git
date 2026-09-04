"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

type ScrollProgressProps = {
  accent: string;
};

export function ScrollProgress({ accent }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left"
      style={{ scaleX, backgroundColor: accent }}
      aria-hidden
    />
  );
}
