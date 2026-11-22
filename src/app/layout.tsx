import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

const baseUrl = site.siteUrl.startsWith("https://") ? site.siteUrl : "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "JODEL Cleaning | Spotless Spaces, Expert Cleaners", template: "%s | JODEL" },
  description: "JODEL Cleaning in Bexley and surrounding South East London. Plan a Priority Clean around your home, or request short-notice cleaning subject to availability. Free, no-obligation quotes.",
  openGraph: { title: "JODEL Cleaning — Spotless Spaces. Expert Cleaners.", description: "More time for life. Less time cleaning. Request a free quote from JODEL.", type: "website", images: ["/jodel-social.png"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/jodel-mark.png", apple: "/jodel-mark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
