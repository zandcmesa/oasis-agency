"use client";

import { FormEvent, useState } from "react";
import { slugify } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  products: string[];
  tone?: "dark" | "light";
  compact?: boolean;
}

type Status = "idle" | "submitting" | "success" | "error";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@oasis.studio";

export function ContactForm({ products, tone = "light", compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [product, setProduct] = useState(() => {
    if (typeof window === "undefined") return "";
    const need = new URLSearchParams(window.location.search).get("need");
    return products.find((p) => slugify(p) === need) ?? "";
  });
  const dark = tone === "dark";

  const field = dark
    ? "bg-white/8 border-line-dark text-paper placeholder:text-on-dark-subtle focus:border-spring focus:ring-1 focus:ring-spring"
    : "bg-white/60 border-line text-ink placeholder:text-ink-subtle focus:border-oasis-green focus:ring-1 focus:ring-oasis-green";
  const input = `w-full rounded-sm border px-4 ${compact ? "py-3" : "py-3.5"} text-body outline-none transition-colors duration-[var(--dur-fast)] ${field}`;
  const label = `block text-eyebrow mb-2 ${dark ? "text-on-dark-muted" : "text-ink-muted"} ${compact ? "sr-only" : ""}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    if (!endpoint) {
      const subject = encodeURIComponent(`Project inquiry: ${data.product}`);
      const body = encodeURIComponent(`${data.name}\n${data.email}\n\n${data.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`${dark ? "text-paper" : "text-ink"} py-6`}>
        <p className="text-heading mb-2">Got it.</p>
        <p className={dark ? "text-on-dark-muted" : "text-ink-muted"}>We read every message and reply within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${compact ? "gap-3" : "gap-6"}`}>
      <div className={`grid ${compact ? "grid-cols-1 gap-3" : "sm:grid-cols-2 gap-6"}`}>
        <div>
          <label htmlFor="cf-name" className={label}>Name</label>
          <input id="cf-name" name="name" type="text" required placeholder="Name" autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email</label>
          <input id="cf-email" name="email" type="email" required placeholder="Email" autoComplete="email" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-product" className={label}>What do you need?</label>
        <select id="cf-product" name="product" required value={product} onChange={(e) => setProduct(e.target.value)} className={`${input} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11 ${dark ? "[&>option]:text-ink" : ""}`}>
          <option value="" disabled>What do you need?</option>
          {products.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>Message</label>
        <textarea id="cf-message" name="message" required rows={compact ? 3 : 5} placeholder="Tell us about the project" className={`${input} resize-none`} />
      </div>
      <div className={compact ? "pt-1" : "pt-2"}>
        <Button type="submit" variant={dark ? "onDark" : "primary"} size={compact ? "md" : "lg"} arrow disabled={status === "submitting"} className={compact ? "w-full justify-between" : ""}>
          {status === "submitting" ? "Sending" : "Start a conversation"}
        </Button>
        {status === "error" && (
          <p className="text-body-s text-soft-clay mt-3">Something broke on our end. Email us directly at {email}.</p>
        )}
      </div>
    </form>
  );
}
