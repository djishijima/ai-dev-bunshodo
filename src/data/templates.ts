
export const templates = [
  {
    id: "cat-generator",
    title: "カワイイ猫画像ジェネレーター",
    description: "ボタンをクリックするたびに新しい猫画像を表示。品種選択やダウンロード機能付き",
    price: 0,
    technologies: ["React", "Cat API"],
    features: [
      "ランダム猫画像の表示",
      "猫の品種選択機能",
      "画像ダウンロード機能",
      "お気に入り保存機能",
      "シンプルなUI"
    ],
    includes: [
      "ソースコード一式",
      "セットアップガイド",
      "API連携ガイド",
      "カスタマイズ解説"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "today-trivia",
    title: "今日は何の日？豆知識アプリ",
    description: "今日が何の日かを表示し、関連する豆知識を提供する学習系アプリ",
    price: 0,
    technologies: ["React", "Wikipedia API"],
    features: [
      "今日の記念日表示",
      "豆知識の表示",
      "関連画像の表示",
      "ミニクイズ機能",
      "シェア機能"
    ],
    includes: [
      "ソースコード一式",
      "Wikipedia API連携ガイド",
      "コンテンツ管理ガイド",
      "カスタマイズ例"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "cafe-finder",
    title: "近くのカフェ検索マップ",
    description: "現在地周辺のカフェをGoogle Maps上に表示する実用的なアプリ",
    price: 0,
    technologies: ["React", "Google Maps API", "Places API"],
    features: [
      "現在地の表示",
      "カフェのマップピン表示",
      "詳細情報の表示",
      "カフェの絞り込み検索",
      "お気に入り登録"
    ],
    includes: [
      "ソースコード一式",
      "Google Maps API設定ガイド",
      "Places API連携ガイド",
      "カスタマイズ例"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "mini-weather",
    title: "天気予報ミニ",
    description: "現在地の天気予報をシンプルに表示するミニマルなアプリ",
    price: 0,
    technologies: ["React", "OpenWeatherMap API"],
    features: [
      "現在の天気表示",
      "週間天気予報",
      "気温・湿度・風速の表示",
      "天気に応じたアイコン表示",
      "位置情報の自動取得"
    ],
    includes: [
      "ソースコード一式",
      "OpenWeatherMap API設定ガイド",
      "カスタマイズガイド",
      "デザインテンプレート"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "haiku-generator",
    title: "AI俳句ジェネレーター",
    description: "テーマを入力すると、AIが俳句を生成する創造的なアプリ",
    price: 0,
    technologies: ["React", "OpenAI"],
    features: [
      "AI俳句生成機能",
      "テーマ指定機能",
      "俳句の保存機能",
      "SNSシェア機能",
      "お気に入り管理"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "俳句生成プロンプト例",
      "カスタマイズガイド"
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
