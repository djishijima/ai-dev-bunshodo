
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown, FileText, MessageSquare, Upload, Users } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  file_url?: string;
  created_at: string;
  updated_at: string;
}

interface Purchase {
  id: string;
  user_id: string | null;
  email: string;
  template_id: string;
  template_title?: string;
  price: number;
  purchased_at: string;
  payment_id: string;
  payment_status: string;
  stripe_customer_id: string;
}

interface Customer {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  created_at: string;
  last_sign_in_at: string | null;
}

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTemplate, setNewTemplate] = useState<Partial<Template>>({
    id: "",
    title: "",
    description: "",
    price: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        setIsLoading(true);
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          toast.error("管理者ページへのアクセスには、ログインが必要です");
          navigate("/login");
          return;
        }
        
        // Check if the user is an admin
        const { data: adminData } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', session.session.user.id)
          .maybeSingle();
          
        if (!adminData) {
          toast.error("管理者権限がありません");
          navigate("/");
          return;
        }
        
        setIsAdmin(true);
        loadData();
      } catch (error) {
        console.error("Admin check error:", error);
        toast.error("管理者確認中にエラーが発生しました");
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAdminStatus();
  }, [navigate]);
  
  const loadData = async () => {
    try {
      // Load templates
      const { data: templateData, error: templateError } = await supabase
        .from('templates')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (templateError) throw templateError;
      setTemplates(templateData || []);
      
      // Load purchases with customer info
      const { data: purchaseData, error: purchaseError } = await supabase
        .from('purchases')
        .select('*')
        .order('purchased_at', { ascending: false });
        
      if (purchaseError) throw purchaseError;
      setPurchases(purchaseData || []);
      
      // Load customers from auth.users via admin API
      // Note: In a real app, you'd probably want to implement this in a secure backend function
      // For simplicity, we're just showing the UI here
      setCustomers([
        {
          id: "example-user-id",
          email: "user@example.com",
          first_name: "山田",
          last_name: "太郎",
          created_at: new Date().toISOString(),
          last_sign_in_at: new Date().toISOString()
        }
      ]);
    } catch (error) {
      console.error("Data loading error:", error);
      toast.error("データの読み込み中にエラーが発生しました");
    }
  };
  
  const handleSubmitTemplate = async () => {
    try {
      if (!newTemplate.id || !newTemplate.title) {
        toast.error("IDとタイトルは必須です");
        return;
      }
      
      const { error } = await supabase
        .from('templates')
        .upsert({
          id: newTemplate.id,
          title: newTemplate.title,
          description: newTemplate.description || "",
          price: newTemplate.price || 0,
          updated_at: new Date().toISOString()
        });
        
      if (error) throw error;
      
      toast.success("テンプレートが保存されました");
      setIsDialogOpen(false);
      loadData();
      setNewTemplate({
        id: "",
        title: "",
        description: "",
        price: 0
      });
    } catch (error) {
      console.error("Template save error:", error);
      toast.error("テンプレートの保存中にエラーが発生しました");
    }
  };
  
  const handleEditTemplate = (template: Template) => {
    setNewTemplate(template);
    setIsDialogOpen(true);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              管理者ページへのアクセス権限がありません。
            </AlertDescription>
          </Alert>
          <Button onClick={() => navigate("/")}>トップページに戻る</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">管理者ダッシュボード</h1>
          <p className="text-muted-foreground">テンプレートと顧客情報を管理します</p>
        </div>

        <Tabs defaultValue="templates">
          <TabsList className="mb-8">
            <TabsTrigger value="templates">
              <FileText className="w-4 h-4 mr-2" />
              テンプレート
            </TabsTrigger>
            <TabsTrigger value="purchases">
              <MessageSquare className="w-4 h-4 mr-2" />
              購入履歴
            </TabsTrigger>
            <TabsTrigger value="customers">
              <Users className="w-4 h-4 mr-2" />
              顧客情報
            </TabsTrigger>
          </TabsList>

          {/* テンプレート管理 */}
          <TabsContent value="templates">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">テンプレート一覧</h2>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Upload className="w-4 h-4 mr-2" />
                新規テンプレート追加
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>タイトル</TableHead>
                      <TableHead>説明</TableHead>
                      <TableHead>価格</TableHead>
                      <TableHead>最終更新日</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {templates.length > 0 ? (
                      templates.map((template) => (
                        <TableRow key={template.id}>
                          <TableCell className="font-mono">{template.id}</TableCell>
                          <TableCell className="font-medium">{template.title}</TableCell>
                          <TableCell className="max-w-xs truncate">{template.description}</TableCell>
                          <TableCell>¥{template.price.toLocaleString()}</TableCell>
                          <TableCell>{new Date(template.updated_at).toLocaleDateString('ja-JP')}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" onClick={() => handleEditTemplate(template)}>
                              編集
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          テンプレートがありません
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 購入履歴 */}
          <TabsContent value="purchases">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">購入履歴</h2>
              <p className="text-muted-foreground">全ての購入記録を表示します</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>日時</TableHead>
                      <TableHead>メールアドレス</TableHead>
                      <TableHead>テンプレートID</TableHead>
                      <TableHead>金額</TableHead>
                      <TableHead>状態</TableHead>
                      <TableHead>決済ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {purchases.length > 0 ? (
                      purchases.map((purchase) => (
                        <TableRow key={purchase.id}>
                          <TableCell>{new Date(purchase.purchased_at).toLocaleString('ja-JP')}</TableCell>
                          <TableCell>{purchase.email}</TableCell>
                          <TableCell className="font-mono">{purchase.template_id}</TableCell>
                          <TableCell>¥{purchase.price.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant={purchase.payment_status === "paid" ? "success" : "secondary"}>
                              {purchase.payment_status === "paid" ? "支払い完了" : purchase.payment_status}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-mono text-xs truncate max-w-xs">{purchase.payment_id}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          購入履歴がありません
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 顧客情報 */}
          <TabsContent value="customers">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">顧客情報</h2>
              <p className="text-muted-foreground">登録ユーザー一覧</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>メールアドレス</TableHead>
                      <TableHead>名前</TableHead>
                      <TableHead>登録日</TableHead>
                      <TableHead>最終ログイン</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.length > 0 ? (
                      customers.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell>
                            {customer.first_name || customer.last_name
                              ? `${customer.last_name || ''} ${customer.first_name || ''}`
                              : '-'}
                          </TableCell>
                          <TableCell>{new Date(customer.created_at).toLocaleDateString('ja-JP')}</TableCell>
                          <TableCell>
                            {customer.last_sign_in_at
                              ? new Date(customer.last_sign_in_at).toLocaleDateString('ja-JP')
                              : '未ログイン'}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          顧客情報がありません
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* テンプレート編集ダイアログ */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>テンプレート編集</DialogTitle>
              <DialogDescription>
                テンプレート情報を入力してください。
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">ID (英数字)</label>
                  <Input
                    value={newTemplate.id}
                    onChange={(e) => setNewTemplate({ ...newTemplate, id: e.target.value })}
                    placeholder="template-id"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">価格 (円)</label>
                  <Input
                    type="number"
                    value={newTemplate.price}
                    onChange={(e) => setNewTemplate({ ...newTemplate, price: parseInt(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">タイトル</label>
                <Input
                  value={newTemplate.title}
                  onChange={(e) => setNewTemplate({ ...newTemplate, title: e.target.value })}
                  placeholder="テンプレートタイトル"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">説明</label>
                <Textarea
                  value={newTemplate.description}
                  onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                  placeholder="テンプレートの説明"
                  rows={5}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={handleSubmitTemplate}>
                保存
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPage;
