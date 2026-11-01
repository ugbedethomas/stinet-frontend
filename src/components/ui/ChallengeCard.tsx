import Link from "next/link";
import { type ReactNode } from "react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

type ChallengeCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  className?: string;
};

export function ChallengeCard({
  title,
  description,
  icon,
  href,
  className = "",
}: ChallengeCardProps) {
  const inner = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-600">
        {icon}
      </div>
      <Heading level="h4" variant="h4" className="text-neutral-900">
        {title}
      </Heading>
      <Text variant="body" tone="muted">
        {description}
      </Text>
      {href && (
        <span className="mt-2 inline-flex items-center gap-1 font-body text-[14px] font-semibold text-blue-600">
          Learn more
          <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const classes =
    `flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-200 ${
      href ? "hover:-translate-y-0.5 hover:shadow-level-2" : ""
    } ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}