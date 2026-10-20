import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export function LocalPartnerSection() {
  const servedLocations = [
    { city: 'Gurugram', region: 'Golf Course Rd & CyberHub', slug: 'gurugram' },
    { city: 'Delhi', region: 'Central & South Delhi NCR', slug: 'new-delhi' },
    { city: 'Noida', region: 'Sector 62 & Tech Zone', slug: 'noida' },
    { city: 'Faridabad', region: 'Industrial & B2B Hub', slug: 'faridabad' },
    { city: 'Agra', region: 'Tourism & Exports', slug: 'agra' },
    { city: 'Mathura', region: 'Hospitality & Retail', slug: 'mathura' },
    { city: 'Gwalior', region: 'City Center & Lashkar', slug: 'gwalior' },
    { city: 'Indore', region: 'Commercial & Startups', slug: 'indore' },
    { city: 'Bhopal', region: 'Education & Services', slug: 'bhopal' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 border-t border-slate-800">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[450px] w-[450px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-5">
              <Icon name="mapPin" size={13} />
              REGIONAL TECH PARTNER
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Why Partner With a Local Studio in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
                Delhi NCR &amp; MP
              </span>?
            </h2>

            <p className="font-body text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              We engineer custom, conversion-focused websites tailored for businesses in <strong>Delhi, Gurugram (Golf Course Road, Cyber City), Noida, Faridabad, Agra, Mathura, and Gwalior</strong>. Partnering locally means zero timezone delays, direct communication with the engineering team, and a deep understanding of your regional customer base.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">
                  <strong>Fast On-Ground Collaboration:</strong> Direct access to the developers writing your code—zero agency account manager fluff.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">
                  <strong>Local Market Alignment:</strong> Optimized for high-converting WhatsApp lead capture, Google Local Pack SEO, and fast mobile networks.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">
                  <strong>In-Person Strategy Meetings:</strong> Available for scheduled milestone reviews across Delhi NCR and Gurugram hubs.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="https://wa.me/919575450177?text=Hi%20Nexnify%20Tech,%20I%20would%20like%20to%20connect%20regarding%20a%20local%20website%20project." size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-lg shadow-[#25D366]/20">
                <Icon name="whatsapp" size={18} className="mr-2" />
                Chat on WhatsApp
              </Button>
              <Button href="tel:+919575450177" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 font-semibold">
                <Icon name="phone" size={18} className="mr-2" />
                +91 95754 50177
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-[#0A0F1E] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Icon name="mapPin" size={20} className="text-indigo-400" />
                  Regional Hubs &amp; Coverage
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Click to Explore City
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
                {servedLocations.map((location, i) => (
                  <Link
                    key={i}
                    href={`/locations/${location.slug}`}
                    className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 p-3.5 transition-all duration-200 hover:border-indigo-500/60 hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-100 group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                        <span>{location.city}</span>
                        <Icon name="arrowUpRight" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-tight">{location.region}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-indigo-500/10 p-4 border border-indigo-500/20 text-center">
                <p className="text-xs text-indigo-200/90 leading-relaxed font-medium">
                  Operating outside these cities? We engineer and deploy high-performance web platforms for clients across India and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
