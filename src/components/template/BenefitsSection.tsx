
import { Benefit } from "@/types/template";
import { LightbulbIcon, CheckCircleIcon } from "lucide-react";

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  // アイコンをランダムに選択
  const getRandomIcon = (index: number) => {
    const icons = [
      <LightbulbIcon className="w-8 h-8 text-teal-500" key="lightbulb" />,
      <CheckCircleIcon className="w-8 h-8 text-blue-500" key="checkcircle" />,
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500" key="rocket">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>,
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500" key="zap">
        <path d="M13 2H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-9" />
        <path d="M13 2v7h7" />
        <path d="m9 16 3.5-3.5" />
        <path d="M13 12.5 14.5 14" />
        <path d="M16 12.5 17.5 14" />
        <path d="M9 19.5 17.5 11" />
      </svg>
    ];
    
    return icons[index % icons.length];
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-semibold mb-8">このテンプレートのメリット</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex-shrink-0">
              {getRandomIcon(index)}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
