import type { Metadata } from "next";
import { LegalDoc } from "@/components/blocks/LegalDoc";
import { accessibility } from "@/content/legal";

export const metadata: Metadata = {
  title: "Accessibility statement — Oasis Creative Studios",
  description: "Our WCAG 2.1 AA commitment, what we have done, known limitations, and how to report a problem.",
};

export default function AccessibilityPage() {
  return <LegalDoc {...accessibility} />;
}
