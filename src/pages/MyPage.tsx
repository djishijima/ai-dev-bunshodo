
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavBar } from "@/components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Download, MessageSquare, Settings } from "lucide-react";

const MyPage = () => {
  // 仮のユーザーデータ
  const user = {
    name: "山田 太郎",
    email: "yamada@example.com",
    purchasedTemplates: [
      {
        id: "ai-minutes",
        title: "AI議事録作成ツール",
        purchaseDate: "2024-03-01"
      },
      {
        id: "ai-chatbot",
        title: "AIカスタマーサポートボット",
        purchaseDate: "2024-03-10"
      }
    ]
  };

  // 納品の流れステップ
  const deliverySteps = [
    {
      icon: <Download className="w-6 h-6 text-blue-500" />,
      title: "テンプレートのダウンロード",
      description: "購入したテンプレートのソースコードとドキュメントをダウンロードします。"
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: "環境設定とカスタマイズ",
      description: "APIキーの設定や必要な環境変数の設定を行い、要件に合わせてカスタマイズします。"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      title: "サポート対応",
      description: "導入時の不明点や技術的な質問にサポートチームが対応します。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="space-y-6">
          {/* プロフィールセクション */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </CardHeader>
          </Card>

          {/* 購入済みテンプレート */}
          <Card>
            <CardHeader>
              <CardTitle>購入済みテンプレート</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.purchasedTemplates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{template.title}</h3>
                      <p className="text-sm text-gray-500">購入日: {template.purchaseDate}</p>
                    </div>
                    <Badge>アクティブ</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 納品の流れ */}
          <Card>
            <CardHeader>
              <CardTitle>納品の流れ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-white rounded-full shadow-sm">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index < deliverySteps.length - 1 && (
                      <div className="absolute left-7 top-full h-8">
                        <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
