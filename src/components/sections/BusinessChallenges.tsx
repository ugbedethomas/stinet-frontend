import { Network, Repeat2, EyeOff, GitBranch } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ChallengeCard } from "@/components/ui/ChallengeCard";

const challenges = [
  {
    title: "Disconnected Information",
    description:
      "Important business information lives across spreadsheets, applications and departments.",
    icon: <Network className="h-6 w-6" aria-hidden="true" />,
    href: "/solutions/business-systems",
  },
  {
    title: "Manual Processes",
    description:
      "Teams spend valuable time repeating tasks that could be streamlined or automated.",
    icon: <Repeat2 className="h-6 w-6" aria-hidden="true" />,
    href: "/solutions/ai-automation",
  },
  {
    title: "Limited Business Visibility",
    description:
      "Management struggles to get timely, reliable information about stock, performance and operations.",
    icon: <EyeOff className="h-6 w-6" aria-hidden="true" />,
    href: "/solutions/business-systems",
  },
  {
    title: "Disconnected Workflows",
    description:
      "Departments, systems and people operate in silos, making coordination more difficult.",
    icon: <GitBranch className="h-6 w-6" aria-hidden="true" />,
    href: "/solutions/ai-automation",
  },
];

export function BusinessChallenges() {
  return (
    <section
      aria-labelledby="challenges-heading"
      className="w-full bg-neutral-50"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            The Business Challenge
          </p>
          <Heading
            level="h2"
            variant="h2"
            className="mb-4 text-neutral-900"
          >
            Your Business Has Grown. Have Your Systems Kept Up?
          </Heading>
          <Text variant="body-lg" tone="muted">
            Growth brings opportunity, but disconnected systems and manual
            processes can make it harder to manage your operations effectively.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon}
              href={challenge.href}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-neutral-200 bg-white p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <Heading level="h3" variant="h4" className="mb-1 text-neutral-900">
              Your business deserves systems that grow with it.
            </Heading>
            <Text variant="body" tone="muted">
              Let&apos;s identify what&apos;s slowing your operations down and where
              technology can make a meaningful difference.
            </Text>
          </div>
          <Button href="/consultation" variant="primary" size="lg">
            Let&apos;s Discuss Your Business
          </Button>
        </div>
      </div>
    </section>
  );
}