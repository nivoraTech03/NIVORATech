import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

export function IconBox({
  icon,
  tone = "brand",
  className,
}: {
  icon: IconName;
  tone?: "brand" | "accent" | "dark";
  className?: string;
}) {
  const tones = {
    brand: "bg-[var(--bg-surface-alt)] text-[var(--text-primary)] border border-[var(--border-subtle)]",
    accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent-border)]",
    dark: "bg-[var(--bg-dark-section)] text-white border border-white/10",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
        tones[tone],
        className
      )}
    >
      <Icon name={icon} size={20} />
    </span>
  );
}
