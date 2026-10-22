import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ChildProtectionHeader from "./ChildProtectionHeader";
import { LuShieldCheck, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Child Protection Policy | Sree Jayam School",
  description:
    "Official Child Protection and Safeguarding Policy of Sree Jayam School, Vellore. Our commitment to a safe, secure, zero-tolerance learning environment.",
};

export default function ChildProtectionPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header with interactive Enquiry Modal */}
      <ChildProtectionHeader />

      <main>
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Deep Navy Blue (#062B4F) with subtle gradient             */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 text-white">
          {/* Subtle Decorative Background Gradient */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, #38BDF8 0%, transparent 45%), radial-gradient(circle at 10% 80%, #FFC83D 0%, transparent 40%)",
            }}
          />

          <div className="container-width relative z-10">
            <div className="max-w-3xl space-y-4">
              {/* Breadcrumb: Home > Child Protection Policy */}
              <div className="inline-flex flex-col">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-white">
                  <Link
                    href="/"
                    className="text-white hover:text-[#FFC83D] transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-white/60" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-[#D0E2F2]">Child Protection Policy</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Child Protection <span className="text-[#FFC83D]">Policy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Sree Jayam School is committed to safeguarding and promoting the welfare,
                safety, and well-being of all our students.
              </p>

              {/* Metadata Pill */}
              <div className="pt-2 flex items-center gap-3 text-xs text-[#9BBAD4]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                  <LuShieldCheck className="text-[#FFC83D]" size={14} />
                  Official Institutional Policy
                </span>
                <span>•</span>
                <span>Last Updated: October 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. POLICY CONTENT: Exactly Four Clearly Separated Sections                */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFFDF7] py-14 sm:py-20 border-b border-[#F2ECE0]">
          <div className="container-width max-w-4xl mx-auto space-y-8 sm:space-y-10">
            {/* 1. Our Commitment */}
            <article
              id="our-commitment"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  OUR COMMITMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Our Commitment
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Sree Jayam School (SJS) is committed to safeguarding and promoting the welfare of all our students. We believe that every child has the right to a safe, secure, and supportive learning environment, free from any form of harm or exploitation.
              </p>
            </article>

            {/* 2. Key Principles */}
            <article
              id="key-principles"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  CORE PRINCIPLES
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Key Principles
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <ul className="space-y-3.5 text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Zero Tolerance:</strong> We maintain a zero-tolerance policy towards any form of child abuse, harassment, or bullying.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Qualified Staff:</strong> All staff members undergo thorough background checks and are trained to recognize and report any safeguarding concerns.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Safe Infrastructure:</strong> Our campus is equipped with CCTV surveillance and secure access points to monitor student safety.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Confidentiality:</strong> All safeguarding reports are handled with the utmost sensitivity and confidentiality.
                  </span>
                </li>
              </ul>

              {/* Highlighted Student-Safety Statement in pale-yellow background (#FFF8E8) with navy text (#102D46) */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed">
                  The safety and well-being of the student always take precedence over all other institutional considerations.
                </p>
              </div>
            </article>

            {/* 3. Reporting Mechanisms (Visual Emphasis without alarming colors) */}
            <article
              id="reporting-mechanisms"
              className="group p-6 sm:p-8 rounded-2xl bg-[#EAF5FF] border border-[#B8D9F7] shadow-[0_4px_18px_rgba(7,90,156,0.06)] hover:shadow-[0_8px_24px_rgba(7,90,156,0.1)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075A9C] text-white text-xs font-bold tracking-wider transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  REPORTING &amp; PROTOCOL
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Reporting Mechanisms
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#102D46] leading-relaxed">
                If a student, parent, or staff member has a concern regarding the welfare of a child, they are encouraged to report it immediately to the <strong className="text-[#075A9C]">Child Protection Officer</strong> or the Principal. We ensure that every report is investigated promptly and thoroughly.
              </p>
            </article>

            {/* 4. Collaborative Effort */}
            <article
              id="collaborative-effort"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  COLLABORATION
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Collaborative Effort
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                We work closely with parents and external child welfare agencies to ensure a holistic approach to student safety and mental health support.
              </p>
            </article>

            {/* Back to Home action */}
            <div className="pt-4 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102D46] hover:bg-[#075A9C] text-white text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <span>Return to Homepage</span>
                <LuArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
