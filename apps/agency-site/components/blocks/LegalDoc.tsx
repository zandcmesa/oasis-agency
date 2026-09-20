import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import type { LegalDocument } from "@/content/legal";

export function LegalDoc({ eyebrow, title, lead, effective, sections }: LegalDocument) {
  return (
    <div className="flex flex-col">
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          </Reveal>
          <SplitText as="h1" effect="rise" delay={0.1} className="text-display-xl text-ink mb-8">
            {title}
          </SplitText>
          <Reveal delay={0.5}>
            <p className="text-body-l text-ink-muted max-w-2xl">{lead}</p>
            <p className="text-eyebrow text-ink-subtle mt-8">Effective {effective}</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="text-heading text-ink mb-5">{s.heading}</h2>
              <div className="flex flex-col gap-4 text-body text-ink-muted">
                {s.body.map((block, i) =>
                  Array.isArray(block) ? (
                    <ul key={i} className="flex flex-col gap-3 list-disc pl-5 marker:text-oasis-green">
                      {block.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{block}</p>
                  )
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
