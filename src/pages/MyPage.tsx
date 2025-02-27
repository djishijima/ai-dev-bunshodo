
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavBar } from "@/components/NavBar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Download, 
  MessageSquare, 
  Settings, 
  User, 
  Bell, 
  Clock, 
  CreditCard,
  FileText,
  Clipboard,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const MyPage = () => {
  const [user, setUser] = useState({
    name: "山田 太郎",
    email: "yamada@example.com",
    avatar: "/placeholder.svg",
    notification: 3,
    purchasedTemplates: [
      {
        id: "ai-minutes",
        title: "AI議事録作成ツール",
        purchaseDate: "2024-03-01",
        status: "active",
        lastUsed: "2024-03-15"
      },
      {
        id: "ai-chatbot",
        title: "AIカスタマーサポートボット",
        purchaseDate: "2024-03-10",
        status: "active",
        lastUsed: "2024-03-12"
      }
    ],
    recentActivities: [
      {
        id: "act-1",
        type: "download",
        description: "AI議事録作成ツールのダウンロード",
        date: "2024-03-15 14:30"
      },
      {
        id: "act-2",
        type: "purchase",
        description: "AIカスタマーサポートボットの購入",
        date: "2024-03-10 09:15"
      },
      {
        id: "act-3",
        type: "support",
        description: "サポートチケット「APIキーの設定方法」の解決",
        date: "2024-03-08 11:45"
      }
    ]
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ここでSupabaseからユーザー情報を取得
    const fetchUserData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // プロファイル情報を取得
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
          
          if (error) throw error;
          if (data) {
            // ユーザーデータが存在する場合は更新
            setUser(prev => ({
              ...prev,
              name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || prev.name,
              email: session.user.email || prev.email,
              avatar: data.avatar_url || prev.avatar
            }));
            setEditName(`${data.first_name || ''} ${data.last_name || ''}`.trim() || prev.name);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) throw new Error('ログインしていません');

      // 名前を姓と名に分割
      const nameParts = editName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: firstName,
          last_name: lastName,
          updated_at: new Date().toISOString()
        })
        .eq('id', session.user.id);

      if (error) throw error;

      setUser(prev => ({
        ...prev,
        name: editName
      }));
      setIsEditMode(false);
      toast.success('プロフィールを更新しました');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('プロフィールの更新に失敗しました');
    } finally {
      setLoading(false);
    }
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

  // サポートステータスのサンプルデータ
  const supportStatus = {
    status: "resolved",
    tickets: 1,
    lastUpdate: "2024-03-15"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        {/* 上部のダッシュボード要約 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">購入済みテンプレート</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{user.purchasedTemplates.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">最終ログイン</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold">本日</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">お知らせ</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <div className="text-3xl font-bold">{user.notification}</div>
              <Badge className="ml-2 bg-red-500">{user.notification > 0 ? '未読' : '既読'}</Badge>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-md border border-white/20">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white/20">
              <User className="w-4 h-4 mr-2" />
              プロフィール
            </TabsTrigger>
            <TabsTrigger value="purchases" className="data-[state=active]:bg-white/20">
              <CreditCard className="w-4 h-4 mr-2" />
              購入履歴
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-white/20">
              <Clock className="w-4 h-4 mr-2" />
              アクティビティ
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-white/20">
              <MessageSquare className="w-4 h-4 mr-2" />
              サポート
            </TabsTrigger>
          </TabsList>

          {/* プロフィールタブ */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
                  <CardHeader className="relative pb-0">
                    <div className="absolute top-4 right-4">
                      {isEditMode ? (
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" onClick={() => setIsEditMode(false)}>
                            キャンセル
                          </Button>
                          <Button 
                            size="sm" 
                            variant="premium" 
                            onClick={handleSaveProfile}
                            disabled={loading}
                          >
                            {loading ? "保存中..." : "保存"}
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" variant="ghost" onClick={() => setIsEditMode(true)}>
                          <Settings className="w-4 h-4 mr-1" />
                          編集
                        </Button>
                      )}
                    </div>
                    <div className="flex flex-col items-center pt-4">
                      <Avatar className="h-24 w-24 border-4 border-white/20">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-xl">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      {isEditMode ? (
                        <div className="mt-4 w-full">
                          <Input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      ) : (
                        <CardTitle className="mt-4 text-2xl">{user.name}</CardTitle>
                      )}
                      
                      <CardDescription className="text-blue-100 mt-1">
                        {user.email}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-8">
                    <div className="flex flex-col items-center space-y-4">
                      <Badge variant="secondary" className="px-3 py-1">
                        プレミアムユーザー
                      </Badge>
                      <p className="text-center text-sm text-blue-100">
                        アカウント作成日: 2024年3月1日
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">通知設定</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-5 h-5 text-blue-300" />
                        <span>メール通知</span>
                      </div>
                      <div className="relative inline-block w-10 h-6 rounded-full bg-blue-900">
                        <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-5 h-5 text-blue-300" />
                        <span>製品アップデート通知</span>
                      </div>
                      <div className="relative inline-block w-10 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500">
                        <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2 space-y-6">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">アカウント情報</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm text-blue-200">ユーザーID</p>
                        <p className="font-mono text-sm bg-blue-900/50 p-2 rounded">u_1a2b3c4d5e6f7g8h9i</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-blue-200">契約プラン</p>
                        <div className="flex items-center">
                          <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                            プレミアム
                          </Badge>
                          <span className="ml-2 text-sm">2025年3月1日まで</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-blue-200">API使用状況</p>
                        <div className="flex items-center">
                          <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-400 to-teal-500" style={{ width: '23%' }}></div>
                          </div>
                          <span className="ml-2 text-sm">23%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-blue-200">最終ログイン</p>
                        <p>2024年3月18日 13:45</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">セキュリティ設定</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">パスワード</h3>
                        <p className="text-sm text-blue-200">最終更新: 30日前</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        変更
                      </Button>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">二要素認証</h3>
                        <p className="text-sm text-blue-200">未設定</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/20 text-white">
                        設定する
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* 購入履歴タブ */}
          <TabsContent value="purchases">
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">購入済みテンプレート</CardTitle>
                  <CardDescription className="text-blue-100">
                    購入したテンプレートの一覧と利用状況
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {user.purchasedTemplates.map((template) => (
                      <div key={template.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex-1 mb-4 md:mb-0">
                          <h3 className="font-medium text-lg mb-1">{template.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary" className="bg-blue-800/50 hover:bg-blue-700/50">React</Badge>
                            <Badge variant="secondary" className="bg-blue-800/50 hover:bg-blue-700/50">Supabase</Badge>
                            <Badge variant="secondary" className="bg-blue-800/50 hover:bg-blue-700/50">OpenAI</Badge>
                          </div>
                          <p className="text-sm text-blue-200">購入日: {template.purchaseDate}</p>
                          <p className="text-sm text-blue-200">最終アクセス: {template.lastUsed}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                          <Badge className="bg-green-600 text-white self-start">
                            {template.status === 'active' ? 'アクティブ' : '期限切れ'}
                          </Badge>
                          <Button variant="outline" size="sm" className="border-white/20 text-white">
                            <Download className="w-4 h-4 mr-2" />
                            ダウンロード
                          </Button>
                          <Button variant="ghost" size="sm">
                            詳細
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 flex justify-center pt-6">
                  <Button variant="premium">テンプレートをもっと見る</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">請求履歴</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <p className="font-medium">AI議事録作成ツール</p>
                        <p className="text-sm text-blue-200">2024年3月1日</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥19,800</p>
                        <Badge variant="outline" className="border-green-500 text-green-400">支払い完了</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <p className="font-medium">AIカスタマーサポートボット</p>
                        <p className="text-sm text-blue-200">2024年3月10日</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥29,800</p>
                        <Badge variant="outline" className="border-green-500 text-green-400">支払い完了</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* アクティビティタブ */}
          <TabsContent value="activities">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl">最近のアクティビティ</CardTitle>
                <CardDescription className="text-blue-100">
                  アカウントに関連する最近の活動履歴
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-blue-500 before:to-blue-600">
                  {user.recentActivities.map((activity, index) => (
                    <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-gradient-to-b from-blue-400 to-blue-600">
                        {activity.type === 'download' && <Download className="w-5 h-5 text-white" />}
                        {activity.type === 'purchase' && <CreditCard className="w-5 h-5 text-white" />}
                        {activity.type === 'support' && <MessageSquare className="w-5 h-5 text-white" />}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-white/5 border border-white/10 shadow-md">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-semibold">{activity.description}</div>
                          <time className="font-mono text-xs text-blue-200">{activity.date}</time>
                        </div>
                        <div className="text-blue-100 text-sm">
                          {activity.type === 'download' && '正常にダウンロードが完了しました。'}
                          {activity.type === 'purchase' && '決済が完了し、テンプレートが利用可能になりました。'}
                          {activity.type === 'support' && 'サポートチケットが解決済みとマークされました。'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 flex justify-center pt-6">
                <Button variant="ghost">すべての履歴を表示</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* サポートタブ */}
          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">サポートチケット</CardTitle>
                    <CardDescription className="text-blue-100">
                      作成したサポートチケットの状態を確認できます
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">APIキーの設定方法について</h3>
                          <Badge className="bg-green-600">解決済み</Badge>
                        </div>
                        <p className="text-sm text-blue-100 mb-3">
                          2024年3月8日に作成・2024年3月8日に解決
                        </p>
                        <div className="p-3 bg-white/5 rounded border border-white/10 text-sm">
                          <p className="mb-2">AIカスタマーサポートボットのAPIキー設定方法がわかりません。</p>
                          <div className="flex items-center text-green-400 text-xs mt-2">
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            <span>サポートスタッフによって解決済み</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-white/10 flex justify-between pt-6">
                    <Button variant="outline" className="border-white/20 text-white">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      新しいチケットを作成
                    </Button>
                    <Button variant="ghost">すべてのチケットを表示</Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">ドキュメント</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <FileText className="w-5 h-5 text-blue-300 mr-3" />
                        <span>APIリファレンス</span>
                      </div>
                      <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <Clipboard className="w-5 h-5 text-blue-300 mr-3" />
                        <span>セットアップガイド</span>
                      </div>
                      <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <Settings className="w-5 h-5 text-blue-300 mr-3" />
                        <span>カスタマイズガイド</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">サポート状況</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center py-6">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-green-600/20 border-4 border-green-500 mb-4">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </div>
                      <p className="text-lg font-medium mb-1">すべて解決済み</p>
                      <p className="text-sm text-blue-100">未解決のチケットはありません</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 納品の流れ */}
        <Card className="mt-8 bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-xl">納品の流れ</CardTitle>
            <CardDescription className="text-blue-100">
              テンプレート導入から実装までのステップ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {deliverySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="p-2 bg-white/10 rounded-full shadow-sm">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                      <p className="text-blue-100">{step.description}</p>
                    </div>
                  </div>
                  {index < deliverySteps.length - 1 && (
                    <div className="absolute left-7 top-full h-8">
                      <ArrowRight className="w-5 h-5 text-blue-500 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyPage;
