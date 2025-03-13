
import { GraduationCap } from "lucide-react";

interface DifficultyBadgeProps {
  difficulty: "初級" | "中級" | "上級";
}

export const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
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
    <div className="flex items-center gap-1.5 text-sm">
      <GraduationCap className={`w-4 h-4 ${getDifficultyColor(difficulty)}`} />
      <span className={`${getDifficultyColor(difficulty)}`}>{difficulty}</span>
    </div>
  );
};
