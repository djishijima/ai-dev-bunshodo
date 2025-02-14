export const templates = [
  {
    id: "simple-chat",
    title: "シンプルチャットボット",
    description: "OpenAIを使った基本的なチャットボット。5分で作れる初心者向けテンプレート",
    price: 0,
    technologies: ["React", "OpenAI"],
    features: [
      "基本的なチャット機能",
      "シンプルなUI",
      "レスポンシブデザイン",
      "簡単カスタマイズ",
      "詳細な解説動画付き"
    ],
    includes: [
      "ソースコード一式",
      "セットアップガイド",
      "解説動画"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "ai-chat",
    title: "AIチャットアシスタント",
    description: "チャット履歴保存、ユーザー管理機能付きの本格的なAIチャットアプリ",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
    features: [
      "OpenAI APIとの完全な統合",
      "チャット履歴の保存機能",
      "ユーザー認証システム",
      "管理画面付き",
      "カスタマイズ可能なUI",
      "アナリティクス機能"
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
    description: "高性能で安全なAPIゲートウェイ。認証、レート制限、モニタリング機能を統合",
    price: 149,
    technologies: ["React", "TypeScript", "Redis", "JWT"],
    features: [
      "JWTベースの認証システム",
      "IPベースのレート制限",
      "リアルタイムモニタリング",
      "カスタムルーティング",
      "エラーハンドリング",
      "詳細なログ機能"
    ],
    includes: [
      "完全なソースコード",
      "環境構築ガイド",
      "セキュリティガイドライン",
      "パフォーマンスチューニング資料"
    ],
    testimonials: [
      {
        name: "田中 太郎",
        role: "シニアエンジニア",
        comment: "このテンプレートのおかげで、APIの実装時間を70%削減できました。"
      }
    ],
    benefits: [],
    updates: []
  },
  {
    id: "image-gallery",
    title: "AIイメージギャラリー",
    description: "AIで画像を生成・管理できるギャラリーアプリ。無料で始められます",
    price: 0,
    technologies: ["React", "OpenAI", "Cloudinary"],
    features: [
      "AI画像生成機能",
      "ギャラリー表示",
      "画像管理機能",
      "シェア機能",
      "基本的な編集ツール"
    ],
    includes: [
      "ソースコード一式",
      "セットアップガイド",
      "画像管理ガイド",
      "解説動画"
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
