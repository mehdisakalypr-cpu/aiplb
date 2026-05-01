import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import "./globals.css";
import AllAccessPromoBanner from '@/components/AllAccessPromoBanner';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: "IP Licensing Bot — Surveillance concurrentielle à la demande",
  description:
    "IP Licensing Bot capture vos concurrents à la demande, détecte les changements clés et génère un rapport instantané. Email + Slack.",
  metadataBase: new URL("https://aiplb.gapup.io"),
  openGraph: {
    title: 'IP Licensing Bot — Surveillance concurrentielle à la demande',
    description: 'IP Licensing Bot capture vos concurrents à la demande, détecte les changements clés et génère un rapport instantané. Email + Slack.',
    url: "https://aiplb.gapup.io",
    siteName: "gapup.io",
    images: [{ url: "https://image.pollinations.ai/prompt/aiplb%20saas%20banner%20tech%20modern%20purple%20gold%20gradient%20cinematic?width=1200&height=630&nologo=true&seed=520", width: 1200, height: 630, alt: 'IP Licensing Bot — Surveillance concurrentielle à la demande' }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'IP Licensing Bot — Surveillance concurrentielle à la demande',
    description: 'IP Licensing Bot capture vos concurrents à la demande, détecte les changements clés et génère un rapport instantané. Email + Slack.',
    images: ["https://image.pollinations.ai/prompt/aiplb%20saas%20banner%20tech%20modern%20purple%20gold%20gradient%20cinematic?width=1200&height=630&nologo=true&seed=520"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <AllAccessPromoBanner />
        <Nav />
        <div className="min-h-[calc(100vh-160px)]">{children}</div>
        <Footer />
        <CookieBanner />
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
