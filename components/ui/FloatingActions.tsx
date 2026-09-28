"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";

const QUERY_OPTIONS = [
  "Website Development (Next.js / React)",
  "PHP Web Application & Custom Booking Portal",
  "WordPress & Elementor Institute/Coaching Website",
  "Landing Page & Conversion Funnel",
  "Website Redesign & Modernization",
  "Regarding Pricing & Quotation",
  "Regarding Project Timeline & Availability",
  "Existing Website Fixes & Maintenance",
  "General Consultation / Enquiry",
];

const QUICK_CATEGORY_CHIPS = [
  { label: "Custom Web App (Next.js)", icon: "code" as const },
  { label: "Travel & Booking (PHP)", icon: "globe" as const },
  { label: "Academy / Institute (WP)", icon: "layout" as const },
  { label: "High-Converting Landing Page", icon: "sparkles" as const },
  { label: "Website Redesign & Speed", icon: "check" as const },
];

export default function FloatingActions() {
  // Enquiry Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp Query Dialog state
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);
  const [waData, setWaData] = useState({
    name: "",
    queryType: QUERY_OPTIONS[0],
    note: "",
  });

  // Modal Form state (NO BUDGET FIELD)
  const [formData, setFormData] = useState({
    selectedCategory: "Custom Web App (Next.js)",
    name: "",
    phone: "",
    email: "",
    queryType: QUERY_OPTIONS[0],
    message: "",
  });

  // Handle ESC key & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsWhatsAppDialogOpen(false);
      }
    };
    if (isModalOpen || isWhatsAppDialogOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, isWhatsAppDialogOpen]);

  // Handle Modal Form Submit
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
          selectedCategory: "Custom Web App (Next.js)",
          name: "",
          phone: "",
          email: "",
          queryType: QUERY_OPTIONS[0],
          message: "",
        });
      }, 3500);
    }, 700);
  };

  // Launch WhatsApp with user query
  const launchWhatsApp = (payload: { name: string; query: string; note?: string; phone?: string }) => {
    const message = encodeURIComponent(
      `*New Project Enquiry from Website:*\n\n` +
      `• *Client Name:* ${payload.name || "Client"}\n` +
      (payload.phone ? `• *Contact:* ${payload.phone}\n` : "") +
      `• *Regarding:* ${payload.query}\n` +
      (payload.note ? `• *Requirements:* ${payload.note}\n` : "") +
      `\n_Sent via NIVORA Studio Quick Connect_`
    );
    window.open(`https://wa.me/919575450177?text=${message}`, "_blank");
  };

  const handleWhatsAppDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    launchWhatsApp({
      name: waData.name,
      query: waData.queryType,
      note: waData.note,
    });
    setIsWhatsAppDialogOpen(false);
    setWaData({ name: "", queryType: QUERY_OPTIONS[0], note: "" });
  };

  return (
    <>
      {/* Floating Action Buttons (Fixed Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Quick Enquiry Floating Pill */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-white text-slate-900 border border-slate-200/90 shadow-2xl hover:shadow-[0_8px_30px_rgba(79,70,229,0.25)] hover:border-indigo-500 hover:text-indigo-600 transition-all transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Open Project Enquiry Modal"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          <span className="font-display text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1.5">
            <Icon name="sparkles" size={15} className="text-indigo-600" />
            Quick Enquiry
          </span>
        </button>

        {/* WhatsApp Floating Button */}
        <button
          type="button"
          onClick={() => setIsWhatsAppDialogOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Ask query on WhatsApp"
        >
          <Icon name="whatsapp" size={28} className="text-white drop-shadow-sm" />

          {/* Hover Tooltip */}
          <span className="font-display absolute right-full mr-3.5 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-700">
            💬 Chat with your query
          </span>
        </button>
      </div>

      {/* 1. WHATSAPP QUERY QUICK DIALOG (Crisp Light Theme with Official Logo) */}
      {isWhatsAppDialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsWhatsAppDialogOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 text-slate-900 shadow-2xl p-6 sm:p-7 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Green Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#25D366]" />

            {/* Header row with Brand Logo and Close */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-500/20">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18V6l12 12V6" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
                      NIVORA
                    </span>
                    <span className="font-display text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                      Studio
                    </span>
                  </div>
                  <span className="font-body text-[11px] text-slate-500 font-medium">
                    Technical Consultation
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsWhatsAppDialogOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Close"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            <div className="mb-5 flex items-center gap-3 bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-100">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
                <Icon name="whatsapp" size={22} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-slate-900 leading-snug">
                  Direct WhatsApp Connect
                </h3>
                <p className="font-body text-xs text-slate-600 mt-0.5">
                  Send your enquiry directly to our technical lead.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppDialogSubmit} className="space-y-4 text-left">
              <div>
                <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={waData.name}
                  onChange={(e) => setWaData({ ...waData, name: e.target.value })}
                  className="font-body w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#25D366] focus:ring-3 focus:ring-emerald-100 transition-all shadow-xs"
                />
              </div>

              <div>
                <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nature of Query <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={waData.queryType}
                  onChange={(e) => setWaData({ ...waData, queryType: e.target.value })}
                  className="font-body w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-[#25D366] focus:ring-3 focus:ring-emerald-100 transition-all shadow-xs"
                >
                  {QUERY_OPTIONS.map((q) => (
                    <option key={q} value={q} className="bg-white text-slate-900 font-medium">
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Requirements / Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need flight booking portal similar to SkyOdeals or coaching website like HIT IAS..."
                  value={waData.note}
                  onChange={(e) => setWaData({ ...waData, note: e.target.value })}
                  className="font-body w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#25D366] resize-none transition-all shadow-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="font-display w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Icon name="whatsapp" size={18} />
                  <span>Start Chat on WhatsApp &rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. WORLD-CLASS ENQUIRY MODAL (Centered, Light Theme, Crisp Logo & Typography) */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto animate-scale-in flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Royal Indigo Gradient Accent Stripe */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-400" />

            {/* Modal Header Bar with Brand Logo & Studio Identity */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-slate-100 bg-slate-50/60">
              <div className="flex items-center gap-3.5">
                {/* Glowing Indigo Logo Emblem */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 text-white shadow-lg shadow-indigo-500/25">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 18V6l12 12V6" />
                  </svg>
                  {/* Live Status Ping */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      NIVORA
                    </span>
                    <span className="font-display text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                      Verified Studio
                    </span>
                  </div>
                  <span className="font-body text-xs text-slate-500 font-medium">
                    Digital Web Architecture &amp; Custom Engineering
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-9 w-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center focus:outline-none"
                aria-label="Close Enquiry Modal"
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-6 sm:px-8 py-5">
              {isSubmitted ? (
                /* Success Confirmation View */
                <div className="py-12 sm:py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-lg shadow-emerald-100">
                    <Icon name="check" size={32} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Enquiry Dispatched Successfully!
                  </h3>
                  <p className="font-body text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-indigo-600 font-bold">{formData.name}</span>. Our technical architect will review your project scope regarding{" "}
                    <span className="text-slate-900 font-semibold">{formData.queryType}</span> and contact you with estimates shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() =>
                        launchWhatsApp({
                          name: formData.name,
                          phone: formData.phone,
                          query: formData.queryType,
                          note: formData.message,
                        })
                      }
                      className="font-display inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BD5A] transition-all shadow-lg shadow-emerald-200"
                    >
                      <Icon name="whatsapp" size={18} />
                      Continue on WhatsApp Now &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Enquiry Form */
                <>
                  {/* Title & Trust Header */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[11px] font-bold tracking-wide">
                        <Icon name="sparkles" size={13} className="text-indigo-600" />
                        Direct Technical Enquiry
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="font-body text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        ⚡ Quick Response in 2-4 Hours
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      Tell us about your project
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      Select your project category or query. We will evaluate technical requirements and share architecture plan &amp; timelines.
                    </p>
                  </div>

                  <form onSubmit={handleModalSubmit} className="mt-5 space-y-4 sm:space-y-5">
                    {/* 1. Category Selection Chips */}
                    <div>
                      <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        1. Select Website / Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {QUICK_CATEGORY_CHIPS.map((chip) => {
                          const isSelected = formData.selectedCategory === chip.label;
                          return (
                            <button
                              key={chip.label}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  selectedCategory: chip.label,
                                })
                              }
                              className={`font-display px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-1.5 border ${
                                isSelected
                                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200/80 scale-[1.02]"
                                  : "bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-slate-100 hover:text-slate-900"
                              }`}
                            >
                              <Icon name={chip.icon} size={14} />
                              <span>{chip.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Nature of Query (Required Dropdown) */}
                    <div>
                      <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        2. Nature of Query <span className="text-rose-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.queryType}
                        onChange={(e) =>
                          setFormData({ ...formData, queryType: e.target.value })
                        }
                        className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                      >
                        {QUERY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-slate-900 font-medium">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 3. Name & WhatsApp Phone (Required) */}
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          WhatsApp / Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* 4. Email (Optional) */}
                    <div>
                      <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                      >
                      </input>
                    </div>

                    {/* 5. Requirements Textarea */}
                    <div>
                      <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Scope / Key Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Brief details about your website, references (e.g. flight booking portal like SkyOdeals, or coaching institute like HIT IAS), or timeline..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 resize-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="font-display flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-60 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Project Enquiry ➜"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          launchWhatsApp({
                            name: formData.name,
                            phone: formData.phone,
                            query: `${formData.selectedCategory} — ${formData.queryType}`,
                            note: formData.message,
                          })
                        }
                        className="font-display inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm transition-all shadow-md shadow-emerald-100 transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Icon name="whatsapp" size={17} />
                        <span>Chat on WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Modal Footer Guarantees */}
            <div className="px-6 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1 font-medium">
                🛡️ 100% Confidential (NDA Protected)
              </span>
              <span className="flex items-center gap-1 font-bold text-indigo-600">
                ⚡ Technical Estimate within 2–4 Hours
              </span>
              <span className="hidden sm:inline font-medium text-slate-400">
                ⭐️ 4.9/5 Rating
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
