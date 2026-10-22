"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";

// 1. Four ICSE/ISC Core Pillars
interface IcsePillar {
  number: string;
  title: string;
  description: string;
}

const icsePillars: IcsePillar[] = [
  {
    number: "01",
    title: "In-depth Understanding",
    description:
      "A comprehensive curriculum prioritizing conceptual depth and critical reasoning over rote memorization, building a robust academic foundation.",
  },
  {
    number: "02",
    title: "Holistic Education",
    description:
      "Balanced focus across sciences, mathematics, humanities, arts, and physical education, nurturing well-rounded intellectual and personal growth.",
  },
  {
    number: "03",
    title: "English Proficiency",
    description:
      "Rigorous linguistic training that cultivates superior verbal communication, articulate written expression, and literature appreciation.",
  },
  {
    number: "04",
    title: "International Recognition",
    description:
      "Certifications recognized by leading universities, competitive entrance bodies, and higher education institutions in India and abroad.",
  },
];

// 2. Six "Why Us?" Points
interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
}

const whyUsPoints: WhyUsPoint[] = [
  {
    number: "01",
    title: "Competitive-World Preparation",
    description:
      "Fostering strategic thinking, problem-solving ability, and academic resilience required to excel in higher education and future careers.",
  },
  {
    number: "02",
    title: "Communication Skills",
    description:
      "Structured opportunities for public speaking, debate, group collaboration, and creative presentations to build confident communicators.",
  },
  {
    number: "03",
    title: "Personalised Guidance",
    description:
      "Attentive teacher-student engagement ensuring every child receives tailored mentorship according to their unique strengths and learning pace.",
  },
  {
    number: "04",
    title: "High Expectations",
    description:
      "Inspiring every student to set high personal standards, pursue excellence, and develop a persistent growth mindset.",
  },
  {
    number: "05",
    title: "Achievement Monitoring",
    description:
      "Regular, constructive academic reviews and feedback loops that track progress, diagnose difficulties early, and celebrate milestones.",
  },
  {
    number: "06",
    title: "Student Safety",
    description:
      "A secure, loving, and emotionally supportive campus environment safeguarded with rigorous protocols and attentive pastoral care.",
  },
];

// 3. Sixteen Salient Features
interface SalientFeature {
  number: string;
  title: string;
  description: string;
}

const salientFeatures: SalientFeature[] = [
  {
    number: "01",
    title: "Montessori Classroom",
    description:
      "Purposefully prepared early-learning environments with sensory-rich materials and self-directed activity.",
  },
  {
    number: "02",
    title: "Safe Play Area",
    description:
      "Dedicated, child-safe outdoor equipment and recreation zones supporting physical coordination and social play.",
  },
  {
    number: "03",
    title: "Transport Facility",
    description:
      "Well-maintained school buses operated by vetted drivers and trained staff covering major neighborhood routes.",
  },
  {
    number: "04",
    title: "Equipped Laboratories",
    description:
      "Specialized Physics, Chemistry, and Biology laboratories enabling hands-on experimental inquiry.",
  },
  {
    number: "05",
    title: "Computer & STEM Lab",
    description:
      "Modern computing facilities and technology workspaces fostering digital literacy, coding, and problem-solving.",
  },
  {
    number: "06",
    title: "Basketball Court",
    description:
      "Full-sized court encouraging cardiovascular fitness, team discipline, and athletic coaching.",
  },
  {
    number: "07",
    title: "Multipurpose Hall",
    description:
      "Spacious indoor auditorium for school assemblies, cultural events, guest lectures, and student exhibitions.",
  },
  {
    number: "08",
    title: "Libraries & Resource Centre",
    description:
      "Extensive repository of age-appropriate literature, reference volumes, and quiet study reading rooms.",
  },
  {
    number: "09",
    title: "Music & Performing Arts",
    description:
      "Dedicated studio spaces providing vocal training, instrumental practice, rhythm, and stage confidence.",
  },
  {
    number: "10",
    title: "CCTV Surveillance",
    description:
      "Continuous video monitoring across corridors, access points, and common spaces for total student safety.",
  },
  {
    number: "11",
    title: "School Mobile App",
    description:
      "Direct digital channel for parents to access attendance logs, academic notifications, and school circulars.",
  },
  {
    number: "12",
    title: "Hygienic Cafeteria",
    description:
      "Sanitized dining space offering fresh, wholesome refreshments that support healthy childhood development.",
  },
  {
    number: "13",
    title: "Educational Trips",
    description:
      "Curriculum-aligned excursions, nature trails, and field visits providing valuable experiential learning.",
  },
  {
    number: "14",
    title: "Celebrations & Events",
    description:
      "Enthusiastic observance of national milestones, cultural festivals, and annual day celebrations.",
  },
  {
    number: "15",
    title: "Co-curricular Clubs",
    description:
      "Varied clubs in arts, science, debating, and environmental stewardship cultivating diverse student passions.",
  },
  {
    number: "16",
    title: "Child-Friendly Atmosphere",
    description:
      "A warm, supportive school culture rooted in mutual respect, positive encouragement, and dedicated mentorship.",
  },
];

export default function WhyChooseUsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Full-bleed photo with subtle navy gradient, 500-550px height */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Building Photo across entire banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Building Architecture"
              fill
              priority
              className="object-cover object-[center_55%] md:object-[right_55%]"
              sizes="100vw"
            />
          </div>

          {/* Subtle Deep Navy-Blue (#062B4F) Gradient Overlay (strongest on left, fading smoothly toward right) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(6, 43, 79, 0.96) 0%, rgba(6, 43, 79, 0.88) 30%, rgba(6, 43, 79, 0.60) 52%, rgba(6, 43, 79, 0.20) 78%, rgba(6, 43, 79, 0.04) 100%)",
            }}
          />

          {/* Subtle Top & Bottom Gradient for optimal navbar legibility and section transition */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6, 43, 79, 0.40) 0%, transparent 22%, transparent 80%, rgba(6, 43, 79, 0.30) 100%)",
            }}
          />

          {/* Content Container (Left-aligned, vertically centered around the middle) */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-2xl space-y-3 sm:space-y-4">

              {/* Breadcrumb: Home > Why Choose Us */}
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
                  <span className="text-white">Why Choose Us</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading: Why Choose Us (Why in white, Choose Us in yellow) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Why <span className="text-[#FFC83D]">Choose Us</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-xl">
                A strong foundation for brighter futures.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHY ICSE/ISC?: Light ivory section with 4 numbered points & real photo */}
        {/* ========================================================================= */}
        <section
          id="icse-curriculum"
          className="relative bg-[#FFFDF7] py-20 sm:py-24 lg:py-28 border-b border-[#F2ECE0]"
        >
          <div className="container-width">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">

              {/* Left Column: 4 Numbered Points on Ivory */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="space-y-3">

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                    Why <span className="text-[#075A9C]">ICSE / ISC?</span>
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-[#55697A] leading-relaxed max-w-xl">
                    The Council for the Indian School Certificate Examinations curriculum provides
                    a comprehensive academic standard recognized for analytical depth, linguistic mastery,
                    and global university acceptance.
                  </p>
                </div>

                {/* 4 Numbered Points */}
                <div className="space-y-5">
                  {icsePillars.map((pillar, index) => (
                    <div
                      key={pillar.number}
                      className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.04)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.08)] transition-all duration-200"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* Numbered Tag with Gold Accent */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102D46] text-white font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#075A9C] transition-colors">
                          <span className="text-[#FFC83D] text-xs font-semibold mr-0.5">#</span>
                          {pillar.number}
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1.5 flex-1">
                          <h3 className="text-lg sm:text-[19px] font-bold text-[#102D46] leading-snug">
                            {pillar.title}
                          </h3>
                          <p className="text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>

                      {/* Thin Gold Bottom Line on Hover */}
                      <div className="mt-3 h-[2px] w-0 bg-[#FFC83D] rounded-full transition-all duration-300 group-hover:w-16" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Real School Photo */}
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                {/* Thin Gold Frame */}
                <div
                  className="absolute -inset-2.5 rounded-[34px] border border-[#FFC83D]/40 pointer-events-none hidden sm:block"
                  aria-hidden="true"
                />

                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_16px_40px_rgba(16,45,70,0.1)]">
                  <Image
                    src="/images/why us/School-library.jpg"
                    alt="Students actively engaged in library inquiry at Sree Jayam School"
                    fill
                    className="object-cover object-[25%_center]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 via-transparent to-transparent pointer-events-none" />

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY US?: Alternate layout with photo on the LEFT and 6 points on RIGHT */}
        {/* ========================================================================= */}
        <section className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden">
          <div className="container-width">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

              {/* Left Column: Authentic School Campus Photo */}
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none order-2 lg:order-1">
                {/* Thin Gold Decorative Framing */}
                <div
                  className="absolute -inset-2.5 rounded-[34px] border border-[#FFC83D]/40 pointer-events-none hidden sm:block"
                  aria-hidden="true"
                />

                <div className="relative aspect-[4/3] sm:aspect-[16/12] overflow-hidden rounded-[28px] border-4 border-[#F8FBFE] shadow-[0_16px_40px_rgba(16,45,70,0.1)]">
                  <Image
                    src="/images/why us/Computer-lab.jpg"
                    alt="Morning assembly and prayer gathering fostering character and community discipline"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/50 via-transparent to-transparent pointer-events-none" />

                </div>
              </div>

              {/* Right Column: 6 Numbered Points */}
              <div className="space-y-8 order-1 lg:order-2">
                {/* Section Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#075A9C]">
                      THE SREE JAYAM COMMITMENT
                    </span>

                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                    Why <span className="text-[#075A9C]">Us?</span>
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-[#55697A] leading-relaxed max-w-xl">
                    Beyond academics, our supportive ecosystem emphasizes personalized mentorship,
                    character integrity, and student safety to help every child flourish.
                  </p>
                </div>

                {/* 6 Numbered Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyUsPoints.map((point) => (
                    <div
                      key={point.number}
                      className="group p-5 rounded-2xl bg-[#F8FBFE] border border-slate-100 shadow-[0_2px_8px_rgba(16,45,70,0.03)] hover:shadow-[0_6px_20px_rgba(16,45,70,0.07)] hover:bg-white transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {/* Numbered Label */}
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                            {point.number}
                          </span>

                        </div>

                        {/* Title */}
                        <h3 className="text-[17px] font-bold text-[#102D46] leading-snug">
                          {point.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[13.5px] text-[#55697A] leading-relaxed">
                          {point.description}
                        </p>
                      </div>

                      {/* Thin Gold Accent Line */}
                      <div className="mt-3 h-[2px] w-6 bg-[#FFC83D] rounded-full group-hover:w-12 transition-all duration-200" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SALIENT FEATURES: 3-Column numbered grid covering all 16 features      */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFFDF7] py-20 sm:py-24 lg:py-28 border-t border-[#F2ECE0]">
          <div className="container-width">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  CAMPUS INFRASTRUCTURE & AMENITIES
                </span>
                <span
                  className="mt-2.5 h-[3px] w-12 bg-[#FFC83D] rounded-full"
                  aria-hidden="true"
                />
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                Salient <span className="text-[#075A9C]">Features</span>
              </h2>

              <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#55697A] leading-relaxed">
                A 360-degree educational environment designed to empower curious minds,
                creative expressions, athletic skills, and safe everyday learning.
              </p>
            </div>

            {/* 3-Column Numbered Grid (16 Features) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {salientFeatures.map((feature) => (
                <div
                  key={feature.number}
                  className="group relative p-6 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_10px_28px_rgba(16,45,70,0.07)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Tag: Numbered Badge + Thin Gold Divider */}
                    <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                          {feature.number}
                        </span>
                        <span className="text-xs font-bold text-[#075A9C] uppercase tracking-wider">
                          Feature
                        </span>
                      </div>

                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-[#102D46] tracking-tight leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#55697A] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Thin Gold Underline Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                    <span className="h-[2px] w-8 bg-[#FFC83D] rounded-full group-hover:w-16 transition-all duration-300" />
                    <span className="text-[11px] font-semibold text-[#8C9BA8] uppercase tracking-wider">
                      Sree Jayam
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION: Campus Visit & Admissions Enquiry                      */}
        {/* ========================================================================= */}

      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
