
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${price}</span>
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
