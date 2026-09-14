import { ReactNode } from "react";

export function Eyebrow({
  tone = "ink",
  className = "",
  children,
}: {
  tone?: "ink" | "paper";
  className?: string;
  children: ReactNode;
}) {
  const color = tone === "paper" ? "text-spring" : "text-oasis-green";
  return (
    <p className={`text-eyebrow inline-flex items-center gap-2.5 ${color} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-pill bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}
