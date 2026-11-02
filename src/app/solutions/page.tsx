import type { Metadata } from "next";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions - Stinet Digital",
  description:
    "Explore Stinet Digital solutions: business systems and ERP, AI and automation, digital platforms, digital growth and the Digital Skills Academy.",
};

export default function SolutionsPage() {
  const featured = solutions.filter((s) => s.featured);
  const supporting = solutions.filter((s) => !s.featured);

  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[760px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Our Solutions
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Technology That Solves Real Business Problems.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300">
              From connected business systems to intelligent automation and
              digital platforms, we help organisations put the right technology
              to work.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="#solution-categories" variant="inverse" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solution-categories"
        aria-labelledby="solutions-categories-heading"
        className="w-full bg-white"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading
              level="h2"
              variant="h2"
              id="solutions-categories-heading"
              className="mb-4 text-neutral-900"
            >
              Five Solution Categories. One Connected Partner.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Each category supports the others. Solutions are designed around
              the way your business actually operates.
            </Text>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((solution) => (
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
            {supporting.map((solution) => (
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
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              A Capability Matrix
            </Heading>
            <Text variant="body-lg" tone="muted">
              How the five categories connect to common business needs.
            </Text>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
                    Business Need
                  </th>
                  {solutions.map((s) => (
                    <th
                      key={s.slug}
                      className="px-4 py-3 text-center font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500"
                    >
                      {s.shortTitle}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { need: "Operational visibility", match: ["business-systems", "ai-automation"] },
                  { need: "Workflow automation", match: ["ai-automation", "digital-platforms"] },
                  { need: "Customer acquisition", match: ["digital-growth", "digital-platforms"] },
                  { need: "Employee capability", match: ["digital-academy"] },
                  { need: "Connected data", match: ["business-systems", "ai-automation", "digital-platforms"] },
                ].map((row) => (
                  <tr key={row.need} className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-body text-[14px] font-medium text-neutral-900">
                      {row.need}
                    </td>
                    {solutions.map((s) => (
                      <td key={s.slug} className="px-4 py-3 text-center">
                        {row.match.includes(s.slug) ? (
                          <span className="font-body text-[14px] text-blue-600" aria-label="Strong match">
                            ●
                          </span>
                        ) : (
                          <span className="font-body text-[14px] text-neutral-300" aria-label="Not primary">
                            ○
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Industry Applications
            </Heading>
            <Text variant="body-lg" tone="muted">
              Solutions are configured around each industry&apos;s operational
              reality.
            </Text>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Manufacturing", href: "/industries/manufacturing" },
              { label: "Distribution", href: "/industries/distribution" },
              { label: "Retail", href: "/industries/retail" },
              { label: "Professional Services", href: "/industries/professional-services" },
              { label: "Construction", href: "/industries/construction" },
              { label: "Energy", href: "/industries/energy" },
            ].map((industry) => (
              <Button key={industry.href} href={industry.href} variant="secondary" size="md">
                {industry.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Let&apos;s Find the Right Combination for Your Business.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Every engagement starts with a conversation about what your
              business needs to improve, not a list of services.
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