
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Star } from "lucide-react";
import { templates } from "@/data/templates";
import { AIModelsSection } from "@/components/template/AIModelsSection";
import { PricingSection } from "@/components/template/PricingSection";
import { FeaturesSection } from "@/components/template/FeaturesSection";
import { IncludesSection } from "@/components/template/IncludesSection";

const TemplateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = templates.find(t => t.id === id);

  if (!template) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <NavBar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl">テンプレートが見つかりませんでした</h1>
          <Button onClick={() => navigate("/")} className="mt-4">
            トップに戻る
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto pt-32 px-4"
      >
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          ← 戻る
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-yellow-50 p-3 rounded-lg inline-flex items-center gap-2 mb-4">
              <Star className="text-yellow-500 w-5 h-5" />
              <span className="text-yellow-700 font-medium">人気のテンプレート</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {template.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {template.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {template.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white shadow-sm border border-gray-100 rounded-full text-sm font-medium text-gray-600 hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <PricingSection price={template.price} />

            {template.aiModels && (
              <AIModelsSection models={template.aiModels} />
            )}
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <FeaturesSection features={template.features} />
            <IncludesSection includes={template.includes} />

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">
                お客様満足度保証
              </h3>
              <p className="text-purple-700 leading-relaxed">
                30日間の返金保証付き。テンプレートにご満足いただけない場合は、
                全額返金いたします。技術サポートも含まれているので、安心して
                ご購入いただけます。
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateDetail;
