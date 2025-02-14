
import { Template } from "@/types/template";

export const educationTemplates: Template[] = [
  {
    id: "study-ai",
    title: "AIスタディメイト",
    description: "宿題やテストの問題を入力すると、AIが詳しい解説付きで答えを提供する学習支援ツール",
    price: 199,
    technologies: ["React", "OpenAI"],
    features: [
      "AI解答生成機能",
      "詳細な解説表示",
      "数式対応",
      "履歴保存機能",
      "教科別カテゴリ分類"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "教科別プロンプト集",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "ai-english-tutor",
    title: "AI英語学習パートナー",
    description: "AIがあなたのレベルに合わせた英会話レッスンを提供する学習ツール",
    price: 299,
    technologies: ["React", "OpenAI", "Speech Recognition API"],
    features: [
      "AIとの英会話練習",
      "発音チェック機能",
      "レベル別学習プラン",
      "進捗管理ダッシュボード",
      "学習履歴の記録"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "音声認識API設定ガイド",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  }
];
