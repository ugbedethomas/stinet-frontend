import { type SelectHTMLAttributes, forwardRef } from "react";

type SelectOption = { value: string; label: string; disabled?: boolean };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, error, hint, options, placeholder, required, className = "", ...rest },
  ref,
) {
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const baseClasses =
    "w-full h-11 pl-4 pr-10 rounded-sm border bg-white font-body text-[16px] text-neutral-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed appearance-none bg-[url(\"data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%2364748B%27 stroke-width=%272%27><path d=%27M6 8l4 4 4-4%27/></svg>\")] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem]";

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
      <select
        ref={ref}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        defaultValue={placeholder ? "" : undefined}
        className={`${baseClasses} ${stateClasses} ${className}`.trim()}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="font-body text-[13px] text-error">
          {error}
        </p>
      )}
    </div>
  );
});