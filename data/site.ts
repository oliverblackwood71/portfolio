export type SocialLink = {
  label: string;
  href: string;
  note?: string;
};

export type Service = {
  slug: string;
  lane: "AI Writing" | "Python / Data";
  title: string;
  summary: string;
  forWho: string;
  deliverables: string[];
  inputs: string[];
  ctaLabel: string;
};

export type PortfolioCategory =
  | "AI Review"
  | "Sponsored / PR"
  | "Comparison"
  | "Python"
  | "Data Analysis"
  | "Machine Learning";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  language: "Japanese" | "English" | "Bilingual";
  medium: string;
  summary: string;
  externalUrl: string;
  thumbnail: string;
  featured: string;
  background: string;
  objective: string;
  workDone: string[];
  craftsmanship: string[];
  results: string[];
  tools: string[];
};

export const seoMetadata = {
  siteName: "Freelance Portfolio for S",
  title: "Freelance Portfolio for S | AI Writing and Python Research Work",
  description:
    "Japanese / English AI writer and Python-based research builder. AI review articles, sponsored content, comparison writing, data analysis, and practical research workflows.",
  url: "https://example.vercel.app",
  ogImage: "/og-image.svg",
  locale: "ja_JP",
};

export const profile = {
  name: "S",
  activityName: "Freelance Portfolio for S",
  role: "Japanese / English AI writer and Python-based research builder",
  intro:
    "AIツールのレビュー記事、比較記事、PR記事を日本語・英語で執筆しつつ、Pythonを使った分析・可視化・試作も支援します。",
  lead:
    "I create review articles, sponsored content, and practical research-oriented deliverables across AI tools and Python workflows.",
  location: "Japan",
  languages: ["Japanese", "English"],
  email: "oliverblackwood717@gmail.com",
  availability:
    "単発の記事制作から継続運用、Pythonベースの分析支援まで、静かな信頼感を大切にして進めます。",
  pricing: {
    writing: "$150 / article -",
    data: "Python / analysis work by scope",
  },
  workflow: [
    "目的、想定読者、必要なトーンを短く整理します。",
    "調査・構成・執筆または分析を、再利用しやすい形でまとめます。",
    "納品時に今後の改善ポイントや次の打ち手も共有します。",
  ],
  strengths: [
    "AI review and comparison writing",
    "Japanese / English production",
    "Python notebooks and research support",
    "Practical summaries for non-technical readers",
  ],
  history: [
    "AIツールのレビュー記事、比較記事、PR記事を継続執筆。",
    "Pythonを使ったデータ整理、可視化、調査補助を実施。",
    "研究・分析文脈でも読みやすい、静かな情報設計を重視。",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: "note",
    href: "https://note.com/example",
    note: "Japanese writing archive",
  },
  {
    label: "Medium",
    href: "https://medium.com/@example",
    note: "English writing archive",
  },
  {
    label: "GitHub",
    href: "https://github.com/example",
    note: "Python notebooks and code samples",
  },
];

export const services: Service[] = [
  {
    slug: "ai-tool-reviews",
    lane: "AI Writing",
    title: "AIライティング / レビュー記事",
    summary:
      "AIツールレビュー、比較記事、PR記事、導入記事、SEO記事を、日本語と英語で整理して制作します。",
    forWho:
      "AIプロダクト運営、SaaS、メディア、代理店、比較コンテンツを必要とする事業者向け。",
    deliverables: [
      "AIツールレビュー記事",
      "比較記事",
      "Sponsored / PR記事",
      "導入ガイド",
      "日本語 / 英語の記事草稿",
    ],
    inputs: [
      "対象プロダクトやテーマ",
      "読者像",
      "掲載媒体やトーン",
      "参考URLや競合情報",
    ],
    ctaLabel: "AIライティングを相談する",
  },
  {
    slug: "python-data-work",
    lane: "Python / Data",
    title: "Python / データ分析支援",
    summary:
      "Pythonでのデータ整理、可視化、分析レポート、簡易機械学習プロトタイプ、Notebook作成に対応します。",
    forWho:
      "研究、分析、PoC、意思決定のために、過不足のない実務的な分析アウトプットがほしい方へ。",
    deliverables: [
      "Notebook作成",
      "可視化レポート",
      "分析メモ",
      "簡易機械学習プロトタイプ",
      "再利用できるスクリプト",
    ],
    inputs: [
      "データの形式と量",
      "知りたい問い",
      "納品形式",
      "期限と前提条件",
    ],
    ctaLabel: "Python / データ相談をする",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "llm-note-app-review-ja",
    title: "LLMノートアプリのレビュー記事",
    category: "AI Review",
    language: "Japanese",
    medium: "note",
    summary:
      "機能説明に寄りすぎず、実際の使いどころと向いているユーザー像を整理したレビュー記事。",
    externalUrl: "https://note.com/example-llm-review",
    thumbnail: "/portfolio/ai-review.svg",
    featured: "比較しやすい構成と、導入判断に役立つ観点整理。",
    background: "新規読者にも伝わるAIツールレビューの整備が必要だった。",
    objective: "機能紹介だけでなく、利用シーンと制約を明確にすること。",
    workDone: ["リサーチ", "構成設計", "日本語執筆", "比較観点の整理"],
    craftsmanship: [
      "レビュー軸を先に固定してから本文へ展開",
      "専門用語を増やしすぎず、利用判断につながる表現へ調整",
    ],
    results: ["読者が短時間で向き不向きを判断しやすい構成を実現"],
    tools: ["ChatGPT", "Perplexity", "Notion"],
  },
  {
    slug: "ai-search-comparison-en",
    title: "AI search tools comparison article",
    category: "Comparison",
    language: "English",
    medium: "Medium",
    summary:
      "複数のAI検索ツールを、用途別に比較した英語記事。機能差だけでなく、読者タイプ別に整理。",
    externalUrl: "https://medium.com/@example/ai-search-comparison",
    thumbnail: "/portfolio/comparison.svg",
    featured: "English comparison article for practical tool selection.",
    background: "類似ツールが増え、比較記事の価値が高まっていた。",
    objective: "用途別に選びやすい比較記事を英語圏向けに作ること。",
    workDone: ["English writing", "feature comparison", "reader segmentation"],
    craftsmanship: [
      "評価軸を固定して比較ノイズを減らした",
      "意思決定しやすい結論順の構成にした",
    ],
    results: ["英語圏クライアントにも展開しやすい比較フォーマットを確立"],
    tools: ["Claude", "ChatGPT", "Google Sheets"],
  },
  {
    slug: "ai-video-tool-review-ja",
    title: "AI動画生成ツールの比較レビュー",
    category: "AI Review",
    language: "Japanese",
    medium: "note",
    summary:
      "生成品質、編集性、料金を軸に、導入前の比較材料として使えるレビュー記事を構成。",
    externalUrl: "https://note.com/example-video-review",
    thumbnail: "/portfolio/ai-review.svg",
    featured: "生成AIの比較観点を先に見せるレビュー設計。",
    background: "AI動画ツールは情報が断片化しやすく、比較観点の整理が必要だった。",
    objective: "導入判断をしやすくする比較レビューを作ること。",
    workDone: ["tool testing", "structure planning", "Japanese writing"],
    craftsmanship: [
      "初心者と運用担当で読みどころが分かれるよう設計",
      "価格・品質・実務適性の3軸で整理",
    ],
    results: ["サービス紹介にも流用しやすい構成を作成"],
    tools: ["ChatGPT", "Canva", "Notion"],
  },
  {
    slug: "ai-note-taking-pr-ja",
    title: "AIノートサービスのPR記事",
    category: "Sponsored / PR",
    language: "Japanese",
    medium: "note",
    summary:
      "PR要素を保ちつつ、読者にとっての実用性が見えるように整理した紹介記事。",
    externalUrl: "https://note.com/example-pr-ja",
    thumbnail: "/portfolio/pr.svg",
    featured: "広告色を抑えつつ理解しやすいPRライティング。",
    background: "製品紹介だけだと読み手の納得感が弱かった。",
    objective: "PR色を保ちつつ、利用シーンが伝わる記事にすること。",
    workDone: ["ヒアリング", "構成設計", "PRライティング"],
    craftsmanship: [
      "読者メリットを先に配置",
      "不必要な誇張を避けて信頼感を維持",
    ],
    results: ["営業資料にも流用しやすい文章トーンを実現"],
    tools: ["Notion", "ChatGPT"],
  },
  {
    slug: "workflow-assistant-sponsored-en",
    title: "Sponsored article for an AI workflow assistant",
    category: "Sponsored / PR",
    language: "English",
    medium: "Medium",
    summary:
      "英語圏向けに、AI workflow assistant のユースケースと導入メリットを整理したPR記事。",
    externalUrl: "https://medium.com/@example/workflow-pr",
    thumbnail: "/portfolio/pr.svg",
    featured: "English sponsored article with clear, low-hype positioning.",
    background: "英語圏での紹介記事に過度な宣伝感を出したくなかった。",
    objective: "信頼感を保ちながら機能と活用シーンを伝えること。",
    workDone: ["English copywriting", "use case structuring", "tone control"],
    craftsmanship: [
      "導入後のイメージを先に見せた",
      "製品機能の羅列を避け、活用の筋道を作った",
    ],
    results: ["英語圏の読者にも展開しやすいトーンを構築"],
    tools: ["Claude", "Grammarly", "Notion"],
  },
  {
    slug: "saas-usage-analysis-python",
    title: "SaaS利用ログの分析ノートブック",
    category: "Data Analysis",
    language: "Bilingual",
    medium: "GitHub",
    summary:
      "利用ログを整形し、継続率や主要アクションを可視化する Python notebook を作成。",
    externalUrl: "https://github.com/example/saas-analysis",
    thumbnail: "/portfolio/data.svg",
    featured: "Python notebook for practical user behavior analysis.",
    background: "ログはあるが、意思決定に必要な形に整理されていなかった。",
    objective: "可視化と簡潔な所見をまとめ、次の施策判断を助けること。",
    workDone: ["data cleaning", "EDA", "visualization", "notebook writing"],
    craftsmanship: [
      "再実行しやすいセル構成に整理",
      "所見をコード外でも読める形で併記",
    ],
    results: ["継続率と利用傾向の把握を短時間で共有できる形に整理"],
    tools: ["Python", "Pandas", "Matplotlib", "Jupyter"],
  },
  {
    slug: "review-score-predictor-prototype",
    title: "レビュー傾向の予測プロトタイプ",
    category: "Machine Learning",
    language: "Bilingual",
    medium: "GitHub",
    summary:
      "レビュー文とスコア傾向を簡易的に扱う機械学習プロトタイプ。PoC 向けの軽量構成。",
    externalUrl: "https://github.com/example/review-score-predictor",
    thumbnail: "/portfolio/ml.svg",
    featured: "Lightweight ML prototype for research and decision support.",
    background: "小さく検証したい段階で、重い実装は不要だった。",
    objective: "簡易モデルで仮説検証を回せる基盤を作ること。",
    workDone: ["feature setup", "baseline model", "evaluation memo"],
    craftsmanship: [
      "過度に複雑にせず、次の判断につながる最小構成にした",
      "再現手順を README と Notebook に分離",
    ],
    results: ["PoC 初期段階での方向性確認に使えるプロトタイプを作成"],
    tools: ["Python", "scikit-learn", "Pandas"],
  },
];

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const portfolioCategories: PortfolioCategory[] = [
  "AI Review",
  "Sponsored / PR",
  "Comparison",
  "Python",
  "Data Analysis",
  "Machine Learning",
];

export const languageOptions = ["All", "Japanese", "English", "Bilingual"] as const;
