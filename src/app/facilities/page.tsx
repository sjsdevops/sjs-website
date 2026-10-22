"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  FaBookOpen,
  FaFlask,
  FaComputer,
  FaTrophy,
  FaChalkboardUser,
  FaPuzzlePiece,
  FaChildReaching,
  FaPeopleRoof,
  FaBasketball,
  FaMusic,
  FaBus,
  FaBuildingColumns,
  FaCheck,
  FaMicroscope,
  FaAtom,
  FaDna,
  FaLaptopCode,
  FaRobot,
  FaPersonRunning,
  FaChess,
  FaFutbol,
  FaVolleyball,
  FaTableTennisPaddleBall,
  FaMedal,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

interface Facility {
  id: string;
  title: string;
  subtitleHeading?: string;
  image: string;
  imageAlt: string;
  icon: IconType;
  description: React.ReactNode;
  category: string;
  detailAnchor?: string;
  detailAnchorText?: string;
}

const mainFacilities: Facility[] = [
  // Row 1: Library | Science Labs | Computer Lab
  {
    id: "library",
    title: "Library",
    subtitleHeading: "A Space for Learning",
    image: "/images/facilities/library.jpg",
    imageAlt: "Sree Jayam School library and reading room",
    icon: FaBookOpen,
    category: "Knowledge & Research",
    description: (
      <p className="text-sm text-[#475569] leading-relaxed">
        Our library provides a quiet and comfortable environment where students can read, research, explore new ideas, and broaden their knowledge beyond the classroom. Students are encouraged to make regular use of the library and develop good reading habits.
      </p>
    ),
  },
  {
    id: "science-labs",
    title: "Science Laboratories",
    subtitleHeading: "Our Laboratories",
    image: "/images/facilities/science lab.jpg",
    imageAlt: "Physics, Chemistry and Biology laboratories at Sree Jayam School",
    icon: FaFlask,
    category: "Practical Sciences",
    detailAnchor: "#science-laboratories",
    detailAnchorText: "View Laboratory Details & Outcomes ↓",
    description: (
      <p className="text-sm text-[#475569] leading-relaxed">
        The school provides well-equipped laboratories for different branches of science, including Physics, Chemistry, Biology, and General Science, equipped with appropriate apparatus to support practical learning.
      </p>
    ),
  },
  {
    id: "computer-robotics-lab",
    title: "Computer & Robotics Lab",
    subtitleHeading: "Computer & Robotics Lab",
    image: "/images/facilities/computer lab.jpg",
    imageAlt: "Modern computer and robotics lab workstations at Sree Jayam School",
    icon: FaComputer,
    category: "Technology & Computing",
    detailAnchor: "#computer-robotics-lab",
    detailAnchorText: "Explore Tech & Robotics Modules ↓",
    description: (
      <p className="text-sm text-[#475569] leading-relaxed">
        The Computer and Robotics Lab at Sree Jayam School provides students with opportunities to learn technology through practical activities, coding, programming, and designing simple robots.
      </p>
    ),
  },

  // Row 2: Sports Facilities | Smart Classrooms | Montessori Room
  {
    id: "sports-facilities",
    title: "Sports Facilities",
    subtitleHeading: "Sports Facilities",
    image: "/images/facilities/sports facilities.jpg",
    imageAlt: "Sports grounds and athletic training at Sree Jayam School",
    icon: FaTrophy,
    category: "Physical Education",
    detailAnchor: "#sports-facilities",
    detailAnchorText: "Explore 12 Sporting Disciplines ↓",
    description: (
      <p className="text-sm text-[#475569] leading-relaxed">
        Sree Jayam School provides good sports facilities to encourage students to stay active, healthy, and participate in various sports activities, building teamwork, discipline, confidence, and sportsmanship.
      </p>
    ),
  },
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    subtitleHeading: "Smart Classrooms",
    image: "/images/facilities/smart classroom.jpg",
    imageAlt: "Smart classroom with interactive digital presentation board",
    icon: FaChalkboardUser,
    category: "Digital Learning",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          Sree Jayam School provides smart classrooms with digital learning facilities to make lessons more interesting and interactive.
        </p>
        <p>
          Students learn through <strong className="text-[#102D46]">videos, presentations, animations, and digital resources</strong>, helping them understand concepts easily and enjoy the learning process.
        </p>
      </div>
    ),
  },
  {
    id: "montessori-room",
    title: "Montessori Room",
    subtitleHeading: "Montessori Room",
    image: "/images/facilities/montessori room.jpg",
    imageAlt: "Montessori room with hands-on learning materials for young learners",
    icon: FaPuzzlePiece,
    category: "Early Childhood",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          The Montessori Room at Sree Jayam School provides a safe, colourful, and child-friendly environment for young learners.
        </p>
        <p>
          Children learn through <strong className="text-[#102D46]">hands-on activities, educational materials, play, and exploration</strong>. The room helps develop their <strong className="text-[#102D46]">independence, creativity, concentration, motor skills, and confidence</strong>.
        </p>
      </div>
    ),
  },

  // Row 3: Kids Play Area | Indoor Multipurpose Hall | Outdoor Basketball Court
  {
    id: "kids-play-area",
    title: "Kids Play Area",
    subtitleHeading: "Kids Play Area",
    image: "/images/facilities/kids play area.jpg",
    imageAlt: "Safe and enjoyable kids play area at Sree Jayam School",
    icon: FaChildReaching,
    category: "Recreation & Play",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          The Kids Play Area at Sree Jayam School provides a safe and enjoyable space for young children to play, explore, and have fun.
        </p>
        <p>
          Play activities help children develop their <strong className="text-[#102D46]">physical skills, coordination, creativity, confidence, and social skills</strong> while enjoying time with their friends.
        </p>
      </div>
    ),
  },
  {
    id: "indoor-hall",
    title: "Indoor Multipurpose Hall",
    subtitleHeading: "Indoor Multipurpose Hall",
    image: "/images/facilities/indoor hall.jpg",
    imageAlt: "Spacious multipurpose indoor hall for school programmes",
    icon: FaPeopleRoof,
    category: "Assembly & Culture",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          The Indoor Multipurpose Hall at Sree Jayam School is a spacious facility for <strong className="text-[#102D46]">indoor sports, school events, cultural activities, competitions, and other programmes</strong>.
        </p>
        <p>
          It provides students with a comfortable space to participate in various activities and develop their <strong className="text-[#102D46]">confidence, teamwork, creativity, and skills</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "basketball-court",
    title: "Outdoor Basketball Court",
    subtitleHeading: "Outdoor Basketball Court",
    image: "/images/facilities/basket ball.jpg",
    imageAlt: "Outdoor basketball court at Sree Jayam School",
    icon: FaBasketball,
    category: "Court Sports",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          The Outdoor Basketball Court at Sree Jayam School provides students with a spacious area to practise and play basketball.
        </p>
        <p>
          It encourages students to develop <strong className="text-[#102D46]">fitness, teamwork, coordination, discipline, and sportsmanship</strong> through regular practice and games.
        </p>
      </div>
    ),
  },
];

const finalRowFacilities: Facility[] = [
  // Final Row: Music Room | Transport
  {
    id: "music-room",
    title: "Music Room",
    subtitleHeading: "Music Room",
    image: "/images/facilities/music room.jpg",
    imageAlt: "Acoustic music room with instruments at Sree Jayam School",
    icon: FaMusic,
    category: "Performing Arts",
    description: (
      <p className="text-sm text-[#475569] leading-relaxed">
        The Music Room at Sree Jayam School provides a dedicated acoustic space for vocal training, instrumental practice, and musical appreciation, encouraging students to express their creativity and artistic talents.
      </p>
    ),
  },
  {
    id: "transport",
    title: "Transport",
    subtitleHeading: "Transport",
    image: "/images/facilities/transport.jpg",
    imageAlt: "School buses and safe transport facility at Sree Jayam School",
    icon: FaBus,
    category: "Safety & Mobility",
    description: (
      <div className="space-y-2 text-sm text-[#475569] leading-relaxed">
        <p>
          Sree Jayam School provides safe and convenient transport facilities for students. School buses operate on selected routes with trained drivers and support staff.
        </p>
        <p>
          The transport facility ensures <strong className="text-[#102D46]">safe, comfortable, and timely travel</strong> to and from school.
        </p>
      </div>
    ),
  },
];

// Sports List (12 sports specified by client)
const sportsList = [
  { name: "Athletics", icon: FaPersonRunning },
  { name: "Basketball", icon: FaBasketball },
  { name: "Badminton", icon: FaMedal },
  { name: "Chess", icon: FaChess },
  { name: "Cricket", icon: FaTrophy },
  { name: "Football", icon: FaFutbol },
  { name: "Hockey", icon: FaMedal },
  { name: "Kho-Kho", icon: FaPersonRunning },
  { name: "Table Tennis", icon: FaTableTennisPaddleBall },
  { name: "Throwball", icon: FaVolleyball },
  { name: "Volleyball", icon: FaVolleyball },
  { name: "Carrom", icon: FaChess },
];

export default function FacilitiesPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102D46] flex flex-col font-sans">
      {/* Shared Header Navigation */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: Matching /about-us and /mission-and-vision-policy         */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[500px] sm:h-[520px] lg:h-[540px] flex items-center">
          {/* Background Genuine Campus Photograph */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Modern Campus Infrastructure"
              fill
              priority
              unoptimized
              className="object-cover object-[center_55%] md:object-[right_55%]"
              sizes="100vw"
            />
          </div>

          {/* Deep Navy Gradient Overlay */}
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
              {/* Breadcrumb: Home → Facilities */}
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
                  <span className="text-white">Facilities</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Page Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Facilities
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Modern infrastructure for a brighter tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. INFRASTRUCTURE INTRODUCTION: Clean, Spacious, Left-Aligned             */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Eyebrow, Heading, Description */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex flex-col">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                    INFRASTRUCTURE
                  </span>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#102D46] tracking-tight leading-[1.2]">
                  Environments Engineered for{" "}
                  <span className="text-[#FFC83D]">Excellence.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl pt-1">
                  “We believe that a sterile environment stifles growth. Our campus integrates sophisticated architecture with purposeful design to foster unparalleled academic and personal development.”
                </p>
              </div>

              {/* Right Column: Decorative Campus Badge with Real React Icon */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="w-full max-w-sm rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/40 p-6 sm:p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#075A9C] text-white flex items-center justify-center shrink-0 shadow-md">
                      <FaBuildingColumns className="w-6 h-6 text-[#FFC83D]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#102D46]">
                        Purpose-Built Campus
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        ICSE &amp; ISC affiliated infrastructure designed for holistic academic, scientific, and athletic growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FACILITIES CARD GRID: 3-Column Rows 1–3 & Balanced Final Row 4        */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
          <div className="container-width space-y-8 sm:space-y-10">
            {/* Section Sub-heading */}
            <div className="max-w-2xl">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#075A9C]">
                CAMPUS AMENITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#102D46] tracking-tight mt-1">
                Explore Our Key Facilities
              </h3>
            </div>

            {/* Rows 1, 2, and 3: 9 cards in a 3-column grid on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {mainFacilities.map((facility) => {
                const IconComponent = facility.icon;

                return (
                  <div
                    key={facility.id}
                    className="group bg-white rounded-2xl border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/30 transition-all duration-300 flex flex-col overflow-hidden h-full"
                  >
                    {/* 1. Facility Photograph Across Top */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#102D46] shrink-0">
                      <Image
                        src={facility.image}
                        alt={facility.imageAlt}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/75 via-[#102D46]/15 to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#102D46] shadow-sm border border-slate-200">
                          {facility.category}
                        </span>
                      </div>
                    </div>

                    {/* 2. Content Area */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-gradient-to-b from-white to-[#FFF8EE]/30">
                      <div className="space-y-3">
                        {/* Icon & Title Row */}
                        <div className="flex items-center gap-3.5">
                          {/* Circular Accent Around Authentic React Icon */}
                          <div className="w-11 h-11 rounded-full bg-[#FFF8EE] border border-[#FFC83D]/50 flex items-center justify-center text-[#075A9C] shrink-0 shadow-sm group-hover:bg-[#FFC83D] group-hover:text-[#102D46] transition-colors duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-[#102D46] tracking-tight group-hover:text-[#075A9C] transition-colors">
                              {facility.title}
                            </h4>
                            {facility.subtitleHeading && facility.subtitleHeading !== facility.title && (
                              <span className="text-xs font-semibold text-[#075A9C]">
                                {facility.subtitleHeading}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Concise Client-Approved Description */}
                        <div className="pt-1">
                          {facility.description}
                        </div>
                      </div>

                      {/* Unobtrusive Anchor Link to Detailed Sections if Available */}
                      {facility.detailAnchor && (
                        <div className="pt-4 mt-4 border-t border-[#E8EFF6]">
                          <a
                            href={facility.detailAnchor}
                            className="inline-flex items-center text-xs font-bold text-[#075A9C] hover:text-[#064B82] transition-colors"
                          >
                            <span>{facility.detailAnchorText}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final Row: Music Room & Transport as 2 Balanced Cards */}
            <div className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                {finalRowFacilities.map((facility) => {
                  const IconComponent = facility.icon;

                  return (
                    <div
                      key={facility.id}
                      className="group bg-white rounded-2xl border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/30 transition-all duration-300 flex flex-col overflow-hidden h-full"
                    >
                      {/* Facility Photograph Across Top */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#102D46] shrink-0">
                        <Image
                          src={facility.image}
                          alt={facility.imageAlt}
                          fill
                          unoptimized
                          priority
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Gradient Overlay for Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/75 via-[#102D46]/15 to-transparent pointer-events-none" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#102D46] shadow-sm border border-slate-200">
                            {facility.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-gradient-to-b from-white to-[#FFF8EE]/30">
                        <div className="space-y-3">
                          {/* Icon & Title Row */}
                          <div className="flex items-center gap-3.5">
                            {/* Circular Accent Around Authentic React Icon */}
                            <div className="w-11 h-11 rounded-full bg-[#FFF8EE] border border-[#FFC83D]/50 flex items-center justify-center text-[#075A9C] shrink-0 shadow-sm group-hover:bg-[#FFC83D] group-hover:text-[#102D46] transition-colors duration-300">
                              <IconComponent className="w-5 h-5" />
                            </div>

                            <h4 className="text-xl sm:text-2xl font-bold text-[#102D46] tracking-tight group-hover:text-[#075A9C] transition-colors">
                              {facility.title}
                            </h4>
                          </div>

                          {/* Client-Approved Description */}
                          <div className="pt-1">
                            {facility.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DEDICATED IN-DEPTH SECTION: SCIENCE LABORATORIES                      */}
        {/* ========================================================================= */}
        <section
          id="science-laboratories"
          className="py-16 sm:py-20 bg-white border-t border-slate-100 scroll-mt-20"
        >
          <div className="container-width space-y-10 sm:space-y-12">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  SCIENCE &amp; EXPERIENTIAL LEARNING
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight">
                Our Laboratories
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-1">
                The school provides well-equipped laboratories for different branches of science, including:
              </p>
            </div>

            {/* 4 Laboratory Branches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { name: "Physics Laboratory", icon: FaAtom, desc: "Mechanics, optics, and electrical experimental apparatus." },
                { name: "Chemistry Laboratory", icon: FaFlask, desc: "Chemical reagents, analytical glasswares, and fume containment." },
                { name: "Biology Laboratory", icon: FaDna, desc: "Specimens, anatomical models, and advanced dissection microscopes." },
                { name: "General Science Laboratory", icon: FaMicroscope, desc: "Hands-on foundation science inquiry for younger learners." },
              ].map((lab, idx) => {
                const LabIcon = lab.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2EAF1] shadow-sm hover:shadow-md hover:border-[#075A9C]/40 transition-all duration-200 space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8EE] border border-[#FFC83D]/50 flex items-center justify-center text-[#075A9C]">
                      <LabIcon className="w-5 h-5 text-[#075A9C]" />
                    </div>
                    <h3 className="text-base font-bold text-[#102D46]">
                      {lab.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Apparatus Statement & Learning Outcomes Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFF8EE]/60 rounded-3xl p-6 sm:p-10 border border-[#FFC83D]/40">
              {/* Left Column: Learning Outcomes */}
              <div className="lg:col-span-7 space-y-5">
                <p className="text-base font-medium text-[#102D46] leading-relaxed">
                  Each laboratory is equipped with appropriate apparatus, models, specimens, instruments, and learning resources to support practical activities at different grade levels.
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#075A9C]">
                    Our laboratory activities help students develop:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {[
                      "Scientific curiosity and questioning skills",
                      "Observation and analytical skills",
                      "Problem-solving and critical-thinking abilities",
                      "Practical and experimental skills",
                      "Teamwork and collaboration",
                      "Accuracy and responsible use of scientific equipment",
                    ].map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#075A9C]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FaCheck className="w-2.5 h-2.5 text-[#075A9C]" />
                        </div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Genuine Photo */}
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md border border-white">
                  <Image
                    src="/images/facilities/science lab.jpg"
                    alt="Students conducting experiments in Sree Jayam School science laboratory"
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. DEDICATED IN-DEPTH SECTION: COMPUTER & ROBOTICS LAB                   */}
        {/* ========================================================================= */}
        <section
          id="computer-robotics-lab"
          className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-100 scroll-mt-20"
        >
          <div className="container-width space-y-10 sm:space-y-12">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  TECHNOLOGY &amp; PRACTICAL INNOVATION
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight">
                Computer &amp; Robotics Lab
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-1">
                The Computer and Robotics Lab at Sree Jayam School provides students with opportunities to learn technology through practical activities.
              </p>
            </div>

            {/* Two Side-by-Side Detailed Panels: Computer Lab vs Robotics Lab */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Panel 1: Computer Lab */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2EAF1] shadow-sm flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] border border-[#075A9C]/20 flex items-center justify-center text-[#075A9C]">
                      <FaLaptopCode className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#102D46]">
                        Computer Lab
                      </h3>
                      <span className="text-xs font-semibold text-[#075A9C]">
                        Digital Literacy &amp; Coding
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#102D46]">
                    Students learn:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Basic computer skills",
                      "Coding and programming",
                      "Digital applications",
                      "Internet and digital safety",
                      "Problem-solving skills",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[#334155]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#EAF5FF] flex items-center justify-center shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-[#075A9C]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Panel 2: Robotics Lab */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2EAF1] shadow-sm flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/50 flex items-center justify-center text-[#075A9C]">
                      <FaRobot className="w-6 h-6 text-[#075A9C]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#102D46]">
                        Robotics Lab
                      </h3>
                      <span className="text-xs font-semibold text-[#075A9C]">
                        Automation &amp; Design Thinking
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#102D46]">
                    Students learn about:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Robotics and automation",
                      "Coding",
                      "Designing and building simple robots",
                      "Creative thinking",
                      "Teamwork and problem-solving",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[#334155]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FFF8EE] border border-[#FFC83D]/40 flex items-center justify-center shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-[#075A9C]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Closing Statement Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#102D46] to-[#075A9C] text-white text-center shadow-md">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                The labs encourage students to <strong className="text-[#FFC83D]">learn, explore, create, and innovate</strong> through hands-on activities.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DEDICATED IN-DEPTH SECTION: SPORTS FACILITIES                         */}
        {/* ========================================================================= */}
        <section
          id="sports-facilities"
          className="py-16 sm:py-20 bg-white border-t border-slate-100 scroll-mt-20"
        >
          <div className="container-width space-y-10 sm:space-y-12">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                  PHYSICAL FITNESS &amp; SPORTS
                </span>
                <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight">
                Sports Facilities
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-1">
                Sree Jayam School provides good sports facilities to encourage students to stay active, healthy, and participate in various sports activities.
              </p>
            </div>

            {/* 12 Sports Disciplines Visual Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {sportsList.map((sport, idx) => {
                const SportIcon = sport.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2EAF1] shadow-sm hover:shadow-md hover:border-[#075A9C]/40 transition-all duration-200 flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#075A9C] shadow-sm group-hover:bg-[#075A9C] group-hover:text-white transition-colors duration-200 shrink-0">
                      <SportIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#102D46]">
                      {sport.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Closing Statement Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/50 text-center shadow-sm">
              <p className="text-base sm:text-lg font-medium text-[#102D46] leading-relaxed">
                Students are encouraged to participate in sports and develop <strong className="text-[#075A9C]">teamwork, discipline, confidence, and sportsmanship</strong>.
              </p>
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
