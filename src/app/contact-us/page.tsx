"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  FaPhone,
  FaPhoneVolume,
  FaEnvelope,
  FaClock,
  FaLocationDot,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactUsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] flex flex-col font-sans">
      {/* Shared Header Navigation */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: Matching Sree Jayam Inner-Page Style                      */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[480px] sm:h-[500px] lg:h-[520px] flex items-center">
          {/* Background School Campus Photograph */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Campus Building"
              fill
              priority
              unoptimized
              className="object-cover object-[center_55%] md:object-[right_55%]"
              sizes="100vw"
            />
          </div>

          {/* Deep Navy Gradient Overlay: Strongest on left, fading to right */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(6, 43, 79, 0.96) 0%, rgba(6, 43, 79, 0.88) 32%, rgba(6, 43, 79, 0.60) 55%, rgba(6, 43, 79, 0.22) 80%, rgba(6, 43, 79, 0.05) 100%)",
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

          {/* Content Container */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              {/* Breadcrumb: Home → Contact Us */}
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
                  <span className="text-white">Contact Us</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Page Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Contact Us
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                We are here to help. Get in touch with us.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAIN CONTACT SECTION: Clean, Balanced 3-Card Grid                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
          <div className="container-width">
            {/* Header: Eyebrow, Heading, Description */}
            <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
              <div className="inline-flex flex-col items-center">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  GET IN TOUCH
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#102D46] tracking-tight leading-tight">
                We’d Love to Hear From You.
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
                Whether you have a question about admissions, academics, facilities, or any other information, our team is here to assist you.
              </p>
            </div>

            {/* 3 Balanced Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Card 1 — Call Us */}
              <div className="group rounded-3xl bg-white border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#075A9C] group-hover:bg-[#FFC83D] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/60 flex items-center justify-center text-[#075A9C] group-hover:bg-[#FFC83D] group-hover:text-[#102D46] transition-colors duration-300 shadow-sm">
                      <FaPhoneVolume className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#075A9C] bg-[#EAF2F8] px-3 py-1 rounded-full">
                      Direct Line
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                    Call Us
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102D46] tracking-tight mt-1 mb-2">
                    Phone Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    Speak with our administrative office for admissions, fee details, and general queries.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Landline
                    </span>
                    <a
                      href="tel:04162224144"
                      className="text-lg sm:text-xl font-bold text-[#102D46] hover:text-[#075A9C] transition-colors inline-flex items-center gap-2"
                    >
                      <span>0416 222 41 44</span>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href="tel:+919486274144"
                      className="text-base sm:text-lg font-bold text-[#475569] hover:text-[#075A9C] transition-colors inline-flex items-center gap-2"
                    >
                      <span>+91 94862 74144</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:04162224144"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FFF8EE] text-[#102D46] text-xs font-bold hover:bg-[#FFC83D] transition-all duration-200 border border-[#FFC83D]/40"
                    >
                      <FaPhone className="w-3 h-3" />
                      <span>Call Campus Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 — Email Us */}
              <div className="group rounded-3xl bg-white border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#075A9C] group-hover:bg-[#FFC83D] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/60 flex items-center justify-center text-[#075A9C] group-hover:bg-[#FFC83D] group-hover:text-[#102D46] transition-colors duration-300 shadow-sm">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#075A9C] bg-[#EAF2F8] px-3 py-1 rounded-full">
                      Official Mail
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                    Email Us
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102D46] tracking-tight mt-1 mb-2">
                    Email Correspondence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    Send us your admissions queries, student documentation, or official correspondence anytime.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1.5 break-all">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Email
                    </span>
                    <a
                      href="mailto:info@sreejayamschool.edu.in"
                      className="text-sm sm:text-base font-bold text-[#102D46] hover:text-[#075A9C] transition-colors"
                    >
                      info@sreejayamschool.edu.in
                    </a>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1 break-all">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Alternative Email
                    </span>
                    <a
                      href="mailto:sreejayamschool@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#075A9C] transition-colors"
                    >
                      sreejayamschool@gmail.com
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="mailto:info@sreejayamschool.edu.in"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FFF8EE] text-[#102D46] text-xs font-bold hover:bg-[#FFC83D] transition-all duration-200 border border-[#FFC83D]/40"
                    >
                      <FaEnvelope className="w-3 h-3" />
                      <span>Write an Email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 — Working Hours */}
              <div className="group rounded-3xl bg-white border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#075A9C] group-hover:bg-[#FFC83D] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/60 flex items-center justify-center text-[#075A9C] group-hover:bg-[#FFC83D] group-hover:text-[#102D46] transition-colors duration-300 shadow-sm">
                      <FaClock className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#075A9C] bg-[#EAF2F8] px-3 py-1 rounded-full">
                      Office Timings
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                    Working Hours
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102D46] tracking-tight mt-1 mb-2">
                    Campus Office Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                    Our administrative and admissions offices are open for in-person parent consultations and visits.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Working Days
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-[#102D46]">
                      Monday – Saturday
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Daily Operating Hours
                    </span>
                    <p className="text-base sm:text-lg font-bold text-[#075A9C]">
                      8:00 AM – 4:00 PM
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-200">
                      <span>Sunday Closed (Campus Holiday)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LOCATION & BRANCH INFORMATION SECTION (Map + Address Card)             */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-20 bg-white border-t border-slate-100">
          <div className="container-width">
            <div className="rounded-3xl bg-white border border-[#E2EAF1] shadow-lg p-6 sm:p-10 lg:p-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column — Google Maps Embed */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-2">
                    <div className="inline-flex flex-col">
                      <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                        OUR LOCATION
                      </span>
                      <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102D46] tracking-tight">
                      Find Us on Google Maps
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      Visit our campus or get directions to our location.
                    </p>
                  </div>

                  {/* Responsive Map Container */}
                  <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                    <iframe
                      title="Sree Jayam School Campus Location Map"
                      src="https://maps.google.com/maps?q=Sree+Jayam+School,+Ezhil+Nagar,+Allapuram,+Vellore,+Tamil+Nadu+632002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://maps.google.com/?q=Allapuram,Vellore,Tamil+Nadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075A9C] hover:text-[#064B82] transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <FaArrowUpRightFromSquare className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Right Column — School Address & Branch Information */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex flex-col">
                      <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                        OUR LOCATION
                      </span>
                      <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102D46] tracking-tight">
                      Visit Sree Jayam School
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Find the information you need for admissions, academic enquiries, and general assistance.
                    </p>
                  </div>

                  {/* School Address Card */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8EE]/60 border border-[#FFC83D]/40 space-y-5 shadow-sm">
                    {/* School Name & Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#075A9C] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <FaLocationDot className="w-4 h-4 text-[#FFC83D]" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                          School Campus
                        </span>
                        <h4 className="text-lg font-bold text-[#102D46]">
                          Sree Jayam School
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          Ezhil Nagar, Allapuram, Vellore – 632 002, Tamil Nadu, India.
                        </p>
                      </div>
                    </div>

                    {/* Contact details list */}
                    <div className="pt-2 border-t border-[#FFC83D]/30 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2.5 text-[#102D46]">
                        <FaPhone className="w-3.5 h-3.5 text-[#075A9C] shrink-0" />
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:04162224144"
                            className="font-bold hover:text-[#075A9C] transition-colors"
                          >
                            0416 222 41 44
                          </a>
                          <span className="text-slate-300">|</span>
                          <a
                            href="tel:+919486274144"
                            className="font-bold hover:text-[#075A9C] transition-colors"
                          >
                            94862 74144
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-[#102D46] break-all">
                        <FaEnvelope className="w-3.5 h-3.5 text-[#075A9C] shrink-0" />
                        <a
                          href="mailto:info@sreejayamschool.edu.in"
                          className="font-semibold text-[#075A9C] hover:underline"
                        >
                          info@sreejayamschool.edu.in
                        </a>
                      </div>
                    </div>

                    {/* Get Directions Button */}
                    <div className="pt-2">
                      <a
                        href="https://maps.google.com/?q=Allapuram,Vellore,Tamil+Nadu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#075A9C] hover:bg-[#064B82] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        <span>Get Directions</span>
                        <FaArrowRight className="w-3 h-3 text-[#FFC83D]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. IMMEDIATE ASSISTANCE STRIP: Wide Navy Gradient Strip                     */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC]">
          <div className="container-width">
            <div className="rounded-3xl bg-gradient-to-r from-[#102D46] via-[#075A9C] to-[#102D46] text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center">
                {/* Section 1: Need Immediate Assistance? */}
                <div className="space-y-3 text-center md:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC83D]">
                    NEED IMMEDIATE ASSISTANCE?
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Call Us Directly
                  </h4>
                  <div className="pt-1">
                    <a
                      href="tel:04162224144"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFC83D] text-[#102D46] text-xs sm:text-sm font-bold shadow-md hover:bg-[#ffbe1a] transition-all hover:scale-105 cursor-pointer"
                    >
                      <FaPhone className="w-3 h-3" />
                      <span>Call Now: 0416 222 41 44</span>
                    </a>
                  </div>
                </div>

                {/* Section 2: Working Hours */}
                <div className="space-y-2 text-center border-y md:border-y-0 md:border-x border-white/15 py-6 md:py-0 px-0 md:px-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC83D]">
                    WORKING HOURS
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">
                    Monday – Saturday
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    8:00 AM – 4:00 PM
                  </p>
                </div>

                {/* Section 3: Connect With Us */}
                <div className="space-y-3 text-center md:text-right">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC83D]">
                    CONNECT WITH US
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Follow us for updates, events and school activities.
                  </p>
                  <div className="flex items-center justify-center md:justify-end gap-2.5 pt-1">
                    <a
                      href="https://www.facebook.com/sreejayamschool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/sreejayamschool/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@SreeJayamSchool"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </a>
                    <a
                      href="https://x.com/sreejayamschool?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter (X)"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      <FaXTwitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
