import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis Creative Studios — Cutting-edge tech + design for ambitious brands",
  description:
    "Multi-sector creative studio building websites, AI agent teams, social media content, promotional video, and digital presence strategy for churches, service businesses, real estate, commercial properties, and wellness brands.",
  openGraph: {
    title: "Oasis Creative Studios",
    description:
      "Cutting-edge tech + design for ambitious brands. We build systems that ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistSans.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
