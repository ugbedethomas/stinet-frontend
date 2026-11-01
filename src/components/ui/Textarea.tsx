import { type TextareaHTMLAttributes, forwardRef } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label?: string;
  error?: string;
  hint?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, error, hint, required, className = "", rows = 5, ...rest },
  ref,
) {
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const baseClasses =
    "w-full px-4 py-3 rounded-sm border bg-white font-body text-[16px] leading-[1.6] text-neutral-900 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed resize-y min-h-[120px]";

  const stateClasses = error
    ? "border-error focus:border-error focus:ring-error/30"
    : "border-neutral-200 focus:border-blue-600 focus:ring-blue-600/30";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex flex-col gap-1">
          <label htmlFor={id} className="font-body text-[14px] font-medium text-neutral-900">
            {label}
            {required && (
              <span aria-hidden="true" className="ml-1 text-error">
                *
              </span>
            )}
          </label>
          {hint && (
            <span id={`${id}-hint`} className="font-body text-[12px] text-neutral-500">
              {hint}
            </span>
          )}
        </div>
      )}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`${baseClasses} ${stateClasses} ${className}`.trim()}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="font-body text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
});