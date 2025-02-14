
import { Template } from "@/types/template";

export const entertainmentTemplates: Template[] = [
  {
    id: "retro-filter",
    title: "レトロフィルターカメラ",
    description: "写真に昭和レトロなフィルターをかけることができるアプリ。複数のフィルターから選択可能",
    price: 99,
    technologies: ["React", "Canvas API"],
    features: [
      "複数のレトロフィルター",
      "写真のアップロード機能",
      "フィルターのプレビュー",
      "写真の保存機能",
      "SNSシェア機能"
    ],
    includes: [
      "ソースコード一式",
      "フィルターアルゴリズム集",
      "カスタマイズガイド",
      "デザインテンプレート"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "friend-chat",
    title: "フレンドチャット",
    description: "友達とリアルタイムでチャットができるシンプルなアプリ。既読機能、絵文字対応付き",
    price: 149,
    technologies: ["React", "Firebase", "WebSocket"],
    features: [
      "リアルタイムチャット",
      "既読表示機能",
      "絵文字送信機能",
      "画像送信機能",
      "オンライン状態表示"
    ],
    includes: [
      "ソースコード一式",
      "Firebase設定ガイド",
      "WebSocket実装ガイド",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  }
];
