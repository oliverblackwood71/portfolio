import Link from "next/link";

import { ContactBlock } from "@/components/ContactBlock";
import { Hero } from "@/components/Hero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { portfolioItems, profile, services } from "@/data/site";

const featuredItems = portfolioItems.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle
          eyebrow="About"
          title="何者かを3秒で伝えるために、役割と対応範囲を先に見せる。"
          description="AIライティングと Python / データ分析の2レーンに分け、何を頼めるかが一目で伝わる構成にしています。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
            <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Profile</p>
            <p className="mt-4 text-sm leading-8 text-stone-600">{profile.availability}</p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
            <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Languages</p>
            <p className="mt-4 text-sm leading-8 text-stone-600">{profile.languages.join(" / ")}</p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
            <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Pricing</p>
            <p className="mt-4 text-sm leading-8 text-stone-600">
              記事執筆は <span className="font-medium text-stone-900">{profile.pricing.writing}</span>
              。Python / 分析系はスコープに応じて見積もりします。
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionTitle
            eyebrow="Services"
            title="サービスは2レーン。記事制作と分析支援を、別々に分かりやすく。"
            description="依頼前に迷わないように、誰向けか、成果物の例、必要情報を先に整理しています。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Featured Work"
            title="実績は数よりも、仕事につながる見せ方を優先。"
            description="代表的なAIレビュー記事、比較記事、Python分析実績を先に見せ、一覧と詳細へつなぎます。"
          />
          <Link href="/portfolio" className="text-sm text-stone-600 transition hover:text-stone-950">
            すべての実績を見る
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <ContactBlock />
      </section>
    </>
  );
}
