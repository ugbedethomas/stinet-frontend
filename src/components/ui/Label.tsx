import { type LabelHTMLAttributes, type ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  children: ReactNode;
};

export function Label({
  htmlFor,
  required = false,
  optional = false,
  hint,
  children,
  className = "",
  ...rest
}: LabelProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className={`font-body text-[14px] font-medium text-neutral-900 ${className}`.trim()}
        {...rest}
      >
        {children}
        {required && (
          <span aria-hidden="true" className="ml-1 text-error">
            *
          </span>
        )}
        {optional && !required && (
          <span className="ml-1 font-normal text-neutral-500">(optional)</span>
        )}
      </label>
      {hint && (
        <span id={`${htmlFor}-hint`} className="font-body text-[12px] text-neutral-500">
          {hint}
        </span>
      )}
    </div>
  );
}