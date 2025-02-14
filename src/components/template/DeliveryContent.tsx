
import { Code2, FileJson, FolderGit2 } from "lucide-react";

export const DeliveryContent = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">納品物の構成</h2>
      
      <div className="bg-slate-900 p-6 rounded-lg text-white/90">
        <pre className="text-sm">
          {`chatbot-template/
├── .env.example         # 環境変数のサンプルファイル
├── components/
│   └── ChatMessage.js  # チャットメッセージのコンポーネント
├── pages/
│   ├── api/
│   │   └── chat.js     # OpenAI API と連携する API Route
│   └── index.js        # メインのチャット UI
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css     # 全体的なスタイル
└── package.json`}
        </pre>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Code2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">ソースコード一式</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>フロントエンドのUIコンポーネント</li>
              <li>OpenAI APIとの連携コード</li>
              <li>エラーハンドリング実装</li>
              <li>スタイリング定義</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
            <FileJson className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">設定ファイル</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>.env.example（環境変数サンプル）</li>
              <li>package.json（依存関係定義）</li>
              <li>README.md（詳細なドキュメント）</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <FolderGit2 className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">ドキュメント</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>セットアップガイド</li>
              <li>環境構築手順</li>
              <li>デプロイマニュアル</li>
              <li>カスタマイズガイド</li>
              <li>トラブルシューティング</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold mb-4">README.md の内容</h3>
        <ul className="space-y-3 text-gray-700">
          <li>• <span className="font-medium">概要:</span> テンプレートの説明、機能一覧</li>
          <li>• <span className="font-medium">必要な環境:</span> Node.js, npm, OpenAI APIキー</li>
          <li>• <span className="font-medium">セットアップ手順:</span> 環境変数設定、パッケージインストール</li>
          <li>• <span className="font-medium">実行方法:</span> 開発サーバーの起動手順</li>
          <li>• <span className="font-medium">デプロイ方法:</span> Vercelへのデプロイ手順</li>
          <li>• <span className="font-medium">カスタマイズ方法:</span> モデル変更、UI調整方法</li>
          <li>• <span className="font-medium">トラブルシューティング:</span> 一般的な問題の解決方法</li>
          <li>• <span className="font-medium">ライセンス情報:</span> 利用規約と制限事項</li>
        </ul>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold mb-4">納品の流れ</h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li className="pl-2">GitHubプライベートリポジトリの作成</li>
          <li className="pl-2">ソースコード一式とドキュメントのアップロード</li>
          <li className="pl-2">購入者のGitHubアカウントをコラボレーターとして招待</li>
          <li className="pl-2">アクセス権限の確認と共有</li>
          <li className="pl-2">技術サポート開始（質問対応、実装サポート）</li>
        </ol>
      </div>
    </div>
  );
};
