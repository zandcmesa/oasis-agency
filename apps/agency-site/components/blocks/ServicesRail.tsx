"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "@/components/blocks/ServiceCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import type { Service } from "@/content/site";

interface ServicesRailProps {
  id?: string;
  eyebrow: string;
  headline: string;
  services: Service[];
}

export function ServicesRail({ id, eyebrow, headline, services }: ServicesRailProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const desktop = window.innerWidth >= 1024;
      setShift(desktop ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [services.length]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const raw = useTransform(scrollYProgress, [0, 1], [0, -shift]);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4, restDelta: 0.5 });

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative bg-paper text-ink lg:h-[calc(var(--n)*100vh)]"
      style={{ "--n": services.length } as React.CSSProperties}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-20 lg:py-0 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mb-10 lg:mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            </Reveal>
            <SplitText as="h2" effect="rise" className="text-display-l text-ink">{headline}</SplitText>
          </div>
          <Reveal delay={0.2}>
            <p className="text-body-s text-ink-subtle hidden lg:block">Keep scrolling</p>
          </Reveal>
        </div>
        <div className="overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory lg:snap-none">
          <motion.div
            ref={trackRef}
            style={reduced ? undefined : { x }}
            className="flex gap-4 w-max px-6 lg:px-8"
          >
            {services.map((s) => (
              <ServiceCard key={s.number} service={s} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
