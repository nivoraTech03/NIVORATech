"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";

const QUERY_OPTIONS = [
  "Website Development (Next.js / React)",
  "PHP Web Application & Custom Booking Portal",
  "WordPress & Elementor Website",
  "Landing Page & Conversion Funnel",
  "Website Redesign & Modernization",
  "Pricing & Quotation",
  "Project Timeline & Availability",
  "Existing Website Fixes & Maintenance",
  "General Consultation",
];

const PROJECT_TYPES = [
  { label: "Next.js / React", icon: "code" as const },
  { label: "PHP / Booking", icon: "globe" as const },
  { label: "WordPress", icon: "layout" as const },
  { label: "Landing Page", icon: "sparkles" as const },
  { label: "Redesign", icon: "check" as const },
];

const inputBase =
  "w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface-alt)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15 transition-all";

const labelBase = "block text-xs font-semibold text-[var(--text-secondary)] mb-1.5";

export default function FloatingActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWAOpen, setIsWAOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    type: "Next.js / React",
    query: QUERY_OPTIONS[0],
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [wa, setWA] = useState({ name: "", query: QUERY_OPTIONS[0], note: "" });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsModalOpen(false); setIsWAOpen(false); }
    };
    const open = isModalOpen || isWAOpen;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isModalOpen, isWAOpen]);

  const sendWA = (name: string, query: string, phone?: string, note?: string) => {
    const msg = encodeURIComponent(
      `*New Enquiry — NIVORA*\n\n• *Name:* ${name || "Client"}\n` +
      (phone ? `• *Phone:* ${phone}\n` : "") +
      `• *Query:* ${query}\n` +
      (note ? `• *Note:* ${note}` : "")
    );
    window.open(`https://wa.me/919575450177?text=${msg}`, "_blank");
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setForm({ type: "Next.js / React", query: QUERY_OPTIONS[0], name: "", phone: "", email: "", message: "" });
      }, 3500);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  const handleWASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWA(wa.name, wa.query, undefined, wa.note);
    setIsWAOpen(false);
    setWA({ name: "", query: QUERY_OPTIONS[0], note: "" });
  };

  return (
    <>
      {/* ── Floating Buttons ── */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Enquiry pill */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-lg hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-0.5 transition-all"
          aria-label="Open project enquiry"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-6 w-6 rounded-full bg-indigo-500 opacity-20 animate-ping" />
            <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Icon name="sparkles" size={14} />
            </div>
          </div>
          Quick Enquiry
        </button>

        {/* WhatsApp button */}
        <div className="relative flex items-center justify-center">
          {/* Animated pulse ring */}
          <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }}></div>

          <button
            type="button"
            onClick={() => setIsWAOpen(true)}
            className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#1EBF5C] hover:scale-110 hover:-translate-y-1 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <Icon name="whatsapp" size={28} className="animate-[wiggle_2s_ease-in-out_infinite]" />
            <style>{`
              @keyframes wiggle {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg) scale(1.1); }
              }
            `}</style>
            <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Chat on WhatsApp
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </span>
          </button>
        </div>
      </div>

      {/* ── WhatsApp Dialog ── */}
      {isWAOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsWAOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-[var(--bg-surface)] shadow-2xl overflow-hidden animate-scale-in border border-[var(--border-subtle)]"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#25D366] px-6 py-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Icon name="whatsapp" size={24} />
                </div>
                <div>
                  <p className="text-base font-bold">WhatsApp Connect</p>
                  <p className="text-xs font-medium text-white/80">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsWAOpen(false)}
                className="rounded-full p-2 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWASubmit} className="p-6 space-y-4 bg-[var(--bg-surface)]">
              <div>
                <label className={labelBase}>Your Name <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={wa.name}
                  onChange={e => setWA({ ...wa, name: e.target.value })}
                  className={inputBase}
                />
              </div>
              <div>
                <label className={labelBase}>Query Type <span className="text-rose-500">*</span></label>
                <select
                  required
                  value={wa.query}
                  onChange={e => setWA({ ...wa, query: e.target.value })}
                  className={inputBase}
                >
                  {QUERY_OPTIONS.map(q => <option key={q}>{q}</option>)}
                </select>
              </div>
              <div>
                <label className={labelBase}>Message <span className="text-[var(--text-muted)] font-normal">(optional)</span></label>
                <textarea
                  rows={2}
                  placeholder="How can we help you?"
                  value={wa.note}
                  onChange={e => setWA({ ...wa, note: e.target.value })}
                  className={`${inputBase} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-[#25D366] hover:bg-[#1EBF5C] py-3 text-sm font-bold text-white transition-all hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
              >
                <Icon name="whatsapp" size={18} />
                Start Chat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Enquiry Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden sm:overflow-y-auto transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg h-[calc(100vh-100px)] sm:h-auto sm:max-h-[90vh] rounded-t-[32px] sm:rounded-2xl bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] shadow-2xl flex flex-col overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Mobile Grab Handle */}
            <div className="flex justify-center pt-3 pb-2 sm:hidden shrink-0">
              <div className="h-1.5 w-12 rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
              <div>
                <h2 className="text-base font-bold text-[var(--text-primary)]">Start a Project</h2>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">We reply within 2–4 hours</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available now
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Close"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex-1 overflow-y-auto overscroll-contain pb-safe">
              {isSubmitted ? (
                /* Success */
                <div className="py-10 text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                    <Icon name="check" size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Enquiry sent!</h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-xs mx-auto leading-relaxed">
                    Thanks <span className="font-semibold text-[var(--text-primary)]">{form.name}</span>! We&apos;ll review your project and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => sendWA(form.name, form.query, form.phone, form.message)}
                    className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1EBF5C] transition-colors"
                  >
                    <Icon name="whatsapp" size={16} />
                    Also chat on WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  {/* Project type chips */}
                  <div>
                    <label className={labelBase}>Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map(pt => (
                        <button
                          key={pt.label}
                          type="button"
                          onClick={() => setForm({ ...form, type: pt.label })}
                          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${form.type === pt.label
                            ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                            : "border-[var(--border-strong)] bg-[var(--bg-surface-alt)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                            }`}
                        >
                          <Icon name={pt.icon} size={12} />
                          {pt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Query */}
                  <div>
                    <label className={labelBase}>Query <span className="text-rose-500">*</span></label>
                    <select
                      required
                      value={form.query}
                      onChange={e => setForm({ ...form, query: e.target.value })}
                      className={inputBase}
                    >
                      {QUERY_OPTIONS.map(q => <option key={q}>{q}</option>)}
                    </select>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelBase}>Name <span className="text-rose-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase}>Phone <span className="text-rose-500">*</span></label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9\+\-\s]{10,15}"
                        title="Please enter a valid phone number"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelBase}>Email <span className="text-[var(--text-muted)] font-normal">(optional)</span></label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputBase}
                    />
                  </div>

                  {errorMsg && (
                    <div className="rounded-lg bg-rose-50 dark:bg-rose-900/20 p-3 text-sm text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/30">
                      {errorMsg}
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className={labelBase}>Brief Requirements <span className="text-[var(--text-muted)] font-normal">(optional)</span></label>
                    <textarea
                      rows={3}
                      placeholder="Describe your project, references, timeline..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 py-2.5 text-sm font-semibold text-white transition-colors"
                    >
                      {isSubmitting ? "Sending…" : "Send Enquiry"}
                    </button>
                    <button
                      type="button"
                      onClick={() => sendWA(form.name, form.query, form.phone, form.message)}
                      className="flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EBF5C] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                    >
                      <Icon name="whatsapp" size={16} />
                      WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <span>🛡️ 100% Confidential</span>
              <span>⚡ Reply in 2–4 hours</span>
              <span>⭐ 5.0 rated</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
