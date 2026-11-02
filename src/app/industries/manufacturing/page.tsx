import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("manufacturing");

export const metadata = {
  title: "Manufacturing Digital Transformation - Stinet Digital",
  description: "Manufacturing digital transformation, ERP and automation solutions from Stinet Digital. Connect production, inventory, procurement and business operations.",
};

export default function ManufacturingPage() {
  return <IndustryDetail industry={industry} />;
}