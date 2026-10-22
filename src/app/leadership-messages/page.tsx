"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import { Quote, HeartHandshake, GraduationCap, BookOpen } from "lucide-react";

interface LeadershipProfile {
  id: string;
  roleEyebrow: string;
  headingPlaceholder: string;
  leaderTitle: string;
  leaderName: string;
  designation: string;
  organization: string;
  credentialsPlaceholder: string;
  image: string;
  objectPosition: string;
  imageScale?: string;
  paragraphs: string[];
  signoff?: {
    name?: string;
    role: string;
    institution: string;
  };
  separatorLabel?: string;
  rightPanel: {
    isQuote: boolean;
    panelIcon?: "quote" | "handshake" | "academic" | "discovery";
    panelHeading?: string;
    quoteOrSummaryText: string;
    focusPillars?: string[];
  };
}

const leadersData: LeadershipProfile[] = [
  {
    id: "chairman",
    roleEyebrow: "MESSAGE FROM THE CHAIRMAN",
    headingPlaceholder: "Visionary Foundation & Institutional Purpose",
    leaderTitle: "Chairman",
    leaderName: "Mr. S.D. Baskar",
    designation: "Chairman",
    organization: "Sree Jayam School",
    credentialsPlaceholder: "",
    image: "/images/School%20Leaders/Baskar.jpeg",
    objectPosition: "center 12%",
    separatorLabel: "A SHARED VISION FOR EXCELLENCE",
    paragraphs: [
      "Dear Students, Parents, and Staff,",
      "It gives me great pleasure to extend my warm greetings to the entire Sree Jayam School community. Since its establishment, Sree Jayam School has been committed to providing quality education that nurtures not only academic excellence but also strong values, discipline, and character.",
      "Education plays a vital role in shaping the future of our children and society. At Sree Jayam School, we believe that every child possesses unique talents and abilities. Our aim is to provide a supportive and inspiring environment where students can explore their potential, develop confidence, and grow into responsible individuals.",
      "Our dedicated teachers and staff work tirelessly to ensure that students receive a balanced education that combines academic knowledge with moral values, creativity, and critical thinking. We encourage our students to be curious learners, compassionate individuals, and active contributors to society.",
      "We also value the partnership between the school and parents, as their support and cooperation are essential for the holistic development of every child. Together, we strive to create a learning community that prepares students to face the challenges of the modern world with courage, integrity, and wisdom.",
      "I wish all our students great success in their academic journey and encourage them to make the most of the opportunities provided by the school.",
      "With best wishes for a bright future.",
    ],
    rightPanel: {
      isQuote: true,
      quoteOrSummaryText:
        "True education is not merely the transmission of knowledge; it is the ignition of character, curiosity, and an enduring desire to serve society with distinction.",
    },
  },
  {
    id: "correspondent",
    roleEyebrow: "MESSAGE FROM CORRESPONDENT'S DESK",
    headingPlaceholder: "Nurturing Potential, Character & Academic Growth",
    leaderTitle: "Correspondent",
    leaderName: "Mrs. Rama Baskar",
    designation: "Correspondent",
    organization: "Sree Jayam School",
    credentialsPlaceholder: "",
    image: "/images/School%20Leaders/RamaBaskar.jpeg",
    objectPosition: "64% 48%",
    imageScale: "scale-[1.45] origin-[64%_58%]",
    separatorLabel: "ACADEMIC RIGOUR & INQUIRY",
    paragraphs: [
      "Dear Students, Parents, and Staff,",
      "Greetings from Sree Jayam School.",
      "Education plays an important role in shaping the future of every child. At Sree Jayam School, we are committed to providing a safe and supportive environment where students can learn, grow, and develop good values.",
      "Our aim is to encourage students to achieve academic excellence while also developing discipline, confidence, and responsibility. With the support of our dedicated teachers and the cooperation of parents, we strive to help every child reach their full potential.",
      "I thank all the parents for their continued trust and support, and appreciate the efforts of our teachers and staff in guiding our students.",
      "I wish all our students success and a bright future.",
    ],
    signoff: {
      role: "Correspondent",
      institution: "Sree Jayam School",
    },
    rightPanel: {
      isQuote: false,
      panelHeading: "A Shared Commitment to Every Child",
      quoteOrSummaryText:
        "At Sree Jayam School, we are committed to providing a safe and supportive environment where students can learn, grow, and develop good values with the cooperation of parents and dedicated teachers.",
      focusPillars: [
        "Safe & Supportive Atmosphere",
        "Academic Excellence with Good Values",
        "Discipline, Confidence & Responsibility",
        "Vital School-Parent Cooperation",
      ],
    },
  },
  {
    id: "academic-director",
    roleEyebrow: "MESSAGE FROM ACADEMIC DIRECTOR",
    headingPlaceholder: "From Passive Instruction to Student-Led Discovery",
    leaderTitle: "Academic Director",
    leaderName: "Mr. Kiran Baskar S",
    designation: "ACADEMIC DIRECTOR",
    organization: "Sree Jayam School",
    credentialsPlaceholder: "",
    image: "/images/School%20Leaders/KiranBaskar.jpeg",
    objectPosition: "49% 42%",
    imageScale: "scale-[1.18] origin-[50%_45%]",
    separatorLabel: "LEARNING WITH PURPOSE",
    paragraphs: [
      "Dear Students, Parents, and Educators,",
      "As we commence the 2026-27 academic session at Sree Jayam School, we reaffirm our commitment to the rigorous standards of the Council for the Indian School Certificate Examinations (CISCE). Our pedagogical mission this year centers on a fundamental shift: moving from passive instruction toward active, student-led discovery.",
      "Central to our approach is the cultivation of disciplined self-study habits. True intellectual maturity is achieved when a student transitions from being a consumer of information to an architect of their own knowledge. By mastering the art of independent inquiry, our students develop the resilience and analytical depth required by the ICSE curriculum and the global landscape beyond it.",
      "Furthermore, we uphold the Right to Learn as an open, practical, and collaborative process. In our classrooms, the teacher's role is that of a skilled facilitator-bridging the gap between theoretical concepts and real-world application. We encourage an environment where students engage deeply with their educators through dialogue, laboratory experimentation, and project-based inquiry. This ensures that learning is not a monologue of facts, but a practical exploration of truths.",
      "This journey is a triad of commitment: students must take ownership of their preparation, parents must provide a disciplined environment for reflection, and faculty must provide the mentorship that sparks curiosity. Let us work in unison to ensure that every student at Sree Jayam School achieves their fullest potential, emerging as a self-reliant, articulate, and principled leader of tomorrow.",
      "With warm regards,",
    ],
    signoff: {
      name: "Mr. Kiran Baskar S",
      role: "Academic Director",
      institution: "Sree Jayam School",
    },
    rightPanel: {
      isQuote: false,
      panelIcon: "discovery",
      panelHeading: "Active, Student-Led Discovery",
      quoteOrSummaryText:
        "Our pedagogical mission centers on a fundamental shift: moving from passive instruction toward active, student-led discovery, fostering disciplined self-study habits and independent inquiry across the CISCE curriculum.",
      focusPillars: [
        "Rigorous CISCE Standards",
        "Disciplined Self-Study Habits",
        "Hands-On Laboratory & Project Inquiry",
        "Triad of Student, Parent & Faculty Commitment",
      ],
    },
  },
  {
    id: "principal",
    roleEyebrow: "MESSAGE FROM PRINCIPAL",
    headingPlaceholder: "Shaping Character, Values & Joyful Learning",
    leaderTitle: "Principal",
    leaderName: "Mrs. S. Nalini",
    designation: "PRINCIPAL",
    organization: "Sree Jayam School",
    credentialsPlaceholder: "",
    image: "/images/School%20Leaders/Nalini.jpeg",
    objectPosition: "46% 32%",
    paragraphs: [
      "Dear Students and Parents,",
      "Greetings from Sree Jayam School",
      "Education is not merely the pursuit of academic excellence, but the journey of shaping character, values, and a sense of responsibility towards society.",
      "At SJS, we believe that every child is unique and holds immense potential. Our aim is to nurture young minds with knowledge, discipline, and compassion, enabling them to grow into confident and responsible individuals. Along with academics, we encourage students to develop critical thinking, creativity, and strong moral values.",
      "With the support of our dedicated teachers and the cooperation of parents, we guide our students to achieve their best and become responsible individuals.",
      "Let us continue to work together to create an environment where learning is joyful, meaningful and inspiring.",
      "I wish all our students a successful and bright future.",
    ],
    signoff: {
      role: "Principal",
      institution: "SreeJayam School",
    },
    rightPanel: {
      isQuote: false,
      panelIcon: "academic",
      panelHeading: "Learning with Purpose",
      quoteOrSummaryText:
        "Education is a transformative journey of shaping character, values, and a sense of responsibility towards society, nurturing young minds with knowledge, discipline, and compassion.",
      focusPillars: [
        "Academic Excellence & Critical Thinking",
        "Discipline, Knowledge & Compassion",
        "Creativity & Strong Moral Values",
        "Joyful, Meaningful & Inspiring Learning",
      ],
    },
  },
];

export default function LeadershipMessagesPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header (Floating with organic logo container & center nav) */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* ========================================================================= */}
        {/* 2. INNER-PAGE BANNER: Full-bleed photo with navy gradient overlay         */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Building Photo across entire banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Campus Architecture"
              fill
              priority
              className="object-cover object-[center_55%] md:object-[right_55%]"
              sizes="100vw"
            />
          </div>

          {/* Deep Navy-Blue (#062B4F) Gradient Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(6, 43, 79, 0.96) 0%, rgba(6, 43, 79, 0.88) 30%, rgba(6, 43, 79, 0.60) 52%, rgba(6, 43, 79, 0.20) 78%, rgba(6, 43, 79, 0.04) 100%)",
            }}
          />

          {/* Top & Bottom Gradient for optimal navbar legibility and transition */}
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
              {/* Breadcrumb: Home > Leadership Messages */}
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
                  <span className="text-white">Leadership Messages</span>
                </div>
                {/* Yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Leadership <span className="text-[#FFC83D]">Messages</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Guiding our institution with visionary leadership, educational
                purpose, and an enduring commitment to student excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. EDITORIAL SECTION: Premium Cream Background with Three-Column Layout   */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFFDF7] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#EBE4D5]">
          {/* Subtle Ambient Background Gradients */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 15%, #EAF5FF 0%, transparent 40%), radial-gradient(circle at 90% 85%, #FFF5D6 0%, transparent 40%)",
            }}
          />

          <div className="container-width relative z-10 space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  INSTITUTIONAL PERSPECTIVES
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                Guiding Words from Our Leadership
              </h2>

              <p className="text-sm sm:text-base text-[#55697A] leading-relaxed max-w-xl mx-auto">
                Shaping generations of confident, principled learners through
                progressive ICSE and ISC education, inspired teaching, and
                holistic value foundations.
              </p>
            </div>

            {/* Leaders Container */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {leadersData.map((leader, index) => (
                <div key={leader.id} className="relative">
                  {/* Three-Column Editorial Composition */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
                    {/* ================================================================= */}
                    {/* COLUMN 1 (Left): Neutral Portrait Placeholder & Bio Strip          */}
                    {/* ================================================================= */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
                      {/* Portrait Container */}
                      <div className="relative w-full max-w-[280px] lg:max-w-none aspect-[3/4] rounded-2xl border-2 border-[#E8E1D1] bg-[#F7F4EC] shadow-[0_4px_20px_rgba(16,45,70,0.06)] overflow-hidden group hover:border-[#FFC83D] transition-colors duration-300">
                        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105 relative">
                          <Image
                            src={leader.image}
                            alt={`${leader.leaderName} - ${leader.designation}, Sree Jayam School`}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 280px, 100vw"
                            className={`object-cover ${leader.imageScale || ""}`}
                            style={{ objectPosition: leader.objectPosition }}
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Leader Credentials Strip below the portrait */}
                      <div className="mt-4.5 space-y-1 w-full">
                        <div className="w-10 h-0.5 bg-[#FFC83D] rounded-full mx-auto lg:mx-0 mb-2" />
                        <h3 className="text-lg sm:text-xl font-bold text-[#102D46] leading-snug">
                          {leader.leaderName}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-bold text-[#075A9C] uppercase tracking-wider">
                          {leader.designation}
                        </p>
                        <p className="text-xs text-[#55697A] font-medium">
                          {leader.organization}
                        </p>
                        {leader.credentialsPlaceholder ? (
                          <p className="text-[11.5px] text-[#8194A4] pt-1 italic">
                            {leader.credentialsPlaceholder}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* ================================================================= */}
                    {/* COLUMN 2 (Centre): Editorial Message Content                       */}
                    {/* ================================================================= */}
                    <div className="lg:col-span-6 space-y-5 lg:pr-2">
                      {/* Eyebrow Label with Accent Line */}
                      <div className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#075A9C] block">
                          {leader.roleEyebrow}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#102D46] leading-tight">
                          {leader.headingPlaceholder}
                        </h3>
                      </div>

                      {/* Message Content: One continuous, well-formatted message */}
                      <div className="p-6 sm:p-7.5 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_20px_rgba(16,45,70,0.03)] space-y-4 text-[14.5px] sm:text-[15.5px] text-[#4D6173] leading-relaxed">
                        {leader.paragraphs.map((paragraph, pIdx) => {
                          const isSalutation = pIdx === 0 && paragraph.startsWith("Dear");
                          const isValediction =
                            pIdx === leader.paragraphs.length - 1 &&
                            (paragraph.startsWith("With best") ||
                              paragraph.startsWith("With warm") ||
                              paragraph.startsWith("Warm regards") ||
                              paragraph.startsWith("I wish"));

                          return (
                            <p
                              key={pIdx}
                              className={
                                isSalutation
                                  ? "font-semibold text-base sm:text-[17px] text-[#102D46] pb-1"
                                  : isValediction && leader.signoff
                                    ? "font-medium text-[#102D46] pb-1"
                                    : isValediction
                                      ? "font-medium text-[#102D46] pt-1"
                                      : ""
                              }
                            >
                              {paragraph}
                            </p>
                          );
                        })}

                        {/* Sign-off Block */}
                        {leader.signoff ? (
                          <div className="pt-3 border-t border-[#F0EAE1] space-y-0.5">
                            {leader.signoff.name ? (
                              <>
                                <p className="font-bold text-sm sm:text-base text-[#102D46]">
                                  {leader.signoff.name}
                                </p>
                                <p className="text-xs sm:text-[13.5px] text-[#55697A] font-medium">
                                  {leader.signoff.role}, {leader.signoff.institution}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-bold text-sm sm:text-base text-[#102D46]">
                                  {leader.signoff.role}
                                </p>
                                <p className="text-xs sm:text-[13.5px] text-[#55697A] font-medium">
                                  {leader.signoff.institution}
                                </p>
                              </>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* ================================================================= */}
                    {/* COLUMN 3 (Right): Supporting Quotation / Information Panel        */}
                    {/* ================================================================= */}
                    <div className="lg:col-span-3">
                      <div className="relative rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_8px_30px_rgba(16,45,70,0.05)] p-6 sm:p-7 overflow-hidden flex flex-col justify-between h-full">
                        {/* Top Gold Accent Bar */}
                        <div
                          className="absolute top-0 inset-x-0 h-1 bg-[#FFC83D]"
                          aria-hidden="true"
                        />

                        {/* Panel Content */}
                        <div>
                          {leader.rightPanel.isQuote ? (
                            <>
                              {/* Quote Icon */}
                              <div className="mb-4">
                                <Quote className="h-10 w-10 text-[#FFC83D] stroke-[1.6]" />
                              </div>

                              {/* Quotation text */}
                              <blockquote className="italic text-[15px] sm:text-base text-[#102D46] leading-relaxed mb-4">
                                &ldquo;{leader.rightPanel.quoteOrSummaryText}&rdquo;
                              </blockquote>
                            </>
                          ) : (
                            <>
                              {/* Commitment / Academic / Discovery Icon */}
                              <div className="mb-4">
                                {leader.rightPanel.panelIcon === "academic" ? (
                                  <GraduationCap className="h-10 w-10 text-[#FFC83D] stroke-[1.6]" />
                                ) : leader.rightPanel.panelIcon === "discovery" ? (
                                  <BookOpen className="h-10 w-10 text-[#FFC83D] stroke-[1.6]" />
                                ) : (
                                  <HeartHandshake className="h-10 w-10 text-[#FFC83D] stroke-[1.6]" />
                                )}
                              </div>

                              {/* Neutral Panel Heading */}
                              <h4 className="text-lg font-bold text-[#102D46] leading-snug mb-3">
                                {leader.rightPanel.panelHeading || "A Shared Commitment to Every Child"}
                              </h4>

                              {/* Panel Summary Text */}
                              <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed mb-4">
                                {leader.rightPanel.quoteOrSummaryText}
                              </p>


                            </>
                          )}

                          {/* Accent Divider */}
                          <div className="w-10 h-[2px] bg-[#FFC83D] my-4" />

                          {/* Attribution */}
                          <div className="space-y-0.5">
                            <p className="text-xs font-bold text-[#102D46]">
                              {leader.leaderName}
                            </p>
                            <p className="text-[11.5px] text-[#075A9C] font-semibold">
                              {leader.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elegant Separator between leaders */}
                  {index < leadersData.length - 1 && (
                    <div className="mt-16 sm:mt-20 lg:mt-24 relative flex items-center justify-center">
                      <div className="w-full border-t border-[#E8E1D1]" />
                      <div className="absolute px-4 bg-[#FFFDF7] text-xs font-bold tracking-widest text-[#075A9C] uppercase flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC83D]" />
                        <span>{leader.separatorLabel || "A SHARED VISION FOR EXCELLENCE"}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC83D]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>


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
