"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Our School", href: "/about-us" },
      { name: "Leadership Messages", href: "/leadership-messages" },
      { name: "Mission & Vision Policy", href: "/mission-and-vision-policy" },
      { name: "Why Choose Us", href: "/why-choose-us" },
      { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
    ],
  },
  { name: "Academics", href: "/academics" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth hover handlers with debounce to prevent accidental closure
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // Close dropdown on click or touch outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAdmissionClick = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById("admissions");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Completely Transparent Header Overlay over Hero Video (Elevated to z-40 so dropdown stays above all page content) */}
      <header className="absolute top-0 left-0 right-0 z-40 w-full bg-transparent">
        <div className="container-width flex items-center justify-between pt-5 sm:pt-6 lg:pt-8 pb-3 sm:pb-4">

          {/* ========================================================================= */}
          {/* 1. LEFT: Solid White Organic Blob Logo Container                          */}
          {/* ========================================================================= */}
          <Link
            href="/"
            className="relative inline-flex items-center justify-center shrink-0 px-4 sm:px-7 md:px-8 py-2 sm:py-3 transition-transform hover:scale-[1.02] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer group"
            title="Sree Jayam School - Home"
          >
            {/* Smooth asymmetrical organic blob SVG background */}
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
              alt="Sree Jayam School"
              width={423}
              height={95}
              unoptimized
              priority
              className="relative z-10 h-6.5 sm:h-8 md:h-10 lg:h-11 xl:h-11.5 w-auto object-contain transition-opacity group-hover:opacity-95"
            />
          </Link>

          {/* ========================================================================= */}
          {/* 2. CENTRE: Transparent Navigation (White text, yellow active underline)    */}
          {/* ========================================================================= */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navItems.map((item) => {
              const isAbout = item.name === "About Us";
              const isHome = item.name === "Home";

              if (isAbout) {
                return (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative group py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      id="about-menu-button"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                      aria-controls="about-dropdown-menu"
                      className={`inline-flex items-center gap-1.5 text-[14.5px] xl:text-[15px] font-bold tracking-tight !text-white hover:!text-[#FFC83D] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC83D] rounded-lg px-2 py-1 select-none ${dropdownOpen ? "!text-[#FFC83D]" : ""
                        }`}
                    >
                      <span className="!text-white group-hover:!text-[#FFC83D] transition-colors">
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 !text-white stroke-[2.4] transition-transform duration-200 group-hover:rotate-180 group-hover:!text-[#FFC83D] ${dropdownOpen ? "rotate-180 !text-[#FFC83D]" : ""
                          }`}
                      />
                    </button>

                    {/* About Us Dropdown Menu: Dual CSS hover + State-driven visibility, Gold Accent */}
                    <div
                      id="about-dropdown-menu"
                      role="menu"
                      aria-labelledby="about-menu-button"
                      className={`absolute left-0 top-full pt-2 z-50 transition-all duration-200 origin-top-left before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] ${dropdownOpen
                        ? "opacity-100 visible pointer-events-auto translate-y-0"
                        : "opacity-0 invisible pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0"
                        }`}
                    >
                      <div className="w-68 rounded-2xl bg-white p-2.5 shadow-[0_16px_40px_rgba(16,45,70,0.22)] border border-slate-100 ring-1 ring-black/5">
                        <div className="space-y-1" role="none">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              role="menuitem"
                              onClick={() => setDropdownOpen(false)}
                              className="group/item relative flex items-center justify-between rounded-xl px-4 py-2.5 text-[13.5px] font-bold text-[#102D46] transition-all duration-150 hover:bg-[#FFF8EE] hover:text-[#102D46] hover:pl-5 focus:outline-none focus:bg-[#FFF8EE] focus:ring-1 focus:ring-[#FFC83D]"
                            >
                              {/* Gold accent bar on hover */}
                              <span
                                className="absolute left-1.5 top-2.5 bottom-2.5 w-1 rounded-full bg-[#FFC83D] opacity-0 group-hover/item:opacity-100 transition-opacity"
                                aria-hidden="true"
                              />
                              <span className="relative z-10 transition-colors">
                                {dropItem.name}
                              </span>
                              <ArrowRight
                                className="h-3.5 w-3.5 text-[#FFC83D] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                                aria-hidden="true"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (isHome) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative flex flex-col items-center text-[14.5px] xl:text-[15px] font-bold tracking-tight !text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] group cursor-pointer"
                  >
                    <span className="!text-white group-hover:!text-[#FFC83D] transition-colors">
                      {item.name}
                    </span>
                    {/* Active yellow short underline */}
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#FFC83D] rounded-full shadow-sm" />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14.5px] xl:text-[15px] font-bold tracking-tight !text-white hover:!text-[#FFC83D] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] group cursor-pointer"
                >
                  <span className="!text-white group-hover:!text-[#FFC83D] transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ========================================================================= */}
          {/* 3. RIGHT: Yellow Organic Enquire Now Button + Mobile Toggle                */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-3">
            {/* Admission Button: Dark Navy Pill with Gold Phone Icon and Toggle Hover Effect */}
            <a
              href="https://admission.sreejayamschool.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Admissions - Sree Jayam School"
              className="admission-toggle-btn group relative inline-flex h-[58px] w-[185px] shrink-0 items-center overflow-hidden rounded-full bg-[#102D46] border-[1.5px] border-[#FFC83D]/50 shadow-[0_4px_16px_rgba(0,0,0,0.28)] hover:border-[#FFC83D] hover:shadow-[0_6px_22px_rgba(255,200,61,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC83D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102D46] active:scale-[0.98] transition-all duration-300 select-none cursor-pointer origin-right scale-[0.84] xs:scale-[0.92] sm:scale-100"
              style={{
                backgroundColor: "#102D46",
                borderColor: "rgba(255, 200, 61, 0.5)",
                height: "51px",
                width: "185px",
              }}
            >
              {/* Text: Call Now in gold - positioned on left, glides to right on hover */}
              <span
                className="admission-toggle-text absolute left-[22px] flex items-center text-[15px] font-bold tracking-wide text-[#FFC83D] whitespace-nowrap"
                style={{
                  color: "#FFC83D",
                }}
              >
                Admissions
              </span>

              {/* Gold circular phone icon - positioned on right, glides to left on hover */}
              <span
                className="admission-toggle-icon absolute top-[7px] right-[7px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#FFC83D] text-[#102D46] shadow-[0_2px_8px_rgba(0,0,0,0.22)]"
                style={{
                  backgroundColor: "#FFF",
                  color: "#102D46",
                  width: "35px",
                  height: "35px",
                }}
                aria-hidden="true"
              >
                <Phone
                  className="h-5 w-5 fill-[#102D46] stroke-[#102D46] text-[#102D46]"
                  style={{
                    color: "#102D46",
                    fill: "#102D46",
                  }}
                />
              </span>
            </a>

            {/* Mobile Navigation Toggle Button (Visible on screens < lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
            >
              <Menu className="h-5 w-5 stroke-[2.2]" />
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 4. RESPONSIVE MOBILE NAVIGATION DRAWER                                    */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#102D46]/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div className="relative z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="flex flex-col">
                <span className="text-base font-black text-[#102D46] tracking-wide">
                  SREE JAYAM SCHOOL
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#075A9C]">
                  Learn · Grow · Excel
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#102D46] hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 px-6 py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 font-bold text-base text-[#102D46] hover:text-[#075A9C] border-b border-slate-100"
              >
                Home
              </Link>

              {/* About Us Mobile Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                  className="flex w-full items-center justify-between py-2.5 text-left font-bold text-base text-[#102D46] hover:text-[#075A9C]"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform ${mobileAboutExpanded ? "rotate-180 text-[#075A9C]" : ""
                      }`}
                  />
                </button>
                {mobileAboutExpanded && (
                  <div className="mt-1 mb-2 pl-3 space-y-1 border-l-2 border-[#075A9C]/25">
                    {navItems[1].dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm text-[#445B6E] hover:text-[#075A9C] font-semibold transition-colors"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 font-bold text-base text-[#102D46] hover:text-[#075A9C] border-b border-slate-100"
              >
                Academics
              </Link>

              <Link
                href="/facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 font-bold text-base text-[#102D46] hover:text-[#075A9C] border-b border-slate-100"
              >
                Facilities
              </Link>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 font-bold text-base text-[#102D46] hover:text-[#075A9C] border-b border-slate-100"
              >
                Gallery
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 font-bold text-base text-[#102D46] hover:text-[#075A9C] border-b border-slate-100"
              >
                Contact Us
              </Link>

              {/* Admission Button in Drawer */}
              <div className="pt-6">
                <a
                  href="https://admission.sreejayamschool.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#102D46] border border-[#FFC83D]/40 px-6 py-3.5 font-bold text-[#FFC83D] shadow-md hover:border-[#FFC83D] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC83D] text-[#102D46]">
                    <Phone className="h-3.5 w-3.5 fill-[#102D46] stroke-[#102D46]" />
                  </span>
                  <span>Admissions</span>
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-8 rounded-2xl bg-[#F4F9FD] p-4.5 space-y-2.5 text-xs text-[#4E6476]">
                <div className="font-extrabold uppercase tracking-wider text-[#075A9C] text-[11px]">
                  Admissions Office
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#075A9C] shrink-0" />
                  <span>+91 416 123 3447</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#075A9C] shrink-0" />
                  <span>info@sreejayamschool.edu.in</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#075A9C] shrink-0" />
                  <span>Allapuram, Vellore, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-slate-100 p-5 bg-slate-50 text-center text-xs text-[#6A7F90]">
              Sree Jayam School · ICSE & ISC
            </div>
          </div>
        </div>
      )}
    </>
  );
}
