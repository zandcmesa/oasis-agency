"use client";

import type { Metadata } from "next";
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
      email: formData.get("email"),
      sector: formData.get("sector"),
      product: formData.get("product"),
      message: formData.get("message"),
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
              Start a project
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed text-ink/70">
              We work with ambitious brands that need cutting-edge tech and
              bold design. Tell us about your project.
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
                  Thanks for reaching out. We'll review your project and get
                  back to you soon.
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

                {/* Sector */}
                <div>
                  <label
                    htmlFor="sector"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Select a sector (optional)</option>
                    <option value="churches-ministries">
                      Churches & ministries
                    </option>
                    <option value="service-businesses">
                      Service businesses
                    </option>
                    <option value="real-estate">Real estate</option>
                    <option value="commercial-properties">
                      Commercial properties
                    </option>
                    <option value="salon-spa-wellness">
                      Salon / spa / wellness
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Product Interest */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Product interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Select a product (optional)</option>
                    <option value="websites">Websites</option>
                    <option value="social-media">Social media content</option>
                    <option value="promo-video">Promotional video</option>
                    <option value="ai-agents">AI agent workers & teams</option>
                    <option value="digital-strategy">
                      Digital presence strategy
                    </option>
                    <option value="multiple">Multiple products</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-soft-clay/40 rounded-xl text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-oasis-green focus:border-transparent disabled:opacity-50 resize-none"
                    placeholder="What are you looking to build? What problems are you trying to solve?"
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
                      : "Send your project"}
                  </Button>
                </div>

                <p className="text-sm text-ink/50">
                  * Required fields. We'll get back to you within 1-2 business
                  days.
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
                After you submit, we'll review your project and get back to you
                within 1-2 business days.
              </p>
              <p>
                If we're a fit, we'll schedule a discovery call to understand
                your goals, technical requirements, and timeline. Then we'll
                put together a proposal and scope of work.
              </p>
              <p>
                We work with brands that value technical depth, design craft,
                and ownership. If that's you, we're excited to hear from you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
