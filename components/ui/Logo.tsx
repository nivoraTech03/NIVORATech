import Link from "next/link";
import siteContent from "@/lib/content";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const { site } = siteContent;

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
      aria-label={site.name}
    >
      {/* Minimal geometric N symbol with vibrant gradient */}
      <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 text-white shadow-sm shadow-indigo-500/20">
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 18V6l12 12V6" />
        </svg>
      </span>

      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-base font-extrabold tracking-tight ${
            inverted ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          NIVORA
        </span>
        <span
          className={`font-body text-[10px] font-bold uppercase tracking-wider ${
            inverted ? "text-white/70" : "text-indigo-600 dark:text-indigo-400"
          }`}
        >
          Digital Studio
        </span>
      </span>
    </Link>
  );
}
