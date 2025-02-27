
import { Update } from "@/types/template";
import { CalendarIcon } from "lucide-react";

interface UpdatesSectionProps {
  updates: Update[];
}

export const UpdatesSection = ({ updates }: UpdatesSectionProps) => {
  if (!updates || updates.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">アップデート履歴</h2>
      
      <div className="space-y-6">
        {updates.map((update, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100"
          >
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <CalendarIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{update.date}</p>
              <p className="font-medium">{update.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
