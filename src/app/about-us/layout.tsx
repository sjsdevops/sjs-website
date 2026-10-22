import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sree Jayam School — ICSE & ISC Higher Secondary, Vellore",
  description:
    "Discover the story, history, and key milestones of Sree Jayam School in Vellore. Founded in 2005 as Humming Birds Play School, growing into a premier ICSE & ISC institution.",
  keywords: [
    "About Sree Jayam School",
    "Sree Jayam School History",
    "ICSE School Vellore History",
    "Humming Birds Play School Vellore",
    "Ramajayammal Educational Trust",
  ],
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
