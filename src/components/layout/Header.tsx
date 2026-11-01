import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { primaryNav, primaryCta } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Stinet Digital home"
          className="flex items-baseline gap-1 font-heading text-[20px] font-bold tracking-tight text-navy-950"
        >
          <span>STINET</span>
          <span className="text-blue-600">.</span>
          <span className="text-[13px] font-medium tracking-[0.18em] text-neutral-500">DIGITAL</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          {primaryNav.map((group) =>
            group.children.length === 0 ? (
              <Link
                key={group.label}
                href={group.href ?? "#"}
                className="rounded-sm px-3 py-2 font-body text-[14px] font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href ?? "#"}
                  className="flex items-center gap-1 rounded-sm px-3 py-2 font-body text-[14px] font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {group.label}
                  <span aria-hidden="true" className="text-[10px] text-neutral-400 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180">
                    ▼
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[560px] pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-level-3">
                    <ul className="grid grid-cols-1 gap-1">
                      {group.children.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                          >
                            <span className="font-body text-[14px] font-semibold text-neutral-900">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="font-body text-[13px] text-neutral-500">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ),
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button href={primaryCta.href} variant="primary" size="md">
            {primaryCta.label}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}