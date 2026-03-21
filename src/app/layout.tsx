import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RWA Explorer | @samdevrel",
  description: "Real World Assets tokenized onchain - Treasuries, Credit, Real Estate, Commodities.",
  keywords: ["RWA", "real world assets", "tokenization", "treasury bonds", "BlackRock", "Centrifuge"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
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
