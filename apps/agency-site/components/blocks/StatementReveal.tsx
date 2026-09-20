import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";

export function StatementReveal({ text, tone = "ink" }: { text: string; tone?: "paper" | "ink" }) {
  return (
    <Section tone={tone} className="py-32 lg:py-48">
      <SplitText as="p" effect="scrollFill" className={`text-display-l max-w-5xl ${tone === "ink" ? "text-paper" : "text-ink"}`}>
        {text}
      </SplitText>
    </Section>
  );
}
