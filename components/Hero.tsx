import Link from "next/link";

import { profile } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-stone-200 bg-[radial-gradient(circle_at_top,_rgba(184,163,120,0.12),_transparent_32%),linear-gradient(180deg,_#faf8f4_0%,_#f6f1ea_100%)]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-stone-500">
            Japanese / English AI Writing and Python Research
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            AIライティングとPython分析を、静かに信頼できる仕事として整える。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-500">{profile.lead}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm text-white transition hover:bg-stone-700"
            >
              実績を見る
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
            >
              問い合わせる
            </Link>
          </div>

          <dl className="mt-10 grid gap-5 border-t border-stone-200 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Primary lane</dt>
              <dd className="mt-2 text-sm leading-7 text-stone-700">AIレビュー・比較・PR記事</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Second lane</dt>
              <dd className="mt-2 text-sm leading-7 text-stone-700">Python / Data analysis / research support</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">Pricing</dt>
              <dd className="mt-2 text-sm leading-7 text-stone-700">{profile.pricing.writing}</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-end">
          <div className="w-full rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(41,37,36,0.08)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Two working lanes</p>
                <p className="mt-3 font-serif text-2xl text-stone-950">Writing / Research / Analysis</p>
              </div>
              <img src="/cat-mark.svg" alt="" className="h-12 w-12 opacity-80" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Lane A</p>
                <h2 className="mt-2 text-lg font-medium text-stone-900">AI Writing</h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  レビュー、比較、PR、導入記事を、日本語・英語で誠実に整理。
                </p>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Lane B</p>
                <h2 className="mt-2 text-lg font-medium text-stone-900">Python / Data</h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  可視化、Notebook、分析メモ、軽量な機械学習プロトタイプまで対応。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
