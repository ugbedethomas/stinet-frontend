export type IndustrySlug =
  | "manufacturing"
  | "distribution"
  | "retail"
  | "professional-services"
  | "construction"
  | "energy";

export type Industry = {
  slug: IndustrySlug;
  title: string;
  shortTitle: string;
  description: string;
  heroIntro: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  featured: boolean;
  capabilities: string[];
  challenges: { title: string; description: string }[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    description:
      "Connect procurement, production, inventory, quality and distribution with business systems designed for manufacturing operations.",
    heroIntro:
      "Manufacturing businesses coordinate people, materials, production, inventory and distribution. We help manufacturers connect these operations through practical business systems and intelligent automation.",
    imageUrl: "/images/industry-manufacturing.svg",
    imageAlt: "Manufacturing industry placeholder",
    href: "/industries/manufacturing",
    featured: true,
    capabilities: [
      "Inventory management",
      "Production management",
      "Procurement management",
      "Quality management",
      "Warehouse & distribution",
      "Finance & costing",
      "Sales & customer management",
      "Business intelligence",
    ],
    challenges: [
      {
        title: "Inventory uncertainty",
        description: "Difficulty tracking raw materials, work-in-progress and finished goods across locations.",
      },
      {
        title: "Production visibility",
        description: "Limited insight into production schedules, batches, output and operational bottlenecks.",
      },
      {
        title: "Disconnected departments",
        description: "Procurement, production, sales, finance and warehouse working from separate information.",
      },
      {
        title: "Limited management intelligence",
        description: "Delayed reporting and difficulty understanding costs, performance and operational trends.",
      },
    ],
  },
  {
    slug: "distribution",
    title: "Distribution",
    shortTitle: "Distribution",
    description: "Improve stock visibility, sales coordination and warehouse operations.",
    heroIntro:
      "Distribution businesses depend on accurate stock information, efficient order processing and reliable coordination between suppliers, warehouses, sales teams and customers.",
    imageUrl: "/images/industry-distribution.svg",
    imageAlt: "Distribution industry placeholder",
    href: "/industries/distribution",
    featured: false,
    capabilities: [
      "Inventory management",
      "Warehouse management",
      "Procurement & supplier management",
      "Sales & order management",
      "Distribution & delivery coordination",
      "Finance & costing",
      "Customer management",
      "Management reporting",
    ],
    challenges: [
      {
        title: "Inventory uncertainty",
        description: "Difficulty knowing what is available, where it is stored and when to replenish.",
      },
      {
        title: "Order processing delays",
        description: "Manual order handling creating errors, duplication and delays.",
      },
      {
        title: "Warehouse & delivery gaps",
        description: "Limited coordination between stock allocation, dispatch and delivery.",
      },
      {
        title: "Limited financial visibility",
        description: "Difficulty understanding margins, costs and outstanding payments.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    shortTitle: "Retail",
    description: "Connect sales, inventory and customer experiences.",
    heroIntro:
      "Retail businesses need accurate inventory, efficient sales processes and a clear understanding of customer activity. We help retailers connect these operations.",
    imageUrl: "/images/industry-retail.svg",
    imageAlt: "Retail industry placeholder",
    href: "/industries/retail",
    featured: false,
    capabilities: [
      "Point of sale",
      "Inventory & product management",
      "Procurement & supplier management",
      "Customer & loyalty management",
      "Multi-branch management",
      "Digital commerce integration",
      "Finance & sales reporting",
      "Business intelligence & automation",
    ],
    challenges: [
      {
        title: "Inventory inaccuracy",
        description: "Difficulty keeping physical stock, recorded inventory and actual sales aligned.",
      },
      {
        title: "Inefficient sales processing",
        description: "Manual transactions and disconnected sales records creating avoidable delays.",
      },
      {
        title: "Poor replenishment planning",
        description: "Difficulty identifying fast-moving products and knowing when to restock.",
      },
      {
        title: "Limited customer insights",
        description: "Incomplete customer records making it harder to understand purchasing behaviour.",
      },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortTitle: "Professional Services",
    description: "Improve client management and service delivery workflows.",
    heroIntro:
      "Professional service businesses depend on expertise, relationships and reliable delivery. We help firms modernise operations through practical software and automation.",
    imageUrl: "/images/industry-professional-services.svg",
    imageAlt: "Professional services industry placeholder",
    href: "/industries/professional-services",
    featured: false,
    capabilities: [
      "CRM & client management",
      "Project & task management",
      "Business process automation",
      "Document & information management",
      "Finance & billing",
      "Websites & client platforms",
      "AI & communication automation",
      "Business intelligence",
    ],
    challenges: [
      {
        title: "Missed business opportunities",
        description: "Enquiries and potential clients not followed up systematically.",
      },
      {
        title: "Manual administration",
        description: "Repetitive paperwork, data entry and routine tasks consuming valuable working time.",
      },
      {
        title: "Disconnected project management",
        description: "Limited visibility into assignments, deadlines, responsibilities and delivery progress.",
      },
      {
        title: "Fragmented client information",
        description: "Client records, communication and service history scattered across different tools.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    shortTitle: "Construction",
    description: "Connect project information, materials and operations.",
    heroIntro:
      "Construction projects involve people, materials, equipment, suppliers, budgets and deadlines. We help construction businesses improve coordination and operational visibility.",
    imageUrl: "/images/industry-construction.svg",
    imageAlt: "Construction industry placeholder",
    href: "/industries/construction",
    featured: false,
    capabilities: [
      "Project & task management",
      "Materials & inventory management",
      "Procurement & supplier management",
      "Equipment & asset management",
      "Project costing & financial visibility",
      "Quality & inspection workflows",
      "Document & team coordination",
      "Business intelligence & automation",
    ],
    challenges: [
      {
        title: "Limited project visibility",
        description: "Difficulty tracking project activities, responsibilities, progress and deadlines.",
      },
      {
        title: "Poor materials control",
        description: "Limited visibility into materials received, consumed, transferred and remaining.",
      },
      {
        title: "Procurement coordination gaps",
        description: "Difficulty coordinating suppliers, purchase requests, deliveries and approvals.",
      },
      {
        title: "Cost and budget uncertainty",
        description: "Difficulty monitoring project expenses, commitments, variations and cost performance.",
      },
    ],
  },
  {
    slug: "energy",
    title: "Energy",
    shortTitle: "Energy",
    description: "Support energy businesses with connected digital operations.",
    heroIntro:
      "Energy businesses manage equipment, installations, projects, customers, suppliers and ongoing service operations. We help energy companies connect these activities through practical systems.",
    imageUrl: "/images/industry-energy.svg",
    imageAlt: "Energy industry placeholder",
    href: "/industries/energy",
    featured: false,
    capabilities: [
      "Project & installation management",
      "Equipment & inventory management",
      "Procurement & supplier management",
      "Field service & maintenance",
      "CRM & customer management",
      "Finance & project costing",
      "Digital platforms & customer portals",
      "Business intelligence & automation",
    ],
    challenges: [
      {
        title: "Installation coordination",
        description: "Difficulty tracking installation schedules, responsibilities, materials and project progress.",
      },
      {
        title: "Equipment and inventory gaps",
        description: "Limited visibility into equipment availability, stock movements, serial numbers and warranty records.",
      },
      {
        title: "Field service management",
        description: "Difficulty coordinating technicians, maintenance requests, service visits and customer updates.",
      },
      {
        title: "Disconnected business information",
        description: "Project, sales, service and financial information existing across separate systems.",
      },
    ],
  },
];

export function getIndustry(slug: IndustrySlug): Industry {
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) {
    throw new Error(`Unknown industry slug: ${slug}`);
  }
  return industry;
}