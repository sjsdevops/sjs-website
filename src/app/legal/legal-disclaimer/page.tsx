import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import LegalDisclaimerHeader from "./LegalDisclaimerHeader";
import { LuShieldCheck, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Sree Jayam School",
  description:
    "Official Legal Disclaimer for Sree Jayam School, Vellore. Clarifications on information accuracy, educational content, external links, and professional guidance.",
};

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header with interactive Enquiry Modal */}
      <LegalDisclaimerHeader />

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
              {/* Breadcrumb: Home > Legal Disclaimer */}
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
                  <span className="text-[#D0E2F2]">Legal Disclaimer</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Legal <span className="text-[#FFC83D]">Disclaimer</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Important legal disclaimers regarding the information, educational content,
                and services presented on the Sree Jayam School website.
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
            {/* 1. Information Accuracy */}
            <article
              id="information-accuracy"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  INFORMATION ACCURACY
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Information Accuracy
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                The information provided on the Sree Jayam School website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the content.
              </p>
            </article>

            {/* 2. Educational Content */}
            <article
              id="educational-content"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  EDUCATIONAL CONTENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Educational Content
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                The curriculum, academic schedules, and event details listed on this site are subject to change without prior notice. The school management reserves the right to make adjustments based on academic requirements and board guidelines.
              </p>

              {/* Highlighted Disclaimer Statement: pale-yellow background (#FFF8E8) with navy text (#102D46) */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed">
                  Any reliance you place on the information found on this website is strictly at your own risk.
                </p>
              </div>
            </article>

            {/* 3. External Links */}
            <article
              id="external-links"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  EXTERNAL WEBSITES
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                External Links
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Our website may contain links to external websites that are not provided or maintained by Sree Jayam School. We do not guarantee the accuracy or relevance of any information on these external sites.
              </p>
            </article>

            {/* 4. Professional Advice */}
            <article
              id="professional-advice"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  PROFESSIONAL ADVICE
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Professional Advice
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                The information on this site is not intended to be a substitute for professional academic or career counseling. We encourage parents and students to consult with school administrators for specific guidance.
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
