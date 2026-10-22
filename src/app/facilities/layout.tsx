import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Modern infrastructure for a brighter tomorrow. Explore state-of-the-art libraries, advanced science and computer labs, sports amenities, smart classrooms, and safe transport at Sree Jayam School, Vellore.",
  keywords: [
    "Sree Jayam School Facilities",
    "School Infrastructure Vellore",
    "Smart Classrooms",
    "Science Laboratories",
    "Computer Lab",
    "School Library Vellore",
    "Sports Amenities",
    "Safe School Transport",
    "ICSE School Campus Vellore",
  ],
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
