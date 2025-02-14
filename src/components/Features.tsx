
import { motion } from "framer-motion";
import { Code2, Zap, Lock, Puzzle } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "最新のテクノロジー",
    description: "React、TypeScript、Tailwindを使用した最新のコード構成で、すぐにプロダクトを開発できます。"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "API統合済み",
    description: "OpenAI、Stripe、Supabaseなど、必要な外部サービスとの連携が完了しています。"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "セキュリティ対応",
    description: "認証・認可システムが組み込まれており、セキュアなアプリケーションを構築できます。"
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "カスタマイズ自由",
    description: "モジュール化された設計により、必要な機能を柔軟に追加・変更することができます。"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          なぜ私たちのテンプレートなのか
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
