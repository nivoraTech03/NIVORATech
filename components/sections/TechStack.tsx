import siteContent from "@/lib/content";
import { Container } from "@/components/ui/Container";

const TechLogos: Record<string, string> = {
  "React": "https://img.icons8.com/color/48/react-native.png",
  "React Native": "https://img.icons8.com/color/48/react-native.png",
  "Next.js": "https://img.icons8.com/color/48/nextjs.png",
  "TypeScript": "https://img.icons8.com/color/48/typescript.png",
  "Tailwind CSS": "https://img.icons8.com/color/48/tailwind_css.png",
  "PHP": "https://img.icons8.com/officel/48/php-logo.png",
  "Sass": "https://img.icons8.com/color/48/sass.png",
  "Less": "https://img.icons8.com/windows/48/less-logo.png",
  "Firebase": "https://img.icons8.com/color/48/firebase.png",
  "WordPress": "https://img.icons8.com/color/48/wordpress.png",
  "HTML5": "https://img.icons8.com/color/48/html-5--v1.png",
  "CSS3": "https://img.icons8.com/color/48/css3.png"
};

export function TechStack() {
  const { technologies } = siteContent;

  // Duplicate array for seamless infinite scroll
  const duplicatedTechs = [...technologies.items, ...technologies.items];

  return (
    <section
      className="border-y border-[var(--border-subtle)] py-12 sm:py-16 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      <Container>
        <div className="flex flex-col items-center gap-10">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-slate-500 text-center">
            {technologies.title}
          </p>

          <div className="relative w-full overflow-hidden flex">
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--bg-surface)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--bg-surface)] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee w-max items-center gap-4 py-2 hover:[animation-play-state:paused]">
              {duplicatedTechs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default shrink-0 shadow-sm hover:shadow-md"
                >
                  {TechLogos[tech.name] ? (
                    <img src={TechLogos[tech.name]} alt={tech.name} className="w-5 h-5 object-contain" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)] group-hover:bg-indigo-500 transition-colors" />
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
