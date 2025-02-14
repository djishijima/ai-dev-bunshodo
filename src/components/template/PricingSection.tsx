
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  price: number;
}

export const PricingSection = ({ price }: PricingSectionProps) => {
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
      
      <Button className="premium-button w-full text-lg py-6 gap-2">
        今すぐ購入 <ChevronRight className="w-5 h-5" />
      </Button>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        30日間の返金保証付き
      </p>
    </div>
  );
};
