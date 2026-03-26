import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { portfolioItems, seoMetadata } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === slug);

  if (!item) {
    return {};
  }

  const title = `${item.title} | Freelance Portfolio for S`;
  const description = item.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${seoMetadata.url}/portfolio/${item.slug}`,
      images: [
        {
          url: absoluteUrl(item.thumbnail),
          width: 1200,
          height: 900,
          alt: item.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <Link href="/portfolio" className="text-sm text-stone-600 transition hover:text-stone-950">
        ← Portfolio に戻る
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
          <Image src={item.thumbnail} alt="" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>

        <div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-stone-500">
            <span>{item.category}</span>
            <span>·</span>
            <span>{item.language}</span>
            <span>·</span>
            <span>{item.medium}</span>
          </div>
          <h1 className="mt-5 font-serif text-4xl tracking-tight text-stone-950">{item.title}</h1>
          <p className="mt-5 text-base leading-8 text-stone-600">{item.summary}</p>
          <p className="mt-4 text-base leading-8 text-stone-500">{item.featured}</p>
          <Link
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm text-white transition hover:bg-stone-700"
          >
            実際の掲載先を見る
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">背景</h2>
          <p className="mt-4 text-sm leading-8 text-stone-600">{item.background}</p>
        </section>
        <section className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">目的</h2>
          <p className="mt-4 text-sm leading-8 text-stone-600">{item.objective}</p>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">対応内容</h2>
          <ul className="mt-4 space-y-2 text-sm leading-8 text-stone-600">
            {item.workDone.map((entry) => (
              <li key={entry}>- {entry}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">工夫</h2>
          <ul className="mt-4 space-y-2 text-sm leading-8 text-stone-600">
            {item.craftsmanship.map((entry) => (
              <li key={entry}>- {entry}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">成果</h2>
          <ul className="mt-4 space-y-2 text-sm leading-8 text-stone-600">
            {item.results.map((entry) => (
              <li key={entry}>- {entry}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
        <h2 className="font-serif text-2xl text-stone-950">使用ツール</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
