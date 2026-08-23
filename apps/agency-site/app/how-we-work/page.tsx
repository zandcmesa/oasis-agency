import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work — Oasis Creative Studios",
  description:
    "The agency that can actually build things. Custom Next.js, Planning Center integration, and communications strategy that ships.",
};

const capabilities = [
  {
    title: "Custom Next.js builds",
    description:
      "Not templates. Not Squarespace with plugins. We write code. Your church gets a modern, fast, accessible website that you own outright — code, domain, hosting accounts. No vendor lock-in. No hitting walls when you need a feature.",
  },
  {
    title: "Planning Center integration",
    description:
      "Most churches using Planning Center have two sites: the main site and Church Center. We unify that experience so Groups, Events, and Giving feel native to your site. Members never feel handed off to a different platform.",
  },
  {
    title: "Sermon search & library",
    description:
      "Your YouTube sermon archive becomes searchable. Automatic transcription + custom search UI. Congregants can find messages by topic, scripture, speaker, or series in seconds. A resource, not a graveyard.",
  },
  {
    title: "Communications strategy",
    description:
      "Email and text campaigns that actually get sent. Most churches want this but have no one to execute. We design the strategy and run the campaigns so your congregation stays connected and informed.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 lg:mb-24">
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-6">
            The agency that can actually build things
          </h1>
          <p className="text-xl lg:text-2xl text-ink/70 leading-relaxed">
            Most church agencies are designers who wrap around third-party tools
            and hit walls. We're engineers who solve the technical problems
            other agencies can't touch.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-8">
              What "actually build" means
            </h2>
            <div className="space-y-10">
              {capabilities.map((capability, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-oasis-green">
                    {capability.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-ink/80">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-6">
              How we work with you
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-ink/80">
              <p>
                We start by understanding your church's actual pain points. Not
                a generic "we need a new website" — what's breaking? Where do
                visitors get lost? What's the staff manually doing every week
                that software should handle?
              </p>
              <p>
                Then we design a solution. Custom code where it's needed.
                Integration where it solves the problem. Communications strategy
                where the gap is execution, not tools.
              </p>
              <p>
                We build in phases. Working software first. Polish and
                refinement as we go. You see progress every week, not after
                months of silence.
              </p>
              <p>
                When we hand off, you own everything. Code. Domain. Hosting
                accounts. Documentation. You're not renting from us. You're not
                locked into a platform. It's yours.
              </p>
            </div>
          </section>

          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-6">
              Why churches choose us
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-ink/80">
              <p>
                Because we can solve the problems other agencies say "no" to.
                Sermon search? We build it. Planning Center integration that
                doesn't feel like two sites? We build it. Custom features your
                church actually needs? We build it.
              </p>
              <p>
                Because we're faith-aligned. We understand church culture,
                ministry priorities, and the balance between modern craft and
                timeless warmth. You're not explaining your context to someone
                who doesn't get it.
              </p>
              <p>
                Because we're building for the long term. This isn't a side
                project. Oasis is being built as a generational business — real
                engineering depth, real client outcomes, real staying power.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-20 lg:mt-32 text-center border-t border-ink/10 pt-16">
          <h3 className="font-display text-3xl font-semibold text-ink mb-4">
            Let's talk about your church
          </h3>
          <p className="text-lg text-ink/70 mb-8 max-w-xl mx-auto">
            Book a conversation with Zach to discuss what you need and how we
            can help.
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
