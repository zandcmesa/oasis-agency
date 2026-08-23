import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SermonSearchFrame } from "@/components/SermonSearchFrame";
import { PlanningCenterFrame } from "@/components/PlanningCenterFrame";

export const metadata: Metadata = {
  title: "Work — Oasis Creative Studios",
  description:
    "Portfolio and case studies from Oasis Creative Studios. Real solutions for churches and ministries.",
};

export default function WorkPage() {
  return (
    <div className="px-6 lg:px-8 py-32 lg:py-48">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-24 lg:mb-32">
            <p className="text-soft-clay text-sm font-medium tracking-wider uppercase mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold text-ink mb-8 tracking-tight leading-[1.1]">
              Work that solves ministry problems
            </h1>
            <p className="text-2xl lg:text-3xl text-ink/70 leading-relaxed max-w-4xl">
              Not templates. Not wrappers around third-party tools. Custom
              builds that solve the technical problems most church agencies
              can't touch.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32 lg:space-y-48">
          {/* Case Study 1: Sermon Search */}
          <FadeIn>
            <article>
              <div className="mb-12 max-w-6xl">
                <SermonSearchFrame />
              </div>
              <div className="border-l-4 border-oasis-green pl-8 lg:pl-12 max-w-4xl">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-3 tracking-tight">
                      Sermon search & library
                    </h2>
                    <p className="text-xl text-soft-clay font-medium">
                      YouTube transcription + custom search
                    </p>
                  </div>
                  <p className="text-xl leading-relaxed text-ink/80">
                    A searchable sermon library that lets congregants find
                    messages by topic, scripture, speaker, or series. Automatic
                    YouTube transcription with a clean, fast search interface.
                    The sermon archive becomes a resource, not a graveyard.
                  </p>
                  <div className="pt-4">
                    <p className="text-oasis-green font-semibold text-xl">
                      Outcome: Congregants can find "what did the pastor say
                      about prayer" in seconds
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Next.js", "YouTube API", "Full-text search"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-soft-clay/20 text-ink/70 text-sm rounded-full border border-soft-clay/30"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Case Study 2: Planning Center */}
          <FadeIn>
            <article>
              <div className="mb-12 max-w-6xl">
                <PlanningCenterFrame />
              </div>
              <div className="border-l-4 border-oasis-green pl-8 lg:pl-12 max-w-4xl">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-3 tracking-tight">
                      Planning Center integration
                    </h2>
                    <p className="text-xl text-soft-clay font-medium">
                      One site, not two
                    </p>
                  </div>
                  <p className="text-xl leading-relaxed text-ink/80">
                    Most churches using Planning Center have their main site AND
                    Church Center as separate URLs. We unify Groups, Giving, and
                    Events into the main site experience so members never feel
                    like they've been handed off to a different platform.
                  </p>
                  <div className="pt-4">
                    <p className="text-oasis-green font-semibold text-xl">
                      Outcome: Seamless experience from homepage to group signup
                      to giving
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Planning Center API", "Integration", "Next.js"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-soft-clay/20 text-ink/70 text-sm rounded-full border border-soft-clay/30"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Case Study 3: Cornerstone */}
          <FadeIn>
            <article>
              <div className="border-l-4 border-oasis-green pl-8 lg:pl-12 max-w-4xl">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-3 tracking-tight">
                      Cornerstone Church partnership
                    </h2>
                    <p className="text-xl text-soft-clay font-medium">
                      Founding partnership — demo in progress
                    </p>
                  </div>
                  <p className="text-xl leading-relaxed text-ink/80">
                    Full digital rebuild for a growing church. Custom Next.js
                    site with sermon search, Planning Center integration, and
                    ongoing communications strategy. Being built as the flagship
                    showcase of what Oasis can deliver.
                  </p>
                  <div className="pt-4">
                    <p className="text-oasis-green font-semibold text-xl">
                      Outcome: Launch-ready modern site with search,
                      integrations, and ownership
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Next.js", "Full build", "Strategy"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-soft-clay/20 text-ink/70 text-sm rounded-full border border-soft-clay/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-32 lg:mt-48 text-center border-t border-soft-clay/30 pt-24">
            <h3 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6 tracking-tight">
              Ready to start a project?
            </h3>
            <p className="text-xl text-ink/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's talk about what your church needs and how we can solve it.
            </p>
            <a
              href="mailto:zandcmesa@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Book a conversation with Zach
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
