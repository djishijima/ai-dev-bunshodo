
import { motion } from "framer-motion";
import { TemplateIntro } from "./templates/TemplateIntro";
import { TemplatesList } from "./templates/TemplatesList";
import { DeploymentGuide } from "./templates/DeploymentGuide";
import { ImplementationTime } from "./templates/ImplementationTime";
import { ApplicationPossibilities } from "./templates/ApplicationPossibilities";

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
          すぐに使える実用的なアプリケーションを<br />
          手頃な価格で提供しています
        </p>
        
        <TemplateIntro />
        <TemplatesList />
        <DeploymentGuide />
        <ImplementationTime />
        <ApplicationPossibilities />
      </motion.div>
    </section>
  );
};
