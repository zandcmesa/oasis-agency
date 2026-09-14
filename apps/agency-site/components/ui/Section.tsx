import { ReactNode } from "react";

interface SectionProps {
  tone?: "paper" | "ink";
  lines?: boolean;
  id?: string;
  className?: string;
  width?: "wide" | "text";
  children: ReactNode;
}

export function Section({ tone = "paper", lines = false, id, className = "", width = "wide", children }: SectionProps) {
  const toneStyles = tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink";
  const lineStyles = lines ? (tone === "ink" ? "border-t border-line-dark" : "border-t border-line") : "";
  const container = width === "text" ? "max-w-3xl" : "max-w-7xl";
  return (
    <section id={id} data-tone={tone} className={`px-6 lg:px-8 py-20 lg:py-32 ${toneStyles} ${lineStyles} ${className}`}>
      <div className={`${container} mx-auto`}>{children}</div>
    </section>
  );
}
