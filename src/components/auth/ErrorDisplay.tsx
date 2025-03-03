
import { AlertCircle } from "lucide-react";

type ErrorDisplayProps = {
  error: string;
};

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;
  
  return (
    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md flex items-start">
      <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-white">{error}</p>
    </div>
  );
};
