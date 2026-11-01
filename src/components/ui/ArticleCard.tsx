import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  publishedAt?: string;
  readingTime?: string;
  imageAspect?: string;
  featured?: boolean;
  className?: string;
};

export function ArticleCard({
  title,
  excerpt,
  category,
  imageUrl,
  imageAlt,
  href,
  publishedAt,
  readingTime,
  imageAspect = "16/9",
  featured = false,
  className = "",
}: ArticleCardProps) {
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
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Text variant="caption" tone="accent" className="uppercase tracking-wider">
          {category}
        </Text>
        <Heading level="h3" variant={featured ? "h3" : "h4"} className="text-neutral-900">
          {title}
        </Heading>
        <Text variant={featured ? "body" : "body-sm"} tone="muted">
          {excerpt}
        </Text>
        {(publishedAt || readingTime) && (
          <div className="mt-2 flex items-center gap-2 font-body text-[12px] text-neutral-500">
            {publishedAt && <time>{publishedAt}</time>}
            {publishedAt && readingTime && <span aria-hidden="true">·</span>}
            {readingTime && <span>{readingTime}</span>}
          </div>
        )}
      </div>
    </Link>
  );
}