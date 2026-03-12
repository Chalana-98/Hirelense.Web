import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HireLens AI | Semantic Recruitment Platform",
  description:
    "Hire better, faster. AI-powered CV screening and semantic candidate matching for modern teams."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
