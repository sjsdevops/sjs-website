"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  Compass,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function MissionAndVisionPolicyPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46] flex flex-col justify-between">
      {/* 1. Header (Floating with organic logo container & center nav) */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* ========================================================================= */}
        {/* 2. INNER-PAGE BANNER: Exact banner style from /about-us                   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background School Building Photo across entire banner */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Campus Building Architecture"
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

          {/* Content Container */}
          <div className="container-width relative z-20 w-full pt-20 sm:pt-24 lg:pt-26 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              {/* Breadcrumb: Home → About Us → Mission & Vision Policy */}
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
                  <Link
                    href="/about-us"
                    className="text-white hover:text-[#FFC83D] transition-colors"
                  >
                    About Us
                  </Link>
                  <span className="text-white/80" aria-hidden="true">
                    &gt;
                  </span>
                  <span className="text-white">Mission &amp; Vision Policy</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Mission &amp; Vision <span className="text-[#FFC83D]">Policy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Guiding our community with purposeful education, moral integrity,
                and an enduring commitment to student excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OUR MISSION: Two-Column Layout (Text Left, Photograph Right)           */}
        {/* ========================================================================= */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Subtle Soft Background Blur */}
          <div
            className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF8EE]/80 blur-3xl -z-10"
            aria-hidden="true"
          />

          <div className="container-width relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text Column (Left) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Eyebrow Accent */}
                <div className="inline-flex flex-col">
                  <div className="flex items-center gap-2">

                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                      PURPOSEFUL LEARNING
                    </span>
                  </div>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                  Our <span className="text-[#075A9C]">Mission</span>
                </h2>

                {/* Primary Mission Quote Box */}
                <div className="relative pl-6 border-l-4 border-[#FFC83D] py-1">
                  <p className="text-lg sm:text-xl lg:text-[21px] text-[#102D46] font-medium leading-relaxed">
                    “We provide a transformative learning environment that goes
                    beyond textbooks. By blending academic rigor with life
                    skills and ethical values, we empower students to master the
                    art of living and succeed in a rapidly evolving global
                    landscape.”
                  </p>
                </div>

                {/* Mission Core Feature Cards */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#E8EFF6] shadow-sm">
                    <div className="h-9 w-9 rounded-lg bg-[#EAF5FF] flex items-center justify-center text-[#075A9C] mb-2.5">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#102D46]">
                      Academic Rigor
                    </h3>
                    <p className="text-xs text-[#55697A] mt-1 leading-snug">
                      Deep conceptual mastery beyond rote memorization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#E8EFF6] shadow-sm">
                    <div className="h-9 w-9 rounded-lg bg-[#FFF5D6] flex items-center justify-center text-[#102D46] mb-2.5">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#102D46]">
                      Ethical Values
                    </h3>
                    <p className="text-xs text-[#55697A] mt-1 leading-snug">
                      Integrity, empathy, and strong moral character.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#E8EFF6] shadow-sm">
                    <div className="h-9 w-9 rounded-lg bg-[#EAF5FF] flex items-center justify-center text-[#075A9C] mb-2.5">
                      <Compass className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#102D46]">
                      Life Skills
                    </h3>
                    <p className="text-xs text-[#55697A] mt-1 leading-snug">
                      Mastering the art of living in an evolving world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photograph Column (Right): Real Robotics / Practical Learning Photo */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                  {/* Decorative Backdrop Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC83D]/25 via-transparent to-[#075A9C]/15 rounded-[32px] blur-xl -z-10" />

                  {/* Image Container with Rounded Corners & Elegant Border */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8E1D1] bg-[#F7F4EC] shadow-[0_12px_40px_rgba(16,45,70,0.08)] group">
                    <Image
                      src="/images/gallery/mid-school.jpg"
                      alt="Sree Jayam School students engaged in robotics and practical innovation"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle Overlay Gradient on Bottom Edge for Tagline */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/80 via-transparent to-transparent opacity-90" />

                    {/* Bottom Caption Overlay */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. OUR VISION: Alternating Layout (Photograph Left, Text Right, Cream Bg) */}
        {/* ========================================================================= */}
        <section className="relative bg-[#FFF8EE] py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-[#EBE4D5]">
          {/* Subtle Ambient Radial Gradients */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, #EAF5FF 0%, transparent 45%), radial-gradient(circle at 85% 80%, #FFF5D6 0%, transparent 45%)",
            }}
          />

          <div className="container-width relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Photograph Column (Left): Collaborative Student Learning Photo */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                  {/* Decorative Backdrop Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tl from-[#075A9C]/20 via-transparent to-[#FFC83D]/25 rounded-[32px] blur-xl -z-10" />

                  {/* Image Container with Rounded Corners & Elegant Border */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8E1D1] bg-[#F7F4EC] shadow-[0_12px_40px_rgba(16,45,70,0.08)] group">
                    <Image
                      src="/images/gallery/kid-school.jpg"
                      alt="Sree Jayam School students collaboratively engaged in scientific discovery"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle Overlay Gradient on Bottom Edge for Tagline */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/80 via-transparent to-transparent opacity-90" />

                    {/* Bottom Caption Overlay */}

                  </div>
                </div>
              </div>

              {/* Text Column (Right) */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                {/* Eyebrow Accent */}
                <div className="inline-flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                      ASPIRATIONAL HORIZONS
                    </span>
                  </div>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                  Our <span className="text-[#075A9C]">Vision</span>
                </h2>

                {/* Primary Vision Statement Card */}
                <div className="relative rounded-2xl bg-white border border-[#EBE4D5] shadow-[0_8px_30px_rgba(16,45,70,0.05)] p-6 sm:p-7">
                  <div className="absolute top-0 inset-x-0 h-1 bg-[#FFC83D] rounded-t-2xl" />
                  <p className="text-lg sm:text-xl lg:text-[21px] text-[#102D46] font-semibold leading-relaxed">
                    “To be India&apos;s benchmark for educational excellence,
                    where students learn to live with purpose, lead with
                    integrity, and innovate for a better tomorrow.”
                  </p>
                </div>

                {/* 3 Pillars of Vision */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-[#EAE3D4]">
                    <div className="h-7 w-7 rounded-lg bg-[#FFC83D] text-[#102D46] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#102D46]">
                        Live with Purpose
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed mt-0.5">
                        Fostering self-awareness, intellectual clarity, and meaningful dedication to one&apos;s goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-[#EAE3D4]">
                    <div className="h-7 w-7 rounded-lg bg-[#102D46] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#102D46]">
                        Lead with Integrity
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed mt-0.5">
                        Instilling steadfast ethical standards, compassion, and responsibility toward society.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-[#EAE3D4]">
                    <div className="h-7 w-7 rounded-lg bg-[#075A9C] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#102D46]">
                        Innovate for Tomorrow
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55697A] leading-relaxed mt-0.5">
                        Empowering critical thinking, modern scientific inquiry, and dynamic creative problem-solving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INSTITUTIONAL POLICY: Spacious Two-Column Layout with Real Campus Photo */}
        {/* ========================================================================= */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div
            className="pointer-events-none absolute -bottom-24 left-0 w-[550px] h-[550px] rounded-full bg-[#EAF5FF]/70 blur-3xl -z-10"
            aria-hidden="true"
          />

          <div className="container-width relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Text Column (Left) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow Accent */}
                <div className="inline-flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                      FOUNDATIONAL GUIDELINES
                    </span>
                  </div>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                  Institutional <span className="text-[#075A9C]">Policy</span>
                </h2>

                {/* Editorial Content Card with 4 Supplied Policy Paragraphs */}
                <div className="rounded-2xl bg-[#FFFDF7] border border-[#EBE4D5] shadow-[0_4px_24px_rgba(16,45,70,0.04)] p-6 sm:p-8 space-y-5 text-[15px] sm:text-[16px] text-[#4D6173] leading-relaxed">
                  <p className="font-medium text-[#102D46] text-base sm:text-[17px] leading-relaxed">
                    At Sree Jayam School, we believe that education is the
                    foundation for building responsible, knowledgeable, and
                    compassionate individuals. Our philosophy is to provide a
                    balanced education that nurtures intellectual growth, moral
                    values, creativity, and social responsibility.
                  </p>

                  <p>
                    We strive to create a safe, inclusive, and supportive
                    learning environment where every child is encouraged to
                    explore their potential and develop confidence in their
                    abilities. Our approach to education focuses on academic
                    excellence while also promoting discipline, respect,
                    integrity, and empathy.
                  </p>

                  <p>
                    Sree Jayam School believes in shaping students into
                    lifelong learners who are prepared to face the challenges of
                    the modern world with courage, critical thinking, and a
                    strong sense of responsibility towards society.
                  </p>

                  <p>
                    Through dedicated teachers, innovative teaching methods, and
                    a values-based curriculum, we aim to guide students to become
                    responsible citizens and future leaders who contribute
                    positively to the community and the nation.
                  </p>
                </div>

                {/* Institutional Commitments Checkpoints */}

              </div>

              {/* Campus Photograph Column (Right): Real Sree Jayam School Campus */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                  {/* Decorative Backdrop Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC83D]/20 via-transparent to-[#075A9C]/20 rounded-[32px] blur-xl -z-10" />

                  {/* Image Container with Rounded Corners & Elegant Border */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8E1D1] bg-[#F7F4EC] shadow-[0_12px_40px_rgba(16,45,70,0.08)] group">
                    <Image
                      src="/images/about/School-block.png"
                      alt="Sree Jayam School Campus Architecture and Modern Building, Vellore"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover object-[center_80%] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Campus Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/90 via-[#102D46]/20 to-transparent" />

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">

                      <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm leading-snug">
                        Sree Jayam School Campus
                      </h3>
                      <p className="text-xs sm:text-[13px] text-white/85 mt-0.5">
                        State-of-the-Art Infrastructure in Allapuram, Vellore
                      </p>
                    </div>
                  </div>

                  {/* Trust & Heritage Accent Card below image */}

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
