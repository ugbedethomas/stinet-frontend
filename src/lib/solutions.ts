export type SolutionSlug =
  | "business-systems"
  | "ai-automation"
  | "digital-platforms"
  | "digital-growth"
  | "digital-academy";

export type Solution = {
  slug: SolutionSlug;
  title: string;
  shortTitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  featured: boolean;
  capabilities: string[];
  ctaLabel: string;
};

export const solutions: Solution[] = [
  {
    slug: "business-systems",
    title: "Business Systems & ERP",
    shortTitle: "Business Systems",
    description:
      "Connect operations, inventory, finance, sales and business processes through integrated software.",
    imageUrl: "/images/solution-erp.svg",
    imageAlt: "Business systems and ERP placeholder",
    href: "/solutions/business-systems",
    featured: true,
    capabilities: [
      "ERP & integrated operations",
      "Inventory & warehouse management",
      "Production management",
      "Procurement",
      "Sales & distribution",
      "Finance & management reporting",
    ],
    ctaLabel: "Explore Business Systems",
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    shortTitle: "AI & Automation",
    description:
      "Reduce repetitive work, streamline communication and introduce intelligent workflows.",
    imageUrl: "/images/solution-ai.svg",
    imageAlt: "AI and automation placeholder",
    href: "/solutions/ai-automation",
    featured: true,
    capabilities: [
      "AI assistants and chatbots",
      "Workflow automation",
      "WhatsApp & communication automation",
      "CRM & sales automation",
      "Document & data automation",
      "Custom AI integrations",
    ],
    ctaLabel: "Explore AI & Automation",
  },
  {
    slug: "digital-platforms",
    title: "Digital Platforms & Infrastructure",
    shortTitle: "Digital Platforms",
    description: "Websites, applications, cloud and connected technology.",
    imageUrl: "/images/solution-platforms.svg",
    imageAlt: "Digital platforms placeholder",
    href: "/solutions/digital-platforms",
    featured: false,
    capabilities: [
      "Website development",
      "Web applications",
      "Mobile applications",
      "Cloud infrastructure",
      "Networking & connectivity",
      "Infrastructure & security systems",
    ],
    ctaLabel: "Explore Digital Platforms",
  },
  {
    slug: "digital-growth",
    title: "Digital Growth & Visibility",
    shortTitle: "Digital Growth",
    description: "SEO, marketing, content and online growth.",
    imageUrl: "/images/solution-growth.svg",
    imageAlt: "Digital growth placeholder",
    href: "/solutions/digital-growth",
    featured: false,
    capabilities: [
      "Search engine optimisation",
      "Content strategy & production",
      "Social media management",
      "Digital advertising",
      "Lead generation & automation",
      "Analytics & conversion optimisation",
    ],
    ctaLabel: "Explore Digital Growth",
  },
  {
    slug: "digital-academy",
    title: "Digital Skills & Innovation Academy",
    shortTitle: "Academy",
    description: "Practical technology training and professional development.",
    imageUrl: "/images/solution-academy.svg",
    imageAlt: "Academy placeholder",
    href: "/academy",
    featured: false,
    capabilities: [
      "Digital skills training",
      "Business technology",
      "AI & automation training",
      "Corporate training programmes",
      "Practical workshops",
      "Professional development",
    ],
    ctaLabel: "Explore the Academy",
  },
];

export function getSolution(slug: SolutionSlug): Solution {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) {
    throw new Error(`Unknown solution slug: ${slug}`);
  }
  return solution;
}