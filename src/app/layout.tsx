import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sree Jayam School | Learn, Grow, Excel — ICSE & ISC Higher Secondary",
  description:
    "Sree Jayam School in Allapuram, Vellore offers premium ICSE & ISC higher-secondary education focused on academic excellence, character development, holistic learning, and modern facilities.",
  keywords: [
    "Sree Jayam School",
    "ICSE School Vellore",
    "ISC Higher Secondary Vellore",
    "Top Schools in Vellore",
    "Holistic Education Tamil Nadu",
  ],
  icons: {
    icon: [
      { url: "/images/logo/logo.png" },
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/images/logo/logo.png" },
    ],
    shortcut: "/images/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
