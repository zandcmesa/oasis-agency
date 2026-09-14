"use client";

import { useReducedMotion } from "framer-motion";
import { ContactForm } from "@/components/blocks/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { SplitText } from "@/components/ui/SplitText";
import { withBasePath } from "@/lib/utils";

interface HeroProps {
  eyebrow: string;
  headline: string;
  sub: string;
  products: string[];
}

function HeroMedia() {
  const reduced = useReducedMotion();
  const poster = withBasePath("/atmosphere/hero-grass.jpg");
  if (reduced) {
    return <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />;
  }
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      src={withBasePath("/atmosphere/hero-grass.mp4")}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export function Hero({ eyebrow, headline, sub, products }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-ink text-paper overflow-hidden">
      <HeroMedia />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 via-45% to-transparent pointer-events-none" />

      <div className="relative flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-8">
        <div className="relative flex-1 grid lg:grid-cols-12 gap-x-10 gap-y-12 items-end pb-10 lg:pb-14">
          <div className="hidden lg:block absolute top-0 bottom-0 left-[calc(66.666%-1.25rem)] w-px bg-line-dark" aria-hidden="true" />

          <div className="lg:col-span-8 lg:pr-10">
            <Reveal delay={0.1}>
              <Eyebrow tone="paper" className="mb-6">{eyebrow}</Eyebrow>
            </Reveal>
            <SplitText as="h1" effect="rise" delay={0.2} className="text-display-xl text-paper max-w-[12ch]">
              {headline}
            </SplitText>
            <Reveal delay={0.7}>
              <p className="text-body-l text-on-dark-muted max-w-xl mt-8">{sub}</p>
            </Reveal>
          </div>

          <Reveal delay={0.9} className="lg:col-span-4">
            <div className="glass hairline-dark rounded-lg p-6 lg:p-7">
              <h2 className="text-heading mb-1">Start a conversation</h2>
              <p className="text-body-s text-on-dark-muted mb-5">Tell us what you need. We reply within two business days.</p>
              <ContactForm products={products} tone="dark" compact />
            </div>
          </Reveal>
        </div>

        <Reveal delay={1.1}>
          <div className="border-t border-line-dark pt-6 flex items-center justify-between gap-6">
            <ScrollCue />
            <ul className="hidden lg:flex items-center gap-7 text-eyebrow text-on-dark-subtle">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
