"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

const industryOptions = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "distribution", label: "Distribution" },
  { value: "retail", label: "Retail" },
  { value: "professional-services", label: "Professional Services" },
  { value: "construction", label: "Construction" },
  { value: "energy", label: "Energy" },
  { value: "other", label: "Other" },
];

const sizeOptions = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
];

const interestOptions = [
  { value: "business-systems", label: "Business Systems & ERP" },
  { value: "ai-automation", label: "AI & Business Automation" },
  { value: "digital-platforms", label: "Digital Platforms & Infrastructure" },
  { value: "digital-growth", label: "Digital Growth & Visibility" },
  { value: "training", label: "Digital Skills & Corporate Training" },
  { value: "not-sure", label: "Not sure yet" },
];

const formatOptions = [
  { value: "online", label: "Online meeting" },
  { value: "phone", label: "Phone call" },
  { value: "in-person", label: "In-person meeting, subject to arrangement" },
];

const timingOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "7-days", label: "Within the next 7 days" },
  { value: "14-days", label: "Within the next 2 weeks" },
  { value: "flexible", label: "My schedule is flexible" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  size: string;
  interest: string;
  priority: string;
  currentProcess: string;
  format: string;
  timing: string;
  extra: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  size: "",
  interest: "",
  priority: "",
  currentProcess: "",
  format: "",
  timing: "",
  extra: "",
  consent: false,
};

export function ConsultationForm() {
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
    if (!form.company.trim()) next.company = "Please enter your business name.";
    if (!form.email.trim()) {
      next.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.industry) next.industry = "Please select your industry.";
    if (!form.interest) next.interest = "Please select what you would like to discuss.";
    if (!form.consent) next.consent = "Please accept the privacy policy to continue.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-8 text-center">
        <Heading level="h3" variant="h4" className="text-neutral-900">
          Thank you.
        </Heading>
        <Text variant="body" tone="muted">
          Online consultation requests will be available soon. For immediate
          contact, please use the Contact page.
        </Text>
        <div className="pt-4 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Contact Stinet Digital
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-xl border border-neutral-200 bg-white p-6 md:p-8" noValidate>
      <div>
        <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
          Request Your Consultation
        </Heading>
        <Text variant="body-sm" tone="muted">
          These details help us prepare for the conversation. You do not need
          to have all the answers before requesting a consultation.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
          Business Information
        </p>
        <Input
          id="consult-name"
          label="Full name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />
        <Input
          id="consult-company"
          label="Business / Organisation name"
          required
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          error={errors.company}
        />
        <Input
          id="consult-email"
          type="email"
          label="Business email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <Input
          id="consult-phone"
          type="tel"
          label="Phone / WhatsApp"
          required
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
          About Your Business
        </p>
        <Select
          id="consult-industry"
          label="Industry"
          required
          placeholder="Select your industry..."
          options={industryOptions}
          value={form.industry}
          onChange={(e) => update("industry", e.target.value)}
          error={errors.industry}
        />
        <Select
          id="consult-size"
          label="Approximate business size"
          placeholder="Select business size..."
          options={sizeOptions}
          value={form.size}
          onChange={(e) => update("size", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
          Your Business Needs
        </p>
        <Select
          id="consult-interest"
          label="What would you like to discuss?"
          required
          placeholder="Select an area..."
          options={interestOptions}
          value={form.interest}
          onChange={(e) => update("interest", e.target.value)}
          error={errors.interest}
        />
        <Textarea
          id="consult-priority"
          label="What is your biggest business priority?"
          hint="Optional"
          rows={2}
          value={form.priority}
          onChange={(e) => update("priority", e.target.value)}
        />
        <Textarea
          id="consult-current"
          label="How does your business currently handle this area?"
          hint="Optional"
          rows={2}
          value={form.currentProcess}
          onChange={(e) => update("currentProcess", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
          Meeting Preferences
        </p>
        <Select
          id="consult-format"
          label="Preferred consultation format"
          placeholder="Select format..."
          options={formatOptions}
          value={form.format}
          onChange={(e) => update("format", e.target.value)}
        />
        <Select
          id="consult-timing"
          label="When would you prefer to meet?"
          placeholder="Select timing..."
          options={timingOptions}
          value={form.timing}
          onChange={(e) => update("timing", e.target.value)}
        />
        <Textarea
          id="consult-extra"
          label="Additional information"
          hint="Optional"
          rows={2}
          value={form.extra}
          onChange={(e) => update("extra", e.target.value)}
        />
      </div>

      <Checkbox
        id="consult-consent"
        label={
          <>
            I consent to Stinet Digital using these details to process my
            consultation request and contact me, as explained in the{" "}
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
        Submit Consultation Request
      </Button>
    </form>
  );
}