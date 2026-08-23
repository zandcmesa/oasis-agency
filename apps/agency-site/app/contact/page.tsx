import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Oasis Creative Studios",
  description:
    "Book a conversation with Zach Mesa to discuss your church's digital needs.",
};

export default function ContactPage() {
  return (
    <div className="px-6 lg:px-8 py-32 lg:py-48">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-soft-clay text-sm font-medium tracking-wider uppercase mb-4">
            Get in touch
          </p>
          <h1 className="font-display text-6xl lg:text-8xl font-semibold text-ink mb-8 tracking-tight leading-[1.1]">
            Let's talk about your church
          </h1>
          <p className="text-2xl lg:text-3xl text-ink/70 leading-relaxed mb-16">
            Book a conversation with Zach to discuss what your church needs and
            how Oasis can help. No forms. No calendar maze. Just an email to
            start the conversation.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-12">
            <a
              href="mailto:zandcmesa@gmail.com"
              className="inline-flex items-center justify-center px-12 py-6 bg-oasis-green text-paper font-medium text-2xl rounded-xl hover:bg-oasis-green/90 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-oasis-green focus:ring-offset-2 focus:ring-offset-paper"
            >
              Book a conversation with Zach
            </a>

            <div className="pt-8">
              <p className="text-soft-clay text-sm font-medium tracking-wider uppercase mb-2">
                Email
              </p>
              <a
                href="mailto:zandcmesa@gmail.com"
                className="text-oasis-green text-2xl font-medium hover:underline transition-colors"
              >
                zandcmesa@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-32 lg:mt-48 pt-16 border-t border-soft-clay/30">
            <div className="space-y-8 text-left max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-semibold text-ink tracking-tight">
                What to expect
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-ink/80">
                <p>
                  We'll schedule a call to understand your church's needs.
                  What's working? What's breaking? Where do visitors get stuck?
                  What does your staff manually do every week that software
                  should handle?
                </p>
                <p>
                  Then we'll talk through solutions. Custom code, Planning
                  Center integration, sermon search, communications strategy —
                  whatever actually solves the problem.
                </p>
                <p>
                  No pressure. No sales pitch. Just a conversation about whether
                  Oasis is the right fit for your church.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
