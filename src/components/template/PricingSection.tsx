
import { Check, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface PricingSectionProps {
  price: number;
  templateId: string;
  templateName: string;
}

export const PricingSection = ({ price, templateId, templateName }: PricingSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 購入状態を確認
  useEffect(() => {
    // URLパラメータをチェック（Stripeからの成功リダイレクト）
    const urlParams = new URLSearchParams(window.location.search);
    const isSuccess = urlParams.get('success') === 'true';
    
    if (isSuccess) {
      // Stripeから成功リダイレクト後の処理
      toast.success("購入が完了しました！テンプレートをダウンロードできます。");
      savePurchaseToLocalStorage();
      setIsPurchaseComplete(true);
      
      // URLからパラメータを削除（ブラウザの履歴を汚さないため）
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    
    // ローカルストレージから購入状態を確認
    const checkPurchaseStatus = async () => {
      try {
        const purchasedItems = localStorage.getItem('purchasedTemplates');
        if (purchasedItems) {
          const purchases = JSON.parse(purchasedItems);
          if (purchases.includes(templateId)) {
            setIsPurchaseComplete(true);
            return;
          }
        }
        
        // またはSupabaseから購入履歴を確認（認証済みの場合）
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData?.session?.user) {
          const { data: purchaseData, error } = await supabase
            .from('purchases')
            .select('*')
            .eq('template_id', templateId)
            .eq('user_id', sessionData.session.user.id)
            .maybeSingle();
            
          if (purchaseData) {
            setIsPurchaseComplete(true);
            // ローカルにも保存
            savePurchaseToLocalStorage();
          }
          
          if (error && error.code !== 'PGRST116') {
            console.error("購入確認エラー:", error);
          }
        }
      } catch (error) {
        console.error("購入状態確認エラー:", error);
      }
    };
    
    checkPurchaseStatus();
  }, [templateId]);
  
  // ローカルストレージに購入情報を保存
  const savePurchaseToLocalStorage = () => {
    try {
      const purchasedItems = localStorage.getItem('purchasedTemplates');
      let purchases = [];
      
      if (purchasedItems) {
        purchases = JSON.parse(purchasedItems);
      }
      
      if (!purchases.includes(templateId)) {
        purchases.push(templateId);
        localStorage.setItem('purchasedTemplates', JSON.stringify(purchases));
      }
    } catch (error) {
      console.error("購入情報保存エラー:", error);
    }
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("メールアドレスを入力してください");
      return;
    }

    setIsSubmitting(true);
    try {
      // ログを追加してデバッグ
      console.log("チェックアウト開始:", {
        templateId,
        templateName,
        price,
        email,
        successUrl: `${window.location.origin}/template/${templateId}?success=true`,
        cancelUrl: `${window.location.origin}/template/${templateId}?canceled=true`,
      });

      // Supabaseのエッジ関数でStripeチェックアウトセッションを作成
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL || 'https://fkjgcszdgcbcdmclgfer.supabase.co'}/functions/v1/create-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZramdjc3pkZ2NiY2RtY2xnZmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwODUyMDgsImV4cCI6MjA1NTY2MTIwOH0.M-6eN4TW_87p1JpXAN5HhY1mRCK7b8GOFXiRdRuRmUM'}`,
          },
          body: JSON.stringify({
            templateId,
            templateName,
            price,
            email,
            successUrl: `${window.location.origin}/template/${templateId}?success=true`,
            cancelUrl: `${window.location.origin}/template/${templateId}?canceled=true`,
          }),
        }
      );

      const data = await response.json();
      console.log("チェックアウトレスポンス:", data);
      
      if (!response.ok) {
        throw new Error(data.error || "決済処理に失敗しました");
      }

      // Stripeチェックアウトページにリダイレクト
      if (data.url) {
        console.log("リダイレクト先URL:", data.url);
        window.location.href = data.url;
      } else {
        throw new Error("決済URLが見つかりません");
      }
      
    } catch (error) {
      console.error('Stripe checkout error:', error);
      toast.error("決済処理の開始に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    // 実際のテンプレートファイルのダウンロード処理
    const templateContent = `
# ${templateName} テンプレート

このテンプレートには以下のファイルが含まれています：
- ソースコード一式
- 環境設定ファイル
- README.md（セットアップ手順）
- デプロイガイド

詳しいセットアップ方法とカスタマイズガイドは付属のドキュメントをご覧ください。
`;

    // BlobとURLを作成
    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // ダウンロードリンクを作成して自動クリック
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, '-').toLowerCase()}-template.txt`;
    document.body.appendChild(a);
    a.click();
    
    // クリーンアップ
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
    
    toast.success("ダウンロードを開始しました");
    
    // ダウンロード記録（オプション）
    const trackDownload = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData?.session?.user?.id;
      
      if (userId) {
        await supabase
          .from('downloads')
          .insert({
            template_id: templateId,
            user_id: userId,
            downloaded_at: new Date().toISOString()
          });
      }
    };
    
    trackDownload().catch(console.error);
  };

  // 価格表示を日本円に変換して整形（カンマ区切り）
  const formattedPrice = price.toLocaleString('ja-JP');

  return (
    <>
      <div className="bg-melon-700/90 p-6 rounded-2xl shadow-lg mb-8 border border-melon-600">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-white">¥{formattedPrice}</span>
          <span className="text-melon-200">（一括払い）</span>
        </div>
        <p className="text-teal-200 flex items-center gap-2 mb-4">
          <Check className="w-5 h-5" />
          ソースコード完全版を即時ダウンロード
        </p>
        
        {isPurchaseComplete ? (
          <Button 
            className="w-full text-lg py-6 gap-2 bg-green-600 hover:bg-green-700 text-white"
            onClick={handleDownload}
          >
            ダウンロードする <Download className="w-5 h-5" />
          </Button>
        ) : (
          <Button 
            className="premium-button w-full text-lg py-6 gap-2"
            onClick={handlePurchase}
          >
            今すぐ購入 <ChevronRight className="w-5 h-5" />
          </Button>
        )}
        
        <p className="text-center text-sm text-melon-200 mt-4">
          30日間の返金保証付き
        </p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-xl bg-gradient-to-b from-gray-50 to-white border-none shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-gray-800">
              🎉 特別キャンペーン実施中 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              期間限定のスペシャル割引をご利用いただけます
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg shadow-md">
                <p className="text-xl mb-2 font-medium">現在の価格</p>
                <p className="text-5xl font-bold mb-3">¥{formattedPrice}</p>
                <div className="text-2xl font-semibold text-teal-100">
                  + さらに30%OFF
                </div>
                <p className="text-sm mt-3 text-teal-100">
                  ※ クーポンコード自動適用済み
                </p>
              </div>

              <div className="border border-teal-100 bg-teal-50 p-6 rounded-lg shadow-sm">
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    はじめまして。私たちは、あなたのような創造的な方々のために
                    このテンプレートを作りました。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    プログラミングの世界は時として難しく感じるかもしれません。
                    でも、このテンプレートがあなたの最初の一歩を後押しできれば
                    と思っています。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    まずは今すぐ購入して始めてみませんか？さらに、あなたの挑戦を
                    応援したい気持ちを込めて、30%OFFクーポンもご用意しました。
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="メールアドレスを入力"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-6 text-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <Button 
                type="submit"
                variant="premium"
                className="w-full py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "処理中..." : "クレジットカードで購入する"}
              </Button>
              <p className="text-center text-sm text-gray-500">
                ※ 安全な決済処理が行われます
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

