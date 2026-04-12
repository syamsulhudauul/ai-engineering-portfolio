import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syamsul Huda — AI Engineer & Software Engineer",
  description:
    "AI Engineer & Software Engineer specializing in LLM integration, multi-agent systems, RAG pipelines, and high-throughput Go/Python backend services.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "LLM",
    "Multi-Agent AI",
    "RAG",
    "Go",
    "Python",
    "gRPC",
    "MCP Protocol",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
