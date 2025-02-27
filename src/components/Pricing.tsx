
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
  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            明瞭な<span className="text-primary">料金体系</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            サブスクリプションなし。一度の支払いで、生涯アップデート付きのライセンスをご提供します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {standardPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-card p-8 rounded-md border ${
                plan.recommended 
                  ? 'border-primary' 
                  : 'border-white/5'
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
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8 min-h-[220px]">
                {plan.features.map((feature, idx) => (
                  <li key={feature} className="flex items-start text-muted-foreground text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full rounded-md py-5 ${
                plan.recommended 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-secondary hover:bg-secondary/80 text-white'
              }`}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-card p-8 rounded-md border border-white/5"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{whiteLabel.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{whiteLabel.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${whiteLabel.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">{whiteLabel.period}</span>
              </div>
              
              <Button className="w-full rounded-md py-5 bg-secondary hover:bg-secondary/80 text-white">
                {whiteLabel.cta}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whiteLabel.features.map((feature) => (
                <div key={feature} className="flex items-start text-muted-foreground text-sm">
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
