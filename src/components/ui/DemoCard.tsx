import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

export type DemoStatus =
  | "Live Product"
  | "Working Demonstration"
  | "Prototype"
  | "In Development"
  | "Illustrative Interface";

const statusStyles: Record<DemoStatus, string> = {
  "Live Product": "bg-success/15 text-success",
  "Working Demonstration": "bg-blue-600/15 text-blue-700",
  "Prototype": "bg-warning/15 text-warning",
  "In Development": "bg-neutral-200 text-neutral-700",
  "Illustrative Interface": "bg-neutral-200 text-neutral-700",
};

type DemoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  status: DemoStatus;
  imageAspect?: string;
  className?: string;
};

export function DemoCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  status,
  imageAspect = "16/9",
  className = "",
}: DemoCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-level-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${className}`.trim()}
    >
      <div className="relative w-full bg-neutral-100" style={{ aspectRatio: imageAspect }}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Heading level="h3" variant="h4" className="text-neutral-900">
          {title}
        </Heading>
        <Text variant="body-sm" tone="muted">
          {description}
        </Text>
        <span className="mt-2 inline-flex items-center gap-1 font-body text-[14px] font-semibold text-blue-600 group-hover:gap-2 transition-all duration-150">
          Explore
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}