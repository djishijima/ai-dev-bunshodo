
import { motion } from "framer-motion";

const apis = [
  {
    name: "OpenAI GPT-4",
    description: "AIチャットボット、文章生成、画像生成などの機能を数分で実装",
    readyFeatures: ["チャットUI", "プロンプト管理", "ストリーミングレスポンス"]
  },
  {
    name: "Stripe",
    description: "決済システムとサブスクリプション管理をすぐに利用可能",
    readyFeatures: ["クレジットカード決済", "サブスクリプション管理", "請求書発行"]
  },
  {
    name: "Supabase",
    description: "認証システムとデータベースが完全統合され即座に利用可能",
    readyFeatures: ["ユーザー認証", "データベース", "リアルタイム更新"]
  },
  {
    name: "SendGrid",
    description: "メール配信システムが設定済みですぐに利用可能",
    readyFeatures: ["トランザクションメール", "メールテンプレート", "配信管理"]
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
          主要APIが設定済み
        </h2>
        <p className="text-xl text-center text-white/80 mb-16">
          面倒な認証設定やAPI連携は全て完了。アイデアの実装に集中できます。
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
