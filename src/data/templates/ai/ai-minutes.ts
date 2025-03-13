
import { Template } from "@/types/template";

export const aiMinutesTemplate: Template = {
  id: "ai-minutes",
  title: "AI議事録作成ツール",
  description: "会議音声をリアルタイムで文字起こしし、議事録を自動生成するツール",
  price: 24900,
  difficulty: "初級",
  developmentTime: "1-2時間",
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
    pricePerUnit: 300,
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
};
