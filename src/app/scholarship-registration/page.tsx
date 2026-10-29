"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});
import EnquiryModal from "@/components/ui/EnquiryModal";
import { scholarshipConfig } from "@/data/scholarshipConfig";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Printer,
  ArrowRight,
  ShieldCheck,
  User,
  Users,
  Info,
} from "lucide-react";

export default function ScholarshipRegistrationPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Success state
  const [submittedApp, setSubmittedApp] = useState<{
    applicationNumber: string;
    studentName: string;
    classAppliedFor: string;
    academicYear: string;
    parentName: string;
    primaryContact: string;
    email: string;
    date: string;
  } | null>(null);

  // Form fields matching exact client specification
  const [formData, setFormData] = useState({
    // Section 1: Student Details
    studentName: "",
    dateOfBirth: "",
    gender: "",
    classAppliedFor: "",
    academicYear: scholarshipConfig.academicYear,
    previousSchool: "",
    previousClass: "",
    board: "",
    // Section 2: Parent / Guardian Details
    fatherGuardianName: "",
    fatherGuardianOccupation: "",
    motherGuardianName: "",
    motherGuardianOccupation: "",
    primaryContactNumber: "",
    alternateContactNumber: "",
    emailAddress: "",
    residentialAddress: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  // Generate unique collision-safe application number (e.g. SJS-2027-849201)
  const generateApplicationNumber = (): string => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    return `SJS-2027-${randomSuffix}`;
  };

  const validateForm = (): string | null => {
    // Section 1: Student Details validation
    if (!formData.studentName.trim()) return "Please enter the student's full name.";
    if (!formData.dateOfBirth) return "Please provide the student's date of birth.";
    if (!formData.classAppliedFor) return "Please select the class applied for.";
    if (!formData.previousSchool.trim()) return "Please enter the previous school name.";
    if (!formData.previousClass.trim()) return "Please enter the previous class.";
    if (!formData.board) return "Please select the previous school board.";

    // Section 2: Parent / Guardian Details validation
    if (!formData.fatherGuardianName.trim()) return "Please enter father's / guardian's name.";
    if (!formData.motherGuardianName.trim()) return "Please enter mother's / guardian's name.";

    // Primary phone validation (10 digits)
    const phoneClean = formData.primaryContactNumber.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneClean)) {
      return "Please enter a valid 10-digit primary contact number (e.g., 9876543210).";
    }

    // Optional alternate phone validation
    if (formData.alternateContactNumber.trim()) {
      const altClean = formData.alternateContactNumber.replace(/[\s\-()]/g, "");
      if (!phoneRegex.test(altClean)) {
        return "Please enter a valid 10-digit alternate contact number.";
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.residentialAddress.trim()) return "Please provide your residential address.";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    const applicationNumber = generateApplicationNumber();

    try {
      if (!isSupabaseConfigured) {
        // Safe simulation if Supabase is not yet configured in .env.local
        console.warn(
          "[Scholarship Registration] Supabase not connected. Simulating registration."
        );
        await new Promise((res) => setTimeout(res, 850));
        setSubmittedApp({
          applicationNumber,
          studentName: formData.studentName.trim(),
          classAppliedFor: formData.classAppliedFor,
          academicYear: formData.academicYear,
          parentName: formData.fatherGuardianName.trim() || formData.motherGuardianName.trim(),
          primaryContact: formData.primaryContactNumber.trim(),
          email: formData.emailAddress.trim(),
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        });
        setIsSubmitting(false);
        return;
      }

      // Check for duplicate application with same contact and student name
      const { data: existingRecords, error: checkError } = await supabase
        .from("scholarship_applications")
        .select("id, application_number")
        .eq("primary_contact_number", formData.primaryContactNumber.trim())
        .ilike("student_name", formData.studentName.trim())
        .limit(1);

      if (!checkError && existingRecords && existingRecords.length > 0) {
        setErrorMessage(
          `An application for ${formData.studentName.trim()} with this contact number is already recorded (${existingRecords[0].application_number}).`
        );
        setIsSubmitting(false);
        return;
      }

      // Insert new application into Supabase
      const { error: insertError } = await supabase
        .from("scholarship_applications")
        .insert([
          {
            application_number: applicationNumber,
            student_name: formData.studentName.trim(),
            date_of_birth: formData.dateOfBirth,
            gender: formData.gender || null,
            class_applied_for: formData.classAppliedFor,
            academic_year: formData.academicYear,
            previous_school: formData.previousSchool.trim(),
            previous_class: formData.previousClass.trim(),
            board: formData.board,
            father_guardian_name: formData.fatherGuardianName.trim(),
            father_guardian_occupation: formData.fatherGuardianOccupation.trim() || null,
            mother_guardian_name: formData.motherGuardianName.trim(),
            mother_guardian_occupation: formData.motherGuardianOccupation.trim() || null,
            primary_contact_number: formData.primaryContactNumber.trim(),
            alternate_contact_number: formData.alternateContactNumber.trim() || null,
            email_address: formData.emailAddress.trim(),
            residential_address: formData.residentialAddress.trim(),
            status: "Pending",
          },
        ]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        setErrorMessage(
          insertError.message ||
            "Unable to complete registration. Please check your details and try again."
        );
        setIsSubmitting(false);
        return;
      }

      // Registration successful
      // Trigger WhatsApp registration confirmation message
      try {
        let waRes = await fetch("/api/whatsapp/registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ applicationNumber }),
        });

        if (waRes.status === 404) {
          waRes = await fetch("/api/whatsapp/registration.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ applicationNumber }),
          });
        }

        const waResult = await waRes.json().catch(() => null);
        console.log("WhatsApp registration dispatch result:", waResult);
      } catch (err) {
        console.error("WhatsApp registration message error:", err);
      }

      setSubmittedApp({
        applicationNumber,
        studentName: formData.studentName.trim(),
        classAppliedFor: formData.classAppliedFor,
        academicYear: formData.academicYear,
        parentName: formData.fatherGuardianName.trim() || formData.motherGuardianName.trim(),
        primaryContact: formData.primaryContactNumber.trim(),
        email: formData.emailAddress.trim(),
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyApplicationId = () => {
    if (!submittedApp) return;
    navigator.clipboard.writeText(submittedApp.applicationNumber);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] text-[#102D46] flex flex-col font-sans scholarship-root ${poppins.className}`}
      style={{ fontFamily: `var(--font-poppins), ${poppins.style.fontFamily}, 'Poppins', sans-serif` }}
    >

      <style>{`
        .scholarship-root,
        .scholarship-root input,
        .scholarship-root select,
        .scholarship-root textarea,
        .scholarship-root button,
        .scholarship-root h1,
        .scholarship-root h2,
        .scholarship-root h3,
        .scholarship-root h4,
        .scholarship-root h5,
        .scholarship-root h6,
        .scholarship-root p,
        .scholarship-root span,
        .scholarship-root label,
        .scholarship-root a,
        .scholarship-root div {
          font-family: var(--font-poppins), ${poppins.style.fontFamily}, 'Poppins', sans-serif !important;
        }
      `}</style>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow pt-28 sm:pt-32 lg:pt-36 pb-16">
        <div className="container-width max-w-4xl">
          
          {/* Title directly above the three cards */}
          {!submittedApp && (
            <div className="mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#102D46] tracking-tight leading-tight">
                Scholarship Examination {scholarshipConfig.academicYear}
              </h1>
              <div className="h-1.5 w-24 bg-[#FFC83D] rounded-full mt-3 mx-auto" />
            </div>
          )}
            
            {/* SUCCESS SLIP / CONFIRMATION VIEW */}
            {submittedApp ? (
              <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Gold/Navy Success Header */}
                <div className="bg-gradient-to-r from-[#102D46] via-[#075A9C] to-[#102D46] p-8 text-white text-center relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC83D] text-[#102D46] shadow-lg mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#FFC83D] text-xs font-bold uppercase tracking-wider mb-2">
                    Application Recorded
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Scholarship Registration Confirmed!
                  </h2>
                  <p className="text-sm text-slate-200 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you for registering with Sree Jayam School for Academic Year {submittedApp.academicYear}. Your application has been recorded securely.
                  </p>
                </div>

                {/* Application ID Card */}
                <div className="p-6 sm:p-10 space-y-8">
                  <div className="p-6 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#075A9C]">
                        Official Application Number
                      </span>
                      <p className="text-2xl sm:text-3xl font-black text-[#102D46] tracking-wider mt-1">
                        {submittedApp.applicationNumber}
                      </p>
                      <p className="text-xs text-[#546E82] mt-1">
                        Please save or print this application number for examination hall entry.
                      </p>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={copyApplicationId}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#102D46] hover:bg-slate-50 transition-colors shadow-xs"
                      >
                        <Copy className="h-4 w-4" />
                        <span>{copiedId ? "Copied!" : "Copy ID"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={handlePrint}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#102D46] text-white text-xs font-bold hover:bg-[#075A9C] transition-colors shadow-xs"
                      >
                        <Printer className="h-4 w-4" />
                        <span>Print Slip</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Candidate Name
                      </span>
                      <span className="font-bold text-[#102D46]">{submittedApp.studentName}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Class Applied For
                      </span>
                      <span className="font-bold text-[#075A9C]">{submittedApp.classAppliedFor}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Parent / Guardian
                      </span>
                      <span className="font-bold text-[#102D46]">{submittedApp.parentName}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Primary Contact
                      </span>
                      <span className="font-bold text-[#102D46]">{submittedApp.primaryContact}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Examination Date
                      </span>
                      <span className="font-bold text-[#102D46]">{scholarshipConfig.examinationDate}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Academic Year
                      </span>
                      <span className="font-bold text-[#075A9C]">{submittedApp.academicYear}</span>
                    </div>
                  </div>

                  {/* Important Guidelines */}
                  <div className="p-5 rounded-2xl bg-[#EAF2F8] border border-[#075A9C]/20 space-y-2">
                    <h4 className="text-sm font-bold text-[#075A9C] flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Examination Day Guidelines</span>
                    </h4>
                    <ul className="text-xs text-[#354D60] space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>Examination Date: <strong>{scholarshipConfig.examinationDate}</strong>.</li>
                      <li>Candidate must carry a printed slip or digital copy displaying the Application ID.</li>
                      <li>For any inquiries, contact the school office at {scholarshipConfig.contactNumbers.join(" / ")} or email {scholarshipConfig.contactEmail}.</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#075A9C] text-white text-sm font-bold hover:bg-[#064B82] transition-colors shadow-md"
                    >
                      <span>Return to Homepage</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedApp(null);
                        setFormData({
                          studentName: "",
                          dateOfBirth: "",
                          gender: "",
                          classAppliedFor: "",
                          academicYear: scholarshipConfig.academicYear,
                          previousSchool: "",
                          previousClass: "",
                          board: "",
                          fatherGuardianName: "",
                          fatherGuardianOccupation: "",
                          motherGuardianName: "",
                          motherGuardianOccupation: "",
                          primaryContactNumber: "",
                          alternateContactNumber: "",
                          emailAddress: "",
                          residentialAddress: "",
                        });
                      }}
                      className="px-6 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm font-bold text-[#546E82] hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* REGISTRATION FORM VIEW */
              <div className="space-y-8">
                
                {/* Information Cards: Exact Poster Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Card 1: Exam Date */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-[#FFF8EE] border border-[#FFC83D]/40 text-[#075A9C] flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">Exam Date</span>
                      <p className="text-sm sm:text-base font-black text-[#102D46]">{scholarshipConfig.examinationDate}</p>
                      <p className="text-xs text-[#24A693] font-bold mt-0.5">Official Date</p>
                    </div>
                  </div>

                  {/* Card 2: Academic Year */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-[#FFF8EE] border border-[#FFC83D]/40 text-[#075A9C] flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">Academic Year</span>
                      <p className="text-sm sm:text-base font-black text-[#102D46]">{scholarshipConfig.academicYear}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Admissions Open</p>
                    </div>
                  </div>

                  {/* Card 3: Eligible Classes */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-[#FFF8EE] border border-[#FFC83D]/40 text-[#075A9C] flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">Eligible Classes</span>
                      <p className="text-sm sm:text-base font-black text-[#102D46]">6, 7, 8, 9, and 11</p>
                      <p className="text-xs text-slate-500 mt-0.5">Merit Scholarships</p>
                    </div>
                  </div>
                </div>

                {/* Main Form Box */}
                <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200 shadow-xl overflow-hidden">
                  
                  {/* Form Header */}
                  <div className="border-b border-slate-100 bg-[#FCFDFF] px-6 py-6 sm:px-10 sm:py-7">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#FFC83D]" />
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#075A9C]">
                        Scholarship Application Form
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#102D46] tracking-tight">
                      Candidate & Parent Registration
                    </h2>
                    <p className="text-xs sm:text-sm text-[#546E82] mt-1">
                      Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                    
                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">Unable to submit application</p>
                          <p className="text-xs mt-0.5 text-red-600">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* ================================================================= */}
                    {/* SECTION 1: STUDENT DETAILS                                        */}
                    {/* ================================================================= */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <User className="h-4 w-4 text-[#075A9C]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#102D46]">
                          Section 1: Student Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Student's Full Name */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Student’s Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="studentName"
                            placeholder="Enter student's full name"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Date of Birth */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            max={new Date().toISOString().split("T")[0]}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Gender
                          </label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Class Applied For (Dropdown: Class 6, 7, 8, 9, 11) */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Class Applied For <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            name="classAppliedFor"
                            value={formData.classAppliedFor}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          >
                            <option value="">Select class applied for</option>
                            {scholarshipConfig.eligibleClasses.map((cls, idx) => (
                              <option key={idx} value={cls}>
                                {cls}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Academic Year (Prefilled with 2027–2028) */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Academic Year
                          </label>
                          <input
                            type="text"
                            readOnly
                            disabled
                            name="academicYear"
                            value={formData.academicYear}
                            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-[#075A9C] cursor-not-allowed"
                          />
                        </div>

                        {/* Previous School */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Previous School <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="previousSchool"
                            placeholder="Name of previous/current school"
                            value={formData.previousSchool}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Previous Class */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Previous Class <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="previousClass"
                            placeholder="e.g. Class 5 / Class 8"
                            value={formData.previousClass}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Board: State / CBSE / ICSE / Other */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Board <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            name="board"
                            value={formData.board}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          >
                            <option value="">Select board</option>
                            <option value="State">State</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSE</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                      </div>
                    </div>

                    {/* ================================================================= */}
                    {/* SECTION 2: PARENT / GUARDIAN DETAILS                              */}
                    {/* ================================================================= */}
                    <div className="space-y-5 pt-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        <Users className="h-4 w-4 text-[#075A9C]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#102D46]">
                          Section 2: Parent / Guardian Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Father’s / Guardian’s Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Father’s / Guardian’s Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="fatherGuardianName"
                            placeholder="Enter father's / guardian's name"
                            value={formData.fatherGuardianName}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Father’s / Guardian’s Occupation */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Father’s / Guardian’s Occupation
                          </label>
                          <input
                            type="text"
                            name="fatherGuardianOccupation"
                            placeholder="e.g. Engineer / Business"
                            value={formData.fatherGuardianOccupation}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Mother’s / Guardian’s Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Mother’s / Guardian’s Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="motherGuardianName"
                            placeholder="Enter mother's / guardian's name"
                            value={formData.motherGuardianName}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Mother’s / Guardian’s Occupation */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Mother’s / Guardian’s Occupation
                          </label>
                          <input
                            type="text"
                            name="motherGuardianOccupation"
                            placeholder="e.g. Doctor / Homemaker"
                            value={formData.motherGuardianOccupation}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Primary Contact Number */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Primary Contact Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            name="primaryContactNumber"
                            placeholder="10-digit mobile (e.g. 9876543210)"
                            value={formData.primaryContactNumber}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Alternate Contact Number */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Alternate Contact Number
                          </label>
                          <input
                            type="tel"
                            name="alternateContactNumber"
                            placeholder="Secondary contact number"
                            value={formData.alternateContactNumber}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Email Address */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            name="emailAddress"
                            placeholder="parent@example.com"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                        {/* Residential Address */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                            Residential Address <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={3}
                            required
                            name="residentialAddress"
                            placeholder="Door / Flat No., Street, Area, City, Pin Code"
                            value={formData.residentialAddress}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                          />
                        </div>

                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FFC83D] hover:bg-[#FFBF24] disabled:bg-slate-200 disabled:cursor-not-allowed py-4 px-6 text-sm sm:text-base font-black text-[#102D46] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Submitting Application to Supabase...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Scholarship Examination Application</span>
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#24A693]" />
                        <span>All student details are confidential and secured under school data standards.</span>
                      </p>
                    </div>

                  </form>
                </div>
              </div>
            )}
          </div>
        </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
