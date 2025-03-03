
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SocialLoginButtons } from "./SocialLoginButtons";

type LoadingState = {
  github: boolean;
  google: boolean;
  email: boolean;
};

type LoginButtonsProps = {
  isLoading: LoadingState;
  setIsLoading: React.Dispatch<React.SetStateAction<LoadingState>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setShowEmailInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginButtons = ({ 
  isLoading, 
  setIsLoading, 
  setError,
  setShowEmailInput 
}: LoginButtonsProps) => {
  
  return (
    <div className="space-y-4">
      <SocialLoginButtons 
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={setError}
      />

      <Button 
        variant="premium"
        className="w-full"
        onClick={() => setShowEmailInput(prev => !prev)}
      >
        <Mail className="mr-2 h-5 w-5" />
        メールでログイン
      </Button>
    </div>
  );
};
