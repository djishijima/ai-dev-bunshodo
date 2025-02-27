
import { motion } from "framer-motion";
import { Code2, Zap, Lock, Puzzle, Clock, VideoIcon } from "lucide-react";

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
    icon: <VideoIcon className="w-6 h-6" />,
    title: "充実の解説動画",
    description: "ステップバイステップの解説動画で、アプリ開発の流れを分かりやすく説明。"
  }
];

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#1a1335]/20 pointer-events-none"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="section-title text-4xl font-bold mb-4">
          なぜ 爆速AIアプリ構築 なのか？
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-2xl mx-auto">
          「こんなサービス、あったらいいな…」<br />
          そう思ったことはありませんか？ すぐにそれを実現できます！
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-12 h-12 bg-gradient-to-br from-[#9b87f5]/10 to-[#D946EF]/10 rounded-full blur-xl 
                              group-hover:scale-[1.5] transition-all duration-700" />
              
              <div className="w-14 h-14 mb-6 animated-gradient-bg rounded-2xl flex items-center justify-center text-white shadow-lg
                             group-hover:scale-110 transition-transform duration-300">
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
