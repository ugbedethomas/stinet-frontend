import { getSolution } from "@/lib/solutions";
import { SolutionDetail, buildMetadata } from "@/components/sections/SolutionDetail";

const solution = getSolution("digital-platforms");

export const metadata = buildMetadata({
  title: "Digital Platforms & Infrastructure - Stinet Digital",
  description: "Websites, applications, cloud infrastructure and connected technology from Stinet Digital.",
});

export default function DigitalPlatformsPage() {
  return <SolutionDetail solution={solution} />;
}