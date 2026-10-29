import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
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
      { url: "/favicon.ico" },
      { url: "/icon.png" },
      { url: "/images/logo/logo.png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/images/logo/logo.png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
