import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SermonSearchFrame } from "@/components/SermonSearchFrame";
import { PlanningCenterFrame } from "@/components/PlanningCenterFrame";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-12 tracking-tight">
              A church site that finds sermons, keeps Groups/Give/Watch honest,
              and the church owns outright.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70 mb-16 max-w-4xl">
              Most church sites look fine and break where ministry actually
              happens — search, Planning Center, weekly publish. Oasis builds
              the digital front door so visitors can find the message, take the
              next step, and the church keeps the code and the accounts.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zandcmesa@gmail.com"
                className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
              >
                Book a conversation with Zach
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-soft-clay/40 text-ink font-medium text-xl rounded-xl hover:border-oasis-green hover:text-oasis-green transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
              >
                See the work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes Proof Strip */}
      <section className="px-6 lg:px-8 py-24 border-y border-soft-clay/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              <div>
                <h3 className="font-display text-3xl font-semibold text-oasis-green mb-4">
                  Sermon search that works
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  YouTube auto-transcription + custom search UI. Congregants
                  search by topic, scripture, speaker, series.
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold text-oasis-green mb-4">
                  One digital front door
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Planning Center integration that keeps Groups, Give, and Watch
                  honest without feeling like two different sites.
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold text-oasis-green mb-4">
                  Built to last
                </h3>
                <p className="text-lg text-ink/70 leading-relaxed">
                  Custom Next.js. Your church owns the code, the domain, and the
                  accounts. No vendor lock-in.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <p className="text-soft-clay text-sm font-medium tracking-wider uppercase mb-4">
                Portfolio
              </p>
              <h2 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-6 tracking-tight">
                Work that solves real ministry problems
              </h2>
              <p className="text-2xl text-ink/70 leading-relaxed max-w-3xl">
                The agency that can actually build things. Not templates. Not
                wrappers. Real engineering.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-32">
            {/* Sermon Search Work Card */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <div className="max-w-6xl">
                  <SermonSearchFrame />
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                    Searchable sermon library
                  </h3>
                  <p className="text-xl text-ink/70 leading-relaxed mb-4">
                    A working sermon search indexed against real church YouTube
                    content. Search by topic, scripture, or any phrase — jump
                    directly to the timestamp.
                  </p>
                  <Link
                    href="/work"
                    className="text-oasis-green font-medium hover:underline inline-flex items-center gap-2"
                  >
                    View case study →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Planning Center Work Card */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="max-w-6xl">
                  <PlanningCenterFrame />
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                    Unified Planning Center experience
                  </h3>
                  <p className="text-xl text-ink/70 leading-relaxed mb-4">
                    Groups, Events, and Giving native to the church site.
                    Members never leave the domain or feel handed off to
                    churchcenter.com.
                  </p>
                  <Link
                    href="/work"
                    className="text-oasis-green font-medium hover:underline inline-flex items-center gap-2"
                  >
                    View case study →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-24 text-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-soft-clay/40 text-ink font-medium text-xl rounded-xl hover:border-oasis-green hover:text-oasis-green transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
              >
                See all work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Work Teaser */}
      <section className="px-6 lg:px-8 py-32 lg:py-48 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-soft-clay text-sm font-medium tracking-wider uppercase mb-4">
              Process
            </p>
            <h2 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-8 tracking-tight">
              How we work
            </h2>
            <p className="text-2xl text-ink/70 leading-relaxed mb-12">
              Most church agencies hit technical walls. We don't. Custom code,
              Planning Center integration, sermon search, and communications
              strategy that actually ships.
            </p>
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-soft-clay/40 text-ink font-medium text-xl rounded-xl hover:border-oasis-green hover:text-oasis-green transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Learn our process →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
