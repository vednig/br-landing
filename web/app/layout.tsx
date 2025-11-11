import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BedRock – Best Portable AI Code Assistant | Alternative to Copilot, Cursor & Codex",
  description:
    "Discover BedRock, the top AI coding assistant that works across all IDEs. A portable floating AI window that helps you code faster, smarter, and better.",

  keywords:
    "AI code assistant, portable coding AI, BedRock AI, Copilot alternative, Cursor alternative, Codex alternative, AI developer tool, code generation software, floating window code assistant, best AI for programmers",
  openGraph: {
    title: "BedRock – The Best Portable AI Coding Assistant",
    description:
      "BedRock is a portable AI coding companion compatible with all IDEs. The best alternative to Cursor, Copilot, and Codex.",
    images: "/assets/og-bedrock-preview.png",
    url: "https://bedrock.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BedRock – The Best Portable AI Coding Assistant",
    description:
      "Write, debug, and refactor faster with BedRock — a floating AI code assistant that works with all IDEs.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
