"use client";

import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      business: formData.get("business"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      town: formData.get("town"),
      leaking: formData.get("leaking"),
      hours: formData.get("hours"),
    };

    console.log("Form submission:", data);

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-b border-soft-clay/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-6xl lg:text-8xl font-semibold leading-[1.1] text-ink mb-8 tracking-tight">
              Book a 15-minute discovery
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70">
              Tell us about your business. We'll explain how After-Hours Lead Catcher works and whether it's a fit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          {status === "success" ? (
            <FadeIn>
              <div className="border border-oasis-green/30 bg-oasis-green/10 rounded-2xl p-12 text-center">
                <h2 className="font-display text-3xl font-semibold text-ink mb-4">
                  We'll be in touch
                </h2>
                <p className="text-lg text-ink/70">
                  Thanks for reaching out. We'll review your info and get back
                  to you within 1 business day to schedule your discovery call.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                {/* Business */}
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Business name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="Your business name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Town */}
                <div>
                  <label
                    htmlFor="town"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Town/city *
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="Your town or city"
                  />
                </div>

                {/* What's leaking */}
                <div>
                  <label
                    htmlFor="leaking"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    What's leaking? *
                  </label>
                  <select
                    id="leaking"
                    name="leaking"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Select what you're losing</option>
                    <option value="after-hours-calls">After-hours calls</option>
                    <option value="daytime-misses">Daytime missed calls</option>
                    <option value="web-forms">Web forms / estimate requests</option>
                    <option value="reviews">Need more Google reviews</option>
                    <option value="all">All of the above</option>
                  </select>
                </div>

                {/* Hours */}
                <div>
                  <label
                    htmlFor="hours"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Your business hours
                  </label>
                  <input
                    type="text"
                    id="hours"
                    name="hours"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                    placeholder="e.g. Mon-Fri 8am-5pm"
                  />
                </div>

                {/* Submit */}
                <div>
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Book discovery call"}
                  </Button>
                </div>

                <p className="text-sm text-ink/50">
                  * Required fields. We'll get back to you within 1 business
                  day to schedule your call.
                </p>
              </form>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 lg:px-8 py-24 border-t border-soft-clay/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-soft-clay text-xs font-medium tracking-wider uppercase mb-4">
              What to expect
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-8 tracking-tight">
              Next steps
            </h2>
            <div className="space-y-6 text-lg text-ink/70 leading-relaxed">
              <p>
                After you submit, we'll review your business and get back to
                you within 1 business day to schedule your 15-minute discovery
                call.
              </p>
              <p>
                On the call, we'll walk through how After-Hours Lead Catcher
                works, explain the forwarding setup, and answer any questions
                about pricing or coverage.
              </p>
              <p>
                If it's a fit, we'll set you up with the system and get your
                forwarding line configured. Most clients are live within a week.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
