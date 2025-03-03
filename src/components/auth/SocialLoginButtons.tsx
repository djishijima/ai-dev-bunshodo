
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
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
  
  const handleGithubLogin = async () => {
    setIsLoading(prev => ({ ...prev, github: true }));
    setError("");
    
    try {
      console.log("Starting GitHub login process");
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/mypage`
        }
      });

      console.log("GitHub login response:", { data, error });

      if (error) {
        console.error('GitHub login error:', error);
        setError(`GitHubログイン失敗: ${error.message}`);
        throw error;
      }

      // Note: The actual redirect happens automatically by Supabase
      toast.success("GitHubログインページに移動します");
    } catch (error: any) {
      console.error('Error:', error);
      const errorMessage = error?.message || "不明なエラーが発生しました";
      setError(`GitHubログイン失敗: ${errorMessage}`);
      toast.error("GitHubログインに失敗しました。ネットワーク接続を確認してください。");
    } finally {
      setIsLoading(prev => ({ ...prev, github: false }));
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(prev => ({ ...prev, google: true }));
    setError("");
    
    try {
      console.log("Starting Google login process");
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/mypage`
        }
      });

      console.log("Google login response:", { data, error });

      if (error) {
        console.error('Google login error:', error);
        setError(`Googleログイン失敗: ${error.message}`);
        throw error;
      }

      // Note: The actual redirect happens automatically by Supabase
      toast.success("Googleログインページに移動します");
    } catch (error: any) {
      console.error('Error:', error);
      const errorMessage = error?.message || "不明なエラーが発生しました";
      setError(`Googleログイン失敗: ${errorMessage}`);
      toast.error("Googleログインに失敗しました。ネットワーク接続を確認してください。");
    } finally {
      setIsLoading(prev => ({ ...prev, google: false }));
    }
  };

  return (
    <div className="space-y-4">
      <Button 
        className="w-full bg-[#24292F] hover:bg-[#24292F]/90 text-white"
        onClick={handleGithubLogin}
        disabled={isLoading.github}
      >
        <Github className="mr-2 h-5 w-5" />
        {isLoading.github ? 
          <span className="flex items-center">
            <span className="animate-pulse mr-2">●</span> GitHubと連携中...
          </span> : 
          "GitHubでログイン"
        }
      </Button>

      <Button 
        className="w-full bg-white hover:bg-gray-100 text-gray-900"
        onClick={handleGoogleLogin}
        disabled={isLoading.google}
      >
        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
        {isLoading.google ? 
          <span className="flex items-center">
            <span className="animate-pulse mr-2">●</span> Googleと連携中...
          </span> : 
          "Googleでログイン"
        }
      </Button>
    </div>
  );
};
