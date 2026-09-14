"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { ease, viewportOnce } from "@/lib/motion";

export function MediaReveal({ className = "", children }: { className?: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={reduced ? false : { scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: ease.outExpo }}
      >
        {children}
      </motion.div>
    </div>
  );
}
