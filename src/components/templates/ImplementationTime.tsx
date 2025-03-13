
import { motion } from "framer-motion";
import { Code2, Zap, Globe, CloudCog } from "lucide-react";

export const ImplementationTime = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-xl mb-16"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        本当に10分で完成できるの？
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">完全なソースコード</h4>
              <p className="text-white/80">
                必要なコード、設定ファイル、環境構築手順が全て含まれています。コピー＆ペーストだけで動作する状態です。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">動画による解説</h4>
              <p className="text-white/80">
                セットアップから公開までの手順を、ステップバイステップで解説する動画が付属します。
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">無料のホスティング</h4>
              <p className="text-white/80">
                Vercel、Netlifyなどの無料プランを利用することで、個人利用であれば追加コストなく公開できます。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <CloudCog className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">インフラ構成</h4>
              <p className="text-white/80">
                APIの利用料金以外のインフラコストは、個人利用の範囲内であれば、ほぼゼロで運用可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-white/5 rounded-lg">
        <h4 className="text-xl font-semibold text-white mb-4 text-center">利用時の注意点</h4>
        <ul className="text-white/80 space-y-2">
          <li>• 無料プランには、アクセス数や機能の制限があります</li>
          <li>• 商用利用の場合は、各プラットフォームの利用規約をご確認ください</li>
          <li>• APIの利用量に応じて、APIプロバイダーの料金が発生する場合があります</li>
        </ul>
      </div>
    </motion.div>
  );
};
