
import { TemplateCard } from "./TemplateCard";
import { motion } from "framer-motion";
import { templates } from "@/data/templates";

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
          無料APIを使った実用的なアプリケーションを<br />
          すぐに構築できるテンプレートを用意しています
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
