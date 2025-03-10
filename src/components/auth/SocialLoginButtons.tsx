import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

type LoadingState = {
  github: boolean;
  google: boolean;
};

type SocialLoginButtonsProps = {
  isLoading: LoadingState;
  setIsLoading: React.Dispatch<React.SetStateAction<LoadingState & { email: boolean }>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export const SocialLoginButtons = ({ 
  isLoading, 
  setIsLoading, 
  setError,
}: SocialLoginButtonsProps) => {
  
  return (
    <div className="space-y-4">
      {/* Google login button has been removed as requested */}
    </div>
  );
};
