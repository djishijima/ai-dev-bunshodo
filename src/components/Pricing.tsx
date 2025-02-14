
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
    "無制限のアップデート"
  ],
  recommended: false
};

export const Pricing = () => {
  return (
    <section className="py-24 px-4" id="pricing">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          料金プラン
        </h2>
        
        {/* Standard Plans - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {standardPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 relative ${plan.recommended ? 'border-[#8B5CF6] border-2' : ''}`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm">
                  おすすめ
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-white/70">/テンプレート</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/80">
                    <Check className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.recommended ? 'premium-button' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                プランを選択
              </Button>
            </motion.div>
          ))}
        </div>

        {/* White Label Plan - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 relative border-[#8B5CF6]/50 border"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{whiteLabel.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${whiteLabel.price}</span>
                <span className="text-white/70">/テンプレート</span>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                プランを選択
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whiteLabel.features.map((feature) => (
                <li key={feature} className="flex items-center text-white/80 list-none">
                  <Check className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  {feature}
                </li>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
