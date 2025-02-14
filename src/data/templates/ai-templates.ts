
import { Template } from "@/types/template";

export const aiTemplates: Template[] = [
  {
    id: "chatbot-template",
    title: "Next.js + OpenAI チャットボット",
    description: "環境変数管理、エラーハンドリング、レスポンシブUIを備えた本格的なチャットボットテンプレート",
    price: 14900,
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
      pricePerUnit: 4,
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
  },
  {
    id: "ai-minutes",
    title: "AI議事録作成ツール",
    description: "会議音声をリアルタイムで文字起こしし、議事録を自動生成するツール",
    price: 24900,
    technologies: ["React", "OpenAI Whisper API", "DeepSeek"],
    features: [
      "リアルタイム音声文字起こし",
      "AI議事録自動生成",
      "議事録テンプレート選択",
      "エクスポート機能",
      "音声データ保存機能"
    ],
    includes: [
      "ソースコード一式",
      "Whisper API設定ガイド",
      "議事録テンプレート集",
      "カスタマイズガイド"
    ],
    apiUsage: {
      description: "Whisper APIの使用量に応じて課金",
      pricePerUnit: 3,
      unit: "1分の音声"
    },
    testimonials: [
      {
        name: "田中 健一",
        role: "株式会社ABC 取締役",
        comment: "導入後、議事録作成の工数が80%削減されました。会議に集中できるようになり、生産性が大幅に向上しています。"
      },
      {
        name: "鈴木 美咲",
        role: "DEF株式会社 プロジェクトマネージャー",
        comment: "AIが自動で重要なポイントを抽出してくれるので、議事録の質が向上しました。チーム全体の情報共有がスムーズになりました。"
      }
    ],
    benefits: [
      {
        title: "作業時間の大幅削減",
        description: "議事録作成にかかる時間を最大80%削減し、本来の業務に集中できます。"
      },
      {
        title: "正確な情報記録",
        description: "AIによる自動文字起こしで、会議の内容を漏れなく記録します。"
      },
      {
        title: "簡単カスタマイズ",
        description: "業界や用途に合わせて、テンプレートをカスタマイズ可能です。"
      }
    ],
    updates: [
      {
        date: "2024-03-01",
        content: "音声認識精度を15%向上させました"
      },
      {
        date: "2024-02-15",
        content: "新しい議事録テンプレートを5種類追加しました"
      }
    ]
  },
  {
    id: "ai-chatbot",
    title: "AIカスタマーサポートボット",
    description: "OpenAIとDeepSeekを活用した高度なカスタマーサポートチャットボット",
    price: 29900,
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
      pricePerUnit: 5,
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
  },
  {
    id: "ai-content-generator",
    title: "AIコンテンツ生成ツール",
    description: "ブログ記事、SNS投稿、メールなどのコンテンツを自動生成",
    price: 19900,
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
      pricePerUnit: 4,
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
  }
];
