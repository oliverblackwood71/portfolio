import Link from "next/link";

import { profile, socialLinks } from "@/data/site";

export function ContactBlock() {
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(41,37,36,0.06)] sm:p-10">
      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Contact</p>
      <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950">
        依頼前に必要なことが分かる、静かな問い合わせ導線。
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
        記事制作ではテーマ、読者、掲載先、希望トーンを、分析支援ではデータ形式、目的、納品形式、期限を添えていただけると進行が早くなります。
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Email</p>
          <Link href={`mailto:${profile.email}`} className="mt-3 block text-lg text-stone-900">
            {profile.email}
          </Link>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            初回相談では、依頼の概要と希望納期だけでも大丈夫です。
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Links</p>
          <div className="mt-4 space-y-4">
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="flex flex-col gap-1 border-b border-stone-200 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <Link href={link.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-stone-900">
                  {link.label}
                </Link>
                <p className="text-sm text-stone-500">{link.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
