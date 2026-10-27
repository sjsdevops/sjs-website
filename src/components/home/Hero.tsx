"use client";

import React, { useEffect, useRef } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust autoplay initialization for mobile Safari and Android Chrome
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted properties and attributes required by mobile WebKit/Blink
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay is blocked (e.g. low power mode), automatically play on first tap/interaction
          const handleFirstInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("click", handleFirstInteraction);
          };
          window.addEventListener("touchstart", handleFirstInteraction, {
            once: true,
            passive: true,
          });
          window.addEventListener("click", handleFirstInteraction, {
            once: true,
            passive: true,
          });
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
      video.addEventListener("canplay", playVideo, { once: true });
    }
  }, []);

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
    <section className="relative w-full overflow-hidden bg-transparent h-[65svh] min-h-[480px] max-h-[650px] lg:h-screen lg:min-h-[100dvh] lg:max-h-none m-0 p-0">
      {/* Background School Hero Video Wrapper: starts flush at top:0, left:0, no padding/margin */}
      <div className="absolute inset-0 top-0 left-0 m-0 p-0 h-full w-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/school-hero.mp4"
          poster="/images/hero/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 top-0 left-0 m-0 p-0 h-full w-full object-cover object-center scale-[1.35] pointer-events-none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Transparent Deep Navy (#102D46) Gradient Overlay over Top of Hero Video */}
      {/* Mobile: soft gentle gradient eliminating dark blue-shaded band above header */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[180px] z-10 select-none block sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 45, 70, 0.35) 0%, rgba(16, 45, 70, 0.20) 35%, rgba(16, 45, 70, 0.06) 70%, rgba(16, 45, 70, 0) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Tablet & Desktop: preserved original rich deep navy gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 sm:h-[320px] lg:h-[460px] z-10 select-none hidden sm:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 45, 70, 0.85) 0%, rgba(16, 45, 70, 0.72) 25%, rgba(16, 45, 70, 0.48) 52%, rgba(16, 45, 70, 0.22) 75%, rgba(16, 45, 70, 0.06) 90%, rgba(16, 45, 70, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Dark Backdrop Tint to ensure centered heading & subtitle remain clearly readable across all video scenes */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/35 sm:bg-black/30 select-none"
        aria-hidden="true"
      />

      {/* Centered Hero Heading & Subtitle Pill */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-10">
        {/* Main Heading: Two-line elegant white serif */}
        <h1 className="font-serif text-white tracking-normal leading-[1.12] sm:leading-[1.15] text-[32px] xs:text-[40px] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] select-none max-w-5xl">
          <span className="block whitespace-nowrap">Inspiring Minds.</span>
          <span className="block whitespace-nowrap mt-1 sm:mt-2">Shaping Futures.</span>
        </h1>

        {/* Subtitle inside rounded dark charcoal semi-transparent pill */}
        <div className="mt-4 sm:mt-6 md:mt-7 inline-flex items-center justify-center">
          <span className="inline-block px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 rounded-full bg-[#18181b]/75 sm:bg-[#121820]/75 backdrop-blur-md border border-white/20 text-white font-semibold text-[11px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.24em] sm:tracking-[0.30em] shadow-[0_4px_20px_rgba(0,0,0,0.35)] select-none">
            ICSE &amp; ISC HIGHER SECONDARY
          </span>
        </div>
      </div>

      {/* Continuous Scrolling Announcement Marquee Ticker at the bottom of Hero */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 w-full overflow-hidden bg-[#075A9C] py-2.5 sm:py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] border-t border-white/15 announcement-bar-hover select-none sm:select-auto"
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
