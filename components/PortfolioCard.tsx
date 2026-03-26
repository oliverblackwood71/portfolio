import Image from "next/image";
import Link from "next/link";

import type { PortfolioItem } from "@/data/site";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] border-b border-stone-200 bg-stone-100">
        <Image src={item.thumbnail} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-stone-500">
          <span>{item.category}</span>
          <span>·</span>
          <span>{item.language}</span>
          <span>·</span>
          <span>{item.medium}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl tracking-tight text-stone-950">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-600">{item.summary}</p>
        <p className="mt-4 text-sm leading-7 text-stone-500">{item.featured}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/portfolio/${item.slug}`}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm text-white transition hover:bg-stone-700"
          >
            Case Study
          </Link>
          <Link
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
          >
            外部リンク
          </Link>
        </div>
      </div>
    </article>
  );
}
