
import { TemplateCard } from "./TemplateCard";
import { motion } from "framer-motion";

const templates = [
  {
    title: "AIチャットアシスタント",
    description: "OpenAI統合とユーザー管理機能を備えた完全なチャットアプリケーション",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
  },
  {
    title: "APIゲートウェイ",
    description: "認証と速度制限機能を備えた安全なAPIゲートウェイ",
    price: 149,
    technologies: ["NextJS", "TypeScript", "REST"],
  },
  {
    title: "サブスクリプションプラットフォーム",
    description: "Stripe統合による完全な機能を備えたサブスクリプション管理システム",
    price: 199,
    technologies: ["React", "Stripe", "Supabase"],
  },
];

export const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">プレミアムテンプレート</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={template.title} {...template} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
