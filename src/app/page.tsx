import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustedSection from "@/components/sections/TrustedSection";
import PillarsSection from "@/components/sections/PillarsSection";

export const metadata: Metadata = {
  title: "Virtually Kyna | Strategic Growth. Operational Clarity. Regulatory Integrity.",
  description:
    "Premium Virtual Management Consulting for high-growth SMEs and NGOs. Market research, project management, and compliance — in one seamless partnership.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <PillarsSection />
    </>
  );
}
