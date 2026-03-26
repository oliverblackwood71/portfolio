import { FilterBar } from "@/components/FilterBar";
import { SectionTitle } from "@/components/SectionTitle";
import { portfolioItems } from "@/data/site";

export const metadata = {
  title: "Portfolio | Freelance Portfolio for S",
  description: "AI Review, Sponsored / PR, Comparison, Python, Data Analysis, Machine Learning の実績一覧。",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="カテゴリと言語で絞り込みながら、実績をすぐに確認できる。"
        description="一覧から詳細へ遷移でき、実績データを追加すると自動で反映される構成です。"
      />

      <div className="mt-12">
        <FilterBar items={portfolioItems} />
      </div>
    </div>
  );
}
