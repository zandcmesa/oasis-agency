"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { dur, ease, viewportOnce } from "@/lib/motion";

interface FitTextProps {
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  children: string;
}

const BASE = 100;

export function FitText({ as = "p", className = "", children }: FitTextProps) {
  const outer = useRef<HTMLDivElement>(null);
  const probe = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState(BASE);
  const inView = useInView(outer, viewportOnce);
  const reduced = useReducedMotion();
  const Tag = as;

  useLayoutEffect(() => {
    const el = outer.current;
    const text = probe.current;
    if (!el || !text) return;
    const fit = () => setSize((el.clientWidth / text.getBoundingClientRect().width) * BASE);
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outer} className={`relative w-full overflow-hidden ${className}`}>
      <span
        ref={probe}
        aria-hidden
        className="absolute invisible whitespace-nowrap"
        style={{ fontSize: BASE, lineHeight: 1 }}
      >
        {children}
      </span>
      <Tag
        className="block whitespace-nowrap leading-none pt-[0.08em] pb-[0.04em]"
        style={{ fontSize: size }}
      >
        <motion.span
          className="block"
          initial={reduced ? false : { y: "110%" }}
          animate={inView || reduced ? { y: "0%" } : { y: "110%" }}
          transition={{ duration: dur.slow, ease: ease.outExpo }}
        >
          {children}
        </motion.span>
      </Tag>
    </div>
  );
}
