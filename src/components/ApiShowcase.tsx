
import { motion } from "framer-motion";

const apis = [
  {
    name: "OpenAI GPT-4",
    description: "APIキーを設定するだけですぐに利用可能なAIチャット機能のテンプレート",
    readyFeatures: ["テンプレート化されたチャットUI", "プロンプト設計済み", "ストリーミング実装済み"]
  },
  {
    name: "Stripe",
    description: "決済システムをすぐに導入できるテンプレートコード付き",
    readyFeatures: ["決済フォーム実装済み", "サブスクリプション管理", "webhookハンドラー"]
  },
  {
    name: "Supabase",
    description: "認証とデータベースの実装例が含まれたテンプレート",
    readyFeatures: ["認証UI実装済み", "データベース設計例", "リアルタイム同期"]
  },
  {
    name: "SendGrid",
    description: "メール送信機能のテンプレートコードを提供",
    readyFeatures: ["メール送信実装例", "テンプレート連携", "エラーハンドリング"]
  }
];

export const ApiShowcase = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          APIテンプレート付き
        </h2>
        <p className="text-xl text-center text-white/80 mb-16">
          各APIの実装例とテンプレートコードを提供。開発時間を大幅に短縮できます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{api.name}</h3>
              <p className="text-white/80 mb-6">{api.description}</p>
              <div className="space-y-3">
                {api.readyFeatures.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center bg-white/5 rounded-lg p-3"
                  >
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-3"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
