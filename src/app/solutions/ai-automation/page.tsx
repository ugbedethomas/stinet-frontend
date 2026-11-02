import { getSolution } from "@/lib/solutions";
import { SolutionDetail, buildMetadata } from "@/components/sections/SolutionDetail";

const solution = getSolution("ai-automation");

export const metadata = buildMetadata({
  title: "AI & Business Automation - Stinet Digital",
  description: "Reduce repetitive work, streamline communication and introduce intelligent workflows through AI and business automation from Stinet Digital.",
});

export default function AiAutomationPage() {
  return <SolutionDetail solution={solution} />;
}