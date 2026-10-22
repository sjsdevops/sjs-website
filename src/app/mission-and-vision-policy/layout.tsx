import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision Policy | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Explore the Mission, Vision, and Institutional Policy of Sree Jayam School, Vellore. Dedicated to academic rigor, character development, ethical values, and holistic student growth.",
  keywords: [
    "Sree Jayam School Mission",
    "Sree Jayam School Vision",
    "Sree Jayam Institutional Policy",
    "ICSE School Policy Vellore",
    "Holistic Education Philosophy",
  ],
};

export default function MissionVisionPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
