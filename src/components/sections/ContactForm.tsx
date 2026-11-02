"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

const interestOptions = [
  { value: "business-systems", label: "Business Systems & ERP" },
  { value: "ai-automation", label: "AI & Business Automation" },
  { value: "digital-platforms", label: "Digital Platforms & Infrastructure" },
  { value: "digital-growth", label: "Digital Growth & Visibility" },
  { value: "training", label: "Corporate Training" },
  { value: "general", label: "General Enquiry" },
  { value: "not-sure", label: "Not sure yet - I need guidance" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  consent: false,
};

export function ContactForm() {
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
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.interest) next.interest = "Please select an area of interest.";
    if (!form.message.trim()) next.message = "Please tell us about your enquiry.";
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
          Online enquiry submission will be available soon. For immediate
          contact, please use the phone or email shown on this page once verified.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 md:p-8" noValidate>
      <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
        Send Us an Enquiry
      </Heading>
      <Text variant="body-sm" tone="muted" className="mb-2">
        Complete the form below. The more context you provide, the better we can
        understand your needs.
      </Text>

      <Input
        id="contact-name"
        label="Full name"
        required
        autoComplete="name"
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
        error={errors.name}
      />
      <Input
        id="contact-company"
        label="Company / Organisation"
        autoComplete="organization"
        hint="Optional"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
      />
      <Input
        id="contact-email"
        type="email"
        label="Business email"
        required
        autoComplete="email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        error={errors.email}
      />
      <Input
        id="contact-phone"
        type="tel"
        label="Phone / WhatsApp"
        required
        autoComplete="tel"
        value={form.phone}
        onChange={(e) => update("phone", e.target.value)}
        error={errors.phone}
      />
      <Select
        id="contact-interest"
        label="What would you like to discuss?"
        required
        placeholder="Select an area..."
        options={interestOptions}
        value={form.interest}
        onChange={(e) => update("interest", e.target.value)}
        error={errors.interest}
      />
      <Textarea
        id="contact-message"
        label="Tell us about your enquiry"
        required
        rows={4}
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
      />
      <Checkbox
        id="contact-consent"
        label={
          <>
            I agree that Stinet Digital may use the information submitted to
            respond to my enquiry, in accordance with the{" "}
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
    </form>
  );
}