import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  footerLinkGroups,
  legalLinks,
  footerTagline,
  primaryCta,
} from "@/lib/navigation";

async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="mt-auto w-full bg-navy-950 text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link
              href="/"
              aria-label="Stinet Digital home"
              className="flex items-baseline gap-1 font-heading text-[24px] font-bold tracking-tight text-white"
            >
              <span>STINET</span>
              <span className="text-gold-500">.</span>
              <span className="text-[14px] font-medium tracking-[0.18em] text-neutral-400">DIGITAL</span>
            </Link>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-500">
              {footerTagline.eyebrow}
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-neutral-300">
              {footerTagline.description}
            </p>
            <div className="pt-2">
              <Button
                href={primaryCta.href}
                variant="inverse"
                size="md"
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8">
            {footerLinkGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <h2 className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  {group.label}
                </h2>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-[14px] text-neutral-300 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-navy-800 pt-8">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-[13px] text-neutral-400 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[13px] text-neutral-500">
            © {year} Stinet Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}