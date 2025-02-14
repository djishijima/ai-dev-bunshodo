
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
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "api-gateway",
    title: "モダンAPIゲートウェイ",
    description: "高性能で安全なAPIゲートウェイテンプレート。認証、レート制限、モニタリング機能を統合。",
    price: 149,
    technologies: ["React", "TypeScript", "Redis", "JWT"],
    testimonials: [
      {
        name: "田中 太郎",
        role: "シニアエンジニア, テックカンパニー",
        comment: "このテンプレートのおかげで、APIの実装時間を70%削減できました。特に認証周りの実装が素晴らしいです。"
      },
      {
        name: "鈴木 花子",
        role: "テックリード, スタートアップ",
        comment: "セキュリティ面での考慮が完璧です。本番環境での運用も安心して任せられます。"
      },
      {
        name: "佐藤 健一",
        role: "フリーランスエンジニア",
        comment: "ドキュメントが充実していて、カスタマイズも容易です。クライアントプロジェクトで重宝しています。"
      }
    ],
    features: [
      "JWTベースの認証システム",
      "IPベースのレート制限",
      "リアルタイムモニタリング",
      "カスタムルーティング",
      "エラーハンドリング",
      "詳細なログ機能",
      "APIキー管理システム",
      "セキュリティ最適化"
    ],
    includes: [
      "完全なソースコード",
      "環境構築ガイド",
      "セキュリティガイドライン",
      "パフォーマンスチューニング資料",
      "3ヶ月の技術サポート"
    ],
    benefits: [
      {
        title: "高速な開発開始",
        description: "すぐに使える完全なボイラープレートで、開発時間を大幅に短縮"
      },
      {
        title: "セキュリティ保証",
        description: "業界標準のセキュリティプラクティスを実装済み"
      },
      {
        title: "スケーラブルな設計",
        description: "大規模なトラフィックにも対応できる設計原則に基づいて実装"
      },
      {
        title: "包括的なドキュメント",
        description: "詳細な技術文書とベストプラクティスガイドを完備"
      }
    ],
    updates: [
      {
        date: "2024-02",
        content: "パフォーマンス最適化アップデート：レスポンス時間を30%改善"
      },
      {
        date: "2024-01",
        content: "新機能：カスタムレート制限ポリシーの実装"
      },
      {
        date: "2023-12",
        content: "セキュリティアップデート：最新の脆弱性対策を実装"
      }
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
    ],
    testimonials: [],
    benefits: [],
    updates: []
  }
];

interface Testimonial {
  name: string;
  role: string;
  comment: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Update {
  date: string;
  content: string;
}

export interface AIModel {
  name: string;
  features: string[];
}

export interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  technologies: string[];
  features: string[];
  includes: string[];
  testimonials: Testimonial[];
  benefits: Benefit[];
  updates: Update[];
}

export type { Testimonial, Benefit, Update };
