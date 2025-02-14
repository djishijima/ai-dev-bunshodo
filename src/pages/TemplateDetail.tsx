
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Check, Star, ChevronRight } from "lucide-react";

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
    ],
    aiModels: [
      {
        name: "OpenAI GPT-4",
        features: [
          "高度な自然言語処理",
          "複雑なタスクの理解と実行",
          "多言語サポート",
          "コンテキストの理解力"
        ]
      },
      {
        name: "Google Gemini Pro",
        features: [
          "マルチモーダル処理能力",
          "効率的な処理速度",
          "コスト効率の良い応答",
          "画像認識機能"
        ]
      },
      {
        name: "Anthropic Claude",
        features: [
          "長文処理の得意分野",
          "高い倫理性と安全性",
          "詳細な分析能力",
          "正確な情報提供"
        ]
      }
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
            
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">${template.price}</span>
                <span className="text-gray-600">（一括払い）</span>
              </div>
              <p className="text-green-600 flex items-center gap-2 mb-4">
                <Check className="w-5 h-5" />
                ソースコード完全版を即時ダウンロード
              </p>
              
              <Button className="premium-button w-full text-lg py-6 gap-2">
                今すぐ購入 <ChevronRight className="w-5 h-5" />
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                30日間の返金保証付き
              </p>
            </div>

            {template.aiModels && (
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">対応AIモデル</h2>
                <div className="space-y-6">
                  {template.aiModels.map((model, index) => (
                    <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <h3 className="text-lg font-medium mb-3 text-gray-900">{model.name}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {model.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                            <Check className="w-4 h-4 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">主な機能</h2>
              <ul className="space-y-4">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">含まれるもの</h2>
              <ul className="space-y-4">
                {template.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
