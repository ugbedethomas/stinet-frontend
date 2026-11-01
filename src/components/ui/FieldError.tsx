import { type ReactNode } from "react";

type FieldErrorProps = {
  id?: string;
  children?: ReactNode;
  className?: string;
};

export function FieldError({ id, children, className = "" }: FieldErrorProps) {
  if (!children) return null;
  return (
    <p
      id={id}
      role="alert"
      className={`font-body text-[13px] text-error ${className}`.trim()}
    >
      {children}
    </p>
  );
}