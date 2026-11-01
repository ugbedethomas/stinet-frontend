import { type ReactNode } from "react";

type ProcessStepProps = {
  letter: string;
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export function ProcessStep({
  letter,
  number,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-navy-800 bg-navy-900 p-6">
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className="font-heading text-[36px] font-bold leading-[1] text-gold-500"
        >
          {letter}
        </span>
        <span className="rounded-full bg-navy-800 px-2.5 py-0.5 font-body text-[11px] font-semibold tracking-wider text-neutral-400">
          {number}
        </span>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-500">
        {icon}
      </div>
      <h3 className="font-heading text-[18px] font-semibold text-white">
        {title}
      </h3>
      <p className="font-body text-[14px] leading-[1.6] text-neutral-300">
        {description}
      </p>
    </div>
  );
}