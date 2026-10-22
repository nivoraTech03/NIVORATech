import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "xl",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const sizeMap = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Tag className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeMap[size] || "max-w-7xl", className)}>
      {children}
    </Tag>
  );
}

export default Container;
