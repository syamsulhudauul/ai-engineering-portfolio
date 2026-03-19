import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
