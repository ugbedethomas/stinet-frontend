import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";

const featuredProject = {
  title: "Manufacturing ERP Project",
  description:
    "A business systems initiative focused on connecting paint manufacturing, inventory, warehouse operations and sales workflows.",
  category: "Business Systems & ERP",
  industry: "Manufacturing",
  imageUrl: "/images/project-manufacturing-erp.svg",
  imageAlt: "Manufacturing ERP project placeholder",
  href: "/work",
  status: "Publication Pending",
};

const supportingProjects = [
  {
    title: "Corporate Website Development",
    description: "Digital experiences, responsive interfaces and business-focused websites.",
    category: "Website Development",
    imageUrl: "/images/project-website.svg",
    imageAlt: "Website development project placeholder",
    href: "/work",
  },
  {
    title: "Business Workflow Automation",
    description: "Automation architecture, communication and customer management workflows.",
    category: "Automation",
    imageUrl: "/images/project-automation.svg",
    imageAlt: "Automation project placeholder",
    href: "/work",
  },
];

export function OurWork() {
  return (
    <section aria-labelledby="work-heading" className="w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Our Work
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            Real Challenges. Practical Technology. Meaningful Outcomes.
          </Heading>
          <Text variant="body-lg" tone="muted">
            Explore how we apply software, automation, digital platforms and
            technology to solve practical business challenges.
          </Text>
        </div>

        <div className="mb-8">
          <ProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            category={featuredProject.category}
            industry={featuredProject.industry}
            imageUrl={featuredProject.imageUrl}
            imageAlt={featuredProject.imageAlt}
            href={featuredProject.href}
            status={featuredProject.status}
            imageAspect="16/9"
            featured
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {supportingProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              href={project.href}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/work" variant="secondary" size="lg">
            Explore All Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}