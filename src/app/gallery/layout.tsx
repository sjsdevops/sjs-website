import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Celebrations | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Explore photographic memories, school celebrations, sports meets, cultural fests, national observances, and student life at Sree Jayam School, Vellore.",
  keywords: [
    "Sree Jayam School Gallery",
    "School Events Vellore",
    "Investiture Ceremony",
    "Sports Day Sree Jayam",
    "Independence Day Celebrations",
    "Annual Day Sree Jayam School",
    "Odyssey Fest",
    "School Photo Gallery",
  ],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
