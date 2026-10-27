import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import TermsHeader from "./TermsHeader";
import { LuShieldCheck, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Terms & Policies | Sree Jayam School",
  description:
    "Official Terms and Policies for Sree Jayam School, Vellore. Review policies on admissions, student code of conduct, website usage, liability, and governing law.",
};

export default function TermsPoliciesPage() {
  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header with interactive Enquiry Modal */}
      <TermsHeader />

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
              {/* Breadcrumb: Home > Terms & Policies */}
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
                  <span className="text-[#D0E2F2]">Terms &amp; Policies</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Terms &amp; <span className="text-[#FFC83D]">Policies</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Please review the terms and policies governing the use of the
                Sree Jayam School website, admissions, and institutional services.
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
        {/* 3. TERMS CONTENT: Exactly Six Numbered Sections                           */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFFDF7] py-14 sm:py-20 border-b border-[#F2ECE0]">
          <div className="container-width max-w-4xl mx-auto space-y-8 sm:space-y-10">
            {/* 1. Agreement to Terms */}
            <article
              id="agreement-to-terms"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  AGREEMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                1. Agreement to Terms
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                By accessing or using the Sree Jayam School website and services,
                you agree to be bound by these Terms and Conditions. If you do not
                agree with any part of these terms, you must not use our services.
              </p>
            </article>

            {/* 2. Admission & Enrollment */}
            <article
              id="admission-enrollment"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  ADMISSION &amp; ENROLLMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                2. Admission &amp; Enrollment
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Enrollment at Sree Jayam School is subject to the successful
                completion of the admission process, verification of documents,
                and payment of the prescribed fees. The school reserves the right
                to deny admission at its discretion based on merit and seat
                availability.
              </p>
            </article>

            {/* 3. Code of Conduct */}
            <article
              id="code-of-conduct"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  CODE OF CONDUCT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                3. Code of Conduct
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                All students and parents are expected to adhere to the school&apos;s
                code of conduct, which promotes discipline, respect, and academic
                integrity. Any violation of these standards may lead to
                disciplinary action, including suspension or dismissal.
              </p>
            </article>

            {/* 4. Website Usage */}
            <article
              id="website-usage"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  WEBSITE USAGE
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                4. Website Usage
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                The content on this website, including text, graphics, and logos,
                is the property of Sree Jayam School. You may not reproduce,
                distribute, or use this content for commercial purposes without
                prior written consent.
              </p>

              {/* Highlighted School Management Statement: subtle pale-yellow background (#FFF8E8) with navy text (#102D46) */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed">
                  The school management reserves the right to modify the
                  curriculum, fee structure, and school policies at any time to
                  align with educational standards.
                </p>
              </div>
            </article>

            {/* 5. Limitation of Liability */}
            <article
              id="limitation-of-liability"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>05
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  LIMITATION OF LIABILITY
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                5. Limitation of Liability
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Sree Jayam School shall not be held liable for any indirect,
                incidental, or consequential damages arising out of the use of
                our website or services, provided we have taken reasonable care
                in our operations.
              </p>
            </article>

            {/* 6. Governing Law */}
            <article
              id="governing-law"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>06
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  GOVERNING LAW
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                6. Governing Law
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                These terms are governed by and construed in accordance with the
                laws of India. Any disputes arising from these terms shall be
                subject to the exclusive jurisdiction of the courts in Vellore,
                Tamil Nadu.
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
