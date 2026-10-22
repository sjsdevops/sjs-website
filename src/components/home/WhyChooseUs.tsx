"use client";

import React from "react";
import Link from "next/link";

interface ReasonCard {
  number: string;
  title: string;
  summary: string;
  isWarm?: boolean;
}

const reasonCards: ReasonCard[] = [
  {
    number: "01",
    title: "Why ICSE/ISC?",
    summary:
      "In-depth understanding, critical thinking, strong communication skills and global recognition.",
  },
  {
    number: "02",
    title: "Why Us?",
    summary:
      "Focused learning, personalised guidance, skill development and a safe, supportive environment.",
    isWarm: true,
  },
  {
    number: "03",
    title: "Salient Features",
    summary:
      "Modern facilities, co-curricular opportunities and a student-friendly infrastructure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-8"
    >
      {/* Background Soft Ambient Decorative Blurs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-[#FFF9EC]/70 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#EAF5FF]/80 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#EAF5FF]/80 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex flex-col items-center">


          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
            Why <span className="text-[#075A9C]">Choose Us</span>
          </h2>

          <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#55697A] font-normal leading-relaxed">
            Nurturing confident learners for a brighter tomorrow.
          </p>
        </div>

        {/* Three Cards in Single Desktop Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {reasonCards.map((card) => (
            <div
              key={card.number}
              className={`group relative rounded-[26px] p-7 sm:p-8 pt-12 pb-10 sm:pb-12 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(16,45,70,0.09)] flex flex-col justify-between overflow-hidden ${card.isWarm
                ? "bg-[#FFFDF7] border border-[#F5EEDB] shadow-[0_8px_30px_rgba(16,45,70,0.05)]"
                : "bg-white border border-[#E8EFF6] shadow-[0_8px_30px_rgba(16,45,70,0.04)]"
                }`}
            >
              {/* Card Corner Index Badge (01 / 02 / 03) */}
              <div
                className="absolute top-0 left-0 flex items-stretch overflow-hidden rounded-br-2xl shadow-sm z-10"
                aria-label={`Step ${card.number}`}
              >
                {/* Yellow vertical accent strip */}
                <div className="w-1.5 bg-[#FFC83D]" />
                {/* Navy number block */}
                <div className="bg-[#102D46] px-4 py-2 text-white font-bold text-xs sm:text-[13px] tracking-wider">
                  {card.number}
                </div>
              </div>

              {/* Card Core Content */}
              <div className="relative z-10 pt-2 flex flex-col items-center">
                {/* Card Title */}
                <h3 className="text-[22px] sm:text-2xl lg:text-[25px] font-bold text-[#102D46] tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Yellow Underline Accent */}
                <div
                  className="w-10 h-[2.5px] bg-[#FFC83D] rounded-full mx-auto my-3 sm:my-3.5"
                  aria-hidden="true"
                />

                {/* Concise Summary */}
                <p className="text-[#55697A] text-[14px] sm:text-[14.5px] lg:text-[15px] leading-relaxed font-normal max-w-[290px] mx-auto">
                  {card.summary}
                </p>
              </div>

              {/* Subtle Bottom Ambient Curved Wave (CSS / SVG Geometry) */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 sm:h-20 overflow-hidden select-none opacity-40 z-0"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <path
                    d="M0,45 C110,85 240,15 400,55 L400,100 L0,100 Z"
                    fill={card.isWarm ? "#FFE9B8" : "#D8ECFD"}
                    opacity="0.45"
                  />
                  <path
                    d="M0,60 C130,25 280,85 400,45 L400,100 L0,100 Z"
                    fill={card.isWarm ? "#FFF3D6" : "#EAF5FF"}
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Read More Action */}
        <div className="mt-12 sm:mt-14 text-center relative z-10">
          <Link
            href="/why-choose-us"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#102D46] hover:bg-[#075A9C] text-white font-medium text-[14.5px] sm:text-[15px] tracking-wide shadow-[0_6px_20px_rgba(16,45,70,0.18)] hover:shadow-[0_8px_24px_rgba(7,90,156,0.26)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Read More</span>
            <span
              className="font-bold transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
