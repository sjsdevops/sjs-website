import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import FeeRefundHeader from "./FeeRefundHeader";
import { LuShieldCheck, LuArrowRight, LuMail } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Fee Refund Policy | Sree Jayam School",
  description:
    "Official Fee Refund Policy of Sree Jayam School, Vellore. Review policies on admission application fees, tuition refunds, security deposits, and withdrawal processes.",
};

export default function FeeRefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header with interactive Enquiry Modal */}
      <FeeRefundHeader />

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
              {/* Breadcrumb: Home > Fee Refund Policy */}
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
                  <span className="text-[#D0E2F2]">Fee Refund Policy</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Fee Refund <span className="text-[#FFC83D]">Policy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Please review our institutional guidelines regarding admission fees,
                tuition refunds, security deposits, and withdrawal procedures.
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
            {/* 1. Admission Application Fee */}
            <article
              id="admission-application-fee"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  APPLICATION FEE
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                1. Admission Application Fee
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                The application fee paid during the online or offline admission process is non-refundable and non-transferable, as it covers the administrative costs of processing the application.
              </p>
            </article>

            {/* 2. Tuition Fee Refunds */}
            <article
              id="tuition-fee-refunds"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  TUITION FEE REFUNDS
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                2. Tuition Fee Refunds
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                Refunds for tuition fees are subject to the following conditions:
              </p>

              <ul className="space-y-3 text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed mb-5">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Cancellation before Session Start:</strong> If an admission is cancelled before the start of the academic session, a partial refund may be considered after deducting processing charges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Mid-Session Withdrawal:</strong> If a student is withdrawn mid-session, fees already paid for the current term are generally non-refundable.
                  </span>
                </li>
              </ul>

              {/* Special Cases Highlight: subtle pale-yellow background (#FFF8E8) with navy text (#102D46) */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed">
                  Special cases involving medical emergencies or family relocation will be reviewed by the School Management on an individual basis.
                </p>
              </div>
            </article>

            {/* 3. Security Deposits */}
            <article
              id="security-deposits"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  SECURITY DEPOSITS
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                3. Security Deposits
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Any security deposits collected at the time of admission are fully refundable when the student leaves the school, provided all dues are cleared and the Transfer Certificate process is completed.
              </p>
            </article>

            {/* 4. Refund Process */}
            <article
              id="refund-process"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  REFUND PROCESS
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                4. Refund Process
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                To request a refund, parents must submit a formal written application to the school administration. Approved refunds will be processed via bank transfer within 15-30 working days.
              </p>
            </article>

            {/* 5. Contact */}
            <article
              id="contact"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>05
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  CONTACT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                5. Contact
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-5">
                For any queries related to fees and refunds, please reach out to our accounts department at{" "}
                <a
                  href="mailto:finance@sreejayamschool.edu.in"
                  className="text-[#075A9C] font-semibold underline decoration-[#075A9C]/40 hover:decoration-[#075A9C] hover:text-[#06366B] transition-colors"
                >
                  finance@sreejayamschool.edu.in
                </a>
                .
              </p>

              {/* Verified Finance Department Contact Pill Link */}
              <div className="inline-flex items-center gap-3 p-3.5 px-5 rounded-xl bg-[#06366B] text-white text-xs sm:text-sm shadow-sm">
                <LuMail size={18} className="text-[#38BDF8] shrink-0" />
                <span>Accounts Department:</span>
                <a
                  href="mailto:finance@sreejayamschool.edu.in"
                  className="font-semibold text-[#FFC83D] hover:underline"
                >
                  finance@sreejayamschool.edu.in
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
    </div>
  );
}
