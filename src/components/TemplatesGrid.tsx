
import { TemplateCard } from "./TemplateCard";
import { motion } from "framer-motion";

const templates = [
  {
    id: "simple-chat",
    title: "シンプルチャットボット",
    description: "OpenAIを使った基本的なチャットボット。5分で作れる初心者向けテンプレート",
    price: 0,
    technologies: ["React", "OpenAI"],
  },
  {
    id: "image-gallery",
    title: "AIイメージギャラリー",
    description: "AIで画像を生成・管理できるギャラリーアプリ。無料で始められます",
    price: 0,
    technologies: ["React", "OpenAI", "Cloudinary"],
  },
  {
    id: "ai-chat",
    title: "AIチャットアシスタント",
    description: "チャット履歴保存、ユーザー管理機能付きの本格的なAIチャットアプリ",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
  },
  {
    id: "api-gateway",
    title: "モダンAPIゲートウェイ",
    description: "高性能で安全なAPIゲートウェイ。認証、レート制限、モニタリング機能を統合",
    price: 149,
    technologies: ["React", "TypeScript", "Redis"],
  }
];

export const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">アプリテンプレート一覧</h2>
        <p className="text-center text-white/80 mb-12">
          すぐに始められる無料テンプレートを用意しています<br />
          プログラミング知識がなくても、OpenAIを使ったアプリが作れます
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={template.title} {...template} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
