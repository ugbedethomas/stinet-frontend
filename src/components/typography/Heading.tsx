import { type ElementType, type ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant =
  | "display-xl"
  | "display-l"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5";

type HeadingProps = {
  level: HeadingLevel;
  variant?: HeadingVariant;
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  id?: string;
};

const variantClasses: Record<HeadingVariant, string> = {
  "display-xl": "text-[64px] leading-[1.05] font-bold",
  "display-l": "text-[56px] leading-[1.1] font-bold",
  h1: "text-[48px] leading-[1.15] font-bold",
  h2: "text-[40px] leading-[1.2] font-bold",
  h3: "text-[32px] leading-[1.25] font-semibold",
  h4: "text-[24px] leading-[1.3] font-semibold",
  h5: "text-[20px] leading-[1.4] font-semibold",
};

export function Heading({
  level,
  variant,
  as,
  children,
  className = "",
  id,
}: HeadingProps) {
  const Tag = (as ?? level) as ElementType;
  const resolvedVariant = variant ?? (level as HeadingVariant);
  const classes = [
    "font-heading text-neutral-900",
    variantClasses[resolvedVariant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} id={id}>
      {children}
    </Tag>
  );
}