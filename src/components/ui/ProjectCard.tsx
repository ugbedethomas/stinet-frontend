import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  industry?: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  status?: string;
  imageAspect?: string;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  category,
  industry,
  imageUrl,
  imageAlt,
  href,
  status,
  imageAspect = "4/3",
  featured = false,
  className = "",
}: ProjectCardProps) {
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
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
        {status && (
          <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-navy-900">
            {status}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Text variant="caption" tone="accent" className="uppercase tracking-wider">
          {category}
          {industry && <span className="text-neutral-500"> · {industry}</span>}
        </Text>
        <Heading level="h3" variant={featured ? "h3" : "h4"} className="text-neutral-900">
          {title}
        </Heading>
        <Text variant="body-sm" tone="muted">
          {description}
        </Text>
        <span className="mt-2 inline-flex items-center gap-1 font-body text-[14px] font-semibold text-blue-600 group-hover:gap-2 transition-all duration-150">
          View Project
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}