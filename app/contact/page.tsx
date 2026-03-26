import Link from "next/link";

import { ContactBlock } from "@/components/ContactBlock";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/site";

export const metadata = {
  title: "Contact | Freelance Portfolio for S",
  description: "メール、note、Medium、GitHub への導線と、問い合わせ時にあると助かる情報をまとめています。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="依頼の前に、最低限伝えてほしい内容が分かる問い合わせページ。"
        description="記事制作ではテーマ・読者・媒体・希望トーン、分析支援ではデータ形式・目的・納品形式・期限があると進行が早くなります。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Quick CTA</p>
          <h1 className="mt-4 font-serif text-3xl text-stone-950">まずは概要だけでも大丈夫です。</h1>
          <p className="mt-4 text-sm leading-8 text-stone-600">
            単発記事、継続記事、PR、比較記事、分析支援、Notebook作成など、どの相談かだけ分かれば初回の返答は可能です。
          </p>
          <Link
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm text-white transition hover:bg-stone-700"
          >
            メールで問い合わせる
          </Link>
        </div>

        <ContactBlock />
      </div>
    </div>
  );
}
