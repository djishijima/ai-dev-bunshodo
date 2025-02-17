
import { motion } from "framer-motion";
import { Check, ExternalLink, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SetupItem {
  name: string;
  description: string;
  installCommand?: string;
  downloadUrl?: string;
  price?: {
    amount: number;
    unit: string;
  };
}

const devTools: SetupItem[] = [
  {
    name: "Visual Studio Code",
    description: "推奨のコードエディタ。TypeScript、React開発に最適化された機能を提供",
    downloadUrl: "https://code.visualstudio.com/",
  },
  {
    name: "Node.js",
    description: "JavaScript実行環境。npm（パッケージマネージャー）も同時にインストール",
    downloadUrl: "https://nodejs.org/",
  },
  {
    name: "Git",
    description: "バージョン管理システム。ソースコードの管理に必要",
    downloadUrl: "https://git-scm.com/downloads",
  }
];

const accounts: SetupItem[] = [
  {
    name: "GitHub",
    description: "ソースコード管理、バージョン管理のプラットフォーム",
    downloadUrl: "https://github.com/",
  },
  {
    name: "Vercel",
    description: "Webアプリケーションのデプロイと運用プラットフォーム",
    downloadUrl: "https://vercel.com/",
  },
  {
    name: "Supabase",
    description: "バックエンド機能を提供するプラットフォーム（認証、データベース、ストレージ）",
    downloadUrl: "https://supabase.com/",
  }
];

const apiServices: SetupItem[] = [
  {
    name: "OpenAI API",
    description: "AI機能の実装に必要なAPI。ChatGPT、DALL-E等のサービスを利用可能",
    downloadUrl: "https://platform.openai.com/",
    price: {
      amount: 0.002,
      unit: "1,000トークン"
    }
  },
  {
    name: "Stripe",
    description: "決済機能の実装に必要なサービス",
    downloadUrl: "https://stripe.com/jp",
    price: {
      amount: 3.6,
      unit: "決済額の%"
    }
  }
];

const osSpecificGuide = {
  windows: [
    "PowerShellを管理者権限で実行",
    "wingetコマンドでのインストールを推奨",
    "Path環境変数の確認"
  ],
  mac: [
    "Homebrewのインストール推奨",
    "ターミナルでのコマンドライン操作",
    "Xcodeコマンドラインツールのインストール"
  ]
};

export const SetupGuide = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          開発環境セットアップガイド
        </h2>
        <p className="text-xl text-center text-white/80 mb-12">
          AIアプリ開発に必要なツールとアカウントの準備チェックリスト
        </p>

        <div className="space-y-12">
          {/* OS別セットアップガイド */}
          <div className="glass-card p-6">
            <h3 className="text-2xl font-semibold text-white mb-6">OS別セットアップガイド</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">Windows</h4>
                <ul className="space-y-3">
                  {osSpecificGuide.windows.map((item, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <Check className="w-5 h-5 mr-2 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">Mac</h4>
                <ul className="space-y-3">
                  {osSpecificGuide.mac.map((item, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <Check className="w-5 h-5 mr-2 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 開発ツール */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="dev-tools" className="glass-card border-none">
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-white hover:no-underline">
                必須開発ツール
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  {devTools.map((tool) => (
                    <div key={tool.name} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{tool.name}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10"
                          onClick={() => window.open(tool.downloadUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          ダウンロード
                        </Button>
                      </div>
                      <p className="text-white/80 text-sm">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 必要なアカウント */}
            <AccordionItem value="accounts" className="glass-card border-none">
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-white hover:no-underline">
                必要なアカウント
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  {accounts.map((account) => (
                    <div key={account.name} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{account.name}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10"
                          onClick={() => window.open(account.downloadUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          サインアップ
                        </Button>
                      </div>
                      <p className="text-white/80 text-sm">{account.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* APIサービス */}
            <AccordionItem value="api-services" className="glass-card border-none">
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-white hover:no-underline">
                APIサービス（オプション）
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  {apiServices.map((service) => (
                    <div key={service.name} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10"
                          onClick={() => window.open(service.downloadUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          登録
                        </Button>
                      </div>
                      <p className="text-white/80 text-sm mb-2">{service.description}</p>
                      {service.price && (
                        <div className="flex items-center gap-2 text-sm text-yellow-400/90 bg-yellow-400/10 p-2 rounded">
                          <AlertCircle className="w-4 h-4" />
                          <span>料金目安：{service.price.amount}{service.price.unit}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* 注意事項 */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">注意事項</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                APIキーは必ず安全に管理し、GitHubなどに公開しないようご注意ください。
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                有料APIサービスは、利用量に応じて課金が発生します。料金プランをよくご確認ください。
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                開発時は、必ずバージョン管理を行い、定期的にバックアップを取ることを推奨します。
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
