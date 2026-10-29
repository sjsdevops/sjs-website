"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { scholarshipConfig } from "@/data/scholarshipConfig";

// In-memory flag that stays true while navigating around the website,
// but automatically resets back to false whenever the user refreshes or reloads the website.
let isPopupDismissedInSession = false;

export default function ScholarshipPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!scholarshipConfig.popupEnabled) return;

    // Clean up any lingering storage keys from previous versions
    try {
      sessionStorage.removeItem("sjs_scholarship_popup_2027_v1");
      localStorage.removeItem("sjs_scholarship_popup_2027_v1");
    } catch {
      // Ignore storage errors
    }

    if (isPopupDismissedInSession) return;

    // Delay popup slightly for smooth first impression (750ms)
    const timer = setTimeout(() => {
      if (!isPopupDismissedInSession) {
        setIsOpen(true);
      }
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    isPopupDismissedInSession = true;
    setIsOpen(false);
  };

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !scholarshipConfig.popupEnabled) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Sree Jayam School Scholarship Examination Announcement"
    >
      {/* Dark backdrop overlay */}
      <div
        onClick={handleDismiss}
        className="fixed inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Modal Card with overlapping circular close button */}
      <div className="relative z-10 w-full max-w-[440px] sm:max-w-[480px] md:max-w-[510px] animate-in fade-in zoom-in-95 duration-200">
        {/* Floating circular Close button positioned at top right corner */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-[#102D46] shadow-xl border border-slate-200 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
          aria-label="Close scholarship announcement"
        >
          <X className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Poster Image Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/20">
          <Link
            href="/scholarship-registration"
            onClick={handleDismiss}
            className="block group cursor-pointer focus:outline-none"
            title="Click to register for Scholarship Examination 2027–2028"
          >
            <Image
              src={scholarshipConfig.posterImage}
              alt="Sree Jayam School Scholarship Examination 2027–2028 Announcement Poster"
              width={1254}
              height={1254}
              priority
              unoptimized
              className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
