import type { Metadata } from "next";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve - Stinet Digital",
  description:
    "Stinet Digital serves manufacturing, distribution, retail, professional services, construction and energy businesses with practical digital transformation solutions.",
};

export default function IndustriesPage() {
  const featured = industries.filter((i) => i.featured);
  const supporting = industries.filter((i) => !i.featured);

  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Industries We Serve
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Technology Should Understand Your Industry.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Every industry has its own operational challenges. We develop
              practical digital solutions around the way businesses work,
              helping organisations improve processes, connect operations and
              prepare for growth.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/solutions" variant="inverse" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Manufacturing Is Our Initial Focus.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Our deepest operational expertise is in manufacturing, with paint
              manufacturing as our initial specialist beachhead. The other
              industries we serve are listed below.
            </Text>
          </div>

          <div className="mb-8">
            {featured.map((industry) => (
              <IndustryCard
                key={industry.href}
                title={industry.title}
                description={industry.description}
                imageUrl={industry.imageUrl}
                imageAlt={industry.imageAlt}
                href={industry.href}
                imageAspect="16/9"
                featured
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((industry) => (
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
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Your Industry, Your Operations. Let&apos;s Discuss.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Every business has its own challenges. Start with a conversation
              about how your organisation operates today.
            </Text>
            <Button href="/consultation" variant="inverse" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}