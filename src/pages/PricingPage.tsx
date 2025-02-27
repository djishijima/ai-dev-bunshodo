
import { NavBar } from "@/components/NavBar";
import { motion } from "framer-motion";
import { templates } from "@/data/templates";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  // 価格表示を日本円形式に整形するヘルパー関数
  const formatPrice = (price: number) => {
    return price.toLocaleString('ja-JP');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto pt-32 px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          テンプレート料金プラン
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          必要な機能に合わせて最適なテンプレートをお選びください
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{template.title}</h2>
              <p className="text-gray-600 mb-6">{template.description}</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">¥{formatPrice(template.price)}</span>
                <span className="text-gray-600">（一括払い）</span>
              </div>

              <div className="space-y-4 mb-8">
                {template.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full premium-button gap-2"
                onClick={() => navigate(`/template/${template.id}`)}
              >
                詳細を見る <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Check className="w-4 h-4" />
                <span>30日間の返金保証付き</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100">
          <h3 className="text-xl font-semibold mb-4 text-purple-900 text-center">
            すべてのテンプレートに含まれる特典
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800">ソースコード完全版</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800">技術サポート</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800">アップデート無料</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;
