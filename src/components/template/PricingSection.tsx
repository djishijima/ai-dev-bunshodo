
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface PricingSectionProps {
  price: number;
}

export const PricingSection = ({ price }: PricingSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">（一括払い）</span>
        </div>
        <p className="text-green-600 flex items-center gap-2 mb-4">
          <Check className="w-5 h-5" />
          ソースコード完全版を即時ダウンロード
        </p>
        
        <Button 
          className="premium-button w-full text-lg py-6 gap-2"
          onClick={handlePurchase}
        >
          今すぐ購入 <ChevronRight className="w-5 h-5" />
        </Button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          30日間の返金保証付き
        </p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              🎉 特別キャンペーン実施中 🎉
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-xl mb-2">現在の価格</p>
                <p className="text-5xl font-bold mb-2">¥0</p>
                <div className="text-2xl font-semibold text-yellow-300">
                  + さらに30%OFF
                </div>
                <p className="text-sm mt-2 text-gray-200">
                  ※ クーポンコード自動適用済み
                </p>
              </div>

              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">
                  このテンプレートは無料でダウンロードできます。<br/>
                  さらに、テンプレート内で使用できる30%OFFクーポンが付いてきます！
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                className="w-full py-6 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                onClick={() => setIsModalOpen(false)}
              >
                無料でダウンロード
              </Button>
              <p className="text-center text-sm text-gray-500">
                ※ ダウンロード後、メールアドレスの登録が必要です
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
