
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, AlertCircle, Clock, GraduationCap } from "lucide-react";
import { APIUsage } from "@/types/template";

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
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "初級":
        return "text-green-400";
      case "中級":
        return "text-yellow-400";
      case "上級":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="glass-card p-6 h-full flex flex-col">
        {price === 0 && (
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">無料テンプレート</span>
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70 mb-4 flex-grow">{description}</p>

        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-sm">
            <GraduationCap className={`w-4 h-4 ${getDifficultyColor(difficulty)}`} />
            <span className={`${getDifficultyColor(difficulty)}`}>{difficulty}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-white/80">
            <Clock className="w-4 h-4" />
            <span>目安：{developmentTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">
              {price === 0 ? "無料" : `¥${price.toLocaleString()}`}
            </span>
            <Button 
              variant="premium"
              onClick={() => navigate(`/template/${id}`)}
            >
              詳細を見る
            </Button>
          </div>
          
          {apiUsage && (
            <div className="flex items-start gap-2 text-sm text-yellow-400/90 bg-yellow-400/10 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">API使用料（従量課金）</p>
                <p>{apiUsage.description}</p>
                <p>¥{apiUsage.pricePerUnit.toLocaleString()} / {apiUsage.unit}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
