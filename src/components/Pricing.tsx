
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const standardPlans = [
  {
    name: "スタンダード",
    price: 99,
    period: "生涯ライセンス",
    description: "個人や小規模チームに最適なプラン",
    features: [
      "APIゲートウェイ基本機能",
      "認証システム",
      "基本UIテンプレート",
      "無料アップデート",
      "コミュニティサポート",
    ],
    recommended: false,
    cta: "プランを選択"
  },
  {
    name: "プロフェッショナル",
    price: 199,
    period: "生涯ライセンス",
    description: "成長するビジネスのための高度な機能",
    features: [
      "スタンダードの全機能",
      "AI機能統合",
      "カスタムデザインシステム",
      "優先サポート",
      "商用利用ライセンス",
      "ソースコード全権利"
    ],
    recommended: true,
    cta: "プランを選択"
  },
  {
    name: "エンタープライズ",
    price: 499,
    period: "生涯ライセンス",
    description: "大規模組織向けの拡張性と機能",
    features: [
      "プロの全機能",
      "専任技術サポート",
      "カスタム開発サポート",
      "SLA保証",
      "ホワイトラベル対応",
      "拡張APIアクセス"
    ],
    recommended: false,
    cta: "プランを選択"
  }
];

const whiteLabel = {
  name: "ホワイトラベル",
  price: 2000,
  period: "生涯ライセンス",
  description: "自社ブランドとして提供したい企業向け",
  features: [
    "エンタープライズの全機能",
    "ブランド名変更権利",
    "独占販売権",
    "専任開発サポート",
    "24時間365日サポート",
    "カスタムAPI開発",
    "拡張サポート契約"
  ],
  cta: "お問い合わせ"
};

export const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
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
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            シンプルな料金体系
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            サブスクリプションなし。一度の支払いで、生涯アップデート付きのライセンスをご提供します。
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {standardPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`glass-card p-8 rounded-md relative ${
                plan.recommended 
                  ? 'ring-1 ring-purple' 
                  : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    人気プラン
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-white/60 ml-2 text-sm">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8 min-h-[220px]">
                {plan.features.map((feature, idx) => (
                  <li key={feature} className="flex items-start text-white/80 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full rounded-md py-5 ${
                plan.recommended 
                  ? 'premium-button' 
                  : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white hover:border-purple/20'
              }`}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 rounded-md relative border-t border-purple/10"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <h3 className="text-xl font-medium text-white mb-2">{whiteLabel.name}</h3>
              <p className="text-white/60 text-sm mb-4">{whiteLabel.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${whiteLabel.price}</span>
                <span className="text-white/60 ml-2 text-sm">{whiteLabel.period}</span>
              </div>
              
              <Button className="w-full rounded-md py-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white hover:border-purple/20">
                {whiteLabel.cta}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whiteLabel.features.map((feature) => (
                <div key={feature} className="flex items-start text-white/80 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
