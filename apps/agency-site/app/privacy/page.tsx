import type { Metadata } from "next";
import { LegalDoc } from "@/components/blocks/LegalDoc";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy policy — Oasis Creative Studios",
  description: "What we collect on this site, why, who handles it, and how to ask us to delete it.",
};

export default function PrivacyPage() {
  return <LegalDoc {...privacy} />;
}
