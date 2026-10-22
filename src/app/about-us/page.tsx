"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  Sprout,
  TrendingUp,
  Building2,
  Award,
  GraduationCap,
  Trophy,
  ArrowRight,
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  highlight: string;
  description: string;
  icon: React.ElementType;
}

const milestones: Milestone[] = [
  {
    year: "2005",
    title: "Humming Birds Play School founded",
    highlight: "",
    description:
      "Founded in April 2005 with the vision of providing a safe, caring, and stimulating environment for young children in Vellore.",
    icon: Sprout,
  },
  {
    year: "2007",
    title: "Grew to 50 students within 2 years",
    highlight: "",
    description:
      "Rapidly grew to nearly 50 students within two years through dedicated teachers who introduced modern play school and day care concepts.",
    icon: TrendingUp,
  },
  {
    year: "2009",
    title: "Sree Jayam School founded under Ramajayammal Educational Trust",
    highlight: "",
    description:
      "Established under the aegis of Ramajayammal Educational Trust, emphasizing character building, discipline, and all-round academic growth.",
    icon: Building2,
  },
  {
    year: "2018",
    title: "Received ICSE Affiliation",
    highlight: "",
    description:
      "Marked a landmark academic achievement by receiving official ICSE affiliation, setting benchmark standards in conceptual learning.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Granted ISC Affiliation with 21+ subject options",
    highlight: "",
    description:
      "Awarded ISC higher secondary affiliation with more than 21 diverse subject options across Science, Commerce, and Humanities.",
    icon: GraduationCap,
  },
  {
    year: "Today",
    title: "100+ staff, 1000+ students",
    highlight: "",
    description:
      "A vibrant, thriving learning community powered by more than 100 qualified, dedicated teachers committed to every child's success.",
    icon: Trophy,
  },
];

export default function AboutUsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header (Floating with organic logo container & center nav) */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* ========================================================================= */}
        {/* 2. INNER-PAGE BANNER: Exact banner style from /why-choose-us              */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Building Photo across entire banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Campus Building Architecture"
              fill
              priority
              className="object-cover object-[center_55%] md:object-[right_55%]"
              sizes="100vw"
            />
          </div>

          {/* Deep Navy-Blue (#062B4F) Gradient Overlay (strongest on left, fading smoothly toward right) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(6, 43, 79, 0.96) 0%, rgba(6, 43, 79, 0.88) 30%, rgba(6, 43, 79, 0.60) 52%, rgba(6, 43, 79, 0.20) 78%, rgba(6, 43, 79, 0.04) 100%)",
            }}
          />

          {/* Top & Bottom Gradient for optimal navbar legibility and section transition */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6, 43, 79, 0.40) 0%, transparent 22%, transparent 80%, rgba(6, 43, 79, 0.30) 100%)",
            }}
          />

          {/* Content Container */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              {/* Breadcrumb: Home > About Us */}
              <div className="inline-flex flex-col">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-white">
                  <Link
                    href="/"
                    className="text-white hover:text-[#FFC83D] transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-white/80" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-white">About Us</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                About <span className="text-[#FFC83D]">Sree Jayam School</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Nurturing curious minds and shaping bright futures with a tradition
                of excellence and strong institutional values.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OUR STORY SECTION: Editorial Two-Column Layout                          */}
        {/* ========================================================================= */}
        <section
          id="our-story"
          className="relative bg-[#FFFCF5] py-20 sm:py-24 lg:py-28 border-b border-[#F2ECE0]"
        >
          <div className="container-width">
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
              {/* Left Column: Full School History with Editorial Typography */}
              <div className="space-y-6">
                {/* Eyebrow Label */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                    OUR STORY
                  </span>
                  <span className="block h-[2.5px] w-10 bg-[#FFC83D] rounded-full" />
                </div>

                {/* Section Heading with Excellence highlighted in sunshine yellow */}
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.18]">
                  A Tradition of <span className="text-[#FFC83D]">Excellence.</span>
                </h2>

                {/* Supplied School History: Exact Paragraphs Preserved */}
                <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] text-[#445B6E] font-normal">
                  <p>
                    Humming Birds Play School was founded in April 2005 with the
                    vision of providing a safe and caring environment for young
                    children. In the first academic year, the school started with 25
                    students, and within a short period the strength increased
                    steadily. By 2007, just two years after its inception, the play
                    school had grown to nearly 50 students. The institution began with
                    two dedicated teachers, who introduced the concept of play school
                    and day care in Vellore with great commitment and care.
                  </p>

                  <p>
                    With the same vision of quality education, Sree Jayam School
                    (SJS) was founded in 2009 under the aegis of the Ramajayammal
                    Educational Trust. The school focuses on the all-round
                    development of every child, both academically and emotionally.
                    Believing that character building is the foundation of a strong
                    and responsible society, Sree Jayam School provides holistic
                    education that nurtures knowledge, values, discipline, and life
                    skills.
                  </p>

                  <p>
                    The institution is committed to creating a supportive and
                    inspiring learning environment, where students grow
                    intellectually, socially, and morally, preparing them to become
                    responsible citizens of the future.
                  </p>

                  {/* Restrained Typographic Pull-quote */}
                  <div className="my-6 pl-5 sm:pl-6 border-l-[3px] border-[#FFC83D]">
                    <p className="italic text-lg sm:text-xl lg:text-[22px] text-[#102D46] leading-snug font-medium">
                      &ldquo;Nurturing knowledge, values and character for a brighter tomorrow.&rdquo;
                    </p>
                  </div>

                  <p>
                    In 2018, the school received ICSE affiliation, marking an
                    important milestone in its academic journey. Later, in March
                    2022, the school was granted ISC affiliation, offering more than
                    21 subject options in the ISC stream. This wide range of subjects
                    helps students choose the right path for their higher education
                    and career growth.
                  </p>

                  <p>
                    From just two teachers in the beginning, the school now has more
                    than 100 qualified and dedicated teachers, who work with
                    commitment and care for the overall development and well-being of
                    every child.
                  </p>
                </div>
              </div>

              {/* Right Column: Large Authentic Photograph & Minimal Fact Strip */}
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Large Rectangular Authentic School Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EBE4D5] shadow-[0_8px_30px_rgba(16,45,70,0.06)] bg-slate-100">
                  <Image
                    src="/images/about/School.JPG"
                    alt="Sree Jayam School students and faculty gathered at campus assembly"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                </div>

                {/* Minimal Two-Column Fact Strip below the image */}
                <div className="grid grid-cols-2 gap-6 pt-5 border-t border-[#E8E1D1]">
                  {/* Fact 1 */}
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight">
                      2005
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed">
                      Founded with a vision of care for young children.
                    </p>
                  </div>

                  {/* Fact 2 */}
                  <div className="space-y-1 pl-6 border-l border-[#E8E1D1]">
                    <span className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight">
                      100+
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed">
                      Dedicated educators nurturing every child.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. KEY MILESTONES SECTION: Responsive Horizontal & Vertical Timeline      */}
        {/* ========================================================================= */}
        <section
          id="milestones"
          className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden"
        >
          {/* Subtle Ambient Background Gradients */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, #EAF5FF 0%, transparent 40%), radial-gradient(circle at 85% 80%, #FFF5D6 0%, transparent 40%)",
            }}
          />

          <div className="container-width relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  CHRONICLE OF GROWTH
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                Key Milestones
              </h2>

              <p className="text-sm sm:text-base text-[#55697A] leading-relaxed max-w-xl mx-auto">
                A journey of dedication, sustained growth, and academic distinction
                from our humble beginnings in 2005 to an ICSE &amp; ISC benchmark.
              </p>
            </div>

            {/* =================================================================== */}
            {/* 4A. DESKTOP RESPONSIVE HORIZONTAL TIMELINE (lg screens and wider)   */}
            {/* =================================================================== */}
            <div className="hidden lg:block relative">
              {/* Connecting Horizontal Line across all 6 milestones */}
              <div className="absolute top-[38px] left-[8.33%] right-[8.33%] h-[3px] bg-gradient-to-r from-[#FFC83D] via-[#075A9C] to-[#102D46] rounded-full z-0" />

              <div className="grid grid-cols-6 gap-4 xl:gap-5 items-stretch relative z-10">
                {milestones.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.year}
                      className="group flex flex-col items-center text-center h-full"
                    >
                      {/* Node / Marker Circle */}
                      <div className="relative mb-5 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-white border-4 border-[#075A9C] shadow-[0_6px_20px_rgba(7,90,156,0.15)] group-hover:border-[#FFC83D] group-hover:scale-105 transition-all duration-300">
                        {/* Year Badge */}
                        <span className="absolute -top-3.5 px-2.5 py-0.5 rounded-full bg-[#FFC83D] text-[#102D46] text-[11px] font-black tracking-tight shadow-xs whitespace-nowrap">
                          {m.year}
                        </span>
                        <Icon className="h-6 w-6 text-[#075A9C] group-hover:text-[#FFC83D] transition-colors stroke-[1.8]" />
                      </div>

                      {/* Milestone Card - Equal height with flex-col */}
                      <div className="w-full flex-1 flex flex-col justify-between p-4.5 rounded-2xl bg-[#FFFDF7] border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.04)] group-hover:shadow-[0_10px_28px_rgba(16,45,70,0.08)] group-hover:-translate-y-1 transition-all duration-300 text-center">
                        {/* Card Header & Title */}
                        <div className="flex flex-col items-center">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EAF5FF] text-[#075A9C] text-[10.5px] font-bold tracking-wide mb-2.5">
                            {m.highlight}
                          </span>
                          <h3 className="text-[13.5px] xl:text-[14px] font-bold text-[#102D46] leading-snug min-h-[58px] flex items-center justify-center">
                            {m.title}
                          </h3>
                        </div>

                        {/* Subtle Accent Divider */}
                        <div className="w-8 h-[2px] bg-[#EBE4D5] group-hover:bg-[#FFC83D] mx-auto my-3 transition-colors shrink-0" />

                        {/* Description */}
                        <p className="text-[12px] text-[#55697A] leading-relaxed flex-1 flex items-start justify-center">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================================== */}
            {/* 4B. TABLET TIMELINE GRID (md to lg screens: 3 columns x 2 rows)     */}
            {/* =================================================================== */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-stretch">
                {milestones.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.year}
                      className="group flex flex-col justify-between h-full p-5 rounded-2xl bg-[#FFFDF7] border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.04)] hover:shadow-[0_10px_28px_rgba(16,45,70,0.08)] hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Top Row: Year Badge & Authentic Line Icon */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-3.5">
                          <span className="px-3 py-1 rounded-full bg-[#FFC83D] text-[#102D46] text-xs font-black tracking-tight shadow-xs">
                            {m.year}
                          </span>
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] border border-[#075A9C]/20 text-[#075A9C] group-hover:bg-[#075A9C] group-hover:text-white transition-colors">
                            <Icon className="h-5 w-5 stroke-[1.8]" />
                          </div>
                        </div>

                        <div className="mb-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EAF5FF] text-[#075A9C] text-[11px] font-bold">
                            {m.highlight}
                          </span>
                        </div>

                        <h3 className="text-[15px] font-bold text-[#102D46] leading-snug mb-2 min-h-[46px] flex items-center">
                          {m.title}
                        </h3>
                      </div>

                      <div>
                        <div className="w-8 h-[2px] bg-[#EBE4D5] group-hover:bg-[#FFC83D] my-3 transition-colors" />

                        <p className="text-xs text-[#55697A] leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================================== */}
            {/* 4C. MOBILE VERTICAL TIMELINE (< md screens)                         */}
            {/* =================================================================== */}
            <div className="md:hidden relative max-w-lg mx-auto pl-7">
              {/* Connecting Vertical Track */}
              <div className="absolute top-4 bottom-4 left-3 w-[3px] bg-gradient-to-b from-[#FFC83D] via-[#075A9C] to-[#102D46] rounded-full" />

              <div className="space-y-6">
                {milestones.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.year} className="relative group">
                      {/* Node Marker with authentic line icon */}
                      <div className="absolute -left-[27px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#102D46] border-2 border-white text-[#FFC83D] shadow-md group-hover:bg-[#075A9C] group-hover:text-white transition-colors">
                        <Icon className="h-4 w-4 stroke-[1.8]" />
                      </div>

                      {/* Milestone Card */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.04)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.08)] transition-all">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FFC83D] text-[#102D46] text-[11px] font-black tracking-tight">
                            {m.year}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#EAF5FF] text-[#075A9C] text-[10.5px] font-bold">
                            {m.highlight}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-[#102D46] leading-snug mb-2">
                          {m.title}
                        </h3>

                        <p className="text-xs text-[#55697A] leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Card within About Us */}

          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
