"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#090E1D] via-[#0D152B] to-[#090E1D] border border-slate-800 text-white p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Ambient decorative glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Icon name="mail" size={13} />
              <span>Studio Newsletter</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              Get web design &amp; modern tech insights
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join founders and creators receiving our bi-weekly breakdown of high-performance web architecture, UI craft, and real client case studies.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/80 border border-indigo-500 text-indigo-300 text-sm font-semibold animate-fadeIn">
                <Icon name="check" size={18} />
                <span>You&apos;re in! Thank you for subscribing to our studio insights.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    aria-label="Email for newsletter"
                  />
                  {status === "error" && (
                    <span className="text-xs text-rose-400 absolute left-1 -bottom-5">
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-indigo-600/30 disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}

            {/* Value Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Icon name="check" size={13} className="text-indigo-400" />
                Bi-weekly digests
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" size={13} className="text-indigo-400" />
                Zero spam guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" size={13} className="text-indigo-400" />
                Unsubscribe anytime
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
