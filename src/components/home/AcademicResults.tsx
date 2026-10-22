"use client";

import React from "react";

interface ResultRecord {
  grade: string;
  year: string;
  passPercentage: string;
}

const resultsData: ResultRecord[] = [
  { grade: "Class X", year: "2025", passPercentage: "100%" },
  { grade: "Class XII", year: "2025", passPercentage: "100%" },
  { grade: "Class X", year: "2024", passPercentage: "100%" },
  { grade: "Class XII", year: "2024", passPercentage: "100%" },
  { grade: "Class X", year: "2023", passPercentage: "100%" },
  { grade: "Class XII", year: "2023", passPercentage: "100%" },
];

export default function AcademicResults() {
  return (
    <section id="results" className="pt-16 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-8 bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Yellow Accent Line */}
          <div className="w-14 h-1 bg-[#FFC83D] rounded-full mx-auto mb-4" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102D46] tracking-tight leading-tight">
            Academic <span className="text-[#075A9C]">Results</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-[#55697A] font-medium leading-relaxed max-w-xl mx-auto">
            Consistently achieving excellence year after year through dedication and hard work.
          </p>
        </div>

        {/* Wide Results Table Card */}
        <div className="mt-8 sm:mt-11 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl sm:rounded-[22px] border border-[#E2EDF8] shadow-[0_10px_35px_rgba(16,45,70,0.06)] bg-white">
            <div className="w-full">
              {/* Table Header */}
              <div className="bg-[#102D46] text-white">
                <div className="grid grid-cols-3 text-center py-4 px-4 sm:px-8">
                  <div className="font-bold text-xs sm:text-sm lg:text-[15.5px] tracking-wide">
                    Class
                  </div>
                  <div className="font-bold text-xs sm:text-sm lg:text-[15.5px] tracking-wide">
                    Year
                  </div>
                  <div className="font-bold text-xs sm:text-sm lg:text-[15.5px] tracking-wide">
                    Pass %
                  </div>
                </div>
                {/* Yellow Accent Line beneath Header */}
                <div className="h-[3.5px] bg-[#FFC83D] w-full" />
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-[#E2EDF8]">
                {resultsData.map((row, idx) => (
                  <div
                    key={`${row.grade}-${row.year}-${idx}`}
                    className={`grid grid-cols-3 text-center ${idx % 2 === 0 ? "bg-white" : "bg-[#F3F8FD]"
                      }`}
                  >
                    <div className="py-4 sm:py-4.5 px-2 sm:px-6 text-xs sm:text-sm lg:text-base font-bold text-[#102D46] border-r border-[#E2EDF8] flex items-center justify-center">
                      {row.grade}
                    </div>
                    <div className="py-4 sm:py-4.5 px-2 sm:px-6 text-xs sm:text-sm lg:text-base font-bold text-[#102D46] border-r border-[#E2EDF8] flex items-center justify-center">
                      {row.year}
                    </div>
                    <div className="py-4 sm:py-4.5 px-2 sm:px-6 text-xs sm:text-sm lg:text-base font-bold sm:font-extrabold text-[#075A9C] flex items-center justify-center">
                      {row.passPercentage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
