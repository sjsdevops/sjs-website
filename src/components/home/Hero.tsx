"use client";

import React from "react";

interface HeroProps {
  onOpenEnquiry?: () => void;
}

interface Announcement {
  id: string;
  heading: string;
  content: React.ReactNode;
}

const announcements: Announcement[] = [
  {
    id: "admissions",
    heading: "Admissions Open:",
    content: "Sree Jayam School - Enroll now for Academic Year 2027-2028",
  },
  {
    id: "grades",
    heading: "PRE - KG TO CLASS IX & XI:",
    content: "Limited Seats Available!",
  },
  {
    id: "quality",
    heading: "QUALITY EDUCATION:",
    content: "Ranked among the best ICSE schools in Vellore. Visit our campus for more details.",
  },
  {
    id: "contact",
    heading: "CONTACT US:",
    content: (
      <>
        <a
          href="tel:+914162224144"
          className="hover:text-[#FFC83D] underline decoration-white/40 underline-offset-2 hover:decoration-[#FFC83D] transition-colors focus:outline-none focus:ring-1 focus:ring-[#FFC83D] rounded-xs"
        >
          +91 416 222 41 44
        </a>{" "}
        or email us at{" "}
        <a
          href="mailto:info@sreejayamschool.edu.in"
          className="hover:text-[#FFC83D] underline decoration-white/40 underline-offset-2 hover:decoration-[#FFC83D] transition-colors focus:outline-none focus:ring-1 focus:ring-[#FFC83D] rounded-xs"
        >
          info@sreejayamschool.edu.in
        </a>
      </>
    ),
  },
];

export default function Hero({}: HeroProps) {
  // Render a seamless set of announcements
  const renderAnnouncementSet = (prefix: string, isAriaHidden = false) => (
    <div
      key={prefix}
      className="flex shrink-0 items-center"
      aria-hidden={isAriaHidden ? "true" : undefined}
    >
      {[0, 1].map((cycle) => (
        <React.Fragment key={`${prefix}-${cycle}`}>
          {announcements.map((item, idx) => (
            <div
              key={`${prefix}-${cycle}-${idx}`}
              className="inline-flex items-center shrink-0"
            >
              <div className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] lg:text-[14px] text-white whitespace-nowrap">
                <span className="font-extrabold text-white tracking-wide">
                  {item.heading}
                </span>
                <span className="font-medium text-white/95">
                  {item.content}
                </span>
              </div>
              {/* Sunshine-Yellow Separator Dot */}
              <span
                className="inline-block mx-6 sm:mx-8 h-2 w-2 rounded-full bg-[#FFC83D] shadow-[0_0_8px_rgba(255,200,61,0.7)] shrink-0 select-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-transparent h-screen min-h-[100dvh]">
      {/* Background School Hero Video scaled to eliminate letterbox bars and start flush at top */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
        <video
          src="/videos/school-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.35] pointer-events-none"
        />
      </div>

      {/* Subtle Transparent Deep Navy (#102D46) Gradient Overlay over Top of Hero Video */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[340px] sm:h-[400px] lg:h-[460px] z-10 select-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 45, 70, 0.85) 0%, rgba(16, 45, 70, 0.72) 25%, rgba(16, 45, 70, 0.48) 52%, rgba(16, 45, 70, 0.22) 75%, rgba(16, 45, 70, 0.06) 90%, rgba(16, 45, 70, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Continuous Scrolling Announcement Marquee Ticker at the bottom of Hero */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden bg-[#075A9C] py-2.5 sm:py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] border-t border-white/15 announcement-bar-hover select-none sm:select-auto"
        role="region"
        aria-label="School Announcements"
      >
        <div className="animate-marquee-continuous">
          {renderAnnouncementSet("set-1", false)}
          {renderAnnouncementSet("set-2", true)}
        </div>
      </div>
    </section>
  );
}
