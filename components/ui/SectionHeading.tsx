import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, light = false }: { children: string; className?: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider",
        light
          ? "border border-white/20 bg-white/10 text-white"
          : "border border-indigo-200 bg-indigo-50 text-indigo-700",
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", light ? "bg-white" : "bg-indigo-600 animate-pulse")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.15]",
          light ? "text-white" : "text-[var(--text-primary)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/65" : "text-[var(--text-secondary)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
