import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Virtually Kyna was founded to bridge the gap for high-growth organisations — too large for basic admin, not yet ready for in-house departments. Meet our founder and philosophy.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
