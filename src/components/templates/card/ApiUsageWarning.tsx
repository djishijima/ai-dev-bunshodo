
import { AlertCircle } from "lucide-react";
import { APIUsage } from "@/types/template";

interface ApiUsageWarningProps {
  apiUsage: APIUsage;
}

export const ApiUsageWarning = ({ apiUsage }: ApiUsageWarningProps) => {
  return (
    <div className="flex items-start gap-2 text-sm text-yellow-400/90 bg-yellow-400/10 p-3 rounded-lg">
      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-medium mb-1">API使用料（従量課金）</p>
        <p>{apiUsage.description}</p>
        <p>¥{apiUsage.pricePerUnit.toLocaleString()} / {apiUsage.unit}</p>
      </div>
    </div>
  );
};
