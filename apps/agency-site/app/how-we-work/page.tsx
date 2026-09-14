import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How we work — Oasis Creative Studios",
  description:
    "Our approach: build systems, integrate platforms, publish with confidence, and ensure you own everything. The agency that can actually build things.",
};

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-display-xl text-ink mb-8">
              How we work
            </h1>
            <p className="text-body-l text-ink-muted max-w-4xl">
              We build systems that ship. Not templates, not wrappers — real
              engineering and design craft. The agency that can actually build
              things.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 lg:px-8 py-24 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <p className="text-eyebrow text-oasis-green mb-4">
                  What makes us different
                </p>
                <h2 className="text-display-l text-ink mb-6">
                  Technical depth
                </h2>
                <p className="text-body-l text-ink-muted">
                  Most agencies hit walls when clients need custom features,
                  platform integrations, or systems that go beyond templates.
                  We don&apos;t. We&apos;re the technical fixers — when your current
                  agency can&apos;t solve it, we can.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-eyebrow text-oasis-green mb-4">
                  Our approach
                </p>
                <h2 className="text-display-l text-ink mb-6">
                  Four principles
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-heading text-xl text-oasis-green mb-2">
                      Build
                    </h3>
                    <p className="text-body-l text-ink-muted">
                      Custom code, not templates. We write it, you own it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-heading text-xl text-oasis-green mb-2">
                      Integrate
                    </h3>
                    <p className="text-body-l text-ink-muted">
                      Connect your platforms — Planning Center, YouTube,
                      booking systems, payment providers — unified experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-heading text-xl text-oasis-green mb-2">
                      Publish
                    </h3>
                    <p className="text-body-l text-ink-muted">
                      Ship with confidence. We handle deployment, hosting, and
                      ongoing maintenance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-heading text-xl text-oasis-green mb-2">
                      Own
                    </h3>
                    <p className="text-body-l text-ink-muted">
                      You keep the code, the domain, and the accounts. No
                      vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-8 py-24 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-eyebrow text-oasis-green mb-4">
              What we solve
            </p>
            <h2 className="text-display-l text-ink mb-16">
              Problems we fix
            </h2>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={0.1}>
              <div className="border-l-2 border-oasis-green pl-8">
                <h3 className="text-heading text-ink mb-3">
                  The &ldquo;two website&rdquo; problem
                </h3>
                <p className="text-body-l text-ink-muted">
                  Churches using Planning Center have their main site and a
                  separate churchcenter.com URL. Visitors feel handed off. We
                  unify Groups, Events, and Giving native to your domain.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border-l-2 border-oasis-green pl-8">
                <h3 className="text-heading text-ink mb-3">
                  Sermon search that works
                </h3>
                <p className="text-body-l text-ink-muted">
                  YouTube auto-transcription + custom search UI. Congregants
                  search by topic, scripture, or keyword — jump directly to the
                  timestamp. Currently unsolvable by most agencies.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-l-2 border-oasis-green pl-8">
                <h3 className="text-heading text-ink mb-3">
                  Content campaigns no one runs
                </h3>
                <p className="text-body-l text-ink-muted">
                  Email and text campaigns integrated with your platforms.
                  Churches and businesses want this but have no one to execute.
                  We run it — strategy, production, and ongoing execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="border-l-2 border-oasis-green pl-8">
                <h3 className="text-heading text-ink mb-3">
                  Custom features at agency speed
                </h3>
                <p className="text-body-l text-ink-muted">
                  When you need something built that doesn&apos;t exist as a plugin
                  or template — booking flows, custom dashboards, AI systems —
                  we ship it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-eyebrow text-oasis-green mb-4">
              Clients
            </p>
            <h2 className="text-display-l text-ink mb-8">
              Who we work with
            </h2>
            <p className="text-body-l text-ink-muted max-w-3xl mb-12">
              Ambitious brands in any sector that need cutting-edge tech and
              bold design. We love helping churches, ministries, and
              non-profits.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-body-l text-ink-muted max-w-3xl">
              If you&apos;re willing to invest in systems that scale and own the
              code that powers your business, we&apos;re a fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-line">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-l text-ink mb-8">
              Let&apos;s build
            </h2>
            <p className="text-body-l text-ink-muted mb-12">
              Have a project that needs technical depth and design craft?
              Let&apos;s talk.
            </p>
            <Button href="/contact" size="lg" arrow>Start a project</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
