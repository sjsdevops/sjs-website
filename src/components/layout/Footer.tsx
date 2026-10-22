"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navigation,
  ArrowRight,
} from "lucide-react";
import {
  LuMapPin,
  LuPhone,
  LuMail,
} from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-white">
      {/* 1. Curved Flowing Wave Shape Top Edge */}
      <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block text-[#06366B]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,36 C280,85 520,12 760,54 C1000,92 1220,16 1440,38 L1440,96 L0,96 Z"
            fill="currentColor"
          />
        </svg>

        {/* Delicate Sky-Blue Leaf Outline Peaking above the top-right wave edge */}

      </div>

      {/* 2. Main Footer Body with subtle blue gradient */}
      <div className="relative bg-gradient-to-b from-[#06366B] via-[#052E58] to-[#042444] text-white pt-4 sm:pt-6 pb-14 sm:pb-16 overflow-hidden">

        {/* Elegant Low-Opacity Golden Botanical Leaf Outlines on the Right */}


        <div className="container-width relative z-10">
          {/* Main 4-Column Grid: 4 cols desktop, 2 cols tablet, stacked mobile */}
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.9fr_1.3fr] items-start">

            {/* Column 1: School Branding */}
            <div className="space-y-4">
              {/* Sree Jayam School Logo matching Header Logo Design */}
              <Link
                href="/"
                className="relative inline-flex items-center justify-center shrink-0 px-6 sm:px-7 py-2.5 sm:py-3 transition-transform hover:scale-[1.02] filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.2)] cursor-pointer group"
                title="Sree Jayam School - Home"
              >
                {/* Smooth asymmetrical organic blob SVG background matching Header */}
                <svg
                  viewBox="0 0 280 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  aria-hidden="true"
                >
                  <path
                    d="M 42,8 C 90,4 135,15 168,13 C 202,11 236,2 262,18 C 284,32 284,62 262,76 C 238,90 206,82 172,80 C 136,78 106,96 64,96 C 24,96 2,76 2,48 C 2,24 16,10 42,8 Z"
                    fill="#ffffff"
                  />
                </svg>

                {/* School Logo Asset centered inside the white organic shape */}
                <Image
                  src="/images/logo/sjs-logo-main.jpg"
                  alt="Sree Jayam School Logo"
                  width={423}
                  height={95}
                  unoptimized
                  className="relative z-10 h-7 sm:h-8 md:h-9 w-auto object-contain transition-opacity group-hover:opacity-95"
                />
              </Link>

              {/* Tagline */}
              <p className="text-sm leading-relaxed text-[#D0E2F2] font-normal max-w-xs">
                Nurturing curious minds and shaping bright futures
                through quality education, strong values, and
                a commitment to lifelong learning.
              </p>

              {/* Circular Social Media Icons */}
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 pt-1">
                {/* 1. Facebook */}
                <a
                  href="https://www.facebook.com/sreejayamschool/" /* Placeholder: Update with official school Facebook page URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 ease-out hover:scale-110 active:scale-95 hover:bg-[#1877F2] hover:shadow-[0_4px_12px_rgba(24,119,242,0.45)]"
                >
                  <FaFacebookF size={20} className="shrink-0" />
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://www.instagram.com/sreejayamschool/?hl=en" /* Placeholder: Update with official school Instagram profile URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white/10 text-white transition-all duration-300 ease-out hover:scale-110 active:scale-95 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:shadow-[0_4px_12px_rgba(220,39,67,0.45)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <FaInstagram size={21} className="relative z-10 shrink-0" />
                </a>

                {/* 3. YouTube */}
                <a
                  href="https://www.youtube.com/@SreeJayamSchool" /* Placeholder: Update with official school YouTube channel URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 ease-out hover:scale-110 active:scale-95 hover:bg-[#FF0000] hover:shadow-[0_4px_12px_rgba(255,0,0,0.45)]"
                >
                  <FaYoutube size={21} className="shrink-0" />
                </a>

                {/* 4. Twitter (X) */}
                <a
                  href="https://x.com/sreejayamschool?lang=en" /* Placeholder: Update with official school Twitter/X handle URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter (X)"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 ease-out hover:scale-110 active:scale-95 hover:bg-black hover:border hover:border-white/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                >
                  <FaXTwitter size={20} className="shrink-0" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#D0E2F2] font-normal">
                <li>
                  <Link href="/" className="hover:text-[#FFC83D] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#FFC83D] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://admission.sreejayamschool.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFC83D] transition-colors"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-[#FFC83D] transition-colors">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="hover:text-[#FFC83D] transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#FFC83D] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#FFC83D] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Campus Life */}
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide">
                Support
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#D0E2F2] font-normal">
                <li>
                  <Link href="/academics" className="hover:text-[#FFC83D] transition-colors">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/#campus" className="hover:text-[#FFC83D] transition-colors">
                    Co-scholastic Activities
                  </Link>
                </li>
                <li>
                  <Link href="/#campus" className="hover:text-[#FFC83D] transition-colors">
                    Club Activities
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[#FFC83D] transition-colors">
                    Saturday Activities
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[#FFC83D] transition-colors">
                    Compliance Information
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide">
                Contact Us
              </h3>

              <div className="space-y-3 text-sm text-[#D0E2F2] font-normal">
                {/* Location */}
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#102D46] transition-colors duration-200 hover:bg-[#FFC83D] hover:text-[#102D46]">
                    <LuMapPin size={19} />
                  </span>
                  <a
                    href="https://maps.google.com/?q=Allapuram,Vellore,Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Ezhil Nagar Main Rd, Ezhil Nagar, Krishna Nagar, RV Nagar, Vellore,<br></br> Tamil Nadu - 632002
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start sm:items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#102D46] transition-colors duration-200 hover:bg-[#FFC83D] hover:text-[#102D46] mt-0.5 sm:mt-0">
                    <LuPhone size={19} />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href="tel:+919486274144" className="hover:text-white transition-colors whitespace-nowrap">
                      +91 9486274144
                    </a>
                    <a href="tel:0416-222 41 44" className="hover:text-white transition-colors whitespace-nowrap">
                      0416-222 41 44
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#102D46] transition-colors duration-200 hover:bg-[#FFC83D] hover:text-[#102D46]">
                    <LuMail size={19} />
                  </span>
                  <a href="mailto:sreejayamschool@gmail.com" className="hover:text-white transition-colors break-all">
                    sreejayamschool@gmail.com
                  </a>
                </div>
              </div>

              {/* Get Directions Link with circular icon and yellow arrow */}
              <div className="pt-1.5">
                <a
                  href="https://maps.google.com/?q=Allapuram,Vellore,Tamil+Nadu"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-[#D0E2F2] hover:text-white transition-colors"
                >
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar (Darker navy strip with thin divider) */}
      <div className="bg-[#031E3B] border-t border-white/10 py-2">
        <div className="container-width flex flex-col items-center justify-center gap-4 text-center text-xs text-[#9BBAD4]">

          <p>
            © 2026 Sree Jayam School. All Rights Reserved.
            <span className="mx-2">|</span>
            Crafted with ☕ &amp; ❤️ by{" "}
            <a
              href="https://man2web.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:text-[#FFC83D]"
            >
              Man 2 Web
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:gap-4 w-full">
          <Link href="/privacy-policy" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-colors text-[11px]">
            Privacy Policy
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/terms-and-conditions" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-colors text-[11px]">
            Terms & Conditions
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/fee-refund-policy" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-colors text-[11px]">
            Fee Refund
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/child-protection-policy" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-colors text-[11px]">
            Child Protection
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/cookie-policy" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-colors text-[11px] ">
            Cookie Policy
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/legal-disclaimer" className="text-[#9BBAD4] hover:text-[#FFC83D] transition-color text-[11px] ">
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
