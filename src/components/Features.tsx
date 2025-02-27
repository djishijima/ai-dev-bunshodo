
import { motion } from "framer-motion";
import {
  CodeSquare,
  Shield,
  Clock,
  Zap,
  Layers,
  PlayCircle
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "迅速な開発",
    description: "AIが設定を自動化し、数分でアプリを立ち上げ。従来の開発期間を大幅に短縮します。"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "最新API連携",
    description: "OpenAI、Stripe、Supabaseなど、トレンドの技術を簡単に組み合わせて実装できます。"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "セキュリティ対策",
    description: "業界標準のセキュリティを標準搭載。安全なユーザー認証システムを実現します。"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "柔軟なカスタマイズ",
    description: "モジュール設計により、必要な機能だけを選択。ビジネスの成長に合わせて拡張可能です。"
  },
  {
    icon: <CodeSquare className="w-5 h-5" />,
    title: "最新技術スタック",
    description: "React、TypeScript、Tailwindなど、現代的な技術で構築された高品質コードベース。"
  },
  {
    icon: <PlayCircle className="w-5 h-5" />,
    title: "詳細な解説動画",
    description: "ステップバイステップの動画ガイドで、複雑な実装も理解しやすく解説します。"
  }
];

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            直感的な開発体験
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            複雑な技術を簡単に。あなたのアイデアを形にするための必要なツールを全て揃えました。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card p-8 rounded-md relative overflow-hidden card-shine-effect"
            >
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
