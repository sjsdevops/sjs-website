"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  LuShieldCheck,
  LuMail,
  LuArrowRight,
} from "react-icons/lu";

export default function PrivacyPolicyPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

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
              {/* Breadcrumb: Home > Privacy Policy */}
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
                  <span className="text-[#D0E2F2]">Privacy Policy</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Privacy <span className="text-[#FFC83D]">Policy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Sree Jayam School is committed to safeguarding the personal data,
                privacy, and confidentiality of our students, parents, guardians,
                and website visitors.
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
        {/* 3. POLICY CONTENT: Exactly Five Numbered Sections                         */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFFDF7] py-14 sm:py-20 border-b border-[#F2ECE0]">
          <div className="container-width max-w-4xl mx-auto space-y-8 sm:space-y-10">

            {/* 1. Introduction */}
            <article id="introduction" className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  OVERVIEW
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                1. Introduction
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Welcome to Sree Jayam School (SJS). We value your privacy and are committed to protecting the personal data of our students, parents, and visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website and services.
              </p>
            </article>

            {/* 2. Information We Collect */}
            <article id="information-collection" className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  DATA COLLECTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                2. Information We Collect
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                We may collect information through various means, including:
              </p>

              <ul className="space-y-3 text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Personal Identifiers:</strong> Name, address, email, and phone numbers provided during admission or enquiry.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Student Records:</strong> Academic history, attendance, and health information required for educational purposes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Digital Data:</strong> IP address, browser type, and usage patterns collected via cookies for website optimization.
                  </span>
                </li>
              </ul>
            </article>

            {/* 3. How We Use Your Data */}
            <article id="data-usage" className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  DATA USAGE
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                3. How We Use Your Data
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                Your information is used solely for the following purposes:
              </p>

              <ul className="space-y-3 text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed mb-5">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>Facilitating the admission and enrollment process.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>Communicating important school updates, academic results, and event notifications.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>Improving our educational services and website user experience.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>Complying with legal and regulatory requirements from educational boards (ICSE/ISC).</span>
                </li>
              </ul>

              {/* Highlight Statement in Subtle Pale-Yellow Background with Navy Text */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-semibold leading-relaxed">
                  Sree Jayam School does not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </div>
            </article>

            {/* 4. Data Security */}
            <article id="data-security" className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  DATA SECURITY
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                4. Data Security
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                We implement robust technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Access to student and parent data is strictly limited to authorized school personnel only.
              </p>
            </article>

            {/* 5. Contact Us */}
            <article id="contact-us" className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>05
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  CONTACT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                5. Contact Us
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-5">
                If you have any questions regarding this Privacy Policy, please contact our administration office at{" "}
                <a
                  href="mailto:sreejayamschool@gmail.com"
                  className="text-[#075A9C] font-semibold underline decoration-[#075A9C]/40 hover:decoration-[#075A9C] hover:text-[#06366B] transition-colors"
                >
                  sreejayamschool@gmail.com
                </a>
                .
              </p>

              {/* Verified School Contact Pill Link */}
              <div className="inline-flex items-center gap-3 p-3.5 px-5 rounded-xl bg-[#06366B] text-white text-xs sm:text-sm shadow-sm">
                <LuMail size={18} className="text-[#38BDF8] shrink-0" />
                <span>Email Administration:</span>
                <a
                  href="mailto:sreejayamschool@gmail.com"
                  className="font-semibold text-[#FFC83D] hover:underline"
                >
                  sreejayamschool@gmail.com
                </a>
              </div>
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

      {/* 5. Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
