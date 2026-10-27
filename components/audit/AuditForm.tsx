'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { WhatsAppCta } from '@/components/ui/WhatsAppCta';
import { trackAuditRequest } from '@/lib/gtag';

export function AuditForm() {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    email: '',
    phone: '',
    name: '',
    industry: 'Healthcare / Clinic',
    concerns: 'Speed & Mobile Conversions',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit audit request.');
      }

      setStatus('success');
      trackAuditRequest(formData.industry, formData.concerns);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again or WhatsApp us.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[var(--bg-card)] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
        <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto mb-4">
          <Icon name="check" size={28} />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
          Audit Request Received!
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto mb-5">
          Our engineering team is analyzing <strong>{formData.websiteUrl}</strong>. We check mobile Core Web Vitals, WCAG 2.2 AA accessibility, and technical SEO structure. You will receive the breakdown within 24 hours.
        </p>
        <div className="p-3.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] max-w-sm mx-auto mb-5">
          Need immediate answers or want to discuss fixes right away?
        </div>
        <WhatsAppCta
          href={`https://wa.me/919575450177?text=Hi%20Nexnify,%20I%20just%20requested%20an%20audit%20for%20${encodeURIComponent(formData.websiteUrl)}.`}
          ctaLocation="audit_success_card"
          serviceCategory="website_audit"
          size="md"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl"
        >
          Chat with Us on WhatsApp Now
        </WhatsAppCta>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-7 shadow-lg shadow-black/5">
      <div className="mb-5 pb-4 border-b border-[var(--border-subtle)]">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Free &bull; 24h Turnaround &bull; No Obligation
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
          Request Technical Audit
        </h2>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          We run manual and automated tests across Mobile Speed, WCAG 2.2 AA, and Google SEO.
        </p>
      </div>

      {status === 'error' && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Honeypot field for bot trapping */}
        <input
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          className="hidden pointer-events-none"
          aria-hidden="true"
        />
        <div>
          <label htmlFor="websiteUrl" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
            Website URL <span className="text-red-500">*</span>
          </label>
          <input
            id="websiteUrl"
            type="url"
            required
            placeholder="https://yourwebsite.com"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="email" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
              Industry
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
            >
              <option value="Healthcare / Clinic">Healthcare &amp; Clinics</option>
              <option value="Real Estate">Real Estate &amp; Builders</option>
              <option value="D2C / E-Commerce">D2C &amp; E-Commerce</option>
              <option value="B2B / SaaS">B2B &amp; Corporate Services</option>
              <option value="Education">Education &amp; EdTech</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="concerns" className="block text-[11px] font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wide">
            Primary Concern
          </label>
          <select
            id="concerns"
            value={formData.concerns}
            onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
          >
            <option value="Speed & Mobile Conversions">Slow Mobile Speed &amp; High Bounce Rate</option>
            <option value="WCAG & Accessibility">WCAG 2.2 AA Accessibility &amp; Legal Compliance</option>
            <option value="SEO & Keyword Rankings">Poor Google Rankings &amp; Missing Schema</option>
            <option value="Outdated Design">Outdated Visual Design &amp; Low Inquiries</option>
            <option value="General Health Check">Comprehensive 15-Point Review</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full mt-3 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting Audit Request...</span>
            </>
          ) : (
            <>
              <span>Generate My Free Audit Report &rarr;</span>
            </>
          )}
        </button>

        <p className="text-center text-[10px] text-[var(--text-muted)] mt-1.5">
          100% confidential &bull; We never share your data or send spam.
        </p>
      </form>
    </div>
  );
}
