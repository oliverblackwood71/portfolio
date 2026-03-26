"use client";

import Link from "next/link";
import { useState } from "react";

import { navigationLinks } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[rgba(250,248,244,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-900"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white">
            <img src="/cat-mark.svg" alt="" className="h-6 w-6" />
          </span>
          <span>Freelance Portfolio for S</span>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 text-sm text-stone-700 md:flex">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-stone-950">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-stone-200 bg-[rgba(250,248,244,0.98)] px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
