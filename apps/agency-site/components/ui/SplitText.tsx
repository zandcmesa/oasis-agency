"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ElementType, useRef } from "react";
import { dur, ease, viewportOnce } from "@/lib/motion";

type Effect = "rise" | "fade" | "blur" | "scrollFill";

interface SplitTextProps {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  effect?: Effect;
  delay?: number;
  stagger?: number;
  className?: string;
  children: string;
}

const initial: Record<Exclude<Effect, "scrollFill">, Record<string, string | number>> = {
  rise: { y: "120%" },
  fade: { y: "50%", opacity: 0 },
  blur: { y: "25%", opacity: 0, filter: "blur(10px)" },
};

const target: Record<Exclude<Effect, "scrollFill">, Record<string, string | number>> = {
  rise: { y: "0%" },
  fade: { y: "0%", opacity: 1 },
  blur: { y: "0%", opacity: 1, filter: "blur(0px)" },
};

function FillWord({
  word,
  index,
  count,
  progress,
}: {
  word: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [index / count, (index + 1) / count], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

export function SplitText({
  as = "span",
  effect = "rise",
  delay = 0,
  stagger = 0.06,
  className = "",
  children,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const words = children.split(" ");
  const inView = useInView(ref, viewportOnce);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });

  const Tag = as as ElementType;

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  if (effect === "scrollFill") {
    return (
      <Tag ref={ref} className={className}>
        {words.map((word, i) => (
          <span key={i}>
            <FillWord word={word} index={i} count={words.length} progress={scrollYProgress} />
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block"
              initial={initial[effect]}
              animate={inView ? target[effect] : initial[effect]}
              transition={{
                duration: effect === "rise" ? dur.slow : dur.base,
                delay: delay + i * stagger,
                ease: ease.outExpo,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
