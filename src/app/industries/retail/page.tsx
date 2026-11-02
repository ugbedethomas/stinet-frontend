import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("retail");

export const metadata = {
  title: "Retail Management Systems & POS - Stinet Digital",
  description: "Improve retail inventory management, POS operations, customer management and multi-branch visibility with connected business technology.",
};

export default function RetailPage() {
  return <IndustryDetail industry={industry} />;
}