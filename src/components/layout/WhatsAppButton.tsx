"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919487021111";
  const message =
    "Hello Sree Jayam School, I would like to enquire about admissions for Academic Year 2027-2028. Please share the admission process, eligibility, and fee details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sree Jayam School on WhatsApp"
        className="group fixed bottom-6 right-6 sm:bottom-7 sm:right-7 z-40 flex h-14 w-14 sm:h-[60px] sm:w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 focus:ring-offset-2"
      >
        {/* White WhatsApp Icon */}
        <FaWhatsapp size={32} className="shrink-0 text-white transition-transform duration-200 group-hover:scale-105" />

        {/* Small desktop hover tooltip: 'Chat with us' */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3.5 hidden md:flex items-center rounded-xl bg-[#102D46] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-xl opacity-0 translate-x-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap"
        >
          Chat with us
          {/* Subtle triangle arrow pointing to the WhatsApp button */}
          <span
            aria-hidden="true"
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#102D46]"
          />
        </span>
      </a>
    </aside>
  );
}
