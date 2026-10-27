import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sree Jayam School — ICSE & ISC, Vellore",
  description:
    "Get in touch with Sree Jayam School, Vellore. Connect with us for admissions, academic enquiries, campus visits, or general assistance. Located at Ezhil Nagar, Allapuram, Vellore.",
  keywords: [
    "Contact Sree Jayam School",
    "Sree Jayam School Address",
    "School Phone Number Vellore",
    "Admission Enquiry Sree Jayam",
    "School Location Allapuram Vellore",
    "ICSE School Contact Vellore",
  ],
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
