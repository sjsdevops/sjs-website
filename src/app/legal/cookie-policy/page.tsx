import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import CookiePolicyHeader from "./CookiePolicyHeader";
import { LuShieldCheck, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Cookie Policy | Sree Jayam School",
  description:
    "Official Cookie Policy of Sree Jayam School, Vellore. Learn about how we use cookies, category classifications, and managing your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header with interactive Enquiry Modal */}
      <CookiePolicyHeader />

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
              {/* Breadcrumb: Home > Cookie Policy */}
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
                  <span className="text-[#D0E2F2]">Cookie Policy</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Cookie <span className="text-[#FFC83D]">Policy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#D0E2F2] font-normal leading-relaxed max-w-2xl">
                Understand how Sree Jayam School uses cookies to ensure our website
                functions properly and provides a secure browsing experience.
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
            {/* 1. What are Cookies? */}
            <article
              id="what-are-cookies"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>01
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  OVERVIEW
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                What are Cookies?
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember your preferences and provide a better browsing experience.
              </p>
            </article>

            {/* 2. How We Use Cookies */}
            <article
              id="how-we-use-cookies"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>02
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  COOKIE USAGE
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                How We Use Cookies
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed mb-4">
                Sree Jayam School uses cookies for the following reasons:
              </p>

              <ul className="space-y-3.5 text-sm sm:text-[14.5px] text-[#55697A] leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Essential Cookies:</strong> Required for the website to function correctly (e.g., handling admission form submissions).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Performance Cookies:</strong> Help us understand how visitors interact with our site by collecting anonymous data on page views and navigation paths.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#075A9C] shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#102D46]">Preference Cookies:</strong> Allow the site to remember choices you make (such as language or region) to provide enhanced features.
                  </span>
                </li>
              </ul>

              {/* Highlighted Third-Party Tracking Statement: pale-yellow background (#FFF8E8) with navy text (#102D46) */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF8E8] border border-[#FFC83D]/40 text-[#102D46]">
                <p className="text-sm sm:text-[15px] font-bold leading-relaxed">
                  We do not use tracking or advertising cookies from third-party networks for marketing purposes.
                </p>
              </div>
            </article>

            {/* 3. Managing Your Cookies */}
            <article
              id="managing-your-cookies"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>03
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  MANAGEMENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Managing Your Cookies
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, although this may affect the functionality of certain parts of our website.
              </p>
            </article>

            {/* 4. Changes to This Policy */}
            <article
              id="changes-to-this-policy"
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_4px_16px_rgba(16,45,70,0.03)] hover:shadow-[0_8px_24px_rgba(16,45,70,0.06)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102D46] text-white text-xs font-bold tracking-wider group-hover:bg-[#075A9C] transition-colors">
                  <span className="text-[#FFC83D] text-[11px] mr-0.5">#</span>04
                </span>
                <span className="text-xs font-bold text-[#075A9C] uppercase tracking-widest">
                  POLICY UPDATES
                </span>
              </div>

              <h2 className="text-2xl sm:text-[26px] font-bold text-[#102D46] leading-snug">
                Changes to This Policy
              </h2>
              <div className="h-[2px] w-12 bg-[#FFC83D] rounded-full mt-2 mb-4" />

              <p className="text-sm sm:text-[15px] text-[#55697A] leading-relaxed">
                We may update our Cookie Policy from time to time to reflect changes in technology or legal requirements. Any updates will be posted on this page.
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
