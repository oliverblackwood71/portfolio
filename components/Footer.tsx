import Link from "next/link";

import { profile, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Freelance Portfolio for S</p>
          <p className="mt-3 text-sm leading-7 text-stone-600">{profile.intro}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-stone-600">
          <Link href={`mailto:${profile.email}`} className="transition hover:text-stone-900">
            {profile.email}
          </Link>
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-stone-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
