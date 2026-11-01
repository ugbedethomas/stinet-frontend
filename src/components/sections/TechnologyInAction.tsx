import Image from "next/image";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { DemoCard } from "@/components/ui/DemoCard";

const supportingDemos = [
  {
    title: "CRM & Sales Systems",
    description: "Customer and sales workflows.",
    imageUrl: "/images/demo-crm.svg",
    imageAlt: "CRM and sales systems demo placeholder",
    href: "/solutions/business-systems",
  },
  {
    title: "AI & Automation",
    description: "Connected business processes.",
    imageUrl: "/images/demo-ai-automation.svg",
    imageAlt: "AI and automation demo placeholder",
    href: "/solutions/ai-automation",
  },
  {
    title: "Business Intelligence",
    description: "Reporting and decision support.",
    imageUrl: "/images/demo-bi.svg",
    imageAlt: "Business intelligence demo placeholder",
    href: "/solutions/business-systems",
  },
];

export function TechnologyInAction() {
  return (
    <section
      aria-labelledby="tech-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Technology in Action
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            See What Connected Business Operations Look Like.
          </Heading>
          <Text variant="body-lg" tone="muted">
            Explore how software, intelligent automation and connected digital
            systems can transform everyday business operations.
          </Text>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl bg-navy-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col gap-4 p-8 lg:col-span-5 md:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold-500/20 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-gold-500">
                  Featured Demonstration
                </span>
                <span className="rounded-full bg-neutral-200 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  Illustrative Interface
                </span>
              </div>
              <Heading level="h3" variant="h3" className="text-white">
                Manufacturing ERP System
              </Heading>
              <Text variant="body" tone="inverted" className="opacity-90">
                See how procurement, inventory, production, sales and reporting
                can work together through one connected business system.
              </Text>
              <ul className="mt-2 flex flex-col gap-2 text-[14px] text-neutral-300">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-gold-500">•</span>
                  Inventory Control
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-gold-500">•</span>
                  Production Management
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-gold-500">•</span>
                  Sales Operations
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-gold-500">•</span>
                  Business Reporting
                </li>
              </ul>
              <div className="pt-4">
                <Button
                  href="/demonstrations"
                  variant="inverse"
                  size="lg"
                >
                  Explore Manufacturing ERP
                </Button>
              </div>
            </div>
            <div className="relative lg:col-span-7" style={{ minHeight: "320px" }}>
              <Image
                src="/images/demo-manufacturing-erp.svg"
                alt="Manufacturing ERP demonstration placeholder"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportingDemos.map((demo) => (
            <DemoCard
              key={demo.href + demo.title}
              title={demo.title}
              description={demo.description}
              imageUrl={demo.imageUrl}
              imageAlt={demo.imageAlt}
              href={demo.href}
              status="Illustrative Interface"
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <Heading level="h3" variant="h4" className="mb-1 text-neutral-900">
              Want to see how it could work in your business?
            </Heading>
            <Text variant="body" tone="muted">
              Request a guided technology demonstration with our team.
            </Text>
          </div>
          <Button href="/demonstrations" variant="primary" size="lg">
            Request a Live Demonstration
          </Button>
        </div>
      </div>
    </section>
  );
}