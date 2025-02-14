
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavBar } from "@/components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
        </div>
      </div>
    </div>
  );
};

export default MyPage;
