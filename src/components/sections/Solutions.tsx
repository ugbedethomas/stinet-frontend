import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { SolutionCard } from "@/components/ui/SolutionCard";

const featuredSolutions = [
  {
    title: "Business Systems & ERP",
    description:
      "Connect operations, inventory, finance, sales and business processes through integrated software.",
    imageUrl: "/images/solution-erp.svg",
    imageAlt: "Business systems and ERP placeholder",
    href: "/solutions/business-systems",
  },
  {
    title: "AI & Business Automation",
    description:
      "Reduce repetitive work, streamline communication and introduce intelligent workflows.",
    imageUrl: "/images/solution-ai.svg",
    imageAlt: "AI and automation placeholder",
    href: "/solutions/ai-automation",
  },
];

const supportingSolutions = [
  {
    title: "Digital Platforms & Infrastructure",
    description: "Websites, applications, cloud and connected technology.",
    imageUrl: "/images/solution-platforms.svg",
    imageAlt: "Digital platforms placeholder",
    href: "/solutions/digital-platforms",
  },
  {
    title: "Digital Growth & Visibility",
    description: "SEO, marketing, content and online growth.",
    imageUrl: "/images/solution-growth.svg",
    imageAlt: "Digital growth placeholder",
    href: "/solutions/digital-growth",
  },
  {
    title: "Digital Skills & Innovation Academy",
    description: "Practical technology training and professional development.",
    imageUrl: "/images/solution-academy.svg",
    imageAlt: "Academy placeholder",
    href: "/academy",
  },
];

export function Solutions() {
  return (
    <section aria-labelledby="solutions-heading" className="w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            What We Do
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            Technology That Solves Real Business Problems.
          </Heading>
          <Text variant="body-lg" tone="muted">
            From connected business systems to intelligent automation and
            digital platforms, we help organisations put the right technology
            to work.
          </Text>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredSolutions.map((solution) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
              imageAlt={solution.imageAlt}
              href={solution.href}
              featured
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportingSolutions.map((solution) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
              imageAlt={solution.imageAlt}
              href={solution.href}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <Text variant="body" tone="muted">
            Not sure which solution your business needs?
          </Text>
          <Button href="/contact" variant="secondary" size="lg">
            Let&apos;s Find the Right Solution
          </Button>
        </div>
      </div>
    </section>
  );
}