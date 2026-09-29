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

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setForm({ type: "Next.js / React", query: QUERY_OPTIONS[0], name: "", phone: "", email: "", message: "" });
      }, 3500);
    }, 700);
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
          className="flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-lg hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:-translate-y-0.5 transition-all"
          aria-label="Open project enquiry"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
          </span>
          Quick Enquiry
        </button>

        {/* WhatsApp button */}
        <button
          type="button"
          onClick={() => setIsWAOpen(true)}
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1EBF5C] hover:scale-105 hover:-translate-y-0.5 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="whatsapp" size={26} />
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--bg-dark-section)] px-3 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* ── WhatsApp Dialog ── */}
      {isWAOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsWAOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Green top bar */}
            <div className="h-1 bg-[#25D366]" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <Icon name="whatsapp" size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">WhatsApp Connect</p>
                  <p className="text-xs text-[var(--text-muted)]">Quick reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsWAOpen(false)}
                className="rounded-lg p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-surface-alt)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Close"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWASubmit} className="p-5 space-y-3.5">
              <div>
                <label className={labelBase}>Your Name <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
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
                <label className={labelBase}>Note <span className="text-[var(--text-muted)] font-normal">(optional)</span></label>
                <textarea
                  rows={2}
                  placeholder="Any specific requirements..."
                  value={wa.note}
                  onChange={e => setWA({ ...wa, note: e.target.value })}
                  className={`${inputBase} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#25D366] hover:bg-[#1EBF5C] py-2.5 text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="whatsapp" size={16} />
                Open WhatsApp Chat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Enquiry Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg my-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Indigo top stripe */}
            <div className="h-1 bg-gradient-to-r from-indigo-600 to-sky-500" />

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
            <div className="px-6 py-5 max-h-[75vh] overflow-y-auto">
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
                          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                            form.type === pt.label
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
                        placeholder="Rahul Sharma"
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
                        placeholder="+91 98765 43210"
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
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputBase}
                    />
                  </div>

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
