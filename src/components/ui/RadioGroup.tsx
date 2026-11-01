import { type InputHTMLAttributes, forwardRef } from "react";

type RadioOption = { value: string; label: string; hint?: string; disabled?: boolean };

type RadioGroupProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
  id: string;
  name: string;
  legend?: string;
  options: RadioOption[];
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(function RadioGroup(
  { id, name, legend, options, error, value, defaultValue, onChange, disabled, className = "" },
  ref,
) {
  return (
    <fieldset className="flex flex-col gap-3 w-full">
      {legend && (
        <legend className="font-body text-[14px] font-medium text-neutral-900 mb-1">
          {legend}
        </legend>
      )}
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => {
          const optId = `${id}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={optId}
              className={`flex items-start gap-3 cursor-pointer font-body text-[14px] text-neutral-900 ${
                disabled || opt.disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <input
                ref={i === 0 ? ref : undefined}
                id={optId}
                name={name}
                type="radio"
                value={opt.value}
                disabled={disabled || opt.disabled}
                checked={value !== undefined ? value === opt.value : undefined}
                defaultChecked={
                  value === undefined && defaultValue !== undefined
                    ? defaultValue === opt.value
                    : undefined
                }
                onChange={
                  onChange ? () => onChange(opt.value) : undefined
                }
                className={`mt-0.5 h-5 w-5 shrink-0 border border-neutral-300 bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:ring-offset-0 disabled:cursor-not-allowed ${className}`.trim()}
              />
              <span className="flex flex-col gap-0.5">
                <span className="leading-[1.5]">{opt.label}</span>
                {opt.hint && (
                  <span className="text-[12px] text-neutral-500 leading-[1.4]">
                    {opt.hint}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="font-body text-[13px] text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
});