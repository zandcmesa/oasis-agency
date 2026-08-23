import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-oasis-green hover:text-oasis-green/80 transition-colors inline-block"
            >
              Oasis
            </Link>
            <p className="text-ink/70 text-sm leading-relaxed">
              The agency that can actually build things. Faith-aligned, bold
              modern design, real engineering depth.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:zandcmesa@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-oasis-green text-paper font-medium rounded-lg hover:bg-oasis-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Book a conversation with Zach
            </a>
            <p className="text-ink/60 text-sm">
              <a
                href="mailto:zandcmesa@gmail.com"
                className="hover:text-oasis-green transition-colors"
              >
                zandcmesa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
