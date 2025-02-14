export const templates = [
  {
    id: "ai-minutes",
    title: "AI議事録作成ツール",
    description: "会議音声をリアルタイムで文字起こしし、議事録を自動生成するツール",
    price: 249,
    technologies: ["React", "OpenAI Whisper API"],
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
    id: "ai-travel-planner",
    title: "旅程自動作成AIプランナー",
    description: "行きたい場所や興味を入力すると、AIが最適な旅程を提案する旅行計画ツール",
    price: 179,
    technologies: ["React", "OpenAI", "Google Maps API"],
    features: [
      "AI旅程提案機能",
      "地図ベースの視覚化",
      "所要時間計算",
      "観光スポット情報表示",
      "カスタム旅程編集"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "Google Maps API設定ガイド",
      "カスタマイズ例"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "ai-recipe-advisor",
    title: "冷蔵庫レシピAI",
    description: "冷蔵庫にある食材を入力すると、AIが最適なレシピを提案するツール",
    price: 129,
    technologies: ["React", "OpenAI", "Recipe API"],
    features: [
      "食材からのレシピ提案",
      "栄養価計算機能",
      "調理手順の詳細表示",
      "お気に入りレシピ保存",
      "買い物リスト作成"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "レシピAPI連携ガイド",
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
  },
  {
    id: "ai-parenting-chat",
    title: "AI子育て相談チャット",
    description: "子育てに関する悩みや疑問に、AIが24時間いつでも回答するサポートツール",
    price: 99,
    technologies: ["React", "OpenAI"],
    features: [
      "24時間AI相談対応",
      "年齢別アドバイス",
      "専門家監修の回答DB",
      "相談履歴の保存",
      "緊急時の連絡先表示"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "子育て情報DB",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "cat-generator",
    title: "カワイイ猫画像ジェネレーター",
    description: "ボタンをクリックするたびに新しい猫画像を表示。品種選択やダウンロード機能付き",
    price: 49,
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
    price: 79,
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
    price: 149,
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
    price: 99,
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
    price: 199,
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
  },
  {
    id: "lyrics-generator",
    title: "AI作詞アシスタント",
    description: "テーマやジャンルを入力すると、AIが歌詞の案を生成するツール",
    price: 149,
    technologies: ["React", "OpenAI"],
    features: [
      "AI歌詞生成機能",
      "ジャンル別テンプレート",
      "韻の自動調整",
      "歌詞の保存機能",
      "シェア機能"
    ],
    includes: [
      "ソースコード一式",
      "OpenAI API設定ガイド",
      "歌詞生成プロンプト集",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "midi-converter",
    title: "MIDIファイル変換ツール",
    description: "MIDIファイルを様々な形式に変換できるシンプルなツール",
    price: 99,
    technologies: ["React", "Web Audio API"],
    features: [
      "MIDIファイル形式変換",
      "音程・テンポ調整",
      "トラック編集機能",
      "プレビュー再生機能",
      "バッチ変換対応"
    ],
    includes: [
      "ソースコード一式",
      "Web Audio API実装ガイド",
      "MIDI処理ライブラリ",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
  {
    id: "audio-converter",
    title: "音声ファイル変換ツール",
    description: "様々な音声ファイル形式を相互に変換できるシンプルなツール",
    price: 79,
    technologies: ["React", "Web Audio API", "FFmpeg"],
    features: [
      "複数形式対応",
      "音質調整機能",
      "一括変換機能",
      "プレビュー再生",
      "ドラッグ＆ドロップ対応"
    ],
    includes: [
      "ソースコード一式",
      "FFmpeg設定ガイド",
      "音声処理ライブラリ",
      "カスタマイズガイド"
    ],
    testimonials: [],
    benefits: [],
    updates: []
  },
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
  },
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
