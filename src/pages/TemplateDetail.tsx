
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";

const templates = [
  {
    id: "ai-chat",
    title: "AIチャットアシスタント",
    description: "OpenAI統合とユーザー管理機能を備えた完全なチャットアプリケーション",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
    features: [
      "OpenAI APIとの完全な統合",
      "リアルタイムチャット機能",
      "ユーザー認証システム",
      "チャット履歴の保存",
      "レスポンシブデザイン",
      "カスタマイズ可能なUIコンポーネント"
    ],
    includes: [
      "ソースコード一式",
      "詳細な技術文書",
      "インストールガイド",
      "API連携ガイド",
      "1ヶ月のテクニカルサポート"
    ]
  },
  {
    id: "api-gateway",
    title: "APIゲートウェイ",
    description: "認証と速度制限機能を備えた安全なAPIゲートウェイ",
    price: 149,
    technologies: ["NextJS", "TypeScript", "REST"],
    features: [
      "JWTベースの認証システム",
      "リクエスト制限機能",
      "APIキー管理",
      "詳細なログ機能",
      "エラーハンドリング",
      "カスタムミドルウェアサポート"
    ],
    includes: [
      "ソースコード一式",
      "API仕様書",
      "デプロイメントガイド",
      "セキュリティガイドライン",
      "3ヶ月のテクニカルサポート"
    ]
  },
  {
    id: "subscription",
    title: "サブスクリプションプラットフォーム",
    description: "Stripe統合による完全な機能を備えたサブスクリプション管理システム",
    price: 199,
    technologies: ["React", "Stripe", "Supabase"],
    features: [
      "Stripe決済システム統合",
      "定期課金管理",
      "カスタム価格プラン",
      "請求書管理",
      "顧客ポータル",
      "支払い分析ダッシュボード"
    ],
    includes: [
      "ソースコード一式",
      "Stripe連携ガイド",
      "データベース設計書",
      "管理者マニュアル",
      "6ヶ月のテクニカルサポート"
    ]
  }
];

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
            <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{template.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {template.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <span className="text-3xl font-bold">${template.price}</span>
              <span className="text-gray-600 ml-2">（一括払い）</span>
            </div>
            <Button className="premium-button w-full md:w-auto">
              今すぐ購入
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">主な機能</h2>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">含まれるもの</h2>
              <ul className="space-y-2">
                {template.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateDetail;
