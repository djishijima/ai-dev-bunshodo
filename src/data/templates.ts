export const templates = [
  {
    id: "ai-chat",
    title: "AIチャットアシスタント",
    description: "OpenAI統合とユーザー管理機能を備えた完全なチャットアプリケーション",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
    features: [
      "OpenAI APIとの完全な統合",
      "リアルタイムチャット機能",
      "ユーザー認証システム",
      "チャット履歴の保存",
      "レスポンシブデザイン",
      "カスタマイズ可能なUIコンポーネント"
    ],
    includes: [
      "ソースコード一式",
      "詳細な技術文書",
      "インストールガイド",
      "API連携ガイド",
      "1ヶ月のテクニカルサポート"
    ],
    aiModels: [
      {
        name: "OpenAI GPT-4",
        features: [
          "高度な自然言語処理",
          "複雑なタスクの理解と実行",
          "多言語サポート",
          "コンテキストの理解力"
        ]
      },
      {
        name: "Google Gemini Pro",
        features: [
          "マルチモーダル処理能力",
          "効率的な処理速度",
          "コスト効率の良い応答",
          "画像認識機能"
        ]
      },
      {
        name: "Anthropic Claude",
        features: [
          "長文処理の得意分野",
          "高い倫理性と安全性",
          "詳細な分析能力",
          "正確な情報提供"
        ]
      }
    ]
  },
  {
    id: "api-gateway",
    title: "APIゲートウェイ",
    description: "認証と速度制限機能を備えた安全なAPIゲートウェイ",
    price: 149,
    technologies: ["NextJS", "TypeScript", "REST"],
    features: [
      "JWTベースの認証システム",
      "リクエスト制限機能",
      "APIキー管理",
      "詳細なログ機能",
      "エラーハンドリング",
      "カスタムミドルウェアサポート"
    ],
    includes: [
      "ソースコード一式",
      "API仕様書",
      "デプロイメントガイド",
      "セキュリティガイドライン",
      "3ヶ月のテクニカルサポート"
    ]
  },
  {
    id: "subscription",
    title: "サブスクリプションプラットフォーム",
    description: "Stripe統合による完全な機能を備えたサブスクリプション管理システム",
    price: 199,
    technologies: ["React", "Stripe", "Supabase"],
    features: [
      "Stripe決済システム統合",
      "定期課金管理",
      "カスタム価格プラン",
      "請求書管理",
      "顧客ポータル",
      "支払い分析ダッシュボード"
    ],
    includes: [
      "ソースコード一式",
      "Stripe連携ガイド",
      "データベース設計書",
      "管理者マニュアル",
      "6ヶ月のテクニカルサポート"
    ]
  }
];

export type Template = typeof templates[0];
export type AIModel = Template['aiModels'][0];
