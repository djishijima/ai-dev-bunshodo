
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PriceAndActionProps {
  price: number;
  templateId: string;
}

export const PriceAndAction = ({ price, templateId }: PriceAndActionProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-white">
        {price === 0 ? "無料" : `¥${price.toLocaleString()}`}
      </span>
      <Button 
        variant="premium"
        onClick={() => navigate(`/template/${templateId}`)}
      >
        詳細を見る
      </Button>
    </div>
  );
};
