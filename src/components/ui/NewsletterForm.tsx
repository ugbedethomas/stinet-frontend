"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/typography/Text";
import { Heading } from "@/components/typography/Heading";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "pending">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setStatus("invalid");
      return;
    }
    setStatus("pending");
  }

  return (
    <div className="overflow-hidden rounded-xl bg-navy-950 p-8 text-white md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Text variant="caption" tone="gold" className="mb-2 uppercase tracking-[0.18em]">
            The Business Transformation Brief
          </Text>
          <Heading level="h3" variant="h3" className="mb-2 text-white">
            Ideas Worth Reading. Insights Worth Applying.
          </Heading>
          <Text variant="body" tone="inverted" className="opacity-80">
            Practical business and technology insights delivered to your inbox.
          </Text>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 md:flex-row md:items-start">
        <div className="flex-1">
          <Input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            error={status === "invalid" ? "Please enter a valid email address." : undefined}
            aria-label="Email address"
          />
        </div>
        <Button type="submit" variant="inverse" size="lg" loading={status === "pending"}>
          Subscribe
        </Button>
      </form>

      {status === "pending" && (
        <p className="mt-3 font-body text-[13px] text-gold-500">
          Newsletter subscriptions will be available soon. Thank you for your interest.
        </p>
      )}
      <p className="mt-3 font-body text-[12px] text-neutral-500">
        By subscribing you agree to receive email updates from Stinet Digital. You can unsubscribe at any time.
      </p>
    </div>
  );
}