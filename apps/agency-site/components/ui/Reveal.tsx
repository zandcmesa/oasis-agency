"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { dur, ease, viewportOnce } from "@/lib/motion";

interface RevealProps {
  delay?: number;
  className?: string;
  as?: "div" | "li";
  children: ReactNode;
}

export function Reveal({ delay = 0, className = "", as = "div", children }: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: dur.base, delay, ease: ease.outExpo }}
    >
      {children}
    </Tag>
  );
}
