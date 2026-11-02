import { getSolution } from "@/lib/solutions";
import { SolutionDetail, buildMetadata } from "@/components/sections/SolutionDetail";

const solution = getSolution("digital-growth");

export const metadata = buildMetadata({
  title: "Digital Growth & Visibility - Stinet Digital",
  description: "SEO, digital marketing, content strategy and online growth services from Stinet Digital.",
});

export default function DigitalGrowthPage() {
  return <SolutionDetail solution={solution} />;
}