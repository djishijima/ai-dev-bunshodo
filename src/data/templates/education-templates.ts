
import { Template } from "@/types/template";

export const educationTemplates: Template[] = [
  {
    id: "study-ai",
    title: "AIスタディメイト",
    description: "宿題やテストの問題を入力すると、AIが詳しい解説付きで答えを提供する学習支援ツール",
    price: 19900,
    difficulty: "初級",
    developmentTime: "2-3時間",
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
    price: 29900,
    difficulty: "中級",
    developmentTime: "3-4時間",
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
    id: "notion-clone",
    title: "Notionクローン - シンプルなメモアプリ",
    description: "Notionライクなメモ・ドキュメント管理アプリを作成。マークダウン対応のリッチテキストエディタを実装します。",
    price: 7900,
    difficulty: "中級",
    developmentTime: "1-2時間",
    technologies: ["React", "TypeScript", "LocalStorage"],
    features: [
      "マークダウン対応エディタ",
      "ドラッグ&ドロップでの並べ替え",
      "ローカルストレージによるデータ保存",
      "ダークモード/ライトモード切替"
    ],
    includes: [
      "ソースコード一式",
      "コンポーネント設計解説",
      "状態管理パターン解説",
      "追加機能の実装ガイド"
    ],
    testimonials: [
      {
        name: "山田 健太",
        role: "フロントエンドエンジニア",
        comment: "状態管理の実装パターンが勉強になりました。自分のプロジェクトにも取り入れています。"
      }
    ],
    benefits: [
      {
        title: "実践的な状態管理",
        description: "複雑なUIの状態管理手法を学べます。"
      },
      {
        title: "モダンUI実装",
        description: "ドラッグ&ドロップなどのインタラクティブなUI実装方法を習得できます。"
      },
      {
        title: "拡張性の高い設計",
        description: "機能追加が容易な設計思想を学べます。"
      }
    ],
    updates: [
      {
        date: "2024-02-10",
        content: "ドラッグ&ドロップ機能の改善"
      }
    ]
  },
  {
    id: "todo-supabase",
    title: "TodoリストアプリwithSupabase",
    description: "Supabaseを使ったシンプルなTodoリストアプリ。認証からデータ永続化までを学べる実践的なテンプレートです。",
    price: 5900,
    difficulty: "初級",
    developmentTime: "30分",
    technologies: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
    features: [
      "ユーザー認証（メール・SNS連携）",
      "リアルタイムデータ同期",
      "タスクの追加・編集・削除",
      "期限・優先度設定"
    ],
    includes: [
      "ソースコード一式",
      "Supabase設定ガイド",
      "デプロイ手順書",
      "カスタマイズ例"
    ],
    testimonials: [
      {
        name: "田中 誠",
        role: "バックエンド開発者",
        comment: "フロントエンド開発が苦手でしたが、このテンプレートのおかげでSupabaseとの連携方法を理解できました。"
      },
      {
        name: "伊藤 洋子",
        role: "プロダクトマネージャー",
        comment: "チームのハンズオントレーニングで活用しています。短時間で基本を押さえられるのが良いです。"
      }
    ],
    benefits: [
      {
        title: "バックエンド知識不要",
        description: "Supabaseを使うことで、複雑なバックエンド開発なしでアプリが作れます。"
      },
      {
        title: "認証実装の理解",
        description: "ユーザー認証の基本的な仕組みと実装方法を学べます。"
      },
      {
        title: "リアルタイム機能",
        description: "リアルタイムデータベースの使い方を実践的に学べます。"
      }
    ],
    updates: [
      {
        date: "2024-03-05",
        content: "Supabase v2対応アップデート"
      },
      {
        date: "2024-01-20",
        content: "認証フロー改善"
      }
    ]
  }
];
