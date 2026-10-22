"use client";

import React from "react";
import Image from "next/image";

interface AdmissionsBannerProps {
  onOpenEnquiry?: () => void;
}

export default function AdmissionsBanner({ onOpenEnquiry }: AdmissionsBannerProps) {
  return (
    <section id="app-download" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container-width">
        {/* Main Card with Blue to Deep Navy Gradient */}
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] bg-gradient-to-r from-[#005EAD] via-[#084985] to-[#071F36] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,50,110,0.35)]">

          {/* Subtle Decorative Background Accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Top-left soft ambient glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl" />

            {/* Deep navy ambient glow in bottom right */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#051525]/60 blur-3xl" />

            {/* Subtle Diagonal Striped Accent Shape in Bottom-Right (matching reference design) */}
            <svg
              className="absolute -bottom-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none text-sky-200/10"
              viewBox="0 0 240 240"
              fill="none"
            >
              <defs>
                <pattern
                  id="diag-stripes"
                  width="14"
                  height="14"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="2.5" />
                </pattern>
              </defs>
              <rect
                x="20"
                y="20"
                width="200"
                height="200"
                rx="56"
                fill="url(#diag-stripes)"
                transform="rotate(-12 120 120)"
              />
            </svg>
          </div>

          <div className="relative z-10 grid items-center lg:grid-cols-[0.85fr_1.25fr] gap-8 lg:gap-12 p-8 sm:p-12 lg:p-14 xl:p-16">

            {/* Left Column: White Circular Panel with School Logo and Subtle Blue Rings */}
            <div className="flex justify-center items-center">
              <div className="relative flex items-center justify-center">

                {/* Subtle Outer Concentric Ring 2 */}
                <div className="absolute -inset-5 sm:-inset-7 rounded-full border border-white/10 pointer-events-none" />

                {/* Subtle Outer Concentric Ring 1 */}
                <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-white/20 bg-white/[0.03] pointer-events-none" />

                {/* Translucent floating blue accent spheres */}
                <div className="absolute -bottom-1.5 -left-2.5 sm:-bottom-2 sm:-left-3.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-sky-400/40 to-sky-200/20 backdrop-blur-sm border border-white/30 shadow-lg pointer-events-none z-20" />
                <div className="absolute -bottom-3 left-6 sm:-bottom-4 sm:left-8 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-sky-300/35 border border-white/25 pointer-events-none z-20" />
                <div className="absolute top-2.5 right-0.5 sm:top-3 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/20 border border-white/30 pointer-events-none z-20" />

                {/* Compact White Circular Panel (Reduced to ~160px x 160px on desktop) */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-[160px] lg:h-[160px] rounded-full bg-white shadow-[0_16px_40px_rgba(0,25,60,0.3)] flex items-center justify-center p-5 sm:p-6">
                  <Image
                    src="/images/logo/sjs-logo-main.jpg"
                    alt="Sree Jayam School Logo"
                    width={220}
                    height={62}
                    className="w-full max-w-[105px] sm:max-w-[120px] lg:max-w-[120px] h-auto object-contain"
                    priority
                  />
                </div>

              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="text-white text-left">

              {/* Label: STAY CONNECTED */}
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-[#FFC83D]">

                <span>STAY CONNECTED</span>
              </div>

              {/* Heading: Download the Sree Jayam Parent App today. */}
              <h2 className="mt-3.5 font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-white leading-[1.2] tracking-tight">
                Download the Sree Jayam <br className="hidden sm:inline" />
                <span className="text-[#FFC83D]">Parent App</span> today.
              </h2>

              {/* Text Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-100/90 leading-relaxed font-normal max-w-xl">
                Stay updated with real-time attendance, academic performance, daily homework, circulars, fee notifications, and direct teacher communications right at your fingertips.
              </p>

              {/* Official Store Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">

                {/* Download on the App Store */}
                <a
                  href="https://apps.apple.com/in/app/jayam360/id6779545992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-black border border-white/20 hover:border-white/50 px-4 sm:px-5 py-2.5 sm:py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50 active:translate-y-0"
                  aria-label="Download on the App Store"
                >
                  {/* Official Apple Logo SVG */}
                  <svg
                    className="h-7 w-7 text-white fill-current shrink-0 transition-transform duration-200 group-hover:scale-105"
                    viewBox="0 0 170 170"
                    aria-hidden="true"
                  >
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.5-10.84-20.09-14.22-31.78-3.37-11.68-5.07-22.98-5.07-33.89 0-14.78 3.8-27.18 11.41-37.21 7.6-10.02 17.15-15.15 28.64-15.38 4.67 0 10.15 1.25 16.44 3.75 6.29 2.5 10.37 3.81 12.24 3.94 1.77-.13 5.97-1.44 12.61-3.94 6.64-2.5 12.01-3.67 16.12-3.52 10.23.44 18.99 4.13 26.27 11.06 7.28 6.94 12.33 15.42 15.15 25.46-9.13 5.54-13.62 13.25-13.48 23.13.14 8.78 3.51 16.16 10.11 22.13 6.6 5.97 14.36 9.49 23.28 10.57-2.32 7.07-5.32 14.59-8.99 22.56zm-26.68-109.84c.14 2.2.03 4.54-.34 7.02-.37 2.48-1.12 5.07-2.24 7.76-1.87 4.56-4.63 8.35-8.29 11.38-3.66 3.03-7.79 5.09-12.4 6.18-.75-2.2-1.07-4.48-.96-6.85.11-2.37.77-4.88 1.99-7.53 1.93-4.22 4.66-7.85 8.19-10.89 3.53-3.04 7.91-5.11 13.13-6.22.62-.59.93-.54.91-.85z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-slate-300 font-medium tracking-wide">
                      Download on the
                    </div>
                    <div className="text-sm sm:text-[16px] font-semibold text-white leading-tight font-sans tracking-tight">
                      App Store
                    </div>
                  </div>
                </a>

                {/* Get it on Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.sreejayam.schoolerp&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-black border border-white/20 hover:border-white/50 px-4 sm:px-5 py-2.5 sm:py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50 active:translate-y-0"
                  aria-label="Get it on Google Play"
                >
                  {/* Official Google Play Logo SVG */}
                  <svg
                    className="h-7 w-7 shrink-0 transition-transform duration-200 group-hover:scale-105"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M48.7 18.1C41.7 25.6 37.3 37.2 37.3 52.1v407.8c0 14.9 4.4 26.5 11.4 34l1.9 1.8 228.4-228.4v-7.6L50.6 16.3l-1.9 1.8z"
                    />
                    <path
                      fill="#FBBC04"
                      d="M356.1 334.3l-77.1-77.1v-7.6l77.1-77.1 1.7 1 91.2 51.8c26 14.8 26 39.1 0 53.9l-92.9 53.1z"
                    />
                    <path
                      fill="#EA4335"
                      d="M357.8 333.3L279 254.5 48.7 484.8c8.6 9.1 22.7 10.2 38.5 1.3l270.6-152.8z"
                    />
                    <path
                      fill="#34A853"
                      d="M357.8 178.7L87.2 25.9c-15.8-8.9-29.9-7.8-38.5 1.3L279 257.5l78.8-78.8z"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9.5px] leading-tight text-slate-300 font-medium tracking-wider uppercase">
                      GET IT ON
                    </div>
                    <div className="text-sm sm:text-[16px] font-semibold text-white leading-tight font-sans tracking-tight">
                      Google Play
                    </div>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
