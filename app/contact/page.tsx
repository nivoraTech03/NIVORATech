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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.queryType) {
      alert("Please select a Query Type before submitting.");
      return;
    }
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 700);
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
      <section className="bg-slate-50/60 py-16 sm:py-24 relative">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left Column (5 cols): Direct Studio Details */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="font-display inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  Direct Technical Connect
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Speak directly with the builders, not account managers.
                </h2>
                <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-slate-600">
                  Whether you need a high-scale travel portal like SkyOdeals, an institutional WordPress platform like HIT IAS, or a bespoke Next.js web application, we are here to help.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Email Direct Card */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:scale-105 transition-transform">
                    <Icon name="mail" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Official Email Address
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                      {site.email}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      ⚡ Response within 2–4 hours
                    </span>
                  </div>
                </a>

                {/* WhatsApp & Call Direct Card */}
                <a
                  href="https://wa.me/919575450177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all block"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366] border border-emerald-100 group-hover:scale-105 transition-transform">
                    <Icon name="whatsapp" size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Direct WhatsApp &amp; Mobile
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-slate-900 group-hover:text-[#25D366] transition-colors truncate">
                      +91 95754 50177
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                      ● Instant WhatsApp chat available
                    </span>
                  </div>
                </a>

                {/* Studio Live Availability & Timings Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Studio Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Accepting New Projects
                    </span>
                  </div>

                  <div className="pt-1 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Working Hours:</span>
                      <span className="font-bold text-slate-900">Mon — Sat, 9:30 AM – 7:30 PM IST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Location:</span>
                      <span className="font-bold text-slate-900">Remote &amp; Global Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Trust Guarantees Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 border border-indigo-100 shadow-sm space-y-2.5">
                  <span className="font-display text-xs font-bold text-indigo-900 uppercase tracking-wider block">
                    Our Engagement Guarantees:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
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
              <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Top Royal Indigo Accent Stripe */}
                <div className="h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-400" />

                <div className="p-6 sm:p-10">
                  {status === "success" ? (
                    <div className="py-12 text-center space-y-5">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-lg shadow-emerald-100">
                        <Icon name="check" size={32} />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="mx-auto max-w-md font-body text-sm sm:text-base text-slate-600 leading-relaxed">
                        Thank you, <span className="font-bold text-indigo-600">{formData.name}</span>. We have logged your enquiry regarding{" "}
                        <span className="font-semibold text-slate-900">{formData.queryType}</span>. Our technical lead will review and contact you within 2–4 hours.
                      </p>
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="font-display inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BD5A] transition-all shadow-md shadow-emerald-200"
                        >
                          <Icon name="whatsapp" size={17} />
                          <span>Chat on WhatsApp Now &rarr;</span>
                        </button>
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
                          className="font-display text-xs font-bold text-indigo-600 hover:text-indigo-700 py-2 hover:underline"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-display inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                            <Icon name="sparkles" size={12} className="text-indigo-600" />
                            Direct Technical Estimate
                          </span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="font-body text-xs font-semibold text-emerald-600">
                            ⚡ Fast 2-4h response
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          Tell us about your requirements
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-slate-500 mt-1">
                          Fill in the project details below. Fields marked with <span className="text-rose-500 font-bold">*</span> are required.
                        </p>
                      </div>

                      {/* 1. Category Selection Chips */}
                      <div>
                        <label className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Select Project Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {QUICK_PROJECT_TYPES.map((chip) => {
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
                                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                                }`}
                              >
                                <Icon name={chip.icon} size={14} />
                                <span>{chip.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Nature of Query (REQUIRED DROPDOWN) */}
                      <div>
                        <label
                          htmlFor="queryType"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          2. Nature of Query <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="queryType"
                          required
                          value={formData.queryType}
                          onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                        >
                          {contact.queryTypes.map((q) => (
                            <option key={q} value={q} className="bg-white text-slate-900 font-medium">
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
                            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                          >
                            Your Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="name"
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                          >
                            WhatsApp / Phone <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="phone"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 95754 50177"
                            className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* 4. Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@company.com"
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs"
                        />
                      </div>

                      {/* 5. Project Details / Requirements */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Project Scope &amp; Specific Requirements
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe your website requirements, references (e.g. flight booking portal like SkyOdeals, or coaching academy like HIT IAS), key pages needed, or target launch deadline..."
                          className="font-body w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 transition-all shadow-xs resize-none"
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
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="font-display w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm transition-all shadow-md shadow-emerald-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                        >
                          <Icon name="whatsapp" size={18} />
                          <span>Chat on WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Form Footer */}
                <div className="px-6 sm:px-10 py-3.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1 font-medium">
                    🛡️ Non-Disclosure Protected
                  </span>
                  <span className="flex items-center gap-1 font-bold text-indigo-600">
                    ⚡ Accurate Estimate in 2-4 Hours
                  </span>
                  <span className="font-medium text-slate-400">
                    ⭐️ 4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Simple Next Steps Section */}
      <section className="py-16 border-t border-slate-200 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
              Clear &amp; Transparent Process
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What happens after you reach out?
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                1
              </span>
              <h4 className="font-display text-base font-bold text-slate-900">
                Initial Discovery (2-4 hrs)
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                We review your vision, reference websites, and technical requirements to assess the best tech stack (PHP, WordPress, or Next.js).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                2
              </span>
              <h4 className="font-display text-base font-bold text-slate-900">
                Architecture &amp; Quote
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide a clear architectural breakdown, project milestones, transparent pricing, and confirmed timeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-md shadow-indigo-200">
                3
              </span>
              <h4 className="font-display text-base font-bold text-slate-900">
                Engineering &amp; Launch
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upon agreement, we begin rapid development with regular preview deployments until final production launch.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
