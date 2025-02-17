
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
      title: "私も昔は、あなたと同じようにプログラミングができませんでした",
      description: "プログラミングは言語です。日本語や英語のように、繰り返し使うことで上達していく技術なのです。でも今は、AIの力を借りることで、1行のコードも書かずにサイトやアプリを作ることができます。この革新的な技術を皆様と共有し、新しいものづくりの可能性を広げていきたいと考えています。応援の気持ちを込めて、クーポンコード入力で30%オフにてご提供させていただきます。あなたの創造性が、世界を変えるかもしれません。",
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
