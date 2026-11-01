"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { primaryNav, primaryCta } from "@/lib/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          id={panelId}
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          <div className="flex h-20 items-center justify-between border-b border-neutral-200 px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-1 font-heading text-[20px] font-bold tracking-tight text-navy-950"
            >
              <span>STINET</span>
              <span className="text-blue-600">.</span>
              <span className="text-[13px] font-medium tracking-[0.18em] text-neutral-500">DIGITAL</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span aria-hidden="true" className="text-[18px]">×</span>
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((group) => {
                const isOpen = expandedGroup === group.label;
                const hasChildren = group.children.length > 0;
                return (
                  <li key={group.label}>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setExpandedGroup(isOpen ? null : group.label)}
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-body text-[16px] font-semibold text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        >
                          {group.label}
                          <span aria-hidden="true" className={`text-[10px] text-neutral-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <ul className="mb-2 ml-2 flex flex-col gap-0.5">
                            {group.children.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-md px-3 py-2.5 font-body text-[15px] text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={group.href ?? "#"}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 font-body text-[16px] font-semibold text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        {group.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-neutral-200 px-6 py-5">
            <Button
              href={primaryCta.href}
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => setOpen(false)}
            >
              {primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}