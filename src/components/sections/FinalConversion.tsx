"use client";

import { useState } from "react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";

const interestOptions = [
  { value: "business-systems", label: "Business Systems & ERP" },
  { value: "ai-automation", label: "AI & Business Automation" },
  { value: "digital-platforms", label: "Digital Platforms & Infrastructure" },
  { value: "digital-growth", label: "Digital Growth & Visibility" },
  { value: "training", label: "Corporate Training" },
  { value: "not-sure", label: "Not sure yet - I need guidance" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  challenge: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  challenge: "",
  consent: false,
};

export function FinalConversion() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.company.trim()) next.company = "Please enter your company name.";
    if (!form.email.trim()) {
      next.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.interest) next.interest = "Please select an area of interest.";
    if (!form.consent) next.consent = "Please accept the privacy policy to continue.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="conversion-heading" className="w-full bg-navy-950">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Let&apos;s Move Your Business Forward
            </p>
            <Heading level="h2" variant="h2" className="text-white">
              Ready to Transform the Way Your Business Works?
            </Heading>
            <Text variant="body-lg" tone="inverted" className="opacity-90">
              Whether you are looking to modernise operations, implement
              business software, automate processes or build a connected
              digital platform, let&apos;s discuss what your business needs.
            </Text>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-[11px] font-semibold text-gold-500">
                  1
                </span>
                <div>
                  <p className="font-body text-[15px] font-semibold text-white">
                    Understand
                  </p>
                  <p className="font-body text-[14px] text-neutral-400">
                    Discuss your business challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-[11px] font-semibold text-gold-500">
                  2
                </span>
                <div>
                  <p className="font-body text-[15px] font-semibold text-white">
                    Design
                  </p>
                  <p className="font-body text-[14px] text-neutral-400">
                    Explore practical solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-[11px] font-semibold text-gold-500">
                  3
                </span>
                <div>
                  <p className="font-body text-[15px] font-semibold text-white">
                    Transform
                  </p>
                  <p className="font-body text-[14px] text-neutral-400">
                    Plan the next steps.
                  </p>
                </div>
              </div>
            </div>
            <p className="pt-2 font-body text-[14px] text-neutral-400">
              Start with a conversation. Discover the right next step.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 md:p-8 lg:col-span-6">
            {submitted ? (
              <div className="flex flex-col gap-3 py-8 text-center">
                <Heading level="h3" variant="h4" className="text-neutral-900">
                  Thank you.
                </Heading>
                <Text variant="body" tone="muted">
                  Online enquiry submission will be available soon. To reach us
                  now, please use our contact page.
                </Text>
                <div className="pt-4 flex justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Contact Stinet Digital
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                  Tell Us What Your Business Needs.
                </Heading>

                <Input
                  id="enquiry-name"
                  label="Full name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  error={errors.name}
                />
                <Input
                  id="enquiry-company"
                  label="Company name"
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  error={errors.company}
                />
                <Input
                  id="enquiry-email"
                  type="email"
                  label="Business email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  error={errors.email}
                />
                <Input
                  id="enquiry-phone"
                  type="tel"
                  label="Phone / WhatsApp"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  error={errors.phone}
                />
                <Select
                  id="enquiry-interest"
                  label="Area of interest"
                  required
                  placeholder="Select an area..."
                  options={interestOptions}
                  value={form.interest}
                  onChange={(e) => update("interest", e.target.value)}
                  error={errors.interest}
                />
                <Textarea
                  id="enquiry-challenge"
                  label="What would you like to improve in your business?"
                  hint="Optional"
                  rows={3}
                  value={form.challenge}
                  onChange={(e) => update("challenge", e.target.value)}
                />
                <Checkbox
                  id="enquiry-consent"
                  label={
                    <>
                      I agree that Stinet Digital may use the information
                      submitted to respond to my enquiry, in accordance with the{" "}
                      <a href="/privacy-policy" className="underline text-blue-600">
                        Privacy Policy
                      </a>
                      .
                    </>
                  }
                  required
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  error={errors.consent}
                />

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Enquiry
                </Button>
                <p className="font-body text-[12px] text-neutral-500">
                  Your information will be handled in accordance with our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}