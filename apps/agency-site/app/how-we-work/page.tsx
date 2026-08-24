import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "How we work — Oasis Creative Studios",
  description:
    "Our approach: build systems, integrate platforms, publish with confidence, and ensure you own everything. The agency that can actually build things.",
};

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-b border-soft-clay/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              How we work
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70 max-w-4xl">
              We build systems that ship. Not templates, not wrappers — real
              engineering and design craft. The agency that can actually build
              things.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
                  What makes us different
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6 tracking-tight">
                  Technical depth
                </h2>
                <p className="text-xl text-ink/70 leading-relaxed">
                  Most agencies hit walls when clients need custom features,
                  platform integrations, or systems that go beyond templates.
                  We don't. We're the technical fixers — when your current
                  agency can't solve it, we can.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
                  Our approach
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6 tracking-tight">
                  Four principles
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-oasis-green mb-2">
                      Build
                    </h3>
                    <p className="text-lg text-ink/70">
                      Custom code, not templates. We write it, you own it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-oasis-green mb-2">
                      Integrate
                    </h3>
                    <p className="text-lg text-ink/70">
                      Connect your platforms — Planning Center, YouTube,
                      booking systems, payment providers — unified experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-oasis-green mb-2">
                      Publish
                    </h3>
                    <p className="text-lg text-ink/70">
                      Ship with confidence. We handle deployment, hosting, and
                      ongoing maintenance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-oasis-green mb-2">
                      Own
                    </h3>
                    <p className="text-lg text-ink/70">
                      You keep the code, the domain, and the accounts. No
                      vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 lg:px-8 py-24 border-b border-soft-clay/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What we solve
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-16 tracking-tight">
              Problems we fix
            </h2>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <div className="border-l-4 border-oasis-green pl-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  The "two website" problem
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Churches using Planning Center have their main site and a
                  separate churchcenter.com URL. Visitors feel handed off. We
                  unify Groups, Events, and Giving native to your domain.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border-l-4 border-oasis-green pl-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Sermon search that works
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  YouTube auto-transcription + custom search UI. Congregants
                  search by topic, scripture, or keyword — jump directly to the
                  timestamp. Currently unsolvable by most agencies.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-l-4 border-oasis-green pl-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Content campaigns no one runs
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Email and text campaigns integrated with your platforms.
                  Churches and businesses want this but have no one to execute.
                  We run it — strategy, production, and ongoing execution.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="border-l-4 border-oasis-green pl-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Custom features at agency speed
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  When you need something built that doesn't exist as a plugin
                  or template — booking flows, custom dashboards, AI systems —
                  we ship it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              Clients
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-8 tracking-tight">
              Who we work with
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed max-w-3xl mb-12">
              We work with ambitious brands that need cutting-edge tech and
              bold design. Multi-sector focus — churches and ministries,
              service businesses, real estate, commercial properties, wellness
              brands.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-ink/70 leading-relaxed max-w-3xl">
              If you're willing to invest in systems that scale and own the
              code that powers your business, we're a fit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-ink mb-8 tracking-tight">
              Let's build
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed mb-12">
              Have a project that needs technical depth and design craft?
              Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Start a project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
