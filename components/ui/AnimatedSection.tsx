"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeInUp, viewportOptions } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeInUp" | "fadeIn";
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  variant = "fadeInUp",
}: AnimatedSectionProps) {
  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  return (
    <motion.div
      initial={variants[variant].initial}
      whileInView={variants[variant].animate}
      viewport={viewportOptions}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
