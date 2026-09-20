"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { dur, ease } from "@/lib/motion";

const curves = [
  ["out-expo", "cubic-bezier(0.16, 1, 0.3, 1)", ease.outExpo, "Reveals, header, cards"],
  ["swap", "cubic-bezier(0.25, 1, 0.33, 1)", ease.swap, "Nav text swap"],
  ["arrow", "cubic-bezier(0.12, 0.75, 0.4, 1)", ease.arrow, "Arrow button"],
] as const;

export function MotionDemo() {
  const [run, setRun] = useState(0);
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 gap-6">
        {curves.map(([name, css, curve, use]) => (
          <div key={name} className="rounded-md hairline bg-card p-6">
            <p className="font-medium text-ink">{name}</p>
            <p className="text-body-s text-ink-muted font-mono">{css}</p>
            <p className="text-body-s text-ink-subtle mb-6">{use}</p>
            <div className="h-10 rounded-sm bg-ink/5 relative overflow-hidden">
              <motion.div
                key={run}
                className="absolute top-2 left-2 w-6 h-6 rounded-pill bg-oasis-green"
                initial={{ x: 0 }}
                animate={{ x: "calc(100% + 200px)" }}
                transition={{ duration: dur.slow, ease: curve }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <Button onClick={() => setRun((r) => r + 1)} variant="primary" arrow>Replay</Button>
        <p className="text-body-s text-ink-muted">Durations: fast 200ms, base 550ms, slow 900ms, ticker 28s. Stagger 60ms per word, 80ms per card.</p>
      </div>
      <div key={`t-${run}`} className="grid md:grid-cols-2 gap-8 pt-6 border-t border-line">
        {(["rise", "fade", "blur"] as const).map((effect) => (
          <div key={effect}>
            <p className="text-eyebrow text-ink-subtle mb-3">SplitText {effect}</p>
            <SplitText as="p" effect={effect} className="text-display-m text-ink">Design that holds up</SplitText>
          </div>
        ))}
        <div>
          <p className="text-eyebrow text-ink-subtle mb-3">SplitText scrollFill</p>
          <SplitText as="p" effect="scrollFill" className="text-display-m text-ink">Words fill as you scroll past</SplitText>
        </div>
      </div>
    </div>
  );
}
