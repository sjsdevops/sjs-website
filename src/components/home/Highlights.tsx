"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface StatItem {
  target: number;
  label: string;
  isBlue: boolean; // Alternating pale-blue vs warm-cream
}

const stats: StatItem[] = [
  { target: 100, label: "Staff Members", isBlue: true },
  { target: 1200, label: "Students", isBlue: false },
  { target: 50, label: "Awards & Achievements", isBlue: true },
  { target: 500, label: "Parent Reviews", isBlue: false },
];

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <>{value.toLocaleString()}</>;
}

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-y border-slate-100">

      {/* ========================================================================= */}
      {/* 1. Curved Photo Mask on the LEFT Edge (School Building Architecture)      */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[18%] xl:w-[22%] hidden lg:block overflow-hidden select-none -z-0"
        aria-hidden="true"
      >
        {/* Organic curved clip container */}
        <div
          className="relative h-full w-full"
          style={{
            clipPath: "ellipse(85% 65% at 0% 50%)",
          }}
        >
          <Image
            src="/images/about/School-block.png"
            alt=""
            fill
            className="object-cover object-left"
            sizes="(max-width: 1280px) 20vw, 22vw"
          />
          {/* Subtle blue tint overlay */}
          <div className="absolute inset-0 bg-[#075A9C]/10 mix-blend-multiply" />
        </div>

        {/* Decorative inner curve accent lines */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 170,0 C 170,120 185,280 170,400"
            stroke="#075A9C"
            strokeWidth="3"
            strokeOpacity="0.25"
          />
          <path
            d="M 185,20 C 185,140 198,260 185,380"
            stroke="#FFC83D"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. Curved Photo Mask on the RIGHT Edge (Campus Greenery)                  */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[18%] xl:w-[22%] hidden lg:block overflow-hidden select-none -z-0"
        aria-hidden="true"
      >
        {/* Organic curved clip container */}
        <div
          className="relative h-full w-full"
          style={{
            clipPath: "ellipse(85% 65% at 100% 50%)",
          }}
        >
          <Image
            src="/images/about/School-block.png"
            alt=""
            fill
            className="object-cover object-right"
            sizes="(max-width: 1280px) 20vw, 22vw"
          />
          {/* Subtle blue tint overlay */}
          <div className="absolute inset-0 bg-[#075A9C]/10 mix-blend-multiply" />
        </div>

        {/* Decorative inner curve accent lines */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 30,0 C 30,120 15,280 30,400"
            stroke="#075A9C"
            strokeWidth="3"
            strokeOpacity="0.25"
          />
          <path
            d="M 15,20 C 15,140 2,260 15,380"
            stroke="#FFC83D"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. Center Content Container                                               */}
      {/* ========================================================================= */}
      <div className="relative z-10 container-width max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-3.5 mb-10 sm:mb-14">

          {/* Section label with short yellow underline */}
          <div className="inline-flex flex-col items-center">
            <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-[#075A9C]">
              SREE JAYAM AT A GLANCE
            </span>
            <span className="block h-[2.5px] w-9 bg-[#FFC83D] rounded-full mt-1.5" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#102D46] tracking-tight leading-[1.2]">
            A journey of learning and{" "}
            <span className="text-[#075A9C]">achievement</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-[15.5px] leading-relaxed text-[#55697A] font-normal">
            Nurturing young minds with strong values, quality education and diverse opportunities to help them achieve a brighter future.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. Four Refined Statistic Cards (2-col mobile, 4-col desktop)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5 lg:gap-5">
          {stats.map((item, idx) => {
            const isBlue = item.isBlue;
            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center justify-center text-center p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-[22px] transition-all duration-300 hover:-translate-y-1 ${isBlue
                  ? "bg-[#F4F9FD] border border-[#D5E8F8] shadow-[0_4px_16px_rgba(7,90,156,0.06)] hover:shadow-[0_8px_24px_rgba(7,90,156,0.12)]"
                  : "bg-[#FFFDF7] border border-[#FCEEC8] shadow-[0_4px_16px_rgba(255,200,61,0.08)] hover:shadow-[0_8px_24px_rgba(255,200,61,0.16)]"
                  }`}
              >
                {/* Thin colored top-left accent indicator matching reference */}
                <div
                  className={`absolute top-0 left-0 right-0 h-4 rounded-t-2xl sm:rounded-t-[22px] ${isBlue ? "bg-[#075A9C]" : "bg-[#FFC83D]"
                    }`}
                  aria-hidden="true"
                />

                {/* Animated Stat Number */}
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#102D46] leading-none">
                  <AnimatedNumber target={item.target} duration={2000} />
                  <span className={isBlue ? "text-[#075A9C]" : "text-[#D98A00]"}>+</span>
                </div>

                {/* Stat Label */}
                <div className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] lg:text-[13.5px] font-bold text-[#55697A] tracking-tight leading-snug">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 5. "Learn • Grow • Achieve" with Golden Wave Flourish                      */}
        {/* ========================================================================= */}
        <div className="relative mt-10 sm:mt-12 text-center">
          <span className="italic text-sm sm:text-base text-[#7C90A0] tracking-wider select-none">
            Learn &nbsp;•&nbsp; Grow &nbsp;•&nbsp; Achieve
          </span>

          {/* Smooth golden wave swooshing towards the right as in the reference */}
          <div className="relative max-w-lg mx-auto h-6 mt-1 pointer-events-none">
            <svg
              className="w-full h-full text-[#FFC83D]"
              viewBox="0 0 500 24"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 50,18 C 180,24 320,4 480,12"
                stroke="#FFC83D"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
