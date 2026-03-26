"use client";

import { useMemo, useState } from "react";

import { languageOptions, portfolioCategories, type PortfolioItem } from "@/data/site";

import { PortfolioCard } from "./PortfolioCard";

type FilterBarProps = {
  items: PortfolioItem[];
};

export function FilterBar({ items }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | (typeof portfolioCategories)[number]>("All");
  const [selectedLanguage, setSelectedLanguage] = useState<(typeof languageOptions)[number]>("All");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      const languageMatch = selectedLanguage === "All" || item.language === selectedLanguage;

      return categoryMatch && languageMatch;
    });
  }, [items, selectedCategory, selectedLanguage]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-[0_18px_50px_rgba(41,37,36,0.04)] sm:p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Category</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {["All", ...portfolioCategories].map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "rounded-full bg-stone-900 px-4 py-2 text-sm text-white"
                    : "rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
                }
                onClick={() => setSelectedCategory(category as typeof selectedCategory)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Language</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {languageOptions.map((language) => (
              <button
                key={language}
                type="button"
                className={
                  selectedLanguage === language
                    ? "rounded-full bg-stone-900 px-4 py-2 text-sm text-white"
                    : "rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
                }
                onClick={() => setSelectedLanguage(language)}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center text-sm text-stone-500">
          条件に一致する実績がありません。`data/site.ts` の実績データを追加すると、一覧と詳細に自動反映されます。
        </div>
      ) : null}
    </div>
  );
}
