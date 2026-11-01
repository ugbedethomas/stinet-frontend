import { type InputHTMLAttributes, forwardRef } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  id: string;
  label: React.ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, label, error, className = "", ...rest },
  ref,
) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="flex items-start gap-3 cursor-pointer font-body text-[14px] text-neutral-900"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`mt-0.5 h-5 w-5 shrink-0 rounded-xs border border-neutral-300 bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
          {...rest}
        />
        <span className="leading-[1.5]">{label}</span>
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="ml-8 font-body text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
});