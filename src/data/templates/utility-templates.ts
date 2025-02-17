
import { Template } from "@/types/template";

export const utilityTemplates: Template[] = [
  {
    id: "midi-converter",
    title: "MIDIファイル変換ツール",
    description: "MIDIファイルを様々な形式に変換できるシンプルなツール",
    price: 99,
    difficulty: "中級",
    developmentTime: "2-3時間",
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
    difficulty: "初級",
    developmentTime: "1-2時間",
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
  }
];
