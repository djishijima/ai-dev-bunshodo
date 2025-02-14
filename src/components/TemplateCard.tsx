
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  technologies: string[];
  index: number;
}

export const TemplateCard = ({ id, title, description, price, technologies, index }: TemplateCardProps) => {
  const navigate = useNavigate();

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
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">
            {price === 0 ? "無料" : `$${price}`}
          </span>
          <Button 
            className="premium-button"
            onClick={() => navigate(`/template/${id}`)}
          >
            詳細を見る
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
