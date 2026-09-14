import type { Metadata } from "next";
import { ContactForm } from "@/components/blocks/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Start a project — Oasis Creative Studios",
  description: "Tell us what you need. Websites, AI agent teams, strategy, content, and video.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow className="mb-6">Contact</Eyebrow>
          </Reveal>
          <SplitText as="h1" effect="rise" delay={0.1} className="text-display-xl text-ink mb-8">
            Start a project
          </SplitText>
          <Reveal delay={0.5}>
            <p className="text-body-l text-ink-muted max-w-2xl">
              Tell us what you need and where it hurts. We reply within two business days.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <ContactForm products={products} tone="light" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
