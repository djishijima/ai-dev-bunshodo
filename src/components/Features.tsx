
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
    description: "AIが設定を自動化し、従来の開発期間の最大90%を削減します。"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "主要API連携",
    description: "OpenAI、Stripe、Google APIなど、先端テクノロジーを簡単に活用できます。"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "強固なセキュリティ",
    description: "GDPR準拠のセキュリティ対策を標準実装し、ユーザーデータを確実に保護します。"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "拡張性の高さ",
    description: "ビジネスの成長に合わせて柔軟に拡張できるモジュラー設計を採用しています。"
  },
  {
    icon: <CodeSquare className="w-5 h-5" />,
    title: "洗練されたコード",
    description: "最新のテクノロジースタックで構築された、メンテナンス性の高いコードベース。"
  },
  {
    icon: <PlayCircle className="w-5 h-5" />,
    title: "詳細なドキュメント",
    description: "包括的なガイドと動画で複雑な実装も理解しやすく解説されています。"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            ビジネス構築の<span className="text-primary">未来</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            複雑な技術を簡単に。あなたのビジネスアイデアを最速で形にするためのツールスイート。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-md border border-white/5"
            >
              <div className="mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
