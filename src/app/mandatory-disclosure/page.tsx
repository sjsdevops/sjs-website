"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  Building2,
  Users,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  FlaskConical,
  Library,
  Monitor,
  Trophy,
  ExternalLink,
  Info,
} from "lucide-react";

export default function MandatoryDisclosurePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8EE]/30 text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between font-sans">
      {/* 1. Header (Floating with organic logo container & center nav) */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* 2. INNER-PAGE BANNER: Matches /about-us and /mission-and-vision-policy     */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Building Photo across entire banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Campus Building"
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

          {/* Banner Content Container */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              {/* Breadcrumb: Home → About Us → Mandatory Disclosure */}
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
                  <Link
                    href="/about-us"
                    className="text-white hover:text-[#FFC83D] transition-colors"
                  >
                    About Us
                  </Link>
                  <span className="text-white/80" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-white">Mandatory Disclosure</span>
                </nav>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Mandatory <span className="text-[#FFC83D]">Disclosure</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Official statutory information, school administration directory,
                and campus infrastructure details in compliance with regulatory
                reporting standards.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MAIN CONTENT: Clean, Centred Official Tables                            */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-width max-w-5xl">
            {/* Regulatory Notice Banner */}
            <div className="mb-10 sm:mb-12 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2EAF1] shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#075A9C]/10 text-[#075A9C] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6 text-[#075A9C]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#102D46]">
                  Official Regulatory Information
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  In compliance with regulatory authorities and board norms, Sree
                  Jayam School publishes this mandatory institutional
                  disclosure. All details are maintained for public information,
                  parent reference, and institutional transparency.
                </p>
              </div>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {/* ----------------------------------------------------------------- */}
              {/* SECTION 1: School Basic Information                               */}
              {/* ----------------------------------------------------------------- */}
              <div id="school-basic-info" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E2EAF1] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#102D46] text-[#FFC83D] flex items-center justify-center font-bold shadow-sm shrink-0">
                      <Building2 className="w-5 h-5 text-[#FFC83D]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                        Section A
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#102D46]">
                        School Basic Information
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    Affiliation &amp; General Identification
                  </span>
                </div>

                {/* Table 1: School Basic Information */}
                <div className="bg-white rounded-xl border border-[#E2EAF1] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#102D46] text-white">
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider w-16 text-center">
                            S.No
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider w-1/3">
                            Information
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8EFF6] text-xs sm:text-sm">
                        {/* 1 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            1
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            Name of the School
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            Sree Jayam School
                          </td>
                        </tr>

                        {/* 2 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            2
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            School Code
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              TN102
                            </span>
                          </td>
                        </tr>

                        {/* 3 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            3
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            Complete Address
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-[#334155] leading-relaxed">
                            Ezhil Nagar, Allapuram, Vellore-02
                          </td>
                        </tr>

                        {/* 4 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            4
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            Phone Number
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-[#102D46]">
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href="tel:948627414"
                                className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline font-medium"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                948627414
                              </a>
                              <span className="text-[#94A3B8]">/</span>
                              <a
                                href="tel:9487021111"
                                className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline font-medium"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                9487021111
                              </a>
                            </div>
                          </td>
                        </tr>

                        {/* 5 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center align-top">
                            5
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46] align-top">
                            Email ID
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className="font-semibold text-[#102D46] min-w-[85px]">
                                  Enquiry:
                                </span>
                                <a
                                  href="mailto:info@sreejayamschool.edu.in"
                                  className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                                >
                                  <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                                  info@sreejayamschool.edu.in
                                </a>
                              </div>

                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className="font-semibold text-[#102D46] min-w-[85px]">
                                  Admission:
                                </span>
                                <a
                                  href="mailto:admissions@sreejayamschool.edu.in"
                                  className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                                >
                                  <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                                  admissions@sreejayamschool.edu.in
                                </a>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className="font-semibold text-[#102D46] min-w-[85px]">
                                  Careers:
                                </span>
                                <a
                                  href="mailto:careers@sreejayamschool.edu.in"
                                  className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                                >
                                  <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                                  careers@sreejayamschool.edu.in
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>

                        {/* 6 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            6
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            Website
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <a
                              href="https://www.sreejayamschool.edu.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-medium text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Globe className="w-4 h-4 text-[#075A9C]" />
                              www.sreejayamschool.edu.in
                              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                            </a>
                          </td>
                        </tr>

                        {/* 7 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            7
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-medium text-[#102D46]">
                            Principal Name
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            Mrs.Nalini.S
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* SECTION 2: Communication Team                                     */}
              {/* ----------------------------------------------------------------- */}
              <div id="communication-team" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E2EAF1] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#102D46] text-[#FFC83D] flex items-center justify-center font-bold shadow-sm shrink-0">
                      <Users className="w-5 h-5 text-[#FFC83D]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                        Section B
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#102D46]">
                        Communication Team
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    Management &amp; Key Administrative Directory
                  </span>
                </div>

                {/* Table 2: Communication Team */}
                <div className="bg-white rounded-xl border border-[#E2EAF1] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[680px]">
                      <thead>
                        <tr className="bg-[#102D46] text-white">
                          <th className="py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider w-14 text-center">
                            S.No
                          </th>
                          <th className="py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Name
                          </th>
                          <th className="py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Designation
                          </th>
                          <th className="py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Department
                          </th>
                          <th className="py-3.5 px-4 sm:px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Email ID
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8EFF6] text-xs sm:text-sm">
                        {/* 1 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            1
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MR.S.D.BASKAR
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Chairman
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#FFF8EE] text-[#075A9C] border border-[#FFC83D]/40">
                              Management
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:chairman@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              chairman@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 2 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            2
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MRS.RAMA BASKAR
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Correspondent
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#FFF8EE] text-[#075A9C] border border-[#FFC83D]/40">
                              Management
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:corresp@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              corresp@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 3 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            3
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MR.KIRAN BASKAR.S
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Academic Director
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#FFF8EE] text-[#075A9C] border border-[#FFC83D]/40">
                              Management
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:ad@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              ad@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 4 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            4
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MRS.S.NALINI
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Principal
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Administration
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:principal@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              principal@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 5 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            5
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MRS.S.KAVITHA
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Vice Principal
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Administration
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:vp@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              vp@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 6 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            6
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            MRS.SURIYA.R
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Academic Advisor
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Administration
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:suriya.r@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              suriya.r@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 7 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            7
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            SJS OFFICE
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            General Enquiry
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Administration
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:info@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              info@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>

                        {/* 8 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#64748B] text-center">
                            8
                          </td>
                          <td className="py-4 px-4 sm:px-5 font-semibold text-[#102D46]">
                            SJS OFFICE
                          </td>
                          <td className="py-4 px-4 sm:px-5 text-[#334155] font-medium">
                            Admission
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Administration
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-5">
                            <a
                              href="mailto:admissions@sreejayamschool.edu.in"
                              className="inline-flex items-center gap-1.5 text-[#075A9C] hover:text-[#102D46] hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#075A9C]" />
                              admissions@sreejayamschool.edu.in
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* SECTION 3: Contact Numbers                                        */}
              {/* ----------------------------------------------------------------- */}
              <div id="contact-numbers" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E2EAF1] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#102D46] text-[#FFC83D] flex items-center justify-center font-bold shadow-sm shrink-0">
                      <Phone className="w-5 h-5 text-[#FFC83D]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                        Section C
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#102D46]">
                        Contact Numbers
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    Block-Wise Direct Lines
                  </span>
                </div>

                {/* Table 3: Contact Numbers */}
                <div className="bg-white rounded-xl border border-[#E2EAF1] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#102D46] text-white">
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider w-16 text-center">
                            S.No
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider w-1/3">
                            Block
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Contact Number
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8EFF6] text-xs sm:text-sm">
                        {/* 1 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            1
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            Primary Block
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <div className="flex flex-wrap items-center gap-3">
                              <a
                                href="tel:04162224144"
                                className="inline-flex items-center gap-1.5 font-medium text-[#075A9C] hover:text-[#102D46] hover:underline"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                0416-222 41 44
                              </a>
                              <span className="text-[#CBD5E1]">|</span>
                              <a
                                href="tel:9486274144"
                                className="inline-flex items-center gap-1.5 font-medium text-[#075A9C] hover:text-[#102D46] hover:underline"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                9486274144
                              </a>
                            </div>
                          </td>
                        </tr>

                        {/* 2 */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#64748B] text-center">
                            2
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            Secondary Block
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <div className="flex flex-wrap items-center gap-3">
                              <a
                                href="tel:04162223833"
                                className="inline-flex items-center gap-1.5 font-medium text-[#075A9C] hover:text-[#102D46] hover:underline"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                0416-222 38 33
                              </a>
                              <span className="text-[#CBD5E1]">|</span>
                              <a
                                href="tel:9487021111"
                                className="inline-flex items-center gap-1.5 font-medium text-[#075A9C] hover:text-[#102D46] hover:underline"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#075A9C]" />
                                9487021111
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* SECTION 4: School Infrastructure                                  */}
              {/* ----------------------------------------------------------------- */}
              <div id="school-infrastructure" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E2EAF1] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#102D46] text-[#FFC83D] flex items-center justify-center font-bold shadow-sm shrink-0">
                      <FlaskConical className="w-5 h-5 text-[#FFC83D]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                        Section D
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#102D46]">
                        School Infrastructure
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    Academic, Science &amp; Sports Facilities
                  </span>
                </div>

                {/* Table 4: School Infrastructure */}
                <div className="bg-white rounded-xl border border-[#E2EAF1] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#102D46] text-white">
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider w-1/3">
                            Facility
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8EFF6] text-xs sm:text-sm">
                        {/* Laboratories */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46] align-top">
                            <div className="flex items-center gap-2">
                              <FlaskConical className="w-4 h-4 text-[#075A9C]" />
                              Laboratories
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-[#334155] leading-relaxed">
                            Physics, Chemistry, Biology, Computer Math, Composite
                            Lab, Robotics Lab
                          </td>
                        </tr>

                        {/* Computer Lab */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            <div className="flex items-center gap-2">
                              <Monitor className="w-4 h-4 text-[#075A9C]" />
                              Computer Lab
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Available
                            </span>
                          </td>
                        </tr>

                        {/* Library */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-white">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46]">
                            <div className="flex items-center gap-2">
                              <Library className="w-4 h-4 text-[#075A9C]" />
                              Library
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EAF5FF] text-[#075A9C] border border-[#075A9C]/20">
                              Available
                            </span>
                          </td>
                        </tr>

                        {/* Sports Facilities */}
                        <tr className="hover:bg-[#F2F7FC]/70 transition-colors bg-[#F9FBFC]">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-[#102D46] align-top">
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-[#075A9C]" />
                              Sports Facilities
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-[#334155] leading-relaxed">
                            Table Tennis, Shuttle, Cricket, Basketball, Football
                            and Outdoor Games
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Document Transparency Note */}

            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
