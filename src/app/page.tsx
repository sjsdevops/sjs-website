"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Highlights from "@/components/home/Highlights";
import AcademicsSection from "@/components/home/AcademicsSection";
import AcademicResults from "@/components/home/AcademicResults";
import AdmissionsBanner from "@/components/home/AdmissionsBanner";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] selection:bg-[#FFC83D] selection:text-[#102D46]">
      {/* 1. Header (Floating with organic logo container, center pill nav, yellow organic Enquire Now button) */}
      <Header onOpenEnquiry={openEnquiryModal} />

      <main>
        {/* 2. Hero Section: video hero */}
        <Hero onOpenEnquiry={openEnquiryModal} />

        {/* 3. About Us: Creative photographic collage & 6 feature cards */}
        <AboutSection />

        {/* 4. Statistics: Sree Jayam at a Glance (4 Animated Metric Cards & School Photos) */}
        <Highlights />

        {/* 5. Academics: Primary, Middle, and Senior School cards with photos & ICSE/ISC context */}
        <AcademicsSection />

        {/* 5b. Academic Results: 100% Pass Records Table */}
        <AcademicResults />

        {/* 5c. Why Choose Us: Our Difference 3-card elegant row */}
        <WhyChooseUs />

        {/* 6. Admissions: Full-width photographic banner with paper plane doodle & action buttons */}
        <AdmissionsBanner onOpenEnquiry={openEnquiryModal} />
      </main>

      {/* 10. Footer: Deep navy background, school logo, quick links, verified contacts & botanical accent */}
      <Footer />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
      />
    </div>
  );
}
