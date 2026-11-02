import type { Metadata } from "next";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import type { Solution } from "@/lib/solutions";

const challenges: Record<Solution["slug"], { title: string; description: string }[]> = {
  "business-systems": [
    {
      title: "Disconnected information",
      description: "Business records scattered across spreadsheets, applications and departments.",
    },
    {
      title: "Manual processes",
      description: "Teams repeating tasks that connected systems could handle.",
    },
    {
      title: "Limited visibility",
      description: "Difficulty getting timely, reliable information for management decisions.",
    },
    {
      title: "Fragmented workflows",
      description: "Departments operating in silos rather than connected processes.",
    },
  ],
  "ai-automation": [
    {
      title: "Repetitive work",
      description: "Staff spending valuable time on routine data entry and administration.",
    },
    {
      title: "Slow response times",
      description: "Customer enquiries and internal requests waiting too long for answers.",
    },
    {
      title: "Disconnected applications",
      description: "Business tools that do not communicate with each other.",
    },
    {
      title: "Missed opportunities",
      description: "Leads and follow-ups not being tracked consistently.",
    },
  ],
  "digital-platforms": [
    {
      title: "Outdated digital presence",
      description: "Websites and applications that no longer serve the business or its customers.",
    },
    {
      title: "Scaling limitations",
      description: "Infrastructure that cannot grow with demand or handle peak load.",
    },
    {
      title: "Integration gaps",
      description: "Platforms operating independently rather than as a connected system.",
    },
    {
      title: "Security exposure",
      description: "Systems and infrastructure without adequate protection.",
    },
  ],
  "digital-growth": [
    {
      title: "Low visibility",
      description: "Potential customers cannot find the business through search or relevant channels.",
    },
    {
      title: "Unstructured marketing",
      description: "Activity without a clear strategy, target audience or measurable objective.",
    },
    {
      title: "Poor conversion",
      description: "Website traffic that does not turn into enquiries or sales.",
    },
    {
      title: "Unclear performance",
      description: "Limited understanding of which campaigns actually generate business.",
    },
  ],
  "digital-academy": [
    {
      title: "Skills gap",
      description: "Team members without the practical skills to use modern digital tools.",
    },
    {
      title: "Theory without practice",
      description: "Training that explains concepts without enabling application.",
    },
    {
      title: "Rapid technology change",
      description: "Skills and knowledge that need continuous development.",
    },
    {
      title: "Adoption challenges",
      description: "New systems introduced without adequate training and support.",
    },
  ],
};

type SolutionDetailProps = {
  solution: Solution;
};

export function buildMetadata(meta: { title: string; description: string }): Metadata {
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function SolutionDetail({ solution }: SolutionDetailProps) {
  const pageChallenges = challenges[solution.slug];

  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              {solution.title}
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              {solution.description}
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Practical implementation, structured methodology and ongoing
              support. Designed around how your business actually operates.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a Consultation
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
              What We Deliver
            </Heading>
            <Text variant="body-lg" tone="muted">
              Capabilities offered within {solution.title}.
            </Text>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solution.capabilities.map((capability) => (
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
                <span className="font-body text-[15px] text-neutral-900">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Business Challenges We Address
            </Heading>
            <Text variant="body-lg" tone="muted">
              Common operational problems this solution is designed to address.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pageChallenges.map((challenge) => (
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
              Let&apos;s Discuss What Your Business Needs.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Start with a conversation about your operations, your challenges
              and the technology opportunities ahead.
            </Text>
            <Button href="/consultation" variant="inverse" size="lg">
              {solution.ctaLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}