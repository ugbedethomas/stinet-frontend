import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Stinet Digital - Business & Technology Enquiries",
  description:
    "Contact Stinet Digital to discuss business systems, ERP, AI automation, digital platforms, digital growth and corporate technology training.",
};

const contactChannels = [
  { icon: Phone, label: "Phone", hint: "Speak with our team about your enquiry.", note: "Verify number before publishing" },
  { icon: Mail, label: "Email", hint: "Send project enquiries and general questions.", note: "Verify email before publishing" },
  { icon: MessageCircle, label: "WhatsApp", hint: "Connect with us for a direct conversation.", note: "Verify WhatsApp Business number" },
  { icon: Clock, label: "Business Hours", hint: "Know when to expect a response.", note: "Publish confirmed operating hours" },
];

const nextSteps = [
  { title: "We receive your enquiry", description: "Your submission is recorded and routed to the appropriate enquiry category." },
  { title: "We review your request", description: "Our team reviews the information and determines the appropriate next step." },
  { title: "We contact you", description: "We use your preferred contact information to respond." },
  { title: "We discuss the opportunity", description: "Where appropriate, we arrange a discovery meeting or consultation." },
  { title: "We recommend a way forward", description: "We identify the next steps based on your business needs." },
];

const faqs = [
  { q: "How can I contact Stinet Digital?", a: "You can reach us through the contact form, approved business email, phone or WhatsApp channels once verified." },
  { q: "Can I request a software demonstration?", a: "Yes. You can submit an enquiry indicating that you want a demonstration, or visit the Demonstrations page." },
  { q: "Do you work with businesses outside Abuja?", a: "Yes. Project discussions and delivery arrangements can be considered for businesses in different locations, subject to project requirements." },
  { q: "Can I enquire about corporate training?", a: "Yes. Select Corporate Training in the enquiry form and provide details about your organisation's training needs." },
  { q: "What information should I provide?", a: "Describe your organisation, the challenge you are facing, the solution you are considering and any important requirements." },
  { q: "Is submitting an enquiry a commitment to purchase?", a: "No. An enquiry begins a conversation. Any project engagement will be subject to an agreed scope, proposal and commercial terms." },
];

export default function ContactPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Contact Stinet Digital
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Let&apos;s Talk About Your Business.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Have a business challenge to solve, a technology project to
              discuss or an idea you want to bring to life? We&apos;d like to
              hear from you.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="#contact-form" variant="primary" size="lg">
                Send an Enquiry
              </Button>
              <Button href="/consultation" variant="inverse" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Reach the Right Team.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.label} className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-[16px] font-semibold text-neutral-900">
                    {channel.label}
                  </p>
                  <p className="font-body text-[13px] leading-[1.5] text-neutral-500">
                    {channel.hint}
                  </p>
                  <p className="mt-auto inline-flex rounded-full bg-warning/15 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-warning">
                    {channel.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-form" className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[640px]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Here&apos;s What Happens Next.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {nextSteps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-6">
                <span className="font-heading text-[24px] font-bold text-blue-600">
                  {index + 1}
                </span>
                <p className="font-heading text-[15px] font-semibold text-neutral-900">{step.title}</p>
                <p className="font-body text-[13px] leading-[1.5] text-neutral-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <Heading level="h2" variant="h2" className="mb-8 text-center text-neutral-900">
              Contact Questions.
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
              Have a Business Challenge? Let&apos;s Work Through It Together.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              The right solution begins with the right conversation. Tell us
              what you need, and let&apos;s explore the possibilities.
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