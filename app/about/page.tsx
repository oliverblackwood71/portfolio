import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/site";

export const metadata = {
  title: "About | Freelance Portfolio for S",
  description: "プロフィール、対応領域、日本語 / 英語対応、仕事の進め方を紹介します。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionTitle
        eyebrow="About"
        title="研究・執筆・分析にふさわしい、静かな信頼感を前提に仕事をする。"
        description="プロフィール、対応領域、日本語 / 英語対応、進め方、得意な成果物をまとめています。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h1 className="font-serif text-2xl text-stone-950">Profile</h1>
          <p className="mt-4 text-base leading-8 text-stone-600">{profile.intro}</p>
          <p className="mt-4 text-base leading-8 text-stone-600">{profile.lead}</p>

          <dl className="mt-8 grid gap-5 border-t border-stone-200 pt-6 text-sm leading-7 text-stone-600">
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-stone-500">Activity name</dt>
              <dd className="mt-1">{profile.activityName}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-stone-500">Languages</dt>
              <dd className="mt-1">{profile.languages.join(" / ")}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-stone-500">Base</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
          <h2 className="font-serif text-2xl text-stone-950">対応領域</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
            {profile.strengths.map((strength) => (
              <li key={strength}>- {strength}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-stone-950">仕事の進め方</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-stone-600">
            {profile.workflow.map((step, index) => (
              <li key={step}>
                <span className="mr-2 text-stone-900">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>

          <h2 className="mt-10 font-serif text-2xl text-stone-950">簡潔な経歴</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
            {profile.history.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
