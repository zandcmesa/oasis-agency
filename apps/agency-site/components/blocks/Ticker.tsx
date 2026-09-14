import Link from "next/link";
import { CSSProperties } from "react";

interface TickerProps {
  items: string[];
  tone?: "paper" | "ink";
  speed?: number;
  href?: string;
}

export function Ticker({ items, tone = "paper", speed = 28, href }: TickerProps) {
  const styles = tone === "ink" ? "bg-ink text-on-dark-muted border-line-dark" : "bg-paper text-ink-muted border-line";
  const track = (
    <div className="ticker__track" aria-hidden="true">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-8 pr-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em]">
          <span>{item}</span>
          <span className="w-1.5 h-1.5 rounded-pill bg-soft-clay" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`ticker border-y py-5 ${styles}`} style={{ "--ticker-dur": `${speed}s` } as CSSProperties}>
      <span className="sr-only">{items.join(", ")}</span>
      {href ? <Link href={href} className="block hover:text-current">{track}</Link> : track}
    </div>
  );
}
