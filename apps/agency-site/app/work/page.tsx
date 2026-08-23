import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Oasis Creative Studios",
  description:
    "Portfolio and case studies from Oasis Creative Studios. Real solutions for churches and ministries.",
};

const caseStudies = [
  {
    title: "Sermon search & library",
    subtitle: "YouTube transcription + custom search",
    description:
      "A searchable sermon library that lets congregants find messages by topic, scripture, speaker, or series. Automatic YouTube transcription with a clean, fast search interface. The sermon archive becomes a resource, not a graveyard.",
    outcome: "Congregants can find 'what did the pastor say about prayer' in seconds",
    tags: ["Next.js", "YouTube API", "Search"],
  },
  {
    title: "Planning Center integration",
    subtitle: "One site, not two",
    description:
      "Most churches using Planning Center have their main site AND Church Center as separate URLs. We unify Groups, Giving, and Events into the main site experience so members never feel like they've been handed off to a different platform.",
    outcome: "Seamless experience from homepage to group signup to giving",
    tags: ["Planning Center API", "Integration", "Next.js"],
  },
  {
    title: "Cornerstone Church partnership",
    subtitle: "Founding client — demo in progress",
    description:
      "Full digital rebuild for a growing church. Custom Next.js site with sermon search, Planning Center integration, and ongoing communications strategy. Being built as the flagship showcase of what Oasis can deliver.",
    outcome: "Launch-ready modern site with search, integrations, and ownership",
    tags: ["Next.js", "Full build", "Strategy"],
  },
];

export default function WorkPage() {
  return (
    <div className="px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 lg:mb-24">
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-6">
            Work that solves ministry problems
          </h1>
          <p className="text-xl lg:text-2xl text-ink/70 leading-relaxed max-w-3xl">
            Not templates. Not wrappers around third-party tools. Custom builds
            that solve the technical problems most church agencies can't touch.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="border-l-4 border-oasis-green pl-8 lg:pl-12"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-2">
                    {study.title}
                  </h2>
                  <p className="text-lg text-soft-clay font-medium">
                    {study.subtitle}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-ink/80 max-w-2xl">
                  {study.description}
                </p>
                <div className="pt-4">
                  <p className="text-oasis-green font-medium text-lg">
                    Outcome: {study.outcome}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-ink/5 text-ink/70 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 text-center border-t border-ink/10 pt-16">
          <h3 className="font-display text-3xl font-semibold text-ink mb-4">
            Ready to start a project?
          </h3>
          <p className="text-lg text-ink/70 mb-8 max-w-xl mx-auto">
            Let's talk about what your church needs and how we can solve it.
          </p>
          <a
            href="mailto:zandcmesa@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-oasis-green text-paper font-medium text-lg rounded-lg hover:bg-oasis-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
          >
            Book a conversation with Zach
          </a>
        </div>
      </div>
    </div>
  );
}
