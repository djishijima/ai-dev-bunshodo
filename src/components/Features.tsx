
import { motion } from "framer-motion";
import { Code2, Zap, Lock, Puzzle, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "最速10分で立ち上げ",
    description: "面倒な設定は全ておまかせ。API連携済みのテンプレートで、すぐにスタート。"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "トレンドのAPI活用",
    description: "OpenAI、Stripe、Supabaseなど、最新APIを組み合わせて、便利なアプリを開発。"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "安心のセキュリティ",
    description: "認証・認可システムを標準搭載。業界標準のセキュリティ対策で安全に運用。"
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "自由自在なカスタマイズ",
    description: "モジュール設計で、機能の追加・変更も自由自在。ビジネスに合わせて進化。"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "最新テクノロジー",
    description: "React、TypeScript、Tailwindで構築された、洗練されたコードベース。"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "手厚いサポート",
    description: "導入から運用まで、専門スタッフが丁寧にサポート。困ったときもお任せ。"
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
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          なぜ RapidSaaS なのか？
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-2xl mx-auto">
          「こんなサービス、あったらいいな…」<br />
          そう思ったことはありませんか？ RapidSaaSなら、それをすぐに実現できます！
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{feature.title}</h3>
              <p className="text-white/70 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
