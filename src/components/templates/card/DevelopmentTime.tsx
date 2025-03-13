
import { Clock } from "lucide-react";

interface DevelopmentTimeProps {
  time: string;
}

export const DevelopmentTime = ({ time }: DevelopmentTimeProps) => {
  return (
    <div className="flex items-center gap-1.5 text-sm text-white/80">
      <Clock className="w-4 h-4" />
      <span>目安：{time}</span>
    </div>
  );
};
