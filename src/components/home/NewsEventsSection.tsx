"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  day: string;
  month: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    day: "15",
    month: "Sep",
    title: "Independence Day Celebrations 2024",
    description: "Students celebrated the spirit of freedom with music, dance and a special assembly.",
    image: "/images/news/event-independence.jpg",
    alt: "Students celebrating patriotic assembly and cultural day",
  },
  {
    day: "10",
    month: "Sep",
    title: "Annual Science Exhibition",
    description: "Our young innovators showcased creative projects and brilliant ideas.",
    image: "/images/news/event-science.jpg",
    alt: "Young students showcasing innovative science models and experiments",
  },
  {
    day: "05",
    month: "Sep",
    title: "Teachers' Day Celebration",
    description: "A special day to honour and appreciate our dedicated teachers.",
    image: "/images/news/event-teachers.jpg",
    alt: "Students and teachers celebrating special assembly and performance",
  },
];

export default function NewsEventsSection() {
  return (
    <section id="news" className="relative py-16 sm:py-24 bg-[#FAFCFE] border-t border-[#EEF4F8]">
      <div className="container-width">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 sm:mb-14">
          <div>
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#D98A00]">
              <span className="h-[2px] w-5 bg-[#FFC83D]" />
              <span>NEWS & EVENTS</span>
              <span className="h-[2px] w-5 bg-[#FFC83D]" />
            </div>

            {/* Heading */}
            <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#102D46] leading-[1.18] tracking-tight">
              What&apos;s Happening<br />
              at{" "}
              <span className="font-script font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#075A9C] inline-block -rotate-1">
                Sree Jayam
              </span>
            </h2>
          </div>

          {/* Top Right "View All" Link */}
          <div className="shrink-0">
            <Link
              href="#news"
              className="group inline-flex items-center gap-1.5 font-extrabold text-sm sm:text-[15px] text-[#075A9C] hover:text-[#064B82] transition-colors"
            >
              <span>View All News & Events</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Event Cards */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {newsItems.map((item, idx) => (
            <article
              key={idx}
              className="group flex flex-col overflow-hidden rounded-[26px] sm:rounded-[30px] bg-white border border-[#E7EFF5] shadow-[0_6px_24px_-4px_rgba(16,45,70,0.06)] hover:shadow-[0_14px_32px_-6px_rgba(7,90,156,0.12)] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Photo with Date Badge Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Date Badge (Top Left of image) */}
                <div className="absolute top-4 left-4 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 px-3 py-2 text-center shadow-md backdrop-blur-xs min-w-[50px]">
                  <span className="text-lg font-black text-[#102D46] leading-none">
                    {item.day}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#075A9C] mt-0.5">
                    {item.month}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-[19px] font-extrabold text-[#102D46] tracking-tight leading-snug group-hover:text-[#075A9C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#60778B] font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-extrabold text-[#075A9C] group-hover:text-[#064B82] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
