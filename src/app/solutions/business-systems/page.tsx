import { getSolution } from "@/lib/solutions";
import { SolutionDetail, buildMetadata } from "@/components/sections/SolutionDetail";

const solution = getSolution("business-systems");

export const metadata = buildMetadata({
  title: "Business Systems & ERP - Stinet Digital",
  description:
    "Connect operations, inventory, finance, sales and business processes through integrated business systems and ERP from Stinet Digital.",
});

export default function BusinessSystemsPage() {
  return <SolutionDetail solution={solution} />;
}