"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StageItem {
  id: string;
  number: string;
  title: string;
  grade: string;
  description: string;
  image: string;
  badgeBg: string;
  badgeText: string;
}

const row1Stages: StageItem[] = [
  {
    id: "foundation",
    number: "01",
    title: "Foundation Stage",
    grade: "Pre-KG to Grade II",
    description:
      "A strong foundation through play, exploration and guided learning, helping children develop essential language, numeracy, creativity and social skills.",
    image: "/images/about/Kids-playing.jpg",
    badgeBg: "bg-[#FFC83D]",
    badgeText: "text-[#102D46]",
  },
  {
    id: "preparatory",
    number: "02",
    title: "Preparatory Stage",
    grade: "Grades III – V",
    description:
      "Students begin to develop stronger academic skills and are gradually introduced to a more structured learning and examination pattern.",
    image: "/images/academics/Preparatory-stage.jpg",
    badgeBg: "bg-[#EAF5FF]",
    badgeText: "text-[#075A9C]",
  },
  {
    id: "middle",
    number: "03",
    title: "Middle School",
    grade: "Grades VI – VIII",
    description:
      "The curriculum becomes more comprehensive, encouraging deeper understanding of subjects along with co-curricular activities and independent thinking.",
    image: "/images/academics/middle-school.jpg",
    badgeBg: "bg-[#FFC83D]",
    badgeText: "text-[#102D46]",
  },
];

const row2Stages: StageItem[] = [
  {
    id: "icse",
    number: "04",
    title: "ICSE",
    grade: "Grades IX – X",
    description:
      "The ICSE curriculum focuses on comprehensive subject learning, analytical thinking and real world application, preparing students for future academic and career opportunities.",
    image: "/images/academics/secondary- stage.jpg",
    badgeBg: "bg-[#102D46]",
    badgeText: "text-white",
  },
  {
    id: "isc",
    number: "05",
    title: "ISC",
    grade: "Grades XI – XII",
    description:
      "The ISC curriculum provides in-depth subject knowledge and critical thinking skills, helping students excel in higher education and their chosen career paths.",
    image: "/images/academics/high-school.jpg",
    badgeBg: "bg-[#075A9C]",
    badgeText: "text-white",
  },
];

export default function AcademicsSection() {
  return (
    <section id="academics" className="relative py-16 sm:py-20 lg:py-24 bg-[#FAFCFE] overflow-hidden border-b border-slate-100">

      {/* Background Soft Organic Curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAF5FF]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFF8E6]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container-width relative z-10">

        {/* ========================================================================= */}
        {/* TOP HERO BANNER: Editorial Layout with Classroom Photo Banner             */}
        {/* ========================================================================= */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16 rounded-[28px] sm:rounded-[36px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(16,45,70,0.04)] overflow-hidden">
          <div className="grid lg:grid-cols-12 items-center">

            {/* Left Header Content */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 xl:p-14 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#075A9C]">
                <span>ACADEMICS AT SREE JAYAM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] text-[#102D46] tracking-tight leading-[1.15]">
                Academic <span className="text-[#075A9C]">Stages</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-[16.5px] leading-relaxed text-[#55697A] font-medium max-w-lg">
                A progressive learning journey from foundational skills to ICSE and ISC excellence.
              </p>
            </div>

            {/* Right Photo Banner with Organic Curved Mask */}
            <div className="lg:col-span-6 relative h-64 sm:h-72 lg:h-[320px] w-full overflow-hidden">
              {/* Organic curved shape for magazine editorial look */}
              <div
                className="relative h-full w-full"
                style={{
                  clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  src="/images/facilities/School-prayer.jpg"
                  alt="Students engaged in smart classroom learning at Sree Jayam School"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Subtle scrim gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#102D46]/60 lg:via-transparent lg:to-transparent" />

                {/* Magazine Style Editorial Typography Accent */}
                <div className="absolute top-6 right-8 text-right hidden sm:block">
                  <span className="italic text-white/90 text-sm lg:text-base block tracking-wider leading-tight">

                  </span>
                  <span className="italic text-white/90 text-sm lg:text-base block tracking-wider leading-tight">

                  </span>
                  <span className="italic text-white/90 text-sm lg:text-base block tracking-wider leading-tight">

                  </span>
                </div>
              </div>

              {/* Decorative golden wave contour */}
              <div className="absolute -bottom-1 left-0 right-0 h-3 bg-[#FFC83D] opacity-80 pointer-events-none hidden lg:block" />
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 1: Three Stage Cards (Foundation, Preparatory, Middle School)          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-6 sm:gap-y-7">
          {row1Stages.map((stage) => (
            <div
              key={stage.id}
              className="group flex flex-col bg-white rounded-2xl sm:rounded-[22px] border border-slate-100 shadow-[0_4px_16px_rgba(16,45,70,0.04)] hover:shadow-[0_12px_28px_rgba(16,45,70,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Badge + Title + Grade Header */}
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-black text-xs sm:text-sm ${stage.badgeBg} ${stage.badgeText}`}
                    >
                      {stage.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#102D46] leading-snug">
                        {stage.title}
                      </h3>
                      <span className="text-xs sm:text-[12.5px] font-semibold text-[#075A9C] block mt-0.5">
                        {stage.grade}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#55697A] font-normal pt-1">
                    {stage.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2 border-t border-slate-50">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#075A9C] hover:text-[#053D6B] transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Two Wider Horizontal Cards (ICSE and ISC)                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 mt-6 sm:mt-7">
          {row2Stages.map((stage) => (
            <div
              key={stage.id}
              className="group flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-[22px] border border-slate-100 shadow-[0_4px_16px_rgba(16,45,70,0.04)] hover:shadow-[0_12px_28px_rgba(16,45,70,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Left Photo & Stage Badge Container */}
              <div className="relative w-full sm:w-[42%] aspect-[16/10] sm:aspect-auto shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />

                {/* Stage Number Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg font-black text-xs sm:text-sm shadow-sm ${stage.badgeBg} ${stage.badgeText}`}
                  >
                    {stage.number}
                  </span>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="p-5 sm:p-6 lg:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#102D46] leading-snug">
                      {stage.title}
                    </h3>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#075A9C] block mt-0.5">
                      {stage.grade}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#55697A] font-normal">
                    {stage.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2 border-t border-slate-50">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#075A9C] hover:text-[#053D6B] transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
