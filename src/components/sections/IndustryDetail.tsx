import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import type { Industry } from "@/lib/industries";

type IndustryDetailProps = {
  industry: Industry;
};

export function IndustryDetail({ industry }: IndustryDetailProps) {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Digital Transformation for {industry.title}
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Technology That Understands Your {industry.title} Business.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              {industry.heroIntro}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a {industry.title} Consultation
              </Button>
              <Button href="/demonstrations" variant="inverse" size="lg">
                Request a Demonstration
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Operational Challenges We Address
            </Heading>
            <Text variant="body-lg" tone="muted">
              Common problems {industry.title.toLowerCase()} businesses face as they grow.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                  {challenge.title}
                </Heading>
                <Text variant="body" tone="muted">
                  {challenge.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Capabilities for {industry.title}
            </Heading>
            <Text variant="body-lg" tone="muted">
              Operational capabilities we deliver for {industry.title.toLowerCase()} businesses.
            </Text>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industry.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/15 text-[11px] font-semibold text-blue-600"
                >
                  ✓
                </span>
                <span className="font-body text-[14px] text-neutral-900">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[760px]">
            <Heading level="h2" variant="h2" className="mb-6 text-center text-neutral-900">
              Our Approach
            </Heading>
            <Text variant="body-lg" tone="muted" className="mb-8 text-center">
              Every engagement follows the STINET methodology: Study the
              Business, Trace the Problems, Identify the Solution, Navigate
              Implementation, Enable the People, Track and Improve.
            </Text>
            <div className="flex justify-center">
              <Button href="/our-method" variant="secondary" size="lg">
                Discover Our Method
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Let&apos;s Discuss Your {industry.title} Operations.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Start with a conversation about how your business operates today
              and where technology can make a meaningful difference.
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