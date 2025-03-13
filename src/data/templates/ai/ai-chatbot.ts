
import { Template } from "@/types/template";

export const aiCustomerSupportTemplate: Template = {
  id: "ai-chatbot",
  title: "AIカスタマーサポートボット",
  description: "OpenAIとDeepSeekを活用した高度なカスタマーサポートチャットボット",
  price: 29900,
  difficulty: "上級",
  developmentTime: "4-5時間",
  technologies: ["React", "OpenAI GPT-4", "DeepSeek AI", "Node.js"],
  features: [
    "マルチAIモデル対応",
    "文脈を理解した応答",
    "カスタム知識ベース連携",
    "多言語サポート",
    "チャット履歴管理",
    "ダッシュボード分析"
  ],
  includes: [
    "ソースコード一式",
    "AI APIセットアップガイド",
    "カスタマイズドキュメント",
    "運用マニュアル"
  ],
  apiUsage: {
    description: "OpenAI/DeepSeek APIの使用量に応じて課金",
    pricePerUnit: 500,
    unit: "1,000トークン"
  },
  testimonials: [],
  benefits: [
    {
      title: "24時間365日の対応",
      description: "AIが自動で顧客サポートを提供し、運用コストを削減します。"
    },
    {
      title: "高度な会話能力",
      description: "最新のAIモデルによる自然な対話と正確な情報提供が可能です。"
    },
    {
      title: "柔軟なカスタマイズ",
      description: "業界特有の用語や規則に合わせた応答が設定できます。"
    }
  ],
  updates: [
    {
      date: "2024-03-10",
      content: "DeepSeek AIモデルを追加しました"
    }
  ]
};
