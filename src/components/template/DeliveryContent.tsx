
import { Code2, FileJson, FolderGit2, GitBranch, Webhook, MessagesSquare, BookCheck, Star, Shield, Database, FileCode } from "lucide-react";

export const DeliveryContent = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">納品物の構成</h2>
      
      <div className="bg-slate-900 p-6 rounded-lg text-white/90">
        <pre className="text-sm">
          {`nextjs-supabase-auth-template/
├── .env.example             # 環境変数のサンプルファイル
├── components/             # React コンポーネント
│   ├── AuthForm.js        # ログイン・サインアップフォーム
│   ├── Profile.js         # ユーザープロフィール表示
│   └── ProtectedRoute.js  # 保護されたルート
├── pages/
│   ├── api/               # API Route
│   │   └── auth-helpers.js # Supabase認証ヘルパー
│   ├── login.js           # ログインページ
│   ├── signup.js          # サインアップページ
│   └── profile.js         # プロフィールページ
├── public/               # 静的ファイル
│   └── favicon.ico
├── styles/              # スタイルシート
│   └── globals.css
├── utils/               # ユーティリティ関数
│   └── supabaseClient.js # Supabase初期化
├── .gitignore           # Git除外設定
├── package.json         # 依存関係定義
└── README.md            # セットアップガイド`}
        </pre>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">認証機能</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>メール/パスワード認証</li>
              <li>ソーシャルログイン (Google, GitHub)</li>
              <li>保護されたルート実装</li>
              <li>セッション管理</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Database className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Supabase設定</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>認証設定ガイド</li>
              <li>RLSポリシー設定</li>
              <li>ストレージバケット設定</li>
              <li>環境変数設定</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
            <FileCode className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">実装コード</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>認証フォームコンポーネント</li>
              <li>プロフィール管理機能</li>
              <li>保護されたルート実装</li>
              <li>Supabaseクライアント設定</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold mb-4">環境変数設定例</h3>
        <pre className="bg-white p-4 rounded text-sm">
          {`# .env.example
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY`}
        </pre>
        <p className="mt-4 text-sm text-gray-600">※ 実際の値はSupabaseダッシュボードから取得できます</p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold mb-4">納品プロセス</h3>
        <ol className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
            <div>
              <strong>Supabaseプロジェクト作成</strong>
              <p className="text-sm text-gray-600 mt-1">認証設定、RLSポリシー設定、APIキー取得</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
            <div>
              <strong>GitHubリポジトリ設定</strong>
              <p className="text-sm text-gray-600 mt-1">プライベートリポジトリ作成、コラボレーター招待</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
            <div>
              <strong>環境変数とデプロイ設定</strong>
              <p className="text-sm text-gray-600 mt-1">Vercelとの連携、環境変数設定</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1">4</div>
            <div>
              <strong>テスト用アカウント提供</strong>
              <p className="text-sm text-gray-600 mt-1">動作確認用のテストユーザー作成</p>
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
            <li>• Supabase設定ガイド</li>
            <li>• 認証実装ガイド</li>
            <li>• RLSポリシー設定ガイド</li>
            <li>• デプロイマニュアル</li>
            <li>• カスタマイズガイド</li>
            <li>• トラブルシューティング</li>
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
            <li>• Supabase設定サポート</li>
            <li>• デプロイ支援</li>
            <li>• カスタマイズ相談</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
