
import { motion } from "framer-motion";
import { Rocket, AlertTriangle } from "lucide-react";

export const DeploymentGuide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-xl mb-16"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <Rocket className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        アプリの公開方法
      </h3>
      <div className="text-white/80 space-y-6 max-w-3xl mx-auto">
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-white mb-3">無料で始められるホスティング</h4>
          <ul className="space-y-2">
            <li>• Vercel、Netlify、Firebase Hostingなどの無料プランが利用可能</li>
            <li>• GitHubと連携して自動デプロイ</li>
            <li>• CDN配信による高速な表示</li>
            <li>• SSL証明書の自動発行</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">デプロイの手順</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-2">1. コードの準備</p>
              <p className="text-sm">GitHubにコードをアップロード</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-2">2. プラットフォーム連携</p>
              <p className="text-sm">VercelなどでGitHubと連携</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-2">3. 自動デプロイ</p>
              <p className="text-sm">コード更新で自動的に反映</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h4 className="text-xl font-semibold text-white">利用制限について</h4>
          </div>
          <ul className="space-y-2">
            <li>• 無料プランには、アクセス数やビルド時間の制限があります</li>
            <li>• 商用利用の場合は、プラットフォームの利用規約を確認してください</li>
            <li>• 大規模なアクセスが予想される場合は、有料プランへのアップグレードを検討してください</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="font-medium text-lg">
            テンプレートには、詳細なデプロイ手順とトラブルシューティングガイドが含まれています
          </p>
        </div>
      </div>
    </motion.div>
  );
};
