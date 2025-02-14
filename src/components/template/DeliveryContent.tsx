import { Code2, FileJson, FolderGit2, GitBranch, Webhook, MessagesSquare, BookCheck, Star, Shield, Database, FileCode, Mail, CheckCircle2, Users } from "lucide-react";

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
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
          納品メール
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">件名</h4>
            <p className="text-sm text-gray-600">【ご購入ありがとうございます】[テンプレート名] 納品のお知らせ</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">本文構成</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 購入のお礼</li>
              <li>• GitHubリポジトリへの招待手順</li>
              <li>• セットアップガイド（README.md）へのリンク</li>
              <li>• デモサイトへのリンク</li>
              <li>• 技術サポート連絡先</li>
              <li>• FAQへのリンク</li>
              <li>• 購入特典の詳細（個別サポート、クーポン）</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-600" />
            開発者側タスク
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>購入情報のデータベース登録</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>サンキューメール自動送信</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>GitHubリポジトリ招待</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span>アクセス権確認と技術サポート</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            購入者側タスク
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span>GitHubリポジトリアクセス</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span>環境構築（Node.js, npm）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span>APIキー取得と環境変数設定</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span>動作確認とカスタマイズ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
        <h3 className="text-lg font-semibold mb-4">継続的なサポート体制</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">技術サポート</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 質問対応（メール、チャット）</li>
              <li>• バグ修正と機能改善</li>
              <li>• セットアップ支援</li>
              <li>• カスタマイズ相談</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">コミュニティ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• フォーラム・Discordでの情報交換</li>
              <li>• ユーザー同士の交流</li>
              <li>• 定期的なアップデート情報</li>
              <li>• 事例共有・フィードバック</li>
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

      <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-purple-600" />
          GitHubリポジトリアクセス
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">招待プロセス</h4>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>購入完了後、登録されたメールアドレスに招待メールが自動送信されます</li>
              <li>メール内のリンクからGitHubの招待を承認してください</li>
              <li>プライベートリポジトリへのアクセス権が付与されます</li>
            </ol>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">コード取得方法</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-2">方法1: Gitでクローン</h5>
                <pre className="bg-slate-900 text-white/90 p-3 rounded text-sm">
                  git clone https://github.com/your-org/template-name.git
                </pre>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-2">方法2: ZIPでダウンロード</h5>
                <p className="text-sm text-gray-600">
                  GitHubリポジトリページの「Code」ボタンから「Download ZIP」を選択
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">リポジトリ構成</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• ソースコード一式</li>
              <li>• 環境構築ガイド（README.md）</li>
              <li>• 技術仕様書・API仕様書</li>
              <li>• セットアップスクリプト</li>
              <li>• デプロイ手順書</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Webhook className="w-5 h-5 text-green-600" />
          デプロイ手順
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Vercelでのデプロイ</h4>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Vercelアカウントを作成</li>
              <li>「New Project」からリポジトリを選択</li>
              <li>環境変数を設定</li>
              <li>「Deploy」をクリック</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Netlifyでのデプロイ</h4>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Netlifyアカウントを作成</li>
              <li>「New site from Git」からリポジトリを選択</li>
              <li>ビルド設定と環境変数を構成</li>
              <li>「Deploy site」をクリック</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MessagesSquare className="w-5 h-5 text-orange-600" />
          サポート体制
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">技術サポート</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• GitHubイシューでの質問対応</li>
              <li>• メールサポート</li>
              <li>• バグ修正・機能改善</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">ドキュメント</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• リポジトリ内のドキュメント</li>
              <li>• オンラインマニュアル</li>
              <li>• APIリファレンス</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
