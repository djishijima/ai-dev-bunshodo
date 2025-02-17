
import { Template } from "@/types/template";

export const freeTemplates: Template[] = [
  {
    id: "hello-world",
    title: "Hello World - はじめてのAIアプリ",
    description: "AIと対話できる簡単なチャットボットを10分で作成。プログラミング初心者でも簡単に始められます。",
    price: 0,
    difficulty: "初級",
    developmentTime: "10分",
    technologies: ["React", "OpenAI", "TypeScript"],
    features: [
      "シンプルなチャットUI",
      "AIとの基本的な対話機能",
      "レスポンシブデザイン",
      "簡単なセットアップ手順"
    ],
    includes: [
      "ソースコード一式",
      "詳細な解説ドキュメント",
      "セットアップガイド",
      "カスタマイズ例"
    ],
    testimonials: [],
    benefits: [
      {
        title: "10分で完成",
        description: "環境構築から動作確認まで、わずか10分で完了します。"
      },
      {
        title: "学習の第一歩に最適",
        description: "AIアプリケーション開発の基礎を理解できます。"
      },
      {
        title: "カスタマイズ可能",
        description: "基本的な機能を理解した後、自由に機能を追加できます。"
      }
    ],
    updates: []
  }
];
