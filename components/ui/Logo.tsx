import Link from "next/link";
import siteContent from "@/lib/content";

export function Logo({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  const { site } = siteContent;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label={site.name}
    >
      {/* 3D Ribbon "N" Mark matching user brand identity */}
      <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center">
        {/* Soft ambient neon glow behind logo */}
        <div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-75"
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 100 100"
          className="relative h-full w-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoCyanBlue" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#00A2FF" />
              <stop offset="100%" stopColor="#0055FF" />
            </linearGradient>

            <linearGradient id="logoBluePurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0044EE" />
              <stop offset="35%" stopColor="#2563EB" />
              <stop offset="70%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>

            <linearGradient id="logoPurpleMagenta" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>

            <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-1.5" dy="2.5" stdDeviation="2" floodColor="#020617" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Right Pillar (Back Layer) */}
          <path
            d="M 68 84 C 78 84 86 76 86 64 L 86 28 C 86 20 78 14 70 18 C 64 22 64 30 64 34 L 64 70 C 64 78 68 84 68 84 Z"
            fill="url(#logoPurpleMagenta)"
          />

          {/* Diagonal Crossing Fold (Middle 3D Layer with Shadow) */}
          <path
            d="M 23 23 C 29 17 40 18 47 27 L 82 72 C 88 80 82 90 71 88 C 64 87 56 78 50 70 L 19 33 C 15 28 18 24 23 23 Z"
            fill="url(#logoBluePurple)"
            filter="url(#logoShadow)"
          />

          {/* Left Pillar (Front Layer) */}
          <path
            d="M 14 72 L 14 36 C 14 22 24 14 36 17 C 44 20 45 28 41 36 L 34 50 L 34 72 C 34 81 26 87 19 83 C 15 80 14 76 14 72 Z"
            fill="url(#logoCyanBlue)"
          />
        </svg>
      </div>

      {/* Wordmark & Tagline: nexnify.in | IDEAS TO IMPACT */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] sm:text-[18.5px] font-extrabold tracking-tight flex items-baseline ${
            inverted ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          <span>nexnify</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
            .in
          </span>
        </span>
        <span
          className={`font-mono text-[7.5px] sm:text-[8px] font-bold tracking-[0.2em] uppercase mt-1 ${
            inverted ? "text-white/60" : "text-slate-400 dark:text-slate-400"
          }`}
        >
          IDEAS TO IMPACT
        </span>
      </span>
    </Link>
  );
}
