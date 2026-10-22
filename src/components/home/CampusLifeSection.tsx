"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Music, FlaskConical, Users2 } from "lucide-react";

interface CampusCard {
  title: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  pillBg: string;
  pillTextColor: string;
}

const campusCards: CampusCard[] = [
  {
    title: "Sports",
    image: "/images/campus/campus-sports.jpg",
    alt: "Students participating in sports and athletic team games",
    icon: Trophy,
    pillBg: "bg-[#FFC83D]",
    pillTextColor: "text-[#102D46]",
  },
  {
    title: "Arts & Culture",
    image: "/images/campus/campus-arts.jpg",
    alt: "Students exploring acoustic guitar, music and arts",
    icon: Music,
    pillBg: "bg-[#D94680]",
    pillTextColor: "text-white",
  },
  {
    title: "Science & Innovation",
    image: "/images/campus/campus-science.jpg",
    alt: "Young scientists working with laboratory apparatus and chemical reactions",
    icon: FlaskConical,
    pillBg: "bg-[#22A48E]",
    pillTextColor: "text-white",
  },
  {
    title: "Clubs & Activities",
    image: "/images/campus/campus-clubs.jpg",
    alt: "Students smiling together outdoors participating in student clubs",
    icon: Users2,
    pillBg: "bg-[#075A9C]",
    pillTextColor: "text-white",
  },
];

export default function CampusLifeSection() {
  return (
    <section id="campus" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container-width">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            {/* Subtitle with cute flourish */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#D98A00]">
              <span className="h-[2px] w-5 bg-[#FFC83D]" />
              <span>CAMPUS LIFE</span>
              <span className="h-[2px] w-5 bg-[#FFC83D]" />
            </div>

            {/* Heading */}
            <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#102D46] leading-[1.18] tracking-tight">
              <span className="font-script font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#075A9C] inline-block -rotate-1 mr-2">
                Beyond
              </span>
              Classrooms
            </h2>

            {/* Supporting description */}
            <p className="mt-4 text-base sm:text-[16.5px] leading-relaxed text-[#516B7E] font-medium">
              From sports and the arts to clubs and leadership opportunities, we offer rich experiences that help every child find their passion and grow.
            </p>
          </div>

          {/* Action button */}
          <div className="shrink-0">
            <Link
              href="#facilities"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#075A9C] hover:bg-[#064B82] px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-[15px] font-extrabold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Campus Life</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Tall Vertical Photo Cards with bottom colored badge pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {campusCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col overflow-hidden rounded-[26px] sm:rounded-[32px] bg-slate-100 shadow-[0_8px_24px_-4px_rgba(16,45,70,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(7,90,156,0.18)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] sm:aspect-[9/13] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                  {/* Subtle dark gradient at bottom for pill contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Bottom Floating Pill Tag */}
                <div className="absolute inset-x-3.5 bottom-3.5 sm:inset-x-4 sm:bottom-4 z-10">
                  <div
                    className={`flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full ${card.pillBg} ${card.pillTextColor} shadow-md backdrop-blur-xs font-black text-xs sm:text-[13.5px] tracking-tight transition-transform duration-200 group-hover:scale-[1.02]`}
                  >
                    <Icon className="h-4 w-4 shrink-0 stroke-[2.4]" />
                    <span className="truncate">{card.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
