
import { Code2, FileJson, FolderGit2, GitBranch, Webhook, MessagesSquare, BookCheck, Star } from "lucide-react";

export const DeliveryContent = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">納品物の構成</h2>
      
      <div className="bg-slate-900 p-6 rounded-lg text-white/90">
        <pre className="text-sm">
          {`ai-gijiroku-template/
├── .env.example           # 環境変数のサンプルファイル
├── components/           # React コンポーネント
│   ├── AudioRecorder.js   # 音声録音コンポーネント
│   ├── Transcript.js      # 文字起こし結果表示コンポーネント
│   └── GijirokuEditor.js  # 議事録編集コンポーネント
├── pages/
│   ├── api/              # API Route
│   │   └── transcribe.js # Whisper API と連携する API Route
│   └── index.js          # メイン画面
├── public/              # 静的ファイル
│   └── logo.png
├── styles/             # スタイルシート
│   └── globals.css
├── utils/              # ユーティリティ関数
│   └── whisper.js      # Whisper API 呼び出し関数
├── gijiroku-templates/  # 議事録テンプレート
│   ├── standard.json
│   └── meeting.md
├── .gitignore          # Git除外設定
├── package.json        # 依存関係定義
└── README.md           # 詳細なドキュメント`}
        </pre>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <GitBranch className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">GitHubリポジトリ管理</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>プライベートリポジトリでの提供</li>
              <li>ブランチ戦略（main: 安定版, develop: 開発版）</li>
              <li>適切な.gitignore設定（APIキー等の除外）</li>
              <li>GitHub Actionsによる自動化</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Webhook className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">自動化設定</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>テスト・Lint自動実行</li>
              <li>Vercelとの連携による自動デプロイ</li>
              <li>コードフォーマット自動化</li>
              <li>セキュリティチェック</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
            <MessagesSquare className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">サポート体制</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>導入サポート（30日間）</li>
              <li>技術的な質問対応</li>
              <li>カスタマイズ相談</li>
              <li>トラブルシューティング</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold mb-4">議事録テンプレート</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">標準テンプレート (JSON)</h4>
            <pre className="bg-white p-3 rounded text-sm">
              {`{
  "title": "会議名",
  "date": "日付",
  "attendees": ["参加者1", "参加者2"],
  "agenda": ["議題1", "議題2"],
  "summary": "概要",
  "decisions": ["決定事項1", "決定事項2"],
  "next_actions": ["次回アクション1", "次回アクション2"]
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium mb-2">会議用テンプレート (Markdown)</h4>
            <pre className="bg-white p-3 rounded text-sm">
              {`# 会議名

**日付:** 2024年10月27日

**参加者:**
- 参加者1
- 参加者2

**議題:**
- 議題1
- 議題2

**概要:**
[会議の概要]

**決定事項:**
- 決定事項1
- 決定事項2`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold mb-4">納品プロセス</h3>
        <ol className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
            <div>
              <strong>購入情報の確認</strong>
              <p className="text-sm text-gray-600 mt-1">GitHubアカウント情報の収集と確認</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
            <div>
              <strong>リポジトリアクセス権の付与</strong>
              <p className="text-sm text-gray-600 mt-1">プライベートリポジトリへのコラボレーター招待</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
            <div>
              <strong>納品完了メール送信</strong>
              <p className="text-sm text-gray-600 mt-1">アクセス方法、セットアップガイド、サポート情報の案内</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">4</div>
            <div>
              <strong>フォローアップ</strong>
              <p className="text-sm text-gray-600 mt-1">導入状況の確認と追加サポートの提供</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookCheck className="w-5 h-5 text-green-600" />
            提供ドキュメント
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Whisper API 設定ガイド</li>
            <li>• 音声録音実装ガイド</li>
            <li>• 議事録テンプレート集</li>
            <li>• カスタマイズガイド</li>
            <li>• デプロイマニュアル</li>
            <li>• APIリファレンス</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-600" />
            購入特典
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• 30日間の技術サポート</li>
            <li>• プライベートリポジトリアクセス</li>
            <li>• 30日間の返金保証</li>
            <li>• カスタマイズ相談</li>
            <li>• デプロイ支援</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
