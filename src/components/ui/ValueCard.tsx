import { type ReactNode } from "react";

type ValueCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
        {icon}
      </div>
      <h3 className="font-heading text-[16px] font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="font-body text-[14px] leading-[1.6] text-neutral-500">
        {description}
      </p>
    </div>
  );
}