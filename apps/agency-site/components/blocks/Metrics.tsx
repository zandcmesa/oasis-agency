"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { dur, ease, viewportOnce } from "@/lib/motion";

export interface Metric {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, viewportOnce);
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: dur.slow, ease: ease.outExpo });
    return () => controls.stop();
  }, [inView, value, mv, reduced]);

  return (
    <span ref={ref} className="text-metric">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Metrics({ items, tone = "ink" }: { items: Metric[]; tone?: "paper" | "ink" }) {
  const dark = tone === "ink";
  return (
    <Section tone={tone} lines>
      <div className={`grid md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x ${dark ? "md:divide-line-dark" : "md:divide-line"}`}>
        {items.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08} className="md:px-10 first:md:pl-0 last:md:pr-0 flex flex-col gap-6">
            <div>
              <Badge tone={dark ? "dark" : "light"}>{m.label}</Badge>
            </div>
            <CountUp value={m.value} suffix={m.suffix} />
            <p className={`text-body-s max-w-[280px] ${dark ? "text-on-dark-muted" : "text-ink-muted"}`}>{m.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
