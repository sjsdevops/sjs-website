"use client";

import React from "react";
import Image from "next/image";
import {
  CalendarDays,
  UsersRound,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Sprout,
} from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  bgClass: string;
}

const features: FeatureItem[] = [
  {
    icon: CalendarDays,
    title: "Founded in April 2005",
    description: "With a vision to create a safe and caring environment for young children.",
    bgClass: "bg-[#EAF5FF]",
  },
  {
    icon: UsersRound,
    title: "Started with 25 students",
    description: "And grew to nearly 50 within two years.",
    bgClass: "bg-[#FFF5D6]",
  },
  {
    icon: GraduationCap,
    title: "Built on dedication",
    description: "Commitment and a passion for early childhood education.",
    bgClass: "bg-[#FFF5D6]",
  },
  {
    icon: ShieldCheck,
    title: "A safe, caring environment",
    description: "Providing a safe, caring and child-friendly atmosphere.",
    bgClass: "bg-[#EAF5FF]",
  },
  {
    icon: BookOpen,
    title: "Activity-based learning",
    description: "To build confidence and curiosity.",
    bgClass: "bg-[#EAF5FF]",
  },
  {
    icon: Sprout,
    title: "Holistic development",
    description: "Emphasis on social, emotional and basic skill development.",
    bgClass: "bg-[#FFF5D6]",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-14 sm:pt-18 lg:pt-22 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-[#F8FBFE]">
      <div className="container-width">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
          
          {/* ========================================================================= */}
          {/* 1. LEFT: Existing Photographic Collage (Preserved exactly)                */}
          {/* ========================================================================= */}
          <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            
            {/* Colorful fluid background organic shapes */}
            <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-[#FFC83D]/25 blur-xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-[#39B9A6]/20 blur-xl pointer-events-none" />

            {/* Organic SVG Blobs peeking around photos */}
            <svg
              className="absolute -top-6 left-1/3 w-28 h-28 text-[#FFC83D] pointer-events-none -z-10"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20,50 Q10,10 50,20 Q90,30 80,70 Q70,110 30,90 Z" />
            </svg>

            <svg
              className="absolute -bottom-8 -left-6 w-36 h-36 text-[#39B9A6] pointer-events-none -z-10 opacity-80"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M30,20 Q80,10 85,50 Q90,90 50,85 Q10,80 15,40 Z" />
            </svg>

            {/* Yellow accent dots */}
            <div className="absolute -top-3 left-[28%] h-4 w-4 rounded-full bg-[#FFC83D]" />
            <div className="absolute top-2 left-[24%] h-2.5 w-2.5 rounded-full bg-[#FFC83D]" />

            {/* Grid / Cluster of 4 Organic Photo Cards */}
            <div className="relative grid grid-cols-2 gap-3.5 sm:gap-4.5">
              
              {/* Photo 1 (Top-Left): Kids playing */}
              <div className="relative aspect-square overflow-hidden rounded-[32px] sm:rounded-[38px] border-4 sm:border-[6px] border-white shadow-[0_12px_28px_rgba(16,45,70,0.12)]">
                <Image
                  src="/images/about/Kids-playing.jpg"
                  alt="Young kindergarten students learning and playing with building blocks at Sree Jayam School"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Photo 2 (Top-Right): Robotics Lab */}
              <div className="relative aspect-square overflow-hidden rounded-[32px] sm:rounded-[38px] border-4 sm:border-[6px] border-white shadow-[0_12px_28px_rgba(16,45,70,0.12)] mt-6 sm:mt-8">
                <Image
                  src="/images/about/Robotics.png"
                  alt="Students engaged in robotics and hands-on STEM innovation at Sree Jayam School"
                  fill
                  className="object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Photo 3 (Bottom-Left): Science Laboratory */}
              <div className="relative aspect-square overflow-hidden rounded-[32px] sm:rounded-[38px] border-4 sm:border-[6px] border-white shadow-[0_12px_28px_rgba(16,45,70,0.12)] -mt-4 sm:-mt-6">
                <Image
                  src="/images/about/Science-library.jpg"
                  alt="Students conducting optics physics experiments in the science laboratory"
                  fill
                  className="object-cover object-[28%_center] transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Photo 4 (Bottom-Right): School Campus Block */}
              <div className="relative aspect-square overflow-hidden rounded-[32px] sm:rounded-[38px] border-4 sm:border-[6px] border-white shadow-[0_12px_28px_rgba(16,45,70,0.12)] mt-2 sm:mt-2">
                <Image
                  src="/images/about/School-block.png"
                  alt="Modern architectural infrastructure and campus building of Sree Jayam School"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. RIGHT: Editorial About Us Section Matching Approved Reference          */}
          {/* ========================================================================= */}
          <div className="relative space-y-6 sm:space-y-7">
            
            {/* Top-Right Decorative Accent: Subtle pale-cream circle + fine blue outline book */}
            <div className="absolute -top-8 -right-2 sm:-right-6 pointer-events-none -z-0 hidden md:block">
              {/* Subtle pale-cream circular accent */}
              <div className="absolute -top-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#FFF9EB] -z-10" />
              
              {/* Fine blue outline open book illustration */}
              <div className="relative top-3 right-1 sm:top-5 sm:right-3 opacity-80">
                <svg
                  viewBox="0 0 120 90"
                  fill="none"
                  stroke="#075A9C"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-24 h-20 sm:w-28 sm:h-24"
                  aria-hidden="true"
                >
                  {/* Spine and open book pages */}
                  <path d="M60 22 C60 22 42 12 12 18 L12 72 C42 66 60 76 60 76 C60 76 78 66 108 72 L108 18 C78 12 60 22 60 22 Z" />
                  <path d="M60 22 L60 76" />
                  {/* Fine subtle page text lines */}
                  <path d="M22 30 C34 28 46 32 50 34" strokeWidth="1.3" opacity="0.65" />
                  <path d="M22 42 C34 40 46 44 50 46" strokeWidth="1.3" opacity="0.65" />
                  <path d="M22 54 C34 52 46 56 50 58" strokeWidth="1.3" opacity="0.65" />
                  <path d="M98 30 C86 28 74 32 70 34" strokeWidth="1.3" opacity="0.65" />
                  <path d="M98 42 C86 40 74 44 70 46" strokeWidth="1.3" opacity="0.65" />
                  <path d="M98 54 C86 52 74 56 70 58" strokeWidth="1.3" opacity="0.65" />
                </svg>
              </div>
            </div>

            {/* Section label with short yellow underline */}
            <div className="relative z-10 space-y-1.5">
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#075A9C]">
                ABOUT SREE JAYAM
              </span>
              <span className="block h-[3px] w-8 bg-[#FFC83D] rounded-full" />
            </div>

            {/* Main Heading */}
            <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-[42px] font-black text-[#102D46] tracking-tight leading-[1.18]">
              Building strong<br className="hidden sm:inline" /> foundations for{" "}
              <span className="text-[#075A9C]">brighter tomorrows.</span>
            </h2>

            {/* Introduction paragraph */}
            <p className="relative z-10 text-[14.5px] sm:text-[15px] lg:text-[15.5px] leading-relaxed text-[#55697A] font-medium max-w-2xl">
              Founded in April 2005 with a vision to create a safe and caring environment for young children, Sree Jayam School has grown through dedication, commitment and a passion for early childhood education.
            </p>

            {/* Six Feature Cards in 2-Column, 3-Row Grid */}
            <div className="relative z-10 pt-1 sm:pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(16,45,70,0.03)] hover:shadow-[0_4px_14px_rgba(16,45,70,0.06)] transition-shadow"
                  >
                    <div
                      className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full ${item.bgClass}`}
                    >
                      <IconComponent className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-[#075A9C] stroke-[2]" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h3 className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] font-bold text-[#102D46] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[12px] lg:text-[12.5px] text-[#55697A] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
