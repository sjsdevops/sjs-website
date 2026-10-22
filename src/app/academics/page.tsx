"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  Sparkles,
  BookOpen,
  Compass,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface AcademicStage {
  number: string;
  title: string;
  gradeRange: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ElementType;
  assessmentMethods?: string[];
  concludingText?: string;
  highlightTag?: string;
}

const academicStages: AcademicStage[] = [
  {
    number: "01",
    title: "Foundation Stage",
    gradeRange: "PS–I to Grade II",
    description:
      "In the Foundation Stage, the focus is on building strong basic skills in language, numeracy, creativity, and social development. At this level, assessments are designed to be child-friendly and activity-based, encouraging students to learn through observation, participation, and simple evaluations.",
    image: "/images/about/Kids-playing.jpg",
    imageAlt: "Foundation stage students learning with creative educational toys",
    icon: Sparkles,
    assessmentMethods: [
      "Class participation",
      "Oral assessments",
      "Activity-based learning",
      "Worksheets and simple evaluation",
    ],
    concludingText:
      "The emphasis is on concept understanding and skill development rather than formal examinations.",
    highlightTag: "Early Childhood & Foundational",
  },
  {
    number: "02",
    title: "Preparatory Stage",
    gradeRange: "Grade III–V",
    description:
      "In the Preparatory Stage, students begin to develop stronger academic skills and are gradually introduced to a structured examination pattern.",
    image: "/images/gallery/kid-school.jpg",
    imageAlt: "Preparatory stage students reading together in school uniform",
    icon: BookOpen,
    highlightTag: "Skill Development & Structure",
  },
  {
    number: "03",
    title: "Middle School",
    gradeRange: "Grade VI–VIII",
    description:
      "At the Middle School level, the academic curriculum becomes more detailed and requires deeper understanding of subjects. Assessments are designed to evaluate both conceptual clarity and application skills.",
    image: "/images/gallery/mid-school.jpg",
    imageAlt: "Middle school students studying collaboratively with course books",
    icon: Compass,
    highlightTag: "Conceptual Clarity & Application",
  },
  {
    number: "04",
    title: "Secondary Stage",
    gradeRange: "Grade IX–XII",
    description:
      "At the Secondary and Senior Secondary level, assessments are designed to evaluate conceptual understanding, application skills, and exam readiness. Continuous assessment along with Term Examinations helps students prepare for the Board Examinations.",
    image: "/images/academics/high-school.jpg",
    imageAlt: "Secondary and senior secondary students writing examinations",
    icon: GraduationCap,
    highlightTag: "Exam Readiness & Board Prep",
  },
];

export default function AcademicsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between font-sans">
      {/* 1. Floating Header with organic logo & transparent navigation */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* 2. INNER-PAGE BANNER: Matching /about-us & /mission-and-vision-policy     */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Photograph: Secondary-school students learning in a classroom */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/academics/secondary- stage.jpg"
              alt="Sree Jayam School Secondary Students Learning in Classroom"
              fill
              priority
              className="object-cover object-[center_35%] md:object-[right_35%]"
              sizes="100vw"
            />
          </div>

          {/* Deep Navy-Blue (#062B4F) Gradient Overlay (strongest on left, fading smoothly toward right) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(6, 43, 79, 0.96) 0%, rgba(6, 43, 79, 0.88) 32%, rgba(6, 43, 79, 0.62) 55%, rgba(6, 43, 79, 0.22) 80%, rgba(6, 43, 79, 0.05) 100%)",
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

          {/* Banner Content Container */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              {/* Breadcrumb: Home → Academics */}
              <div className="inline-flex flex-col">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-white"
                >
                  <Link
                    href="/"
                    className="text-white hover:text-[#FFC83D] transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-white/80" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-white">Academics</span>
                </nav>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Academics
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Building Knowledge. Developing Skills. Inspiring Excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTRODUCTION: Our Academic Assessment System (Two-Column Layout)       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow Accent */}
                <div className="inline-flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                      OUR APPROACH
                    </span>
                  </div>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                  Our Academic <span className="text-[#075A9C]">Assessment System</span>
                </h2>

                {/* Paragraph Content */}
                <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
                  <p className="font-medium text-[#102D46] text-lg sm:text-xl leading-relaxed border-l-4 border-[#FFC83D] pl-4 py-1">
                    At Sree Jayam School (SJS), student learning is evaluated
                    through a structured Scholastic Assessment System that measures
                    academic progress, understanding, and overall performance
                    throughout the academic year.
                  </p>
                  <p>
                    The assessment system is designed according to the academic
                    stages of learning and includes unit tests, term
                    examinations, and periodic evaluations. The purpose of these
                    assessments is to help students develop strong academic
                    skills, improve their performance, and provide teachers and
                    parents with a clear understanding of the student’s progress.
                  </p>
                </div>

                {/* Key Pillars Highlights */}

              </div>

              {/* Right Column: Rounded Photograph with Gold Accent */}
              <div className="lg:col-span-5 relative">
                {/* Restrained Gold Decorative Accent Behind Image */}
                <div
                  className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-full h-full rounded-[28px] border-2 border-[#FFC83D] -z-0"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-3 -left-3 w-28 h-28 bg-[#FFF8EE] rounded-2xl -z-0"
                  aria-hidden="true"
                />

                {/* School Photograph */}
                <div className="relative z-10 w-full h-[340px] sm:h-[400px] lg:h-[430px] rounded-[24px] overflow-hidden shadow-[0_12px_36px_rgba(16,45,70,0.12)] border border-slate-100 bg-[#102D46]">
                  <Image
                    src="/images/academics/Academics.JPG"
                    alt="Sree Jayam School students engaged in practical learning"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  {/* Subtle Gradient Overlay on Bottom for Photographic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge */}

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ACADEMIC STAGES: Distinctive Four-Card Grid Layout                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-100">
          <div className="container-width">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  OUR ACADEMIC STAGES
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                A Progressive <span className="text-[#075A9C]">Learning Journey</span>
              </h2>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed pt-1">
                From early childhood to senior secondary, our academic structure
                is designed to nurture every learner at every stage of their
                growth.
              </p>
            </div>

            {/* Academic Stage Card Grid: 2 Columns x 2 Rows on Desktop & Tablet, 1 Column on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {academicStages.map((stage) => {
                const IconComponent = stage.icon;

                return (
                  <div
                    key={stage.number}
                    className="group bg-white rounded-2xl border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/30 transition-all duration-300 flex flex-col overflow-hidden h-full"
                  >
                    {/* 1. Large Genuine Photograph across the top */}
                    <div className="relative h-52 sm:h-60 lg:h-64 w-full overflow-hidden bg-[#102D46] shrink-0">
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark Vignette Overlay for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/80 via-[#102D46]/20 to-transparent pointer-events-none" />

                      {/* Top Badges: Stage Number & Grade Range */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {/* Distinct Stage Number */}
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#102D46] text-[#FFC83D] font-extrabold text-sm shadow-md border border-[#FFC83D]/30">
                          {stage.number}
                        </span>

                        {/* Grade Range Pill */}
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#102D46] shadow-sm border border-slate-200">
                          {stage.gradeRange}
                        </span>
                      </div>

                      {/* Icon Pill on Bottom-Right of Photograph */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-[#075A9C] text-white flex items-center justify-center shadow-md">
                        <IconComponent className="w-4 h-4 text-[#FFC83D]" />
                      </div>
                    </div>

                    {/* 2. Softly Coloured Content Area */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-gradient-to-b from-white to-[#FFF8EE]/40">
                      <div className="space-y-3">
                        {/* Stage Heading */}
                        <h3 className="text-xl sm:text-2xl font-bold text-[#102D46] tracking-tight group-hover:text-[#075A9C] transition-colors">
                          {stage.title}
                        </h3>

                        {/* Grade Range Sub-label */}
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#075A9C] bg-[#EAF5FF] px-2.5 py-0.5 rounded-md">
                          <span>{stage.gradeRange}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Extra Assessment Details (Only for Card 01 - Foundation Stage) */}
                        {stage.assessmentMethods && stage.assessmentMethods.length > 0 && (
                          <div className="pt-2 space-y-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#075A9C] block">
                              Assessment Methods:
                            </span>
                            <ul className="space-y-1.5">
                              {stage.assessmentMethods.map((method, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-1.5 text-xs text-[#1E293B]"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#075A9C] shrink-0 mt-0.5" />
                                  <span>{method}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Concluding Text (Only for Card 01 - Foundation Stage) */}
                        {stage.concludingText && (
                          <div className="mt-3 p-3 bg-white/90 rounded-xl border border-[#FFC83D]/40 text-xs text-[#475569] leading-relaxed italic">
                            “{stage.concludingText}”
                          </div>
                        )}
                      </div>

                      {/* Bottom Visual Element: Subtle Progress Indicator Tag */}
                      <div className="pt-5 mt-4 border-t border-[#E8EFF6] flex items-center justify-between text-xs font-medium text-[#64748B]">
                        <span className="text-[11px] font-bold text-[#075A9C] uppercase tracking-wide">
                          Stage {stage.number}
                        </span>
                        <span className="text-[11px] text-[#475569]">
                          {stage.highlightTag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action Notice */}
            <div className="mt-14 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2EAF1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#102D46]">
                  Admissions Open for All Academic Stages
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-xl">
                  Discover how our student-centric academic structure and ICSE/ISC
                  curriculum prepare your child for lifelong academic and personal
                  success.
                </p>
              </div>
              <a
                href="https://admission.sreejayamschool.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC83D] text-[#102D46] font-bold text-sm shadow-md hover:bg-[#ffbe1a] transition-all duration-300 hover:shadow-lg shrink-0 cursor-pointer"
              >
                <span>Enquire About Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <Footer />

      {/* 6. Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
