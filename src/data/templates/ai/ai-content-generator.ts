
import { Template } from "@/types/template";

export const aiContentGeneratorTemplate: Template = {
  id: "ai-content-generator",
  title: "AIコンテンツ生成ツール",
  description: "ブログ記事、SNS投稿、メールなどのコンテンツを自動生成",
  price: 19900,
  difficulty: "中級",
  developmentTime: "2-3時間",
  technologies: ["React", "OpenAI GPT-4", "DeepSeek AI"],
  features: [
    "複数のAIモデル活用",
    "テンプレートベースの生成",
    "SEO最適化提案",
    "画像生成連携",
    "一括生成機能"
  ],
  includes: [
    "ソースコード一式",
    "API設定マニュアル",
    "コンテンツテンプレート",
    "SEOガイドライン"
  ],
  apiUsage: {
    description: "OpenAI/DeepSeek APIの使用量に応じて課金",
    pricePerUnit: 400,
    unit: "1,000トークン"
  },
  testimonials: [],
  benefits: [
    {
      title: "コンテンツ制作の効率化",
      description: "AIによる下書き作成で、制作時間を大幅に短縮できます。"
    },
    {
      title: "品質の一貫性",
      description: "テンプレートベースの生成で、一定品質を維持できます。"
    },
    {
      title: "マルチモデル活用",
      description: "用途に応じて最適なAIモデルを選択できます。"
    }
  ],
  updates: []
};
