import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("distribution");

export const metadata = {
  title: "Distribution Systems & ERP - Stinet Digital",
  description: "Improve inventory visibility, warehouse management, sales operations and delivery coordination with connected distribution business systems.",
};

export default function DistributionPage() {
  return <IndustryDetail industry={industry} />;
}