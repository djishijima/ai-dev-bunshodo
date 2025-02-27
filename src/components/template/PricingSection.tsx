
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface PricingSectionProps {
  price: number;
}

export const PricingSection = ({ price }: PricingSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("メールアドレスを入力してください");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/mypage`,
        },
      });

      if (error) throw error;

      toast.success("認証メールを送信しました！メールをご確認ください。");
      setIsModalOpen(false);
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast.error("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
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
        
        <Button 
          className="premium-button w-full text-lg py-6 gap-2"
          onClick={handlePurchase}
        >
          今すぐ購入 <ChevronRight className="w-5 h-5" />
        </Button>
        
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
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg shadow-md">
                <p className="text-xl mb-2 font-medium">現在の価格</p>
                <p className="text-5xl font-bold mb-3">¥0</p>
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
                    まずは無料で始めてみませんか？さらに、あなたの挑戦を
                    応援したい気持ちを込めて、30%OFFクーポンもご用意しました。
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
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
                {isSubmitting ? "送信中..." : "メールアドレスで登録"}
              </Button>
              <p className="text-center text-sm text-gray-500">
                ※ 認証メールをお送りします
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
