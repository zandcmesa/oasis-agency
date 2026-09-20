import { ReactNode } from "react";

export function Badge({ tone = "dark", children }: { tone?: "dark" | "light"; children: ReactNode }) {
  const styles = tone === "dark" ? "glass text-on-dark" : "bg-ink/6 text-ink";
  return (
    <span className={`inline-block text-eyebrow rounded-pill px-3.5 py-2 ${styles}`}>{children}</span>
  );
}
