"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  School,
  MonitorCheck,
  BookOpen,
  Trophy,
  Music,
  ShieldCheck,
} from "lucide-react";

interface FacilityItem {
  title: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const facilityItems: FacilityItem[] = [
  {
    title: "Spacious Classrooms",
    image: "/images/facilities/facility-classroom.jpg",
    alt: "Spacious interactive classroom with modern desks and smartboard",
    icon: School,
    iconBg: "bg-[#FFF8E6]",
    iconColor: "text-[#D98A00]",
  },
  {
    title: "Science & Computer Labs",
    image: "/images/facilities/facility-labs.jpg",
    alt: "State of the art school computer workstations and science apparatus",
    icon: MonitorCheck,
    iconBg: "bg-[#E6F8F4]",
    iconColor: "text-[#20A38B]",
  },
  {
    title: "Library & Resource Centre",
    image: "/images/facilities/facility-library.jpg",
    alt: "Comprehensive library with extensive books, journals and quiet study zone",
    icon: BookOpen,
    iconBg: "bg-[#EAF5FF]",
    iconColor: "text-[#075A9C]",
  },
  {
    title: "Sports Facilities",
    image: "/images/facilities/facility-sports.jpg",
    alt: "Expansive sports grounds and professional athletic courts",
    icon: Trophy,
    iconBg: "bg-[#FFF2E0]",
    iconColor: "text-[#EA580C]",
  },
  {
    title: "Arts & Music Rooms",
    image: "/images/facilities/facility-arts.jpg",
    alt: "Dedicated acoustic music studio and fine arts studio with instruments",
    icon: Music,
    iconBg: "bg-[#FDEBF1]",
    iconColor: "text-[#D94680]",
  },
  {
    title: "Safe & Green Campus",
    image: "/images/facilities/facility-campus.jpg",
    alt: "Eco-friendly, landscaped green school grounds with 24/7 security",
    icon: ShieldCheck,
    iconBg: "bg-[#E6F7F0]",
    iconColor: "text-[#16A34A]",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-16 sm:py-24 bg-[#FAFCFE] border-t border-[#EEF4F8]">
      <div className="container-width">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#075A9C]">
              <span className="h-[2px] w-5 bg-[#075A9C]" />
              <span>OUR FACILITIES</span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#102D46] leading-[1.18] tracking-tight">
              A Modern Campus<br />
              for{" "}
              <span className="relative inline-block">
                <span className="font-script font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#075A9C]">
                  Modern Learners
                </span>
                <Sparkles className="absolute -top-1 -right-6 h-5 w-5 text-[#FFC83D]" />
              </span>
            </h2>

            {/* Supporting description */}
            <p className="mt-4 text-base sm:text-[16.5px] leading-relaxed text-[#516B7E] font-medium">
              Our campus is designed to inspire, with world-class facilities that support academic learning, creativity, sports and overall well-being.
            </p>
          </div>

          {/* Action button */}
          <div className="shrink-0">
            <Link
              href="/facilities"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#075A9C] hover:bg-[#064B82] px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-[15px] font-extrabold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 6 Facilities Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {facilityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white border border-[#E7EFF5] shadow-[0_4px_20px_-4px_rgba(16,45,70,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(7,90,156,0.12)] hover:-translate-y-1 transition-all duration-200"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Bottom Pill Badge Bar */}
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F4F9FD] border border-[#E1EEF8] transition-colors group-hover:bg-[#EAF5FF]">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}>
                      <Icon className="h-4 w-4 stroke-[2.2]" />
                    </div>
                    <span className="text-sm font-extrabold text-[#102D46] tracking-tight">
                      {item.title}
                    </span>
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
