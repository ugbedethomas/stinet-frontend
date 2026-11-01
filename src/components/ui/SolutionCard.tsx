import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

type SolutionCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  imageAspect?: string;
  featured?: boolean;
  className?: string;
};

export function SolutionCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  imageAspect = "4/3",
  featured = false,
  className = "",
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-level-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
        featured ? "border-neutral-200" : "border-neutral-200"
      } ${className}`.trim()}
    >
      <div className="relative w-full bg-neutral-100" style={{ aspectRatio: imageAspect }}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Heading level="h3" variant={featured ? "h3" : "h4"} className="text-neutral-900">
          {title}
        </Heading>
        <Text variant="body" tone="muted">
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