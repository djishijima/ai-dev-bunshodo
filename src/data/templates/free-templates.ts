
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
    testimonials: [
      {
        name: "鈴木 一郎",
        role: "プログラミング初学者",
        comment: "プログラミングの知識がほとんどない状態でも10分で動くアプリが作れました。AIの仕組みを理解する第一歩になりました。"
      },
      {
        name: "佐藤 美咲",
        role: "大学生",
        comment: "授業の課題で使いました。簡単にカスタマイズできて、先生からも高評価をもらえました！"
      }
    ],
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
      },
      {
        title: "実用的なコード構成",
        description: "実際の開発現場で使われる構成で作られているため、実践的なスキルが身につきます。"
      }
    ],
    updates: [
      {
        date: "2024-01-15",
        content: "React 18対応アップデート"
      },
      {
        date: "2023-12-01",
        content: "OpenAI APIの最新モデルに対応"
      }
    ]
  }
];
