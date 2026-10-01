import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "../ui/Icon";

export function WhyChooseUs() {
  const { whyNivora } = siteContent;

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-900 text-white border-y border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whyNivora.eyebrow}
          title={whyNivora.title}
          description={whyNivora.description}
          align="center"
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyNivora.items.map((item) => (
            <div
              key={item.number}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-[#111A30]/80 to-[#0A0F1D]/90 p-7 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Header row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <span className="font-mono text-2xl font-black text-indigo-400 tracking-tight">
                    {item.number}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                    <Icon name="check" size={14} />
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="block h-1 w-8 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-16 group-hover:shadow-[0_0_8px_#6366F1]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
