import React from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export function LocalPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-emerald-600/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Why Work With a Local Tech Partner in <br className="hidden sm:block" />
              <span className="text-indigo-400">Delhi NCR</span>?
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              We specialize in providing modern web solutions tailored for growing businesses in <strong>Delhi, Gurugram, Noida, Agra, Mathura and MP</strong>. Partnering locally means no miscommunications, no delays, and a team that understands your regional market.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">Fast on-ground collaboration & local timezone support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">In-person strategy meetings for major projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">Instant technical support without global agency overheads</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="https://wa.me/919575450177" size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg shadow-[#25D366]/20">
                <Icon name="whatsapp" size={18} className="mr-2" />
                Chat on WhatsApp
              </Button>
              <Button href="tel:+919575450177" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                <Icon name="phone" size={18} className="mr-2" />
                Call Directly
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="mapPin" size={20} className="text-indigo-400" />
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { city: 'Delhi', region: 'Delhi NCR' },
                  { city: 'Gurugram', region: 'Haryana' },
                  { city: 'Noida', region: 'Uttar Pradesh' },
                  { city: 'Agra', region: 'Uttar Pradesh' },
                  { city: 'Mathura', region: 'Uttar Pradesh' },
                  { city: 'Gwalior', region: 'Madhya Pradesh' }
                ].map((location, i) => (
                  <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 transition-all hover:border-indigo-500/50 hover:bg-slate-900/80">
                    <div className="font-bold text-slate-100">{location.city}</div>
                    <div className="text-xs text-slate-400 mt-1">{location.region}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-indigo-500/10 p-5 border border-indigo-500/20 text-center">
                <p className="text-sm font-medium text-indigo-300">
                  Not in these cities? We successfully deliver remote projects globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
