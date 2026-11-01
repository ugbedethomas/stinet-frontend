import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { IndustryCard } from "@/components/ui/IndustryCard";

const featuredIndustry = {
  title: "Manufacturing",
  description:
    "Connect procurement, production, inventory, quality and distribution with business systems designed for manufacturing operations.",
  imageUrl: "/images/industry-manufacturing.svg",
  imageAlt: "Manufacturing industry placeholder",
  href: "/industries/manufacturing",
};

const supportingIndustries = [
  {
    title: "Distribution",
    description: "Improve stock visibility, sales coordination and warehouse operations.",
    imageUrl: "/images/industry-distribution.svg",
    imageAlt: "Distribution industry placeholder",
    href: "/industries/distribution",
  },
  {
    title: "Retail",
    description: "Connect sales, inventory and customer experiences.",
    imageUrl: "/images/industry-retail.svg",
    imageAlt: "Retail industry placeholder",
    href: "/industries/retail",
  },
  {
    title: "Professional Services",
    description: "Improve client management and service delivery workflows.",
    imageUrl: "/images/industry-professional-services.svg",
    imageAlt: "Professional services industry placeholder",
    href: "/industries/professional-services",
  },
  {
    title: "Construction",
    description: "Connect project information, materials and operations.",
    imageUrl: "/images/industry-construction.svg",
    imageAlt: "Construction industry placeholder",
    href: "/industries/construction",
  },
  {
    title: "Energy",
    description: "Support energy businesses with connected digital operations.",
    imageUrl: "/images/industry-energy.svg",
    imageAlt: "Energy industry placeholder",
    href: "/industries/energy",
  },
];

export function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-neutral-50"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Industries We Serve
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            Technology Should Understand Your Industry.
          </Heading>
          <Text variant="body-lg" tone="muted">
            Every industry has its own operational challenges. We develop
            practical digital solutions around the way businesses work.
          </Text>
        </div>

        <div className="mb-8">
          <IndustryCard
            title={featuredIndustry.title}
            description={featuredIndustry.description}
            imageUrl={featuredIndustry.imageUrl}
            imageAlt={featuredIndustry.imageAlt}
            href={featuredIndustry.href}
            imageAspect="16/9"
            featured
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportingIndustries.map((industry) => (
            <IndustryCard
              key={industry.href}
              title={industry.title}
              description={industry.description}
              imageUrl={industry.imageUrl}
              imageAlt={industry.imageAlt}
              href={industry.href}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <Text variant="body" tone="muted">
            Have a different business model or industry?
          </Text>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}