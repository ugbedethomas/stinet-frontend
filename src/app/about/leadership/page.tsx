import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Leadership - Meet the Team Behind Stinet Digital",
  description:
    "Meet the leadership behind Stinet Digital and discover the business-first philosophy guiding our approach to software, automation and digital transformation.",
};

const principles = [
  {
    title: "Business First",
    description: "Understand the business objective before choosing the technology.",
    icon: <Handshake className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Purposeful Innovation",
    description: "Use innovation to solve meaningful problems, not simply to follow trends.",
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Trust & Integrity",
    description: "Communicate honestly, set clear expectations and respect client relationships.",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Continuous Improvement",
    description: "Build solutions that can be reviewed, improved and adapted as businesses evolve.",
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  },
];

const focusAreas = [
  { title: "Business Systems & ERP", description: "Connecting business processes, departments, information and operational workflows." },
  { title: "AI & Business Automation", description: "Applying intelligent automation to reduce repetitive work and improve processes." },
  { title: "Digital Platforms & Infrastructure", description: "Developing and connecting the platforms and infrastructure businesses depend on." },
  { title: "Digital Growth & Visibility", description: "Helping businesses strengthen digital presence and customer acquisition systems." },
  { title: "Digital Skills & Innovation Academy", description: "Supporting practical digital skills development and technology adoption." },
];

const clientApproach = [
  { title: "Listen and understand", description: "Learn about the organisation, its priorities and the challenges it faces." },
  { title: "Think and recommend", description: "Assess the situation and identify an appropriate solution." },
  { title: "Build and deliver", description: "Execute the agreed scope with clear communication and structured implementation." },
  { title: "Support and improve", description: "Help the organisation adopt the solution and identify opportunities for improvement." },
];

const commitments = [
  { title: "Honest recommendations", description: "We recommend solutions based on business needs and practical feasibility." },
  { title: "Clear communication", description: "Expectations, scope, responsibilities and decisions should be understood." },
  { title: "Responsible technology", description: "Security, privacy, reliability and human oversight matter." },
  { title: "Practical implementation", description: "Technology must work in the real operating environment." },
  { title: "Long-term thinking", description: "We consider maintainability, adoption and future improvement." },
];

const faqs = [
  { q: "Who leads Stinet Digital?", a: "Stinet Digital is led by its Founder and CEO, Augustine Thomas." },
  { q: "What is the company's leadership philosophy?", a: "Our approach centres on business understanding, purposeful innovation, integrity and continuous improvement." },
  { q: "Does Stinet Digital work with external specialists?", a: "Project delivery may involve internal capabilities and appropriately selected external specialists, depending on the requirements of an engagement." },
  { q: "Does the founder personally participate in projects?", a: "Leadership involvement depends on the nature, scope and delivery requirements of each project." },
  { q: "How can a business engage Stinet Digital?", a: "Businesses can begin by booking a consultation to discuss their needs and determine an appropriate next step." },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
                Our Leadership
              </p>
              <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
                Business Thinking. Technology Vision. Practical Execution.
              </h1>
              <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[640px]">
                Behind every meaningful technology solution is a clear
                understanding of the business it serves. At Stinet Digital, our
                leadership is guided by a commitment to practical innovation,
                business understanding and technology that creates real value.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to Our Team
                </Button>
                <Button href="/about" variant="inverse" size="lg">
                  About Stinet Digital
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-xl bg-navy-900" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/founder-placeholder.svg"
                  alt="Augustine Thomas portrait placeholder — awaiting approved photograph"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-600">
              Founder &amp; CEO
            </p>
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Augustine Thomas
            </Heading>
            <div className="flex flex-col gap-4">
              <Text variant="body-lg" tone="muted">
                Augustine Thomas is the Founder and CEO of Stinet Digital. He
                brings together business thinking, technology development and
                digital innovation to help organisations address operational
                challenges and modernise the way they work.
              </Text>
              <Text variant="body" tone="muted">
                His approach is grounded in understanding how businesses operate
                before recommending technology. Through Stinet Digital, he is
                building a business transformation partner focused on business
                systems, software development, AI and automation, digital
                platforms and practical technology adoption.
              </Text>
              <Text variant="body" tone="muted">
                His vision is to help businesses move beyond disconnected tools
                and manual processes towards more connected, efficient and
                informed ways of working.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Leadership That Starts With Understanding.
            </Heading>
            <Text variant="body-lg" tone="muted">
              We believe good technology leadership requires more than knowing
              what technology can do. It requires understanding why a business
              needs it, who will use it and how it will improve the organisation.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                  {p.icon}
                </div>
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {p.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {p.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Building Around the Technology Needs of Modern Businesses.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {area.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {area.description}
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
              We Don&apos;t Start With a Product. We Start With Your Business.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clientApproach.map((stage, index) => (
              <div key={stage.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <p className="mb-2 font-heading text-[24px] font-bold text-blue-600">
                  {index + 1}
                </p>
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {stage.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {stage.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              What Clients Should Expect From Us.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <div key={c.title} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/15 text-[11px] font-semibold text-blue-600">
                  ✓
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-neutral-900">{c.title}</p>
                  <p className="font-body text-[13px] leading-[1.5] text-neutral-500">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <Heading level="h2" variant="h2" className="mb-8 text-center text-neutral-900">
              Questions About Our Leadership.
            </Heading>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-lg border border-neutral-200 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg p-5 font-heading text-[15px] font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                    <span>{faq.q}</span>
                    <span aria-hidden="true" className="text-[12px] text-neutral-400 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="border-t border-neutral-200 px-5 py-4 font-body text-[14px] leading-[1.6] text-neutral-500">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Let&apos;s Talk About What Your Business Needs to Become.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Whether you are looking to modernise operations, connect business
              systems or introduce intelligent automation, let&apos;s explore
              the right way forward.
            </Text>
            <Button href="/contact" variant="inverse" size="lg">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}