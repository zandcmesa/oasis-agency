import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Oasis Creative Studios",
  description:
    "Book a conversation with Zach Mesa to discuss your church's digital needs.",
};

export default function ContactPage() {
  return (
    <div className="px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display text-5xl lg:text-7xl font-semibold text-ink mb-8">
          Let's talk about your church
        </h1>
        <p className="text-xl lg:text-2xl text-ink/70 leading-relaxed mb-12">
          Book a conversation with Zach to discuss what your church needs and
          how Oasis can help. No forms. No calendar maze. Just an email to
          start the conversation.
        </p>

        <div className="space-y-8">
          <a
            href="mailto:zandcmesa@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 bg-oasis-green text-paper font-medium text-xl rounded-lg hover:bg-oasis-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
          >
            Book a conversation with Zach
          </a>

          <div className="pt-8">
            <p className="text-ink/60 text-lg mb-2">Zach Mesa</p>
            <a
              href="mailto:zandcmesa@gmail.com"
              className="text-oasis-green text-xl font-medium hover:text-oasis-green/80 transition-colors"
            >
              zandcmesa@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 pt-16 border-t border-ink/10">
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-ink">
              What to expect
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                We'll schedule a call to understand your church's needs. What's
                working? What's breaking? Where do visitors get stuck? What does
                your staff manually do every week that software should handle?
              </p>
              <p>
                Then we'll talk through solutions. Custom code, Planning Center
                integration, sermon search, communications strategy — whatever
                actually solves the problem.
              </p>
              <p>
                No pressure. No sales pitch. Just a conversation about whether
                Oasis is the right fit for your church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
