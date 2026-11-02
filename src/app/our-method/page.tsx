import type { Metadata } from "next";
import { Users, Workflow, Server, Database, TrendingUp, Search, ClipboardList, Lightbulb, GitBranch, GraduationCap, BarChart3 } from "lucide-react";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Business Transformation Process - Stinet Digital",
  description:
    "Discover how Stinet Digital approaches business transformation through discovery, problem analysis, solution design, implementation, training and continuous improvement.",
};

const philosophy = [
  { title: "People", description: "Understand the people who use, manage and depend on the business processes.", icon: <Users className="h-5 w-5" aria-hidden="true" /> },
  { title: "Processes", description: "Examine how work is currently performed and where delays or inefficiencies occur.", icon: <Workflow className="h-5 w-5" aria-hidden="true" /> },
  { title: "Systems", description: "Identify the software, tools and infrastructure needed to support the business.", icon: <Server className="h-5 w-5" aria-hidden="true" /> },
  { title: "Information", description: "Improve how business information is captured, connected, accessed and used for decisions.", icon: <Database className="h-5 w-5" aria-hidden="true" /> },
  { title: "Improvement", description: "Review performance, identify opportunities and continuously improve the solution.", icon: <TrendingUp className="h-5 w-5" aria-hidden="true" /> },
];

const stages = [
  {
    letter: "S",
    title: "Study the Business",
    tagline: "Discovery & Understanding",
    description: "Understand the organisation, its objectives, structure, operations, existing systems and business environment.",
    activities: ["Stakeholder discussions", "Business discovery sessions", "Review of current tools and systems", "Understanding business goals"],
    deliverables: ["Business discovery brief", "Initial requirements", "Stakeholder and process overview"],
    icon: <Search className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "T",
    title: "Trace the Problems",
    tagline: "Analysis & Diagnosis",
    description: "Examine how current operations work, identify gaps and understand the causes of operational challenges.",
    activities: ["Process mapping", "Bottleneck identification", "Data and workflow assessment", "Prioritisation of business problems"],
    deliverables: ["Current-state process map", "Problem assessment", "Prioritised improvement opportunities"],
    icon: <ClipboardList className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "I",
    title: "Identify the Solution",
    tagline: "Solution Strategy & Design",
    description: "Determine the most appropriate technology and implementation approach for the identified business needs.",
    activities: ["Solution architecture", "Functional requirements", "Technology selection", "Scope, budget and implementation planning"],
    deliverables: ["Proposed solution", "Scope and requirements document", "Implementation roadmap"],
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "N",
    title: "Navigate Implementation",
    tagline: "Development & Integration",
    description: "Build, configure, integrate and test the agreed solution through a controlled implementation process.",
    activities: ["Development and configuration", "Integration with approved systems", "Testing and quality assurance", "Deployment preparation"],
    deliverables: ["Developed or configured solution", "Tested workflows", "Deployment and implementation records"],
    icon: <GitBranch className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "E",
    title: "Enable the People",
    tagline: "Training & Handover",
    description: "Prepare the people who will use and manage the solution so that the organisation can adopt it effectively.",
    activities: ["User training", "Operational documentation", "Knowledge transfer", "Go-live support and handover"],
    deliverables: ["User guides and documentation", "Training and handover records", "Support and escalation information"],
    icon: <GraduationCap className="h-5 w-5" aria-hidden="true" />,
  },
  {
    letter: "T",
    title: "Track and Improve",
    tagline: "Monitoring & Continuous Improvement",
    description: "Review how the solution performs, gather feedback and identify opportunities for improvement.",
    activities: ["Performance reviews", "User feedback", "Issue tracking", "Improvement recommendations"],
    deliverables: ["Performance review", "Improvement recommendations", "Ongoing support or enhancement plan, where agreed"],
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
  },
];

const applications = [
  { title: "Manufacturing ERP", description: "Understand production and inventory operations, map workflows, design an integrated business system, implement and train users.", outcome: "Better operational visibility and control." },
  { title: "AI & Business Automation", description: "Identify repetitive work, map decision points, design automation workflows, test them and introduce human oversight where needed.", outcome: "More efficient and consistent workflows." },
  { title: "Digital Platforms", description: "Understand user needs, define platform requirements, design and develop the solution, test and deploy it.", outcome: "A reliable digital platform aligned with business needs." },
  { title: "Digital Growth", description: "Assess the market and existing digital presence, define the growth strategy, execute campaigns and measure performance.", outcome: "Stronger visibility and measurable marketing improvement." },
];

const clientExperience = [
  { title: "Clear understanding", description: "We take time to understand the business before recommending technology." },
  { title: "Defined scope", description: "Project requirements, deliverables and exclusions are documented." },
  { title: "Transparent decisions", description: "Technology choices are explained in business terms." },
  { title: "Structured implementation", description: "Work follows agreed stages and milestones." },
  { title: "Practical adoption", description: "People receive appropriate training and handover." },
  { title: "Continuous improvement", description: "Performance and future opportunities can be reviewed." },
];

const engagementSteps = [
  { title: "Initial Conversation", description: "Tell us about your business and the challenge." },
  { title: "Discovery Meeting", description: "We ask questions and understand the current situation." },
  { title: "Assessment & Recommendation", description: "We identify the opportunity and propose an approach." },
  { title: "Proposal & Agreement", description: "We confirm scope, deliverables, costs and timelines." },
  { title: "Project Kick-off", description: "Work begins after approval and agreement." },
];

const faqs = [
  { q: "Do you begin every project with a discovery session?", a: "We aim to understand the business need before recommending a solution. The depth of discovery depends on the project's size and complexity." },
  { q: "Do you only work with large businesses?", a: "No. The appropriate solution depends on the organisation's needs, operational complexity and available resources." },
  { q: "Can you work with our existing software?", a: "Where technically and commercially feasible, we assess existing systems and explore integration, improvement or replacement options." },
  { q: "Do you provide training after implementation?", a: "Training and knowledge transfer can form part of the agreed project scope." },
  { q: "How long does implementation take?", a: "Timelines depend on the project scope, complexity, integrations, data requirements and client readiness. We establish an estimated schedule during planning." },
  { q: "Do you provide support after deployment?", a: "Post-implementation support and maintenance arrangements can be agreed as part of the engagement." },
  { q: "Can we start with a small project?", a: "Yes. Where appropriate, we can identify a manageable first phase and plan for future improvements." },
];

export default function OurMethodPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              The STINET Method
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              From Business Challenges to Practical Technology Solutions.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              Every business is different. That&apos;s why we don&apos;t begin
              with software or technology. We begin by understanding your
              business, identifying what needs to improve and designing a
              practical solution that supports the way your organisation works.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a Business Consultation
              </Button>
              <Button href="/solutions" variant="inverse" size="lg">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Good Technology Starts With Understanding the Business.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Buying software is not the same as solving a business problem. A
              successful digital transformation requires an understanding of the
              people, processes, information and systems involved.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {philosophy.map((item) => (
              <div key={item.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                  {item.icon}
                </div>
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {item.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              A Structured Approach to Business Transformation.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Six connected stages guide every engagement, from understanding the
              challenge to improving the result.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <div key={`${stage.letter}-${index}`} className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex items-start justify-between">
                  <span aria-hidden="true" className="font-heading text-[36px] font-bold leading-[1] text-gold-500">
                    {stage.letter}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-body text-[11px] font-semibold tracking-wider text-neutral-500">
                    {String(index + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500/15 text-gold-600">
                  {stage.icon}
                </div>
                <div>
                  <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                    {stage.tagline}
                  </p>
                  <Heading level="h3" variant="h4" className="mb-2 mt-1 text-neutral-900">
                    {stage.title}
                  </Heading>
                  <Text variant="body-sm" tone="muted">
                    {stage.description}
                  </Text>
                </div>
                <div>
                  <p className="mb-1 font-body text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    Key Activities
                  </p>
                  <ul className="flex flex-col gap-1">
                    {stage.activities.map((activity) => (
                      <li key={activity} className="font-body text-[12px] text-neutral-600">
                        · {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 font-body text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    Expected Deliverables
                  </p>
                  <ul className="flex flex-col gap-1">
                    {stage.deliverables.map((d) => (
                      <li key={d} className="font-body text-[12px] text-neutral-600">
                        · {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              One Method. Different Business Applications.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {applications.map((app) => (
              <div key={app.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <Heading level="h3" variant="h4" className="mb-2 text-neutral-900">
                  {app.title}
                </Heading>
                <Text variant="body-sm" tone="muted" className="mb-2">
                  {app.description}
                </Text>
                <p className="font-body text-[13px] font-semibold text-blue-600">
                  Outcome sought: {app.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Clarity at Every Stage. No Guesswork.
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clientExperience.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/15 text-[11px] font-semibold text-blue-600">
                  ✓
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-neutral-900">{item.title}</p>
                  <p className="font-body text-[13px] leading-[1.5] text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              What Happens After You Contact Us?
            </Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {engagementSteps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-6">
                <span className="font-heading text-[24px] font-bold text-blue-600">
                  {index + 1}
                </span>
                <p className="font-heading text-[15px] font-semibold text-neutral-900">{step.title}</p>
                <p className="font-body text-[13px] leading-[1.5] text-neutral-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <Heading level="h2" variant="h2" className="mb-8 text-center text-neutral-900">
              Questions About Our Method.
            </Heading>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-lg border border-neutral-200 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg p-5 font-heading text-[15px] font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                    <span>{faq.q}</span>
                    <span aria-hidden="true" className="text-[12px] text-neutral-400 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="border-t border-neutral-200 px-5 py-4 font-body text-[14px] leading-[1.6] text-neutral-500">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Heading level="h2" variant="h2" className="max-w-[760px] text-white">
              Every Better Business System Starts With the Right Conversation.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Tell us what is happening in your business. We&apos;ll help you
              understand the challenge and identify a practical way forward.
            </Text>
            <Button href="/consultation" variant="inverse" size="lg">
              Book a Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}