import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Virtually Kyna | Premium Virtual Management Consulting",
    template: "%s | Virtually Kyna",
  },
  description:
    "Premium virtual management consulting for high-growth SMEs and NGOs. Strategic research, operational excellence, and regulatory integrity — delivered with executive precision.",
  keywords: [
    "virtual consulting",
    "management consulting",
    "NGO consulting",
    "SME consulting",
    "Nigeria consulting",
    "strategic research",
    "compliance advisory",
    "HR consulting",
  ],
  authors: [{ name: "Virtually Kyna" }],
  creator: "Virtually Kyna",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://virtuallykyna.com",
    siteName: "Virtually Kyna",
    title: "Virtually Kyna | Premium Virtual Management Consulting",
    description:
      "Strategic Growth. Operational Clarity. Regulatory Integrity. Premium consulting for high-growth organisations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtually Kyna | Premium Virtual Management Consulting",
    description: "Strategic Growth. Operational Clarity. Regulatory Integrity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy-900 text-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
