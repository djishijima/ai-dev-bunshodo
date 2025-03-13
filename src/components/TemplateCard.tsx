
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { APIUsage } from "@/types/template";
import { FreeTemplateBadge } from "./templates/card/FreeTemplateBadge";
import { DifficultyBadge } from "./templates/card/DifficultyBadge";
import { DevelopmentTime } from "./templates/card/DevelopmentTime";
import { TechnologyTags } from "./templates/card/TechnologyTags";
import { PriceAndAction } from "./templates/card/PriceAndAction";
import { ApiUsageWarning } from "./templates/card/ApiUsageWarning";

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  technologies: string[];
  apiUsage?: APIUsage;
  difficulty: "初級" | "中級" | "上級";
  developmentTime: string;
  index: number;
}

export const TemplateCard = ({ 
  id, 
  title, 
  description, 
  price, 
  technologies, 
  apiUsage,
  difficulty,
  developmentTime,
  index 
}: TemplateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="glass-card p-6 h-full flex flex-col">
        {price === 0 && <FreeTemplateBadge />}
        
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70 mb-4 flex-grow">{description}</p>

        <div className="flex gap-4 mb-4">
          <DifficultyBadge difficulty={difficulty} />
          <DevelopmentTime time={developmentTime} />
        </div>

        <TechnologyTags technologies={technologies} />
        
        <div className="space-y-4">
          <PriceAndAction price={price} templateId={id} />
          
          {apiUsage && <ApiUsageWarning apiUsage={apiUsage} />}
        </div>
      </Card>
    </motion.div>
  );
};
