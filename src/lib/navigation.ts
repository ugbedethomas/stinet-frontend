export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Business Systems & ERP",
        href: "/solutions/business-systems",
        description: "Connect operations, inventory, sales and reporting.",
      },
      {
        label: "AI & Business Automation",
        href: "/solutions/ai-automation",
        description: "Reduce repetitive work and connect workflows.",
      },
      {
        label: "Digital Platforms & Infrastructure",
        href: "/solutions/digital-platforms",
        description: "Websites, applications, cloud and networking.",
      },
      {
        label: "Digital Growth & Visibility",
        href: "/solutions/digital-growth",
        description: "SEO, content, marketing and acquisition systems.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Production, inventory and distribution systems.",
      },
      {
        label: "Paint Manufacturing",
        href: "/industries/manufacturing/paint-manufacturing",
        description: "Formulation, batch tracking and quality control.",
      },
      {
        label: "Distribution",
        href: "/industries/distribution",
        description: "Warehouse, stock and sales coordination.",
      },
      {
        label: "Retail",
        href: "/industries/retail",
        description: "POS, inventory and customer management.",
      },
      {
        label: "Professional Services",
        href: "/industries/professional-services",
        description: "CRM, projects and service workflows.",
      },
      {
        label: "Construction",
        href: "/industries/construction",
        description: "Projects, materials and cost coordination.",
      },
      {
        label: "Energy",
        href: "/industries/energy",
        description: "Installations, equipment and field service.",
      },
    ],
  },
  {
    label: "Our Work",
    href: "/work",
    children: [],
  },
  {
    label: "Academy",
    href: "/academy",
    children: [],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [],
  },
  {
    label: "About",
    href: "/about",
    children: [],
  },
];

export const primaryCta = {
  label: "Book a Consultation",
  href: "/consultation",
};

export type FooterLinkGroup = {
  label: string;
  links: NavLink[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Solutions",
    links: [
      { label: "Business Systems & ERP", href: "/solutions/business-systems" },
      { label: "AI & Automation", href: "/solutions/ai-automation" },
      { label: "Digital Platforms", href: "/solutions/digital-platforms" },
      { label: "Digital Growth", href: "/solutions/digital-growth" },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Distribution", href: "/industries/distribution" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Energy", href: "/industries/energy" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Method", href: "/our-method" },
      { label: "Our Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Learning & Connect",
    links: [
      { label: "Stinet Academy", href: "/academy" },
      { label: "Courses", href: "/academy/courses" },
      { label: "Corporate Training", href: "/academy/corporate-training" },
      { label: "Events", href: "/events" },
      { label: "Book a Consultation", href: "/consultation" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Accessibility", href: "/accessibility" },
];

export const footerTagline = {
  eyebrow: "Your Business Transformation Partner",
  description:
    "We help businesses modernise operations, connect systems and unlock new opportunities through practical software, intelligent automation and digital innovation.",
};