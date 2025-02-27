
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
  },
  {
    id: "notion-clone",
    title: "Notionクローン - シンプルなメモアプリ",
    description: "Notionライクなメモ・ドキュメント管理アプリを作成。マークダウン対応のリッチテキストエディタを実装します。",
    price: 0,
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
    price: 0,
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
