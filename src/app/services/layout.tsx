import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — The Hybrid Framework",
  description:
    "Monthly retainers and specialised add-ons for SMEs and NGOs. Strategy & Research, Operational Excellence, and Regulatory Integrity — structured around your growth stage.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
