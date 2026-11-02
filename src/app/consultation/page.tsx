import type { Metadata } from "next";
import { Building2, Workflow, Target, Lightbulb } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Business Consultation - Stinet Digital",
  description:
    "Book a business consultation with Stinet Digital to discuss ERP, business systems, AI automation, software development and digital transformation opportunities.",
};

const discussionAreas = [
  { icon: Building2, title: "Your Business", description: "Understand your organisation, industry, structure and objectives." },
  { icon: Workflow, title: "Your Operations", description: "Explore current processes, systems, workflows and operational challenges." },
  { icon: Target, title: "Your Priorities", description: "Identify the improvements that matter most to your business." },
  { icon: Lightbulb, title: "Possible Solutions", description: "Explore appropriate software, automation and digital transformation opportunities." },
];

const whatToPrepare = [
  "Know the main business challenge you want to discuss.",
  "Identify the team or department affected.",
  "Think about the tools and processes currently in use.",
  "Identify what you would like to improve.",
  "Prepare any non-confidential examples that may help explain the challenge.",
];

const agenda = [
  { area: "Business overview", purpose: "Understand the organisation and its objectives." },
  { area: "Current operations", purpose: "Discuss how the relevant processes work today." },
  { area: "Challenges", purpose: "Identify bottlenecks, gaps and improvement opportunities." },
  { area: "Desired outcome", purpose: "Understand what a successful improvement would look like." },
  { area: "Possible approach", purpose: "Explore practical technology options and next steps." },
];

const faqs = [
  { q: "Is the initial consultation free?", a: "Commercial terms for consultations are confirmed by Stinet Digital directly. Please contact us to discuss." },
  { q: "Do I need to know which software I want before booking?", a: "No. You can describe the business challenge without choosing a specific technology." },
  { q: "Can I request a consultation for my manufacturing business?", a: "Yes. Manufacturing is one of Stinet Digital's priority industry areas, including paint manufacturing." },
  { q: "Can multiple people from my organisation attend?", a: "This can be arranged according to the nature and requirements of the meeting." },
  { q: "Can I request an in-person consultation?", a: "Yes, subject to location, availability and prior arrangement." },
  { q: "What happens after the consultation?", a: "Depending on the discussion, the next step may be further discovery, a technical assessment, a proposal or a recommendation for another approach." },
  { q: "Does requesting a consultation mean I must purchase a service?", a: "No. Submitting a request does not create an obligation to purchase." },
];

export default function ConsultationPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Business Consultation
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Let&apos;s Understand Your Business Before We Recommend the Technology.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Every business has different challenges, processes and priorities.
              Book a consultation with Stinet Digital to discuss your operations,
              explore opportunities for improvement and identify practical
              technology solutions.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="#consultation-form" variant="primary" size="lg">
                Request a Consultation
              </Button>
              <Button href="/solutions" variant="inverse" size="lg">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              A Business Conversation, Not Just a Software Presentation.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {discussionAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                    {area.title}
                  </Heading>
                  <Text variant="body-sm" tone="muted">
                    {area.description}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="consultation-form" className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[720px]">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Heading level="h2" variant="h2" className="mb-6 text-neutral-900">
                What Happens During the Consultation?
              </Heading>
              <div className="flex flex-col gap-3">
                {agenda.map((item) => (
                  <div key={item.area} className="rounded-lg border border-neutral-200 bg-white p-4">
                    <p className="font-heading text-[15px] font-semibold text-neutral-900">{item.area}</p>
                    <p className="mt-1 font-body text-[13px] leading-[1.5] text-neutral-500">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Heading level="h2" variant="h2" className="mb-6 text-neutral-900">
                Make the Most of Your Consultation.
              </Heading>
              <ul className="flex flex-col gap-3">
                {whatToPrepare.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                    <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/15 text-[11px] font-semibold text-blue-600">
                      ✓
                    </span>
                    <span className="font-body text-[14px] text-neutral-900">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-body text-[12px] text-neutral-500">
                This is optional preparation, not a condition for booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <Heading level="h2" variant="h2" className="mb-8 text-center text-neutral-900">
              Consultation Questions.
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
              Your Business Deserves More Than Guesswork.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Let&apos;s understand your challenges, explore the possibilities
              and identify a practical way forward.
            </Text>
            <Button href="/contact" variant="inverse" size="lg">
              Contact Stinet Digital
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}