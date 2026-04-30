import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import "./globals.css";
import AllAccessPromoBanner from '@/components/AllAccessPromoBanner';

export const metadata: Metadata = {
  title: "IP Licensing Bot — Surveillance concurrentielle à la demande",
  description:
    "IP Licensing Bot capture vos concurrents à la demande, détecte les changements clés et génère un rapport instantané. Email + Slack.",
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
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
