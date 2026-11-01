import Image from "next/image";
import { Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ValueCard } from "@/components/ui/ValueCard";

const values = [
  {
    title: "Business First",
    description: "Understand the business challenge before recommending a technology solution.",
    icon: <Handshake className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Practical Innovation",
    description: "Apply innovation to solve meaningful problems, not simply to follow trends.",
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Integrity",
    description: "Communicate honestly about capabilities, timelines and outcomes.",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Continuous Improvement",
    description: "Implementation is the beginning of improvement, not the end.",
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  },
];

export function About() {
  return (
    <section aria-labelledby="about-heading" className="w-full bg-neutral-50">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            About Stinet Digital
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            Technology With a Clear Business Purpose.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Heading level="h3" variant="h3" className="text-neutral-900">
              We Believe Technology Should Move Business Forward.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Stinet Digital helps businesses modernise operations, connect
              systems and unlock new opportunities through software, intelligent
              automation and practical digital innovation.
            </Text>
            <Text variant="body" tone="muted">
              Our approach starts with understanding the business. We then
              identify opportunities, design appropriate solutions and work
              towards implementation that supports real operational needs.
            </Text>

            <div className="mt-4 flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6 md:flex-row md:items-center">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                <Image
                  src="/images/founder-placeholder.svg"
                  alt="Founder portrait placeholder"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-600">
                  Founder &amp; CEO
                </p>
                <p className="font-heading text-[20px] font-semibold text-neutral-900">
                  Augustine Thomas
                </p>
                <p className="font-body text-[14px] text-neutral-500">
                  Leading Stinet Digital&apos;s vision of practical business
                  transformation through technology.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="secondary" size="lg">
                Discover Our Story
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              What Guides Us
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {values.map((value) => (
                <ValueCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}