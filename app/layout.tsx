import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIPLB — Track 10 competitors auto, weekly digest",
  description:
    "AIPLB snapshots your competitors daily, diffs every change, and emails you a weekly digest. Slack + email. €99/mo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Nav />
        <div className="min-h-[calc(100vh-160px)]">{children}</div>
        <Footer />
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
