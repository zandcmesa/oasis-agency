import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";

export function CTABand({ headline, cta }: { headline: string; cta: { label: string; href: string } }) {
  return (
    <Section lines className="py-28 lg:py-40">
      <div className="flex flex-col items-center text-center gap-10">
        <SplitText as="h2" effect="rise" className="text-display-xl text-ink">
          {headline}
        </SplitText>
        <Reveal delay={0.3}>
          <Button href={cta.href} size="lg" arrow>{cta.label}</Button>
        </Reveal>
      </div>
    </Section>
  );
}
