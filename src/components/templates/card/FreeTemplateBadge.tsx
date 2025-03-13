
import { Sparkles } from "lucide-react";

export const FreeTemplateBadge = () => {
  return (
    <div className="flex items-center gap-2 text-yellow-400 mb-2">
      <Sparkles className="w-4 h-4" />
      <span className="text-sm font-medium">無料テンプレート</span>
    </div>
  );
};
