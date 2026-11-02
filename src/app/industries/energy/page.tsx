import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("energy");

export const metadata = {
  title: "Energy Business Management Systems - Stinet Digital",
  description: "Improve energy project management, equipment inventory, installation coordination and customer service with connected digital solutions.",
};

export default function EnergyPage() {
  return <IndustryDetail industry={industry} />;
}