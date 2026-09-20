import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/blocks/Header";
import { Footer } from "@/components/blocks/Footer";
import { analytics, footerLinks, legalLinks, products, siteDomain, social } from "@/content/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const hermione = localFont({
  src: "./fonts/hermione.woff2",
  weight: "400",
  variable: "--font-hermione",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteDomain}`),
  title: "Oasis Creative Studios — Cutting-edge tech + design for ambitious brands",
  description:
    "Websites, AI agent teams, digital presence strategy, social content, and promotional video. One team that actually builds.",
  openGraph: {
    title: "Oasis Creative Studios",
    description: "Cutting-edge tech + design for ambitious brands. We build systems that ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${hermione.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer links={footerLinks} products={products} social={social} legal={legalLinks} />
        {process.env.NODE_ENV === "production" && (
          <Script src="https://cloud.umami.is/script.js" data-website-id={analytics.websiteId} data-domains={analytics.domains} strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
