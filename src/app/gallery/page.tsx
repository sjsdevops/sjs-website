"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import {
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
  FaAward,
  FaTrophy,
  FaFlag,
  FaStar,
  FaMusic,
  FaUsers,
  FaExpand,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

// 7 Filterable Tabs defined by the specification
type TabCategory =
  | "All"
  | "Ceremonies"
  | "Sports"
  | "National Days"
  | "Special Days"
  | "Cultural Events"
  | "School Life";

interface TabItem {
  id: TabCategory;
  label: string;
  icon?: IconType;
}

const tabs: TabItem[] = [
  { id: "All", label: "All" },
  { id: "Ceremonies", label: "Ceremonies", icon: FaAward },
  { id: "Sports", label: "Sports", icon: FaTrophy },
  { id: "National Days", label: "National Days", icon: FaFlag },
  { id: "Special Days", label: "Special Days", icon: FaStar },
  { id: "Cultural Events", label: "Cultural Events", icon: FaMusic },
  { id: "School Life", label: "School Life", icon: FaUsers },
];

export interface Album {
  id: string;
  title: string;
  category: TabCategory;
  categoryBadge: string;
  coverImage: string;
  description: string;
  images: { src: string; caption: string }[];
}

// 11 Celebration Albums mapped strictly according to client specification
const celebrationAlbums: Album[] = [
  // 1. Ceremonies
  {
    id: "investiture-ceremony",
    title: "Investiture Ceremony",
    category: "Ceremonies",
    categoryBadge: "Ceremonies",
    coverImage: "/images/facilities/indoor hall.jpg",
    description:
      "Honouring student leaders and conferring badges of responsibility and service to the newly elected Student Council members.",
    images: [
      {
        src: "/images/facilities/indoor hall.jpg",
        caption: "Student Council Leaders receiving ceremonial sashes at the Investiture Ceremony",
      },
      {
        src: "/images/about/School.JPG",
        caption: "Proud student leaders taking the solemn oath of dedication and integrity",
      },
      {
        src: "/images/academics/high-school.jpg",
        caption: "Prefects and House Captains assembled for the ceremonial flag presentation",
      },
    ],
  },

  // 2. Sports
  {
    id: "sports-day",
    title: "Sports Day",
    category: "Sports",
    categoryBadge: "Sports",
    coverImage: "/images/facilities/sports facilities.jpg",
    description:
      "A thrilling annual celebration of athleticism, teamwork, track events, and vibrant inter-house sportsmanship.",
    images: [
      {
        src: "/images/facilities/sports facilities.jpg",
        caption: "Athletes taking position on the track during the annual inter-house sprint events",
      },
      {
        src: "/images/facilities/basket ball.jpg",
        caption: "High-energy basketball championship on the campus outdoor court",
      },
      {
        src: "/images/gallery/mid-school.jpg",
        caption: "Students celebrating sports achievements and sportsmanship",
      },
    ],
  },

  // 3. National Days
  {
    id: "independence-day",
    title: "Independence Day",
    category: "National Days",
    categoryBadge: "National Days",
    coverImage: "/images/news/event-independence.jpg",
    description:
      "Commemorating the spirit of national unity with patriotic performances, ceremonial flag hoisting, and march past.",
    images: [
      {
        src: "/images/news/event-independence.jpg",
        caption: "Solemn flag hoisting and patriotic cultural tribute on Independence Day",
      },
      {
        src: "/images/facilities/School-prayer.jpg",
        caption: "School choir singing patriotic anthems in harmony during the national celebrations",
      },
      {
        src: "/images/about/School-block.png",
        caption: "Sree Jayam campus decorated in tricolour splendour for Independence Day",
      },
    ],
  },

  // 4. Special Days — Colour Day
  {
    id: "colour-day",
    title: "Colour Day",
    category: "Special Days",
    categoryBadge: "Special Days",
    coverImage: "/images/facilities/kids play area.jpg",
    description:
      "A vibrant sensory celebration where kindergarteners and primary learners immerse themselves in colourful learning activities.",
    images: [
      {
        src: "/images/facilities/kids play area.jpg",
        caption: "Little learners joyfully celebrating Colour Day in vibrant themed attire",
      },
      {
        src: "/images/about/Kids-playing.jpg",
        caption: "Sensory learning and cooperative color games in the kindergarten play area",
      },
      {
        src: "/images/facilities/montessori room.jpg",
        caption: "Hands-on colour exploration with tactile Montessori apparatus",
      },
    ],
  },

  // 5. Special Days — Special Days Celebration
  {
    id: "special-days-celebration",
    title: "Special Days Celebration",
    category: "Special Days",
    categoryBadge: "Special Days",
    coverImage: "/images/gallery/kid-school.jpg",
    description:
      "Observing festive occasions, environmental awareness days, and traditional heritage with student-led exhibitions.",
    images: [
      {
        src: "/images/gallery/kid-school.jpg",
        caption: "Students presenting creative thematic models during special celebration week",
      },
      {
        src: "/images/about/Robotics.png",
        caption: "Innovation and science day exhibits crafted by young curious minds",
      },
      {
        src: "/images/facilities/smart classroom.jpg",
        caption: "Interactive audio-visual presentations exploring world heritage days",
      },
    ],
  },

  // 6. Special Days — Teachers Day
  {
    id: "teachers-day",
    title: "Teachers Day",
    category: "Special Days",
    categoryBadge: "Special Days",
    coverImage: "/images/news/event-teachers.jpg",
    description:
      "Students expressing heartfelt gratitude, admiration, and respect to our dedicated faculty through artistic performances.",
    images: [
      {
        src: "/images/news/event-teachers.jpg",
        caption: "Students felicitating respected educators with tokens of gratitude and flowers",
      },
      {
        src: "/images/facilities/indoor hall.jpg",
        caption: "Lively student-choreographed skit and cultural tribute for Teachers Day",
      },
    ],
  },

  // 7. Special Days — Childrens Day
  {
    id: "childrens-day",
    title: "Childrens Day",
    category: "Special Days",
    categoryBadge: "Special Days",
    coverImage: "/images/about/Kids-playing.jpg",
    description:
      "A fun-filled day dedicated to the innocence, imagination, and bright futures of our cherished students.",
    images: [
      {
        src: "/images/about/Kids-playing.jpg",
        caption: "Smiles and joyful games as students celebrate Childrens Day on campus",
      },
      {
        src: "/images/facilities/kids play area.jpg",
        caption: "Festive recreational rides and playful team games",
      },
      {
        src: "/images/facilities/montessori room.jpg",
        caption: "Early learners enjoying special treats and surprise gifts from teachers",
      },
    ],
  },

  // 8. Cultural Events — Odyssey
  {
    id: "odyssey",
    title: "Odyssey",
    category: "Cultural Events",
    categoryBadge: "Cultural Events",
    coverImage: "/images/facilities/music room.jpg",
    description:
      "Our premier inter-school cultural extravaganza uniting schools across the region in debate, music, art, and dance.",
    images: [
      {
        src: "/images/facilities/music room.jpg",
        caption: "Instrumental and vocal music duel at the Odyssey Inter-School Cultural Fest",
      },
      {
        src: "/images/facilities/indoor hall.jpg",
        caption: "Auditorium packed with cheering audiences during Odyssey stage competitions",
      },
    ],
  },

  // 9. Cultural Events — Annual Day
  {
    id: "annual-day",
    title: "Annual Day",
    category: "Cultural Events",
    categoryBadge: "Cultural Events",
    coverImage: "/images/academics/Academics.JPG",
    description:
      "A spectacular gala evening celebrating student achievements, academic prize distributions, and theatrical dramas.",
    images: [
      {
        src: "/images/academics/Academics.JPG",
        caption: "Students staging classical and contemporary musical plays at the Annual Day Gala",
      },
      {
        src: "/images/facilities/indoor hall.jpg",
        caption: "Honouring academic rank holders and proud award recipients",
      },
      {
        src: "/images/about/School.JPG",
        caption: "Grand finale ensemble performance by over 100 student performers",
      },
    ],
  },

  // 10. Cultural Events — Annual Concert
  {
    id: "annual-concert",
    title: "Annual Concert",
    category: "Cultural Events",
    categoryBadge: "Cultural Events",
    coverImage: "/images/facilities/School-prayer.jpg",
    description:
      "A grand symphony of choir harmonies, instrumental ensembles, and cultural orchestra performances by our student musicians.",
    images: [
      {
        src: "/images/facilities/School-prayer.jpg",
        caption: "School choir performing classical choral harmonies at the Annual Concert",
      },
      {
        src: "/images/facilities/music room.jpg",
        caption: "Student keyboardists and percussionists orchestrating live melodies",
      },
    ],
  },

  // 11. School Life — Assembly
  {
    id: "assembly",
    title: "Assembly",
    category: "School Life",
    categoryBadge: "School Life",
    coverImage: "/images/academics/middle-school.JPG",
    description:
      "Daily morning prayer, moral thought sharing, news updates, and positive community bonding that begins every school day.",
    images: [
      {
        src: "/images/academics/middle-school.JPG",
        caption: "Students standing together with respect during the morning assembly and prayer",
      },
      {
        src: "/images/facilities/indoor hall.jpg",
        caption: "Student sharing the thought for the day and moral reflection from the podium",
      },
      {
        src: "/images/facilities/School-prayer.jpg",
        caption: "Morning discipline, national anthem, and student announcements",
      },
    ],
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabCategory>("All");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Lightbox Modal State
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter celebration albums based on active tab
  const filteredAlbums =
    activeTab === "All"
      ? celebrationAlbums
      : celebrationAlbums.filter((album) => album.category === activeTab);

  // Open Lightbox
  const handleOpenLightbox = (album: Album, index = 0) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(index);
  };

  // Close Lightbox
  const handleCloseLightbox = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  // Lightbox Navigation
  const handleNextImage = React.useCallback(() => {
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) =>
      prev + 1 < selectedAlbum.images.length ? prev + 1 : 0
    );
  }, [selectedAlbum]);

  const handlePrevImage = React.useCallback(() => {
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : selectedAlbum.images.length - 1
    );
  }, [selectedAlbum]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!selectedAlbum) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAlbum, handleNextImage, handlePrevImage]);

  return (
    <div className="min-h-screen bg-white text-[#102D46] flex flex-col font-sans">
      {/* Shared Header Navigation */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: Matching Sree Jayam Inner-Page Design                      */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#062B4F] h-[480px] sm:h-[500px] lg:h-[520px] flex items-center">
          {/* Background Campus Photograph */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/about/School-block.png"
              alt="Sree Jayam School Celebrations & Life on Campus"
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
              {/* Breadcrumb: Home → Gallery */}
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
                  <span className="text-white">Gallery</span>
                </div>
                {/* Short yellow underline below Home */}
                <span
                  className="h-[3px] w-9 bg-[#FFC83D] rounded-full mt-2"
                  aria-hidden="true"
                />
              </div>

              {/* Page Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-tight">
                Gallery
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white font-normal leading-relaxed max-w-2xl">
                Capturing cherished moments, milestones, and celebrations across school life.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. GALLERY INTRODUCTION & FILTERABLE TABS                                  */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 bg-[#F8FAFC]">
          <div className="container-width space-y-8">
            {/* Header & Subtext */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex flex-col">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#075A9C]">
                    MOMENTS &amp; MEMORIES
                  </span>
                  <span className="h-[3px] w-12 bg-[#FFC83D] rounded-full mt-1.5" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#102D46] tracking-tight mt-3">
                  School Celebrations &amp; Albums
                </h2>
                <p className="text-sm sm:text-base text-[#64748B] mt-2">
                  Browse our photo albums by category to relive celebrations, sports meets, cultural fests, and student achievements.
                </p>
              </div>

              {/* Album Counter */}
              <div className="shrink-0 self-start md:self-auto">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2EAF1] shadow-sm text-xs font-bold text-[#102D46]">
                  <FaImages className="w-3.5 h-3.5 text-[#075A9C]" />
                  <span>
                    Showing {filteredAlbums.length} of {celebrationAlbums.length} Albums
                  </span>
                </span>
              </div>
            </div>

            {/* Filterable Tabs: Compact Rounded Pills */}
            <div className="pt-2">
              <nav
                role="tablist"
                aria-label="Celebration Categories"
                className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none"
              >
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const count =
                    tab.id === "All"
                      ? celebrationAlbums.length
                      : celebrationAlbums.filter((a) => a.category === tab.id).length;

                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                        isActive
                          ? "bg-[#102D46] text-white shadow-md border border-[#102D46]"
                          : "bg-white text-[#102D46] hover:text-[#075A9C] hover:bg-[#FFF8EE] border border-[#E2EAF1] hover:border-[#FFC83D]/60 shadow-sm"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                          isActive
                            ? "bg-[#FFC83D] text-[#102D46]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ALBUM CARDS GRID (Responsive: 4 cols on desktop, 2 on tablet, 1 on mobile)*/}
        {/* ========================================================================= */}
        <section className="pb-20 sm:pb-24 lg:pb-28 bg-[#F8FAFC]">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
              {filteredAlbums.map((album) => {
                return (
                  <div
                    key={album.id}
                    onClick={() => handleOpenLightbox(album, 0)}
                    className="group bg-white rounded-2xl border border-[#E2EAF1] shadow-sm hover:shadow-xl hover:border-[#075A9C]/40 transition-all duration-300 flex flex-col overflow-hidden h-full cursor-pointer"
                  >
                    {/* Photograph across top */}
                    <div className="relative h-56 sm:h-52 lg:h-56 w-full overflow-hidden bg-[#102D46] shrink-0">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        unoptimized
                        priority
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/80 via-[#102D46]/20 to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#102D46] shadow-sm border border-slate-200">
                          {album.categoryBadge}
                        </span>
                      </div>

                      {/* Photo Count Pill */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#102D46]/90 backdrop-blur-md text-white border border-white/20 shadow-md">
                          <FaImages className="w-3 h-3 text-[#FFC83D]" />
                          <span>{album.images.length} Photos</span>
                        </span>
                      </div>

                      {/* Hover Expand Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#102D46]/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC83D] text-[#102D46] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <FaExpand className="w-3 h-3" />
                          <span>View Album</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-grow justify-between bg-gradient-to-b from-white to-[#FFF8EE]/30">
                      <div className="space-y-2">
                        {/* Celebration Heading */}
                        <h3 className="text-lg font-bold text-[#102D46] tracking-tight group-hover:text-[#075A9C] transition-colors leading-snug">
                          {album.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed line-clamp-3">
                          {album.description}
                        </p>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-4 mt-3 border-t border-[#E8EFF6] flex items-center justify-between text-xs font-bold text-[#075A9C]">
                        <span>Open Gallery</span>
                        <span className="text-[#FFC83D] group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE LIGHTBOX MODAL (Keyboard & Touch Accessible)               */}
      {/* ========================================================================= */}
      {selectedAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.title}
          className="fixed inset-0 z-50 bg-[#102D46]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
        >
          {/* Top Bar: Title, Category & Close */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFC83D] text-[#102D46]">
                {selectedAlbum.categoryBadge}
              </span>
              <h2 className="text-lg sm:text-xl font-bold truncate">
                {selectedAlbum.title}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Photo {currentImageIndex + 1} of {selectedAlbum.images.length}
              </span>
              <button
                type="button"
                onClick={handleCloseLightbox}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage: Main Large Image & Navigation Controls */}
          <div className="relative flex-grow flex items-center justify-center py-4 my-auto">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#FFC83D] text-white hover:text-[#102D46] border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {/* Display Image Container */}
            <div className="relative w-full max-w-5xl h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={selectedAlbum.images[currentImageIndex].src}
                alt={selectedAlbum.images[currentImageIndex].caption}
                fill
                unoptimized
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next Image"
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#FFC83D] text-white hover:text-[#102D46] border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Thumbnails */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            {/* Caption */}
            <p className="text-center text-xs sm:text-sm text-slate-200 font-medium max-w-2xl mx-auto">
              {selectedAlbum.images[currentImageIndex].caption}
            </p>

            {/* Thumbnails strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1">
              {selectedAlbum.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    currentImageIndex === idx
                      ? "border-[#FFC83D] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
