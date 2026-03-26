import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Services | Freelance Portfolio for S",
  description: "AIライティングと Python / Data の2レーンで対応するサービスをまとめています。",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionTitle
        eyebrow="Services"
        title="受ける仕事を2レーンに分け、依頼時の迷いを減らす。"
        description="AIライティングと Python / Data のサービスを分けて整理しています。成果物、向いている依頼、必要情報を一画面で確認できます。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
