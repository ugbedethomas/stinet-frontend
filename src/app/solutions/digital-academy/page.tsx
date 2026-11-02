import { getSolution } from "@/lib/solutions";
import { SolutionDetail, buildMetadata } from "@/components/sections/SolutionDetail";

const solution = getSolution("digital-academy");

export const metadata = buildMetadata({
  title: "Digital Skills & Innovation Academy - Stinet Digital",
  description: "Practical technology training, professional development and corporate learning from Stinet Digital Academy.",
});

export default function DigitalAcademyPage() {
  return <SolutionDetail solution={solution} />;
}