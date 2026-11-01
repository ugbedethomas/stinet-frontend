import Image from "next/image";
import { Button } from "@/components/ui/Button";

const dashboardRows = [
  { label: "Inventory", value: "Stock visibility" },
  { label: "Production", value: "Batch tracking" },
  { label: "Sales", value: "Order management" },
  { label: "Analytics", value: "Business insights" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full bg-navy-950 text-white"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28 lg:px-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
            Business Digital Transformation
          </p>
          <h1
            id="hero-heading"
            className="font-heading text-[40px] leading-[1.1] font-bold text-white md:text-[52px] md:leading-[1.08] lg:text-[62px] lg:leading-[1.05]"
          >
            Transform the Way Your Business Works.
          </h1>
          <p className="max-w-[560px] font-body text-[17px] leading-[1.7] text-neutral-300 md:text-[18px]">
            We help businesses modernise operations, connect systems and unlock
            new opportunities through software, AI, automation and practical
            digital innovation.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button href="/consultation" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button href="/solutions" variant="inverse" size="lg">
              Explore Our Solutions
            </Button>
          </div>
          <p className="pt-2 font-body text-[13px] text-neutral-500">
            Practical technology. Clear business outcomes.
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/hero-placeholder.svg"
              alt="Paint manufacturing environment placeholder — replace with approved photograph"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-navy-900/95 p-4 shadow-level-3 backdrop-blur md:left-6 md:right-6 md:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-500">
                Manufacturing Operations
              </span>
              <span className="rounded-full bg-blue-600/20 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider text-blue-100">
                Illustrative
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {dashboardRows.map((row) => (
                <li key={row.label} className="flex flex-col gap-0.5">
                  <span className="font-body text-[11px] uppercase tracking-wider text-neutral-400">
                    {row.label}
                  </span>
                  <span className="font-body text-[13px] font-medium text-white">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}