
import { Check } from "lucide-react";

interface IncludesSectionProps {
  includes: string[];
}

export const IncludesSection = ({ includes }: IncludesSectionProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">含まれるもの</h2>
      <ul className="space-y-4">
        {includes.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
