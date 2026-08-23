import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis Creative Studios — The agency that can actually build things",
  description: "A church site that finds sermons, keeps Groups/Give/Watch honest, and the church owns outright. Oasis builds the digital front door so visitors can find the message, take the next step, and the church keeps the code and the accounts.",
  openGraph: {
    title: "Oasis Creative Studios — The agency that can actually build things",
    description: "A church site that finds sermons, keeps Groups/Give/Watch honest, and the church owns outright.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
