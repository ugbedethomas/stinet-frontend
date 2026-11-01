import { Search, ClipboardList, Lightbulb, GitBranch, Users, BarChart3 } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ProcessStep } from "@/components/ui/ProcessStep";

const stages = [
  {
    letter: "S",
    number: "01 / 06",
    title: "Study the Business",
    description: "Understand your operations, goals, people and existing systems.",
    icon: <Search className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "T",
    number: "02 / 06",
    title: "Trace the Problems",
    description: "Identify operational gaps, inefficiencies and opportunities.",
    icon: <ClipboardList className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "I",
    number: "03 / 06",
    title: "Identify the Solution",
    description: "Design a practical technology strategy around your needs.",
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "N",
    number: "04 / 06",
    title: "Navigate Implementation",
    description: "Build, configure, integrate and deploy the agreed solution.",
    icon: <GitBranch className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "E",
    number: "05 / 06",
    title: "Enable the People",
    description: "Train your team and support adoption of the new systems.",
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "T",
    number: "06 / 06",
    title: "Track and Improve",
    description: "Review performance, resolve issues and identify improvements.",
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

export function OurMethod() {
  return (
    <section aria-labelledby="method-heading" className="w-full bg-navy-950">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
            How We Work
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-white">
            A Clear Process. Practical Solutions. Measurable Progress.
          </Heading>
          <Text variant="body-lg" tone="inverted" className="opacity-80">
            Technology transformation guided by business understanding,
            structured implementation and continuous improvement.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <ProcessStep
              key={stage.number}
              letter={stage.letter}
              number={stage.number}
              title={stage.title}
              description={stage.description}
              icon={stage.icon}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Text variant="body" tone="inverted" className="opacity-80">
            Every successful transformation starts with understanding.
          </Text>
          <Button href="/consultation" variant="inverse" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}