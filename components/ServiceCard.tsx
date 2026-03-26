import Link from "next/link";

import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">{service.lane}</p>
      <h3 className="mt-4 font-serif text-2xl tracking-tight text-stone-950">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-600">{service.summary}</p>

      <div className="mt-6 space-y-5 border-t border-stone-200 pt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">どんな人向けか</p>
          <p className="mt-2 text-sm leading-7 text-stone-600">{service.forWho}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">成果物の例</p>
          <ul className="mt-2 space-y-2 text-sm leading-7 text-stone-600">
            {service.deliverables.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">依頼時にほしい情報</p>
          <ul className="mt-2 space-y-2 text-sm leading-7 text-stone-600">
            {service.inputs.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
      >
        {service.ctaLabel}
      </Link>
    </article>
  );
}
