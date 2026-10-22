import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "../ui/Icon";

export function WhyChooseUs() {
  const { whyNexnify } = siteContent;

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white border-y border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whyNexnify.eyebrow}
          title={whyNexnify.title}
          description={whyNexnify.description}
          align="center"
          light
        />

        {/* Mobile swipe hint */}
        <div className="flex items-center justify-between sm:hidden mt-6 mb-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Swipe to see our craftsmanship principles
          </span>
          <span className="text-[11px] font-mono">1 / {whyNexnify.items.length}</span>
        </div>

        <div className="mt-4 sm:mt-14 flex sm:grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {whyNexnify.items.map((item) => (
            <div
              key={item.number}
              className="w-[82vw] max-w-[290px] shrink-0 snap-center sm:w-auto sm:max-w-none group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-[#111A30]/80 to-[#0A0F1D]/90 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Header row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3.5">
                  <span className="font-mono text-xl sm:text-2xl font-black text-indigo-400 tracking-tight">
                    {item.number}
                  </span>
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                    <Icon name="check" size={13} />
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-5 border-t border-white/10 pt-3.5">
                <span className="block h-1 w-8 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-16 group-hover:shadow-[0_0_8px_#6366F1]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
