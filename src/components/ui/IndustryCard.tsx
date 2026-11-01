import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

type IndustryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  imageAspect?: string;
  featured?: boolean;
  className?: string;
};

export function IndustryCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  imageAspect = "4/3",
  featured = false,
  className = "",
}: IndustryCardProps) {
  if (featured) {
    return (
      <Link
        href={href}
        className={`group relative flex flex-col overflow-hidden rounded-xl bg-navy-950 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-level-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${className}`.trim()}
      >
        <div className="relative w-full" style={{ aspectRatio: imageAspect }}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        </div>
        <div className="flex flex-col gap-3 p-8 -mt-16 relative z-10">
          <Text variant="caption" tone="gold" className="uppercase tracking-wider">
            Featured Industry
          </Text>
          <Heading level="h2" variant="h2" className="text-white">
            {title}
          </Heading>
          <Text variant="body-lg" tone="inverted" className="opacity-90">
            {description}
          </Text>
          <span className="mt-2 inline-flex items-center gap-1 font-body text-[14px] font-semibold text-gold-500 group-hover:gap-2 transition-all duration-150">
            Explore
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    );
  }

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
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
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