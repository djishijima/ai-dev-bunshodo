
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const standardPlans = [
  {
    name: "スタンダード",
    price: 99,
    features: [
      "APIゲートウェイ基本機能",
      "認証システム",
      "基本的なUI/UXテンプレート",
      "生涯アップデート無料",
      "1年間の技術サポート",
    ],
    recommended: false
  },
  {
    name: "プロフェッショナル",
    price: 199,
    features: [
      "スタンダードの全機能",
      "AIチャット統合",
      "カスタムデザインシステム",
      "優先サポート",
      "生涯アップデート無料",
      "ソースコードの商用利用可"
    ],
    recommended: true
  },
  {
    name: "エンタープライズ",
    price: 499,
    features: [
      "プロフェッショナルの全機能",
      "専用のテクニカルサポート",
      "カスタマイズ開発サポート",
      "SLA保証",
      "生涯アップデート無料",
      "ホワイトラベル対応"
    ],
    recommended: false
  }
];

const whiteLabel = {
  name: "ホワイトラベル",
  price: 2000,
  features: [
    "エンタープライズの全機能",
    "完全なブランド変更権利",
    "独占販売権",
    "専任開発者のアサイン",
    "24時間365日サポート",
    "カスタムAPI開発",
    "生涯アップデート無料"
  ],
  recommended: false
};

export const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(111, 76, 255, 0.1), 0 10px 10px -5px rgba(111, 76, 255, 0.04)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-24 px-4 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#1a1335]/10 to-background pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="section-title text-4xl font-bold mb-16">
          料金プラン
        </h2>
        
        {/* Standard Plans - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {standardPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-xl relative ${
                plan.recommended 
                  ? 'border-[#D946EF] border-2 bg-gradient-to-b from-[#D946EF]/5 to-transparent' 
                  : 'border-white/5'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    おすすめ
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 gradient-text">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-white/70 ml-2">（生涯ライセンス）</span>
              </div>
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center text-white/90"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button className={`w-full ${
                plan.recommended 
                  ? 'premium-button' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-[#9b87f5]/30'
              } rounded-xl py-6`}>
                プランを選択
              </Button>
            </motion.div>
          ))}
        </div>

        {/* White Label Plan - Full width */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-10 rounded-xl relative border-[#9b87f5]/30 border bg-gradient-to-r from-[#9b87f5]/5 via-transparent to-[#D946EF]/5"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">{whiteLabel.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${whiteLabel.price}</span>
                <span className="text-white/70 ml-2">（生涯ライセンス）</span>
              </div>
              <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white 
                                hover:border-[#9b87f5]/30 rounded-xl py-6">
                プランを選択
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {whiteLabel.features.map((feature, idx) => (
                <motion.div 
                  key={feature} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className="flex items-center text-white/90 list-none"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
