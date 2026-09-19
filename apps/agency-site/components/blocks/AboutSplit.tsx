import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";

interface AboutSplitProps {
  id?: string;
  eyebrow: string;
  headline: string;
  body: string;
  loveLine: string;
  brands?: string[];
  cta: { label: string; href: string };
}

export function AboutSplit({ id, eyebrow, headline, body, loveLine, brands, cta }: AboutSplitProps) {
  return (
    <Section id={id}>
      <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          </Reveal>
          <SplitText as="h2" effect="rise" className="text-display-l text-ink max-w-[14ch]">
            {headline}
          </SplitText>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-8">
          <Reveal delay={0.15}>
            <p className="text-body-l text-ink-muted">{body}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-heading text-oasis-green">{loveLine}</p>
          </Reveal>
          {brands && brands.length > 0 && (
            <Reveal delay={0.35}>
              <div className="border-t border-line pt-6">
                <p className="text-eyebrow text-ink-subtle mb-4">Shipped for</p>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {brands.map((b) => (
                    <li key={b} className="text-display-m text-ink/35 hover:text-ink transition-colors duration-[var(--dur-base)]">{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.45}>
            <Button variant="ghost" arrow href={cta.href}>{cta.label}</Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
