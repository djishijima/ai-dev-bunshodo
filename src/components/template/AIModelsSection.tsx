
import { Check } from "lucide-react";
import type { AIModel } from "@/types/template";

interface AIModelsSectionProps {
  models: AIModel[];
}

export const AIModelsSection = ({ models }: AIModelsSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">対応AIモデル</h2>
      <div className="space-y-6">
        {models.map((model, index) => (
          <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
            <h3 className="text-lg font-medium mb-3 text-gray-900">{model.name}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {model.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
