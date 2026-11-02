import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, Lightbulb, ShieldCheck, TrendingUp, Network, Target, Compass, Sparkles } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Stinet Digital - Your Business Transformation Partner",
  description:
    "Discover Stinet Digital, a business transformation partner helping organisations modernise operations through software, AI, automation and digital technology.",
};

const pillars = [
  {
    title: "Business First",
    description: "Understand the business challenge before recommending a technology solution.",
    icon: <Handshake className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Connected Systems",
    description: "Bring applications, information and business processes together.",
    icon: <Network className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Practical Innovation",
    description: "Apply software, AI and automation where they create genuine value.",
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Continuous Improvement",
    description: "Support adoption, evaluate performance and improve solutions over time.",
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  },
];

const values = [
  {
    title: "Business First",
    description: "Technology decisions should begin with business needs, not trends.",
    icon: <Handshake className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Practical Innovation",
    description: "We focus on technology that can solve real problems.",
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Integrity",
    description: "We value honesty, accountability and transparent communication.",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Continuous Improvement",
    description: "We believe good technology and good businesses should keep evolving.",
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              About Stinet Digital
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Technology With a Clear Business Purpose.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              We help businesses modernise their operations, connect their
              systems and improve how they work through practical software,
              intelligent automation and digital technology.
            </p>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Our approach begins with understanding the business — not simply
              introducing technology.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/solutions" variant="primary" size="lg">
                Explore What We Do
              </Button>
              <Button href="/contact" variant="inverse" size="lg">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <Heading level="h2" variant="h2" className="text-neutral-900">
                We Are More Than a Technology Provider.
              </Heading>
              <Text variant="body-lg" tone="muted">
                Stinet Digital is a technology and digital transformation
                company focused on helping businesses use technology to solve
                operational challenges, improve productivity and create new
                opportunities.
              </Text>
              <Text variant="body" tone="muted">
                We work across business software, digital platforms, automation,
                technology integration and digital capability development.
              </Text>
              <Text variant="body" tone="muted">
                Our philosophy is simple: technology should serve a clear
                business purpose. We believe successful digital transformation
                requires more than software. It requires understanding people,
                processes, systems and the objectives of the organisation.
              </Text>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full overflow-hidden rounded-xl bg-neutral-100" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/founder-placeholder.svg"
                  alt="Company or founder image placeholder — awaiting approved photograph"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Why We Exist. What We Are Building.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                Our Mission
              </Heading>
              <Text variant="body" tone="muted">
                To help businesses adopt practical digital technologies that
                improve operations, strengthen capabilities and support
                sustainable growth.
              </Text>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                Our Vision
              </Heading>
              <Text variant="body" tone="muted">
                To become a trusted business transformation partner, enabling
                organisations to operate more intelligently through connected
                systems and purposeful innovation.
              </Text>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                Our Purpose
              </Heading>
              <Text variant="body" tone="muted">
                To bridge the gap between business challenges and technology
                that makes a meaningful difference.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Your Business Transformation Partner.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Businesses do not always need more technology. They need the right
              technology, implemented in a way that makes their operations
              better.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                  {pillar.icon}
                </div>
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {pillar.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {pillar.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-full bg-neutral-100" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="/images/founder-placeholder.svg"
                  alt="Founder portrait placeholder — awaiting approved photograph"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-8">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-600">
                Founder &amp; CEO
              </p>
              <Heading level="h2" variant="h2" className="text-neutral-900">
                Augustine Thomas
              </Heading>
              <Text variant="body-lg" tone="muted">
                Stinet Digital is led by Augustine Thomas, whose work brings
                together business understanding, software development, digital
                technology and practical innovation.
              </Text>
              <Text variant="body" tone="muted">
                His vision is to help businesses move beyond fragmented
                processes and use technology to build more connected, efficient
                and adaptable operations.
              </Text>
              <div className="pt-2">
                <Button href="/about/leadership" variant="secondary" size="lg">
                  Read Founder Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              The Principles That Guide Our Work.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                  {value.icon}
                </div>
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {value.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {value.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Let&apos;s Build Something That Moves Your Business Forward.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Your business has its own challenges, goals and opportunities.
              Let&apos;s understand where you are today and explore how the
              right technology can help you move forward.
            </Text>
            <Button href="/consultation" variant="inverse" size="lg">
              Book a Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}