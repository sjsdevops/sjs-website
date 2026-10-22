import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Disclosure | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Official statutory information, institutional directory, communication team, contact numbers, and campus infrastructure facilities for Sree Jayam School, Vellore.",
  keywords: [
    "Sree Jayam School Mandatory Disclosure",
    "School Code TN102",
    "School Basic Information",
    "Communication Team",
    "Contact Numbers",
    "School Infrastructure",
    "ICSE School Vellore",
  ],
};

export default function MandatoryDisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
