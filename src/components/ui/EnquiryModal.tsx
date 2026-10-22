"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    grade: "Primary School (Classes I - V)",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#102D46]/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-[#F4F9FD] px-6 py-4 sm:py-5">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#075A9C]">
              Admissions 2026-27
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#102D46] tracking-tight">
              Admission Enquiry Form
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 hover:text-[#102D46] hover:bg-slate-100 transition-colors shadow-xs"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8F5] text-[#24A693]">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-2xl font-black text-[#102D46]">
                Enquiry Received!
              </h4>
              <p className="text-sm text-[#546E82] max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in Sree Jayam School. Our admissions coordinator will reach out to you within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="rounded-full bg-[#075A9C] px-7 py-3 text-sm font-extrabold text-white shadow-md hover:bg-[#064B82] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Kumar"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                  Grade / Class Applied For *
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                >
                  <option>Primary School (Classes I - V)</option>
                  <option>Middle School (Classes VI - VIII)</option>
                  <option>Senior School (Classes IX - X ICSE)</option>
                  <option>Senior Secondary (Classes XI - XII ISC)</option>
                  <option>Kindergarten / Early Years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-1.5">
                  Any Specific Question or Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any questions regarding admission or campus tour..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FFC83D] hover:bg-[#FFBF24] py-3.5 text-sm font-extrabold text-[#102D46] shadow-md transition-all duration-200"
                >
                  <Send className="h-4 w-4 -rotate-12" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
