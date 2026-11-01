import { type ElementType, type ReactNode } from "react";

type TextVariant = "body-lg" | "body" | "body-sm" | "caption";
type TextTone = "default" | "muted" | "inverted" | "gold" | "accent";

type TextProps = {
  variant?: TextVariant;
  tone?: TextTone;
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<TextVariant, string> = {
  "body-lg": "text-[18px] leading-[1.7]",
  body: "text-[16px] leading-[1.65]",
  "body-sm": "text-[14px] leading-[1.5]",
  caption: "text-[12px] leading-[1.4] font-medium",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-neutral-900",
  muted: "text-neutral-500",
  inverted: "text-white",
  gold: "text-gold-500",
  accent: "text-blue-600",
};

export function Text({
  variant = "body",
  tone = "default",
  as,
  children,
  className = "",
}: TextProps) {
  const Tag = (as ?? "p") as ElementType;
  const classes = [
    "font-body",
    variantClasses[variant],
    toneClasses[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}