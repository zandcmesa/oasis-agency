import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-tight text-ink mb-8">
            A church site that finds sermons, keeps Groups/Give/Watch honest,
            and the church owns outright.
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-ink/70 mb-12 max-w-3xl">
            Most church sites look fine and break where ministry actually
            happens — search, Planning Center, weekly publish. Oasis builds the
            digital front door so visitors can find the message, take the next
            step, and the church keeps the code and the accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:zandcmesa@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-oasis-green text-paper font-medium text-lg rounded-lg hover:bg-oasis-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Book a conversation with Zach
            </a>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink font-medium text-lg rounded-lg hover:border-oasis-green hover:text-oasis-green transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes Proof Strip */}
      <section className="px-6 lg:px-8 py-16 border-y border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                Sermon search that works
              </h3>
              <p className="text-ink/70 leading-relaxed">
                YouTube auto-transcription + custom search UI. Congregants
                search by topic, scripture, speaker, series.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                One digital front door
              </h3>
              <p className="text-ink/70 leading-relaxed">
                Planning Center integration that keeps Groups, Give, and Watch
                honest without feeling like two different sites.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-oasis-green mb-3">
                Built to last
              </h3>
              <p className="text-ink/70 leading-relaxed">
                Custom Next.js. Your church owns the code, the domain, and the
                accounts. No vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4">
              Work that solves real ministry problems
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
              The agency that can actually build things. Not templates. Not
              wrappers. Real engineering.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink font-medium text-lg rounded-lg hover:border-oasis-green hover:text-oasis-green transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              See the portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Teaser */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 bg-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-6">
            How we work
          </h2>
          <p className="text-xl text-ink/70 leading-relaxed mb-8">
            Most church agencies hit technical walls. We don't. Custom code,
            Planning Center integration, sermon search, and communications
            strategy that actually ships.
          </p>
          <Link
            href="/how-we-work"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink font-medium text-lg rounded-lg hover:border-oasis-green hover:text-oasis-green transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
          >
            Learn our process →
          </Link>
        </div>
      </section>
    </div>
  );
}
