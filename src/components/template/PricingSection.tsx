
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PricingSectionProps {
  price: number;
}

export const PricingSection = ({ price }: PricingSectionProps) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "あなたの新しい挑戦を心より応援しています",
      description: "プログラミングの挫折経験がある方も多いと思います。私たちはあなたがプロダクト開発の楽しさを発見できるよう、24時間体制でサポートいたします。分からないことがあれば、いつでもチャットでお気軽にご相談ください。あなたの新しい人生の幕開けを、全力でサポートさせていただきます。",
      className: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none",
    });
  };

  return (
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
  );
};
