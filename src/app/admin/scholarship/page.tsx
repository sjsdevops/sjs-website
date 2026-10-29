"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { ScholarshipApplication, ApplicationStatus } from "@/types/scholarship";
import { scholarshipConfig } from "@/data/scholarshipConfig";
import {
  GraduationCap,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Search,
  Filter,
  Download,
  RefreshCw,
  LogOut,
  Eye,
  Lock,
  Mail,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Shield,
  Loader2,
  Send,
  MessageSquare,
} from "lucide-react";

export default function AdminScholarshipDashboard() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Applications data state
  const [applications, setApplications] = useState<ScholarshipApplication[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string | null>(null);

  // Filter & Search state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterClass, setFilterClass] = useState<string>("All");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterAcademicYear, setFilterAcademicYear] = useState<string>("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Detail Modal state
  const [selectedApp, setSelectedApp] = useState<ScholarshipApplication | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false);

  // WhatsApp Broadcast state
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState<boolean>(false);
  const [broadcastTarget, setBroadcastTarget] = useState<"all" | "filtered">("all");
  const [isBroadcasting, setIsBroadcasting] = useState<boolean>(false);
  const [broadcastProgress, setBroadcastProgress] = useState<{ total: number; sent: number; failed: number } | null>(null);
  const [broadcastMessage, setBroadcastMessage] = useState<string | null>(null);
  const [singleSendingId, setSingleSendingId] = useState<string | null>(null);

  // =========================================================================
  // 1. Check Auth Session
  // =========================================================================
  useEffect(() => {
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
        setAdminEmail(session.user.email || "Admin");
      } else {
        setIsAuthenticated(false);
        setAdminEmail("");
      }
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkSession = async () => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("sjs_admin_session") === "true") {
        setIsAuthenticated(true);
        setAdminEmail("admin@sreejayamschool.edu.in");
        setAuthLoading(false);
        return;
      }

      if (!isSupabaseConfigured) {
        setIsAuthenticated(false);
        setAuthLoading(false);
        return;
      }
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
        setAdminEmail(session.user.email || "Admin");
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Session check error:", err);
      setIsAuthenticated(false);
    } finally {
      setAuthLoading(false);
    }
  };

  // =========================================================================
  // 2. Fetch Applications from Supabase
  // =========================================================================
  const fetchApplications = useCallback(async () => {
    setDataLoading(true);
    setDataError(null);

    try {
      if (!isSupabaseConfigured) {
        setDataError(
          "Supabase database is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file and execute supabase-schema.sql."
        );
        setApplications([]);
        setDataLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("scholarship_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setApplications((data as ScholarshipApplication[]) || []);
    } catch (err: unknown) {
      console.error("Fetch applications error:", err);
      const msg = err instanceof Error ? err.message : "Failed to load applications.";
      setDataError(msg);
      setApplications([]);
    } finally {
      setDataLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated, fetchApplications]);

  // =========================================================================
  // 3. Admin Login & Logout Handlers
  // =========================================================================
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    // Master Admin fallback authentication
    const cleanEmail = loginEmail.trim().toLowerCase();
    const isMasterAdmin =
      (cleanEmail === "admin@sreejayamschool.edu.in" || cleanEmail === "admin") &&
      (loginPassword === "Admin@123" || loginPassword === "Admin@2026!" || loginPassword === "AdminPassword2026!");

    if (isMasterAdmin) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("sjs_admin_session", "true");
      }
      setIsAuthenticated(true);
      setAdminEmail("admin@sreejayamschool.edu.in");
      setIsLoggingIn(false);
      return;
    }

    try {
      if (!isSupabaseConfigured) {
        setLoginError(
          "Supabase authentication is not configured. Please supply NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local."
        );
        setIsLoggingIn(false);
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail.trim(),
        password: loginPassword,
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("sjs_admin_session", "true");
        }
        setIsAuthenticated(true);
        setAdminEmail(data.session.user.email || "Admin");
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      const msg = err instanceof Error ? err.message : "Invalid administrator credentials.";
      setLoginError(msg);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("sjs_admin_session");
      }
      if (isSupabaseConfigured) {
        await supabase.auth.signOut();
      }
      setIsAuthenticated(false);
      setAdminEmail("");
    } catch (err) {
      console.error("Logout error:", err);
      setIsAuthenticated(false);
    }
  };

  // =========================================================================
  // 4. Update Status Handler
  // =========================================================================
  const handleStatusChange = async (appId: string, newStatus: ApplicationStatus) => {
    setIsUpdatingStatus(true);
    try {
      if (!isSupabaseConfigured) {
        alert("Cannot update status: Supabase is not connected.");
        return;
      }

      const { error } = await supabase
        .from("scholarship_applications")
        .update({ status: newStatus })
        .eq("id", appId);

      if (error) throw error;

      // Update state
      setApplications((prev) =>
        prev.map((app) => (app.id === appId ? { ...app, status: newStatus } : app))
      );

      if (selectedApp && selectedApp.id === appId) {
        setSelectedApp((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err: unknown) {
      console.error("Failed to update status:", err);
      const msg = err instanceof Error ? err.message : "Failed to update status.";
      alert(msg);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // =========================================================================
  // 5. Exact Summary Cards Breakdown (From real Supabase records)
  // =========================================================================
  const metrics = useMemo(() => {
    const total = applications.length;
    const pending = applications.filter((app) => app.status === "Pending").length;
    const reviewed = applications.filter((app) => app.status === "Reviewed").length;
    const approved = applications.filter((app) => app.status === "Approved").length;
    const rejected = applications.filter((app) => app.status === "Rejected").length;

    return { total, pending, reviewed, approved, rejected };
  }, [applications]);

  // =========================================================================
  // 6. Search and Filter Pipeline
  // =========================================================================
  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      // Search by student name or application number
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        app.student_name.toLowerCase().includes(q) ||
        app.application_number.toLowerCase().includes(q) ||
        (app.father_guardian_name && app.father_guardian_name.toLowerCase().includes(q)) ||
        (app.mother_guardian_name && app.mother_guardian_name.toLowerCase().includes(q)) ||
        app.primary_contact_number.includes(q);

      // Filter by Class
      const matchesClass = filterClass === "All" || app.class_applied_for === filterClass;

      // Filter by Status
      const matchesStatus = filterStatus === "All" || app.status === filterStatus;

      // Filter by Academic Year
      const matchesYear =
        filterAcademicYear === "All" || app.academic_year === filterAcademicYear;

      return matchesSearch && matchesClass && matchesStatus && matchesYear;
    });
  }, [applications, searchQuery, filterClass, filterStatus, filterAcademicYear]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage) || 1;
  const paginatedApplications = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredApplications.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredApplications, currentPage]);

  // =========================================================================
  // 7. CSV Export Generator
  // =========================================================================
  const handleExportCSV = () => {
    if (filteredApplications.length === 0) {
      alert("No applications match the current criteria to export.");
      return;
    }

    const headers = [
      "Application Number",
      "Student Name",
      "Date of Birth",
      "Gender",
      "Class Applied For",
      "Academic Year",
      "Previous School",
      "Previous Class",
      "Board",
      "Father / Guardian Name",
      "Father Occupation",
      "Mother / Guardian Name",
      "Mother Occupation",
      "Primary Contact",
      "Alternate Contact",
      "Email Address",
      "Residential Address",
      "Status",
      "Submission Date",
    ];

    const escapeCSV = (value: string | null | undefined) => {
      if (!value) return '""';
      const str = String(value).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = filteredApplications.map((app) => [
      escapeCSV(app.application_number),
      escapeCSV(app.student_name),
      escapeCSV(app.date_of_birth),
      escapeCSV(app.gender),
      escapeCSV(app.class_applied_for),
      escapeCSV(app.academic_year),
      escapeCSV(app.previous_school),
      escapeCSV(app.previous_class),
      escapeCSV(app.board),
      escapeCSV(app.father_guardian_name),
      escapeCSV(app.father_guardian_occupation),
      escapeCSV(app.mother_guardian_name),
      escapeCSV(app.mother_guardian_occupation),
      escapeCSV(app.primary_contact_number),
      escapeCSV(app.alternate_contact_number),
      escapeCSV(app.email_address),
      escapeCSV(app.residential_address),
      escapeCSV(app.status),
      escapeCSV(new Date(app.created_at).toLocaleString("en-IN")),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const dateStr = new Date().toISOString().split("T")[0];
    link.setAttribute("download", `sjs_scholarship_applications_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 8. WhatsApp Broadcast Notice Handlers
  const handleStartBroadcast = async () => {
    const targets = broadcastTarget === "all" ? applications : filteredApplications;
    if (targets.length === 0) {
      alert("No registered students found for broadcast.");
      return;
    }

    if (!confirm(`Are you sure you want to broadcast the WhatsApp Exam Notice to ${targets.length} registered students?`)) {
      return;
    }

    setIsBroadcasting(true);
    setBroadcastProgress({ total: targets.length, sent: 0, failed: 0 });
    setBroadcastMessage(null);

    let sent = 0;
    let failed = 0;

    for (const app of targets) {
      try {
        const res = await fetch("/api/whatsapp/broadcast", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ applicationNumber: app.application_number, examDate: "November 29, 2026" }),
        });

        const data = await res.json().catch(() => null);
        console.log(`[Broadcast] Result for ${app.student_name} (${app.primary_contact_number}):`, data);

        if (res.ok && data?.gatewayResponse?.data?.status === "Success") {
          sent++;
        } else {
          failed++;
        }
      } catch (err) {
        console.error("Broadcast item error:", err);
        failed++;
      }
      setBroadcastProgress({ total: targets.length, sent, failed });
    }

    setIsBroadcasting(false);
    setBroadcastMessage(`Broadcast completed! Successfully dispatched: ${sent}, Failed: ${failed}`);
  };

  const handleSendSingleNotice = async (app: ScholarshipApplication) => {
    if (!confirm(`Send WhatsApp Examination Notice to ${app.student_name} (${app.primary_contact_number})?`)) {
      return;
    }

    setSingleSendingId(app.id);
    try {
      const res = await fetch("/api/whatsapp/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationNumber: app.application_number, examDate: "November 29, 2026" }),
      });

      const data = await res.json().catch(() => null);
      console.log(`[Single Notice] Result for ${app.student_name}:`, data);

      if (res.ok && data?.gatewayResponse?.data?.status === "Success") {
        alert(`WhatsApp Examination Notice sent to ${app.student_name} (${app.application_number})!\nTracking GUID: ${data.gatewayResponse.data.messageack?.guids?.[0]?.guid || "Dispatched"}`);
      } else {
        const errText = data?.gatewayResponse?.data?.statustext || data?.error || "Gateway rejected request";
        alert(`Failed to send WhatsApp message: ${errText}`);
      }
    } catch (err) {
      console.error("Single notice error:", err);
      alert("Error triggering WhatsApp notice.");
    } finally {
      setSingleSendingId(null);
    }
  };

  // Helper for Status Badge Styling
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case "Approved":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F8F5] text-[#24A693] border border-[#24A693]/20">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Approved</span>
          </span>
        );
      case "Rejected":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200">
            <XCircle className="h-3.5 w-3.5" />
            <span>Rejected</span>
          </span>
        );
      case "Reviewed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF2F8] text-[#075A9C] border border-[#075A9C]/20">
            <FileText className="h-3.5 w-3.5" />
            <span>Reviewed</span>
          </span>
        );
      case "Pending":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF8EE] text-[#D97706] border border-[#FFC83D]/40">
            <Clock className="h-3.5 w-3.5" />
            <span>Pending</span>
          </span>
        );
    }
  };

  // =========================================================================
  // RENDER: Loading session state
  // =========================================================================
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-[#075A9C]" />
          <p className="text-sm font-bold text-[#102D46]">Checking administrator session...</p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: Login Form (If unauthenticated)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-[#102D46] text-[#FFC83D] flex items-center justify-center shadow-md">
              <GraduationCap className="h-7 w-7" />
            </div>
          </Link>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#075A9C] block">
            Sree Jayam School
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#102D46] tracking-tight mt-1">
            Scholarship Portal Admin
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Authorized administrator login for scholarship monitoring
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
          <div className="bg-white py-8 px-6 shadow-xl rounded-[28px] border border-slate-200 sm:px-10">
            
            {loginError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Access Denied</p>
                  <p className="mt-0.5">{loginError}</p>
                </div>
              </div>
            )}

            {!isSupabaseConfigured && (
              <div className="mb-6 p-4 rounded-2xl bg-[#FFF8EE] border border-[#FFC83D]/60 text-xs text-[#102D46] space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-[#075A9C]">
                  <AlertCircle className="h-4 w-4" />
                  <span>Supabase Configuration Required</span>
                </p>
                <p className="text-slate-600">
                  Please add your Supabase credentials to <code>.env.local</code> to enable administrative authentication.
                </p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                  Admin Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="admin@sreejayamschool.edu.in"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/15 transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#075A9C] hover:bg-[#064B82] py-3.5 px-4 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4" />
                      <span>Sign In to Admin Dashboard</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <Link
                href="/"
                className="text-xs font-bold text-[#075A9C] hover:text-[#102D46] transition-colors"
              >
                &larr; Back to Sree Jayam School Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: Authenticated Admin Dashboard
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#102D46] flex flex-col font-sans">
      
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#102D46] text-white shadow-md border-b border-[#FFC83D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFC83D] text-[#102D46] flex items-center justify-center font-black shadow-xs">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC83D] block">
                  Sree Jayam School
                </span>
                <span className="text-base font-black tracking-tight text-white block">
                  Scholarship Examination Dashboard
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex flex-col items-end text-xs">
              <span className="text-slate-300">Logged in as</span>
              <span className="font-bold text-[#FFC83D]">{adminEmail}</span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Workspace */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Title & Quick Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#102D46] tracking-tight">
              Scholarship Applications Monitoring
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time application records from Supabase database
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={fetchApplications}
              disabled={dataLoading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#102D46] hover:bg-slate-50 transition-colors shadow-xs"
            >
              <RefreshCw className={`h-4 w-4 ${dataLoading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#075A9C] hover:bg-[#064B82] text-xs font-bold text-white transition-colors shadow-xs"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setBroadcastMessage(null);
                setBroadcastProgress(null);
                setIsBroadcastModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors shadow-xs"
            >
              <Send className="h-4 w-4" />
              <span>Broadcast Notice</span>
            </button>
          </div>
        </div>

        {/* Data Error Banner */}
        {dataError && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{dataError}</span>
            </div>
            <button
              onClick={fetchApplications}
              className="text-xs font-bold underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        )}

        {/* 1. EXACT 5 SUMMARY CARDS SPECIFIED BY CLIENT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Card 1: Total Applications */}
          <div className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Total
              </span>
              <div className="h-8 w-8 rounded-xl bg-[#EAF2F8] text-[#075A9C] flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#102D46]">
              {metrics.total}
            </p>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 block">
              Total Applications
            </span>
          </div>

          {/* Card 2: Pending Applications */}
          <div className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Pending
              </span>
              <div className="h-8 w-8 rounded-xl bg-[#FFF8EE] text-[#D97706] flex items-center justify-center">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#D97706]">
              {metrics.pending}
            </p>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 block">
              Pending Applications
            </span>
          </div>

          {/* Card 3: Reviewed Applications */}
          <div className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Reviewed
              </span>
              <div className="h-8 w-8 rounded-xl bg-[#EAF2F8] text-[#075A9C] flex items-center justify-center">
                <FileText className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#075A9C]">
              {metrics.reviewed}
            </p>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 block">
              Reviewed Applications
            </span>
          </div>

          {/* Card 4: Approved Applications */}
          <div className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Approved
              </span>
              <div className="h-8 w-8 rounded-xl bg-[#E8F8F5] text-[#24A693] flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#24A693]">
              {metrics.approved}
            </p>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 block">
              Approved Applications
            </span>
          </div>

          {/* Card 5: Rejected Applications */}
          <div className="p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Rejected
              </span>
              <div className="h-8 w-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <XCircle className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-red-600">
              {metrics.rejected}
            </p>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 block">
              Rejected Applications
            </span>
          </div>

        </div>

        {/* 2. SEARCH & FILTER CONTROLS BAR */}
        <div className="bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by student name or application ID..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#102D46] placeholder-slate-400 focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
              />
            </div>

            {/* Filter by Class (Class 6, 7, 8, 9, 11) */}
            <div className="relative">
              <Filter className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <select
                value={filterClass}
                onChange={(e) => {
                  setFilterClass(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
              >
                <option value="All">All Classes</option>
                {scholarshipConfig.eligibleClasses.map((cls, idx) => (
                  <option key={idx} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Status */}
            <div>
              <select
                value={filterStatus}
                onChange={(e) => {
                  setFilterStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Filter by Academic Year */}
            <div>
              <select
                value={filterAcademicYear}
                onChange={(e) => {
                  setFilterAcademicYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-[#102D46] focus:border-[#075A9C] focus:outline-none focus:ring-2 focus:ring-[#075A9C]/10"
              >
                <option value="All">All Academic Years</option>
                <option value="2027–2028">2027–2028</option>
              </select>
            </div>

          </div>

          {(searchQuery || filterClass !== "All" || filterStatus !== "All" || filterAcademicYear !== "All") && (
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>Showing {filteredApplications.length} matching applications</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setFilterClass("All");
                  setFilterStatus("All");
                  setFilterAcademicYear("All");
                  setCurrentPage(1);
                }}
                className="text-[#075A9C] font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* 3. APPLICATIONS TABLE */}
        <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-[#FCFDFF] text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-5">Application Number</th>
                  <th className="py-4 px-5">Student Name</th>
                  <th className="py-4 px-5">Class</th>
                  <th className="py-4 px-5">Academic Year</th>
                  <th className="py-4 px-5">Parent / Guardian</th>
                  <th className="py-4 px-5">Contact Number</th>
                  <th className="py-4 px-5">Email</th>
                  <th className="py-4 px-5">Application Date</th>
                  <th className="py-4 px-5">Status</th>
                  <th className="py-4 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {dataLoading ? (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-slate-400">
                      <Loader2 className="h-6 w-6 mx-auto mb-2 animate-spin text-[#075A9C]" />
                      <p className="text-xs">Loading application records from Supabase...</p>
                    </td>
                  </tr>
                ) : paginatedApplications.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-slate-400">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                      <p className="font-bold text-sm text-[#102D46]">No applications found</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {dataError ? "Database configuration pending." : "No records match the current filter criteria."}
                      </p>
                    </td>
                  </tr>
                ) : (
                  paginatedApplications.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Application Number */}
                      <td className="py-4 px-5 font-mono font-bold text-[#102D46] whitespace-nowrap">
                        {app.application_number}
                      </td>

                      {/* Student Name */}
                      <td className="py-4 px-5 font-bold text-[#102D46] whitespace-nowrap">
                        {app.student_name}
                      </td>

                      {/* Class */}
                      <td className="py-4 px-5 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#EAF2F8] text-[#075A9C] text-xs font-bold">
                          {app.class_applied_for}
                        </span>
                      </td>

                      {/* Academic Year */}
                      <td className="py-4 px-5 whitespace-nowrap text-xs font-semibold text-slate-600">
                        {app.academic_year}
                      </td>

                      {/* Parent / Guardian Name */}
                      <td className="py-4 px-5 whitespace-nowrap">
                        {app.father_guardian_name || app.mother_guardian_name}
                      </td>

                      {/* Contact Number */}
                      <td className="py-4 px-5 whitespace-nowrap text-xs font-mono text-slate-700">
                        {app.primary_contact_number}
                      </td>

                      {/* Email */}
                      <td className="py-4 px-5 whitespace-nowrap text-xs text-slate-500">
                        {app.email_address}
                      </td>

                      {/* Application Date */}
                      <td className="py-4 px-5 whitespace-nowrap text-xs text-slate-500">
                        {new Date(app.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-5 whitespace-nowrap">
                        {getStatusBadge(app.status)}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-5 whitespace-nowrap text-right">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedApp(app)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#075A9C] hover:text-white text-xs font-bold text-[#102D46] transition-colors"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            <span>View</span>
                          </button>

                          <button
                            type="button"
                            disabled={singleSendingId === app.id}
                            onClick={() => handleSendSingleNotice(app)}
                            title="Send WhatsApp Exam Notice"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-xs font-bold text-emerald-700 transition-colors disabled:opacity-50"
                          >
                            {singleSendingId === app.id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Send className="h-3.5 w-3.5" />
                            )}
                            <span>Notice</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-[#FCFDFF] text-xs">
              <span className="text-slate-500">
                Page {currentPage} of {totalPages} ({filteredApplications.length} total)
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </main>

      {/* ========================================================================= */}
      {/* 4. COMPLETE APPLICATION DETAILS MODAL                                     */}
      {/* ========================================================================= */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedApp(null)}
            className="fixed inset-0 bg-[#102D46]/70 backdrop-blur-sm transition-opacity"
          />

          <div className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col rounded-[28px] bg-white shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-[#102D46] text-white px-6 py-5 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC83D]">
                  Application Record
                </span>
                <h3 className="text-xl font-black text-white tracking-tight mt-0.5">
                  {selectedApp.application_number}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedApp(null)}
                className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#102D46]">
              
              {/* Status Update Quick Bar */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Current Status
                  </span>
                  <div className="mt-1">{getStatusBadge(selectedApp.status)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Update Status:</span>
                  <select
                    disabled={isUpdatingStatus}
                    value={selectedApp.status}
                    onChange={(e) =>
                      handleStatusChange(selectedApp.id, e.target.value as ApplicationStatus)
                    }
                    className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-bold text-[#102D46] bg-white focus:outline-none focus:ring-2 focus:ring-[#075A9C]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {/* Student Information Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#075A9C] border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  <span>Student Details</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block">Student Full Name</span>
                    <span className="font-bold">{selectedApp.student_name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Date of Birth</span>
                    <span className="font-bold">{selectedApp.date_of_birth}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Gender</span>
                    <span className="font-bold">{selectedApp.gender || "Not specified"}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Class Applied For</span>
                    <span className="font-bold text-[#075A9C]">{selectedApp.class_applied_for}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Academic Year</span>
                    <span className="font-bold text-[#075A9C]">{selectedApp.academic_year}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Board</span>
                    <span className="font-bold">{selectedApp.board}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">Previous School</span>
                    <span className="font-bold">{selectedApp.previous_school} (Class: {selectedApp.previous_class})</span>
                  </div>
                </div>
              </div>

              {/* Parent Information Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#075A9C] border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>Parent / Guardian Details</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block">Father / Guardian Name</span>
                    <span className="font-bold">{selectedApp.father_guardian_name}</span>
                    {selectedApp.father_guardian_occupation && (
                      <span className="text-xs text-slate-500 block">
                        Occupation: {selectedApp.father_guardian_occupation}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-slate-400 block">Mother / Guardian Name</span>
                    <span className="font-bold">{selectedApp.mother_guardian_name}</span>
                    {selectedApp.mother_guardian_occupation && (
                      <span className="text-xs text-slate-500 block">
                        Occupation: {selectedApp.mother_guardian_occupation}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-slate-400 block">Primary Contact Number</span>
                    <a
                      href={`tel:${selectedApp.primary_contact_number}`}
                      className="font-bold text-[#075A9C] hover:underline"
                    >
                      {selectedApp.primary_contact_number}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Alternate Contact Number</span>
                    <span className="font-medium text-slate-700">
                      {selectedApp.alternate_contact_number || "None provided"}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${selectedApp.email_address}`}
                      className="font-bold text-[#075A9C] hover:underline"
                    >
                      {selectedApp.email_address}
                    </a>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">Residential Address</span>
                    <p className="font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {selectedApp.residential_address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#075A9C] border-b border-slate-100 pb-1">
                  Submission Information
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Submitted At</span>
                    <span className="font-bold">
                      {new Date(selectedApp.created_at).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Last Updated</span>
                    <span className="font-bold">
                      {selectedApp.updated_at
                        ? new Date(selectedApp.updated_at).toLocaleString("en-IN")
                        : "Not updated"}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-[#FCFDFF] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-bold text-[#102D46] transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* WhatsApp Broadcast Notice Modal */}
      {/* ===================================================================== */}
      {isBroadcastModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#FCFDFF]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#102D46]">
                    Broadcast WhatsApp Exam Notice
                  </h3>
                  <p className="text-xs text-slate-500">
                    Template: <span className="font-mono font-bold text-emerald-700">scholarship__examination_2026</span> (ID: 1825071)
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => !isBroadcasting && setIsBroadcastModalOpen(false)}
                disabled={isBroadcasting}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-40"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm">
              {/* Target Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                  Select Recipients
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBroadcastTarget("all")}
                    disabled={isBroadcasting}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      broadcastTarget === "all"
                        ? "border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-[#102D46] block text-sm">All Students</span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {applications.length} candidates in database
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBroadcastTarget("filtered")}
                    disabled={isBroadcasting}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      broadcastTarget === "filtered"
                        ? "border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="font-bold text-[#102D46] block text-sm">Current Filter</span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {filteredApplications.length} matching candidates
                    </span>
                  </button>
                </div>
              </div>

              {/* Message Preview Box */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#354D60] mb-2">
                  WhatsApp Message Preview
                </label>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 font-sans text-xs sm:text-sm text-slate-800 space-y-2 whitespace-pre-wrap leading-relaxed shadow-inner">
                  <p className="font-bold text-emerald-950">📢 *SREE JAYAM SCHOOL*</p>
                  <p className="font-bold text-[#075A9C]">🎓 *Scholarship Examination 2026 - Important Notice*</p>
                  <p>Dear Parent/Student,</p>
                  <p>This is a reminder that the *Scholarship Examination* is scheduled as follows:</p>
                  <div className="pl-2 border-l-2 border-emerald-400 space-y-1 my-2 font-medium">
                    <p>📅 <strong>Date:</strong> November 29, 2026</p>
                    <p>🏫 <strong>School:</strong> Sree Jayam School</p>
                    <p>👤 <strong>Student Name:</strong> {"{{Student Name}}"}</p>
                    <p>📚 <strong>Class:</strong> {"{{Class}}"}</p>
                    <p>📝 <strong>Application No:</strong> {"{{Application No}}"}</p>
                  </div>
                  <p>Please ensure that your child arrives at the examination venue on time and follows the school&apos;s instructions.</p>
                  <p>We wish all students the very best! 🌟</p>
                  <p className="font-bold text-slate-700">Regards,<br />*Sree Jayam School*</p>
                </div>
              </div>

              {/* Progress Indicator */}
              {broadcastProgress && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#102D46]">
                      {isBroadcasting ? "Sending Broadcast..." : "Finished"}
                    </span>
                    <span className="text-emerald-700">
                      {broadcastProgress.sent + broadcastProgress.failed} of {broadcastProgress.total}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 transition-all duration-300"
                      style={{
                        width: `${((broadcastProgress.sent + broadcastProgress.failed) / broadcastProgress.total) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span className="text-emerald-600 font-bold">✓ Sent: {broadcastProgress.sent}</span>
                    <span className="text-red-500 font-bold">✕ Failed: {broadcastProgress.failed}</span>
                  </div>
                </div>
              )}

              {/* Success / Error Message Banner */}
              {broadcastMessage && (
                <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{broadcastMessage}</span>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-[#FCFDFF] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsBroadcastModalOpen(false)}
                disabled={isBroadcasting}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-bold text-[#102D46] transition-colors disabled:opacity-40"
              >
                Close
              </button>

              <button
                type="button"
                onClick={handleStartBroadcast}
                disabled={isBroadcasting || (broadcastTarget === "all" ? applications.length === 0 : filteredApplications.length === 0)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors shadow-sm disabled:opacity-50"
              >
                {isBroadcasting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Broadcasting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Broadcast Now ({broadcastTarget === "all" ? applications.length : filteredApplications.length})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
