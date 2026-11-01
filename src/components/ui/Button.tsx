import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

type ButtonProps = AsButton | AsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[14px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-[52px] px-6 text-[16px]",
  xl: "h-14 px-8 text-[16px]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-700 focus-visible:ring-offset-white",
  secondary:
    "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-offset-white",
  inverse:
    "bg-white text-navy-950 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-offset-navy-950",
  ghost:
    "bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-offset-white",
};

function getClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  extra: string,
): string {
  return [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    children,
    className = "",
  } = props;

  const classes = getClasses(variant, size, fullWidth, className);

  if (props.href !== undefined) {
    const { href, target, rel, onClick } = props;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          onClick={onClick}
          className={classes}
        >
          {loading && <Spinner />}
          {children}
        </a>
      );
    }

    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {loading && <Spinner />}
        {children}
      </Link>
    );
  }

  const {
    type = "button",
    disabled,
    loading: _restLoading,
    fullWidth: _restFullWidth,
    ...rest
  } = props as AsButton;
  void _restLoading;
  void _restFullWidth;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}