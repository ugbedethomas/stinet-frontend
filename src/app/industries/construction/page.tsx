import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("construction");

export const metadata = {
  title: "Construction Management Systems - Stinet Digital",
  description: "Improve construction project coordination, materials management, procurement and operational visibility with practical digital solutions.",
};

export default function ConstructionPage() {
  return <IndustryDetail industry={industry} />;
}