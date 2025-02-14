
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Star, FileCode, BookOpen, Mail, CheckCircle2 } from "lucide-react";
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

  const deliverables = [
    {
      icon: FileCode,
      title: "ソースコード＆設定ファイル",
      description: "完全なソースコード、環境設定ファイル、インフラ設定ファイルが含まれます。"
    },
    {
      icon: BookOpen,
      title: "技術文書＆導入ガイド",
      description: "詳細な技術文書、セットアップガイド、ベストプラクティスが提供されます。"
    },
    {
      icon: Mail,
      title: "技術サポート",
      description: "3ヶ月間の技術サポート。導入時の質問やトラブルシューティングをサポートします。"
    }
  ];

  const steps = [
    {
      title: "購入手続き",
      description: "安全な決済システムで購入手続きを完了します。"
    },
    {
      title: "即時アクセス",
      description: "購入完了後、すぐにダウンロードとドキュメントへのアクセスが可能になります。"
    },
    {
      title: "サポート開始",
      description: "技術サポートチームがあなたの実装をサポートします。"
    }
  ];

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

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                購入プロセス
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">{step.title}</h4>
                      <p className="text-blue-700 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">提供内容</h2>
              <div className="space-y-6">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <FeaturesSection features={template.features} />
            <IncludesSection includes={template.includes} />

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">
                商用利用ライセンスについて
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-purple-700">
                    購入後、無制限の商用プロジェクトで使用可能です
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-purple-700">
                    再販や再配布は禁止されていますが、カスタマイズして
                    顧客のプロジェクトで使用することは可能です
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-purple-700">
                    著作権表示は必要ありませんが、appreciate（任意）です
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateDetail;
