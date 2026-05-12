import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Discovery Call",
  description:
    "Begin your partnership with Virtually Kyna. Complete our discovery form and receive a personalised response within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
