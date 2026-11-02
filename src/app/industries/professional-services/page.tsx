import { getIndustry } from "@/lib/industries";
import { IndustryDetail } from "@/components/sections/IndustryDetail";

const industry = getIndustry("professional-services");

export const metadata = {
  title: "Professional Services Digital Solutions - Stinet Digital",
  description: "Modernise your professional services business with connected client management, project workflows, business software and intelligent automation.",
};

export default function ProfessionalServicesPage() {
  return <IndustryDetail industry={industry} />;
}