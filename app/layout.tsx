import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ClarityCare",
  description: "Education-only health topics in under a minute.",
};

const safetyBanner =
  "Education only. Not medical advice. This tool does not assess urgency or replace professional care.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="bg-clarity-blue text-white text-sm md:text-base py-3 px-4 text-center">
          {safetyBanner}
        </div>
        <header className="bg-white shadow-sm">
          <div className="mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between max-w-6xl px-4 py-5">
            <Link href="/" className="text-2xl font-bold text-clarity-blue">
              ClarityCare
            </Link>
            <nav className="flex gap-4 text-sm md:text-base">
              <Link href="/topics">Topics</Link>
              <Link href="/about">About</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
