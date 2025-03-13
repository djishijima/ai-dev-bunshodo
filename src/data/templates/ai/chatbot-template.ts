
import { Template } from "@/types/template";

export const chatbotTemplate: Template = {
  id: "chatbot-template",
  title: "Next.js + OpenAI チャットボット",
  description: "環境変数管理、エラーハンドリング、レスポンシブUIを備えた本格的なチャットボットテンプレート",
  price: 14900,
  difficulty: "中級",
  developmentTime: "2-3時間",
  technologies: ["Next.js", "OpenAI API", "React", "TypeScript"],
  features: [
    "OpenAI APIとの連携",
    "環境変数によるAPI管理",
    "エラーハンドリング",
    "レスポンシブなチャットUI",
    "詳細なドキュメント付き"
  ],
  includes: [
    "ソースコード一式",
    "環境変数サンプル(.env.example)",
    "詳細な設定ガイド",
    "デプロイマニュアル",
    "カスタマイズガイド"
  ],
  apiUsage: {
    description: "OpenAI APIの使用量に応じて課金",
    pricePerUnit: 400,
    unit: "1,000トークン"
  },
  testimonials: [],
  benefits: [
    {
      title: "即座に導入可能",
      description: "環境変数の設定だけで、すぐにチャットボットを立ち上げることができます。"
    },
    {
      title: "拡張性の高い設計",
      description: "モジュール化された構造で、機能の追加や変更が容易です。"
    },
    {
      title: "セキュアな実装",
      description: "APIキーの安全な管理方法が実装済みです。"
    }
  ],
  updates: [
    {
      date: "2024-03-15",
      content: "OpenAI API v4対応を追加"
    }
  ]
};
