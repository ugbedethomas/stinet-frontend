import type { Metadata } from "next";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Paint Manufacturing ERP & Software - Stinet Digital",
  description:
    "Explore paint manufacturing ERP and digital transformation solutions for raw materials, formulations, batch production, quality control, inventory, costing and distribution.",
};

const challenges = [
  {
    title: "Raw Material Control",
    description: "Difficulty monitoring pigments, resins, solvents, additives and packaging materials.",
  },
  {
    title: "Formulation Management",
    description: "Difficulty maintaining formulation records, revisions and accurate material requirements.",
  },
  {
    title: "Batch Production",
    description: "Limited visibility into production orders, actual material consumption and batch output.",
  },
  {
    title: "Quality Control",
    description: "Difficulty recording test results, approvals, rejected batches and corrective actions.",
  },
  {
    title: "Finished Goods Management",
    description: "Difficulty tracking product variants, packaging sizes, available stock and warehouse locations.",
  },
  {
    title: "Warehouse & Distribution",
    description: "Limited visibility into stock allocation, transfers, dispatch and deliveries.",
  },
  {
    title: "Production Costing",
    description: "Difficulty understanding material costs, production expenses and product margins.",
  },
  {
    title: "Sales & Customer Management",
    description: "Disconnected customer records, quotations, orders, payments and sales information.",
  },
];

const workflowSteps = [
  { step: "01", title: "Procurement & Supplier Management", description: "Purchase raw materials, manage suppliers and record incoming deliveries." },
  { step: "02", title: "Raw Material Inventory", description: "Track material quantities, units of measure, warehouse locations and stock movements." },
  { step: "03", title: "Formulation & Product Management", description: "Maintain product formulations, approved revisions and material requirements." },
  { step: "04", title: "Production Planning & Batch Manufacturing", description: "Create production orders, record batch activities and monitor material consumption." },
  { step: "05", title: "Quality Control & Approval", description: "Record tests, inspection results, quality decisions and batch release status." },
  { step: "06", title: "Packaging & Finished Goods", description: "Record packaging, product variants, quantities and finished stock." },
  { step: "07", title: "Warehouse & Distribution", description: "Allocate inventory, process transfers, prepare dispatches and manage deliveries." },
  { step: "08", title: "Sales, Finance & Reporting", description: "Connect orders, customer accounts, costs and management information." },
];

export default function PaintManufacturingPage() {
  return (
    <>
      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 max-w-[860px]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              Digital Transformation for Paint Manufacturing
            </p>
            <h1 className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08]">
              Bring Every Part of Your Paint Manufacturing Business Under Control.
            </h1>
            <p className="font-body text-[18px] leading-[1.7] text-neutral-300 max-w-[680px]">
              From raw materials and paint formulations to batch production,
              inventory, quality control, finished goods and distribution,
              Stinet Digital helps paint manufacturers connect their operations
              through practical business software and intelligent automation.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/consultation" variant="primary" size="lg">
                Book a Paint Manufacturing Consultation
              </Button>
              <Button href="/demonstrations" variant="inverse" size="lg">
                Request an ERP Demonstration
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Your Paint Factory Has Many Moving Parts. Are They Working Together?
            </Heading>
            <Text variant="body-lg" tone="muted">
              Common operational challenges paint manufacturers face as they grow.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <Heading level="h3" variant="h5" className="mb-2 text-neutral-900">
                  {challenge.title}
                </Heading>
                <Text variant="body-sm" tone="muted">
                  {challenge.description}
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
              Connect the Entire Journey — From Raw Materials to the Customer.
            </Heading>
            <Text variant="body-lg" tone="muted">
              One connected operational environment across every stage of the
              paint manufacturing process.
            </Text>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step) => (
                <div key={step.step} className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-4">
                  <span className="font-heading text-[20px] font-bold text-blue-600">
                    {step.step}
                  </span>
                  <p className="font-heading text-[14px] font-semibold text-neutral-900">
                    {step.title}
                  </p>
                  <p className="font-body text-[13px] leading-[1.5] text-neutral-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg bg-navy-950 p-5 text-center">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
                Management Visibility & Business Intelligence
              </p>
              <p className="mt-1 font-body text-[13px] text-neutral-400">
                Operational reports · Inventory position · Production performance · Cost information
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Everything Your Paint Factory Needs to Manage Its Operations.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Twelve connected modules covering the full paint manufacturing workflow.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", t: "Raw Material & Inventory", d: "Manage pigments, resins, solvents, additives, packaging and stock movements." },
              { n: "02", t: "Formulation & BOM", d: "Maintain product recipes, formulation versions and material requirements." },
              { n: "03", t: "Production Planning", d: "Plan production orders, allocate materials and monitor progress." },
              { n: "04", t: "Batch & Lot Tracking", d: "Associate batches with materials, records, tests and finished goods." },
              { n: "05", t: "Quality Assurance", d: "Capture inspections, test results, batch approvals and rejections." },
              { n: "06", t: "Packaging & Finished Goods", d: "Track packaging sizes, product variants, quantities and stock." },
              { n: "07", t: "Warehouse Management", d: "Manage locations, allocation, transfers, dispatches and reconciliation." },
              { n: "08", t: "Procurement & Suppliers", d: "Manage suppliers, purchase orders, receiving and supplier records." },
              { n: "09", t: "Sales & Distribution", d: "Manage customers, quotations, orders, dispatch and distribution." },
              { n: "10", t: "Finance & Product Costing", d: "Track production costs, material consumption and inventory valuation." },
              { n: "11", t: "Reports & Analytics", d: "Provide management insight on stock, production, sales and costs." },
              { n: "12", t: "Automation & Integrations", d: "Connect workflows, notifications and business processes." },
            ].map((mod) => (
              <div key={mod.n} className="rounded-lg border border-neutral-200 bg-white p-5">
                <p className="font-heading text-[12px] font-semibold text-blue-600">{mod.n}</p>
                <p className="mt-1 font-heading text-[15px] font-semibold text-neutral-900">{mod.t}</p>
                <p className="mt-2 font-body text-[13px] leading-[1.5] text-neutral-500">{mod.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-navy-950 text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="rounded-full bg-gold-500/20 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-gold-500">
                Featured Demonstration
              </span>
              <span className="rounded-full bg-neutral-200 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                Illustrative Interface
              </span>
            </div>
            <Heading level="h2" variant="h2" className="mb-4 text-white">
              See How a Paint Manufacturing ERP Workflow Can Work.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="opacity-80">
              One complete business scenario from customer order to finished
              goods and management reporting.
            </Text>
          </div>
          <div className="mx-auto max-w-[900px] rounded-xl border border-navy-800 bg-navy-900 p-6 md:p-10">
            <ol className="flex flex-col gap-3">
              {[
                "Check finished goods availability",
                "Review production requirements if stock is insufficient",
                "Check approved formulation and material requirements",
                "Confirm raw material availability",
                "Create a production order",
                "Record batch production and material consumption",
                "Complete quality checks",
                "Approve the batch for release",
                "Record packaging and finished goods",
                "Fulfil the customer order",
                "Review resulting inventory and costing information",
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 font-body text-[11px] font-semibold text-gold-500">
                    {index + 1}
                  </span>
                  <span className="font-body text-[14px] text-neutral-300">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex justify-center">
              <Button href="/demonstrations" variant="inverse" size="lg">
                Request a Paint ERP Demonstration
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
              Transform Your Factory One Stage at a Time.
            </Heading>
            <Text variant="body-lg" tone="muted">
              Implementation is planned around your operations, data and readiness.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "1", t: "Business Discovery", d: "Review existing processes, departments, software and operational requirements." },
              { n: "2", t: "Process and Systems Design", d: "Define modules, workflows, permissions, integrations and reporting." },
              { n: "3", t: "Configuration and Development", d: "Build or configure the agreed functionality and prepare the environment." },
              { n: "4", t: "Data Preparation and Testing", d: "Validate records, test workflows and reconcile relevant opening balances." },
              { n: "5", t: "Training and Deployment", d: "Prepare users, conduct training and introduce the system according to an agreed rollout plan." },
              { n: "6", t: "Support and Improvement", d: "Review performance, resolve issues and identify further improvements." },
            ].map((stage) => (
              <div key={stage.n} className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-6">
                <span className="font-heading text-[24px] font-bold text-blue-600">{stage.n}</span>
                <p className="font-heading text-[15px] font-semibold text-neutral-900">{stage.t}</p>
                <p className="font-body text-[13px] leading-[1.5] text-neutral-500">{stage.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[860px]">
            <Heading level="h2" variant="h2" className="mb-8 text-center text-neutral-900">
              Paint Manufacturing Software — Questions Answered.
            </Heading>
            <div className="flex flex-col gap-3">
              {[
                { q: "Can an ERP system manage raw materials and finished paint products?", a: "Yes — a properly configured paint manufacturing system tracks raw materials, intermediate products and finished goods as connected inventory categories." },
                { q: "Can it manage paint formulations and recipe revisions?", a: "Yes — formulation and bill-of-materials management records approved recipes, revisions and material quantities." },
                { q: "Can production batches be tracked from raw materials to finished goods?", a: "Batch and lot tracking is a core capability of manufacturing ERP, connecting materials, production activities, tests and final products." },
                { q: "Can quality control be integrated into production?", a: "Quality inspections and batch release status can be recorded as part of the production workflow." },
                { q: "Can the system manage different paint types and packaging sizes?", a: "Product variants and packaging configurations are supported, subject to the agreed scope of implementation." },
                { q: "Can multiple warehouses and distribution locations be managed?", a: "Multi-warehouse support is a standard capability of manufacturing and distribution ERP systems." },
                { q: "Can we migrate existing inventory and customer records?", a: "Data migration is typically possible. Scope, quality of existing data and reconciliation requirements are established during discovery." },
                { q: "Can the system be implemented in phases?", a: "Yes — phased rollouts reduce operational disruption and are often recommended for larger manufacturers." },
                { q: "Can the system be customised around our existing factory processes?", a: "Configured business systems can be adapted around specific operational requirements, subject to technical and commercial assessment." },
                { q: "How do we determine which modules our business needs?", a: "A structured discovery process identifies the modules that align with your operational priorities and readiness." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-lg border border-neutral-200 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-heading text-[15px] font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
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
              Your Paint Factory Deserves Better Connected Operations.
            </Heading>
            <Text variant="body-lg" tone="inverted" className="max-w-[640px] opacity-90">
              Let&apos;s understand how your factory operates today and identify
              where business systems, automation and connected workflows can
              make a practical difference.
            </Text>
            <Button href="/consultation" variant="inverse" size="lg">
              Book a Paint Manufacturing Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}