"use client";

import { useState, type FormEvent } from "react";
import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";
import { Icon } from "@/components/ui/Icon";

const QUICK_PROJECT_TYPES = [
  { label: "Custom Web App (Next.js)", icon: "code" as const },
  { label: "Travel & Booking (PHP)", icon: "globe" as const },
  { label: "Academy & Coaching (WP)", icon: "layout" as const },
  { label: "High-Converting Landing Page", icon: "sparkles" as const },
  { label: "Website Redesign & Speed", icon: "check" as const },
];

export default function ContactPage() {
  const { contact, site } = siteContent;

  const [formData, setFormData] = useState({
    selectedCategory: "Custom Web App (Next.js)",
    name: "",
    email: "",
    phone: "",
    queryType: contact.queryTypes[0] || "Website Development (Next.js / React)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.queryType) {
      alert("Please select a Query Type before submitting.");
      return;
    }
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          type: formData.selectedCategory,
          query: formData.queryType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        alert("Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry from Website:*\n\n` +
      `• *Client Name:* ${formData.name || "Client"}\n` +
      `• *Phone/WhatsApp:* ${formData.phone || "N/A"}\n` +
      `• *Email:* ${formData.email || "N/A"}\n` +
      `• *Category:* ${formData.selectedCategory}\n` +
      `• *Regarding:* ${formData.queryType}\n` +
      (formData.message ? `• *Requirements:* ${formData.message}\n` : "") +
      `\n_Sent via NIVORA Studio Contact Portal_`
    );
    window.open(`https://wa.me/919575450177?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Dark Modern Page Banner with Royal Indigo Theme */}
      <PageBanner
        badge="START A CONVERSATION"
        title="Have a project in mind? Let's build it right."
        description="Share your goals, ideas, and timeline. Speak directly with our technical engineering lead — zero middle-layers, zero sales fluff, just transparent guidance & accurate estimates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Main Section */}
      <section className="bg-slate-50 dark:bg-[#0f172a]/60 dark:bg-slate-900/20 py-16 sm:py-24 relative">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left Column (5 cols): Direct Studio Details */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="font-display inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  Direct Technical Connect
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Speak directly with the builders, not account managers.
                </h2>
                <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Whether you need a high-scale travel portal like SkyOdeals, an institutional WordPress platform like HIT IAS, or a bespoke Next.js web application, we are here to help.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Email Direct Card */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 border border-indigo-100 dark:border-indigo-900/50 group-hover:scale-105 transition-transform">
                    <Icon name="mail" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Official Email Address
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors truncate">
                      {site.email}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      ⚡ Response within 2–4 hours
                    </span>
                  </div>
                </a>

                {/* WhatsApp & Call Direct Card */}
                <a
                  href="https://wa.me/919575450177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all block"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-[#25D366] border border-emerald-100 dark:border-emerald-900/50 group-hover:scale-105 transition-transform">
                    <Icon name="whatsapp" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Direct WhatsApp &amp; Mobile
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#25D366] transition-colors truncate">
                      +91 95754 50177
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                      ● Instant WhatsApp chat available
                    </span>
                  </div>
                </a>

                {/* Instagram Direct Card */}
                <a
                  href="https://www.instagram.com/nivorat.ech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-pink-500 transition-all block"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 dark:bg-pink-900/20 text-[#E1306C] border border-pink-100 dark:border-pink-900/50 group-hover:scale-105 transition-transform">
                    <Icon name="instagram" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Follow our work
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#E1306C] transition-colors truncate">
                      @nivorat.ech
                    </span>
                    <span className="text-xs text-pink-600 dark:text-pink-400 font-semibold flex items-center gap-1 mt-0.5">
                      ● DM us for quick queries
                    </span>
                  </div>
                </a>

                {/* Studio Live Availability & Timings Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Studio Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500 animate-ping" />
                      Accepting New Projects
                    </span>
                  </div>

                  <div className="pt-1 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500 dark:text-slate-400">Working Hours:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Mon — Sat, 9:30 AM – 7:30 PM IST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500 dark:text-slate-400">Location:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Remote &amp; Global Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Trust Guarantees Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white dark:via-[#0B1120] to-sky-50/50 dark:to-sky-900/20 border border-indigo-100 dark:border-indigo-900/50 shadow-sm space-y-2.5">
                  <span className="font-display text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider block">
                    Our Engagement Guarantees:
                  </span>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-600 font-bold">✓</span> 100% Confidentiality &amp; NDA Protection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-600 font-bold">✓</span> Full Source Code &amp; Intellectual Property Ownership
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-600 font-bold">✓</span> No Sales Spam — Only Technical &amp; Architectural Answers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): High-End Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                {/* Top Royal Indigo Accent Stripe */}
                <div className="p-6 sm:p-10">
                  {status === "success" ? (
                    <div className="py-12 text-center space-y-5">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border border-emerald-200 dark:border-emerald-500/20 shadow-lg shadow-emerald-100">
                        <Icon name="check" size={32} />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="mx-auto max-w-md font-body text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        Thank you, <span className="font-bold text-indigo-600">{formData.name}</span>. We have logged your enquiry regarding{" "}
                        <span className="font-semibold text-slate-900 dark:text-white">{formData.queryType}</span>. Our technical lead will review and contact you within 2–4 hours.
                      </p>
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        
                        <button
                          type="button"
                          onClick={() => {
                            setStatus("idle");
                            setFormData({
                              selectedCategory: "Custom Web App (Next.js)",
                              name: "",
                              email: "",
                              phone: "",
                              queryType: contact.queryTypes[0],
                              message: "",
                            });
                          }}
                          className="font-display text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 py-2 hover:underline"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-display inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[11px] font-bold">
                            <Icon name="sparkles" size={12} className="text-indigo-600" />
                            Direct Technical Estimate
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                          <span className="font-body text-xs font-semibold text-emerald-600">
                            ⚡ Fast 2-4h response
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          Tell us about your requirements
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                          Fill in the project details below. Fields marked with <span className="text-rose-500 font-bold">*</span> are required.
                        </p>
                      </div>

                      {/* 1. Category Selection Dropdown */}
                      <div>
                        <label
                          htmlFor="selectedCategory"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          1. Select Project Type <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="selectedCategory"
                          required
                          value={formData.selectedCategory}
                          onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-none"
                        >
                          {QUICK_PROJECT_TYPES.map((chip) => (
                            <option key={chip.label} value={chip.label} className="bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-medium">
                              {chip.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* 2. Nature of Query (REQUIRED DROPDOWN) */}
                      <div>
                        <label
                          htmlFor="queryType"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          2. Nature of Query <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="queryType"
                          required
                          value={formData.queryType}
                          onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] dark:bg-[#0B1120] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-xs"
                        >
                          {contact.queryTypes.map((q) => (
                            <option key={q} value={q} className="bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-medium">
                              {q}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* 3. Name & Phone (REQUIRED) */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                          >
                            Your Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="name"
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. John Doe"
                            className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:font-normal placeholder:text-[13px] focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                          >
                            WhatsApp / Phone <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="phone"
                            required
                            type="tel"
                            pattern="^\\+?[0-9\\s\\-]{10,15}$"
                            title="Please enter a valid phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +91 98765 43210"
                            className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:font-normal placeholder:text-[13px] focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-none"
                          />
                        </div>
                      </div>

                      {/* 4. Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            title="Please enter a valid email address"
                            value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@company.com"
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:font-normal placeholder:text-[13px] focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-none"
                        />
                      </div>

                      {/* 5. Project Details / Requirements */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Project Scope &amp; Specific Requirements
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe your website requirements, references (e.g. flight booking portal like SkyOdeals, or coaching academy like HIT IAS), key pages needed, or target launch deadline..."
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:font-normal placeholder:text-[13px] focus:outline-none focus:bg-white dark:focus:bg-[#1e293b] focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all shadow-none resize-none"
                        />
                      </div>

                      {/* Submit Actions */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="font-display flex-1 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-60 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {status === "submitting" ? "Submitting Inquiry..." : "Submit Project Inquiry ➜"}
                        </button>
                        
                      </div>
                    </form>
                  )}
                </div>

                {/* Form Footer */}
                <div className="px-6 sm:px-10 py-3.5 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1 font-medium">
                    🛡️ Non-Disclosure Protected
                  </span>
                  <span className="flex items-center gap-1 font-bold text-indigo-600">
                    ⚡ Accurate Estimate in 2-4 Hours
                  </span>
                  <span className="font-medium text-slate-400 dark:text-slate-500">
                    ⭐️ 4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Simple Next Steps Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
              Clear &amp; Transparent Process
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What happens after you reach out?
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                1
              </span>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Initial Discovery (2-4 hrs)
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We review your vision, reference websites, and technical requirements to assess the best tech stack (PHP, WordPress, or Next.js).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                2
              </span>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Architecture &amp; Quote
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We provide a clear architectural breakdown, project milestones, transparent pricing, and confirmed timeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                3
              </span>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Engineering &amp; Launch
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Upon agreement, we begin rapid development with regular preview deployments until final production launch.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
