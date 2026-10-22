import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Explore the progressive academic stages and structured scholastic assessment system at Sree Jayam School, Vellore. Nurturing learners from Foundation Stage to Senior Secondary.",
  keywords: [
    "Sree Jayam School Academics",
    "Academic Assessment System",
    "ICSE School Vellore",
    "ISC School Vellore",
    "Foundation Stage Education",
    "Preparatory Stage",
    "Middle School Curriculum",
    "Secondary Stage ICSE",
  ],
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
