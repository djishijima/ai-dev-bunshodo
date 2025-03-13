
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface LoginButtonsProps {
  isLoading: {
    github: boolean;
    google: boolean;
    email: boolean;
  };
  setIsLoading: React.Dispatch<
    React.SetStateAction<{
      github: boolean;
      google: boolean;
      email: boolean;
    }>
  >;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setShowEmailInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginButtons = ({
  isLoading,
  setIsLoading,
  setError,
  setShowEmailInput,
}: LoginButtonsProps) => {
  const navigate = useNavigate();
  
  const handleGithubLogin = async () => {
    setIsLoading(prev => ({ ...prev, github: true }));
    try {
      // Get current site URL for redirect
      const siteUrl = window.location.origin;
      console.log("Current site URL:", siteUrl);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${siteUrl}/auth/callback`,
        },
      });

      if (error) {
        console.error("GitHub login error:", error);
        setError(`GitHubログインエラー: ${error.message}`);
        toast.error("GitHubログインに失敗しました");
      } else if (data) {
        console.log("GitHub auth started:", data);
      }
    } catch (err) {
      console.error("Unexpected GitHub login error:", err);
      setError("予期せぬエラーが発生しました。もう一度お試しください。");
      toast.error("ログイン処理中にエラーが発生しました");
    } finally {
      setIsLoading(prev => ({ ...prev, github: false }));
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(prev => ({ ...prev, google: true }));
    try {
      // Get current site URL for redirect
      const siteUrl = window.location.origin;
      console.log("Current site URL for Google auth:", siteUrl);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${siteUrl}/auth/callback`,
        },
      });

      if (error) {
        console.error("Google login error:", error);
        setError(`Googleログインエラー: ${error.message}`);
        toast.error("Googleログインに失敗しました");
      } else if (data) {
        console.log("Google auth started:", data);
      }
    } catch (err) {
      console.error("Unexpected Google login error:", err);
      setError("予期せぬエラーが発生しました。もう一度お試しください。");
      toast.error("ログイン処理中にエラーが発生しました");
    } finally {
      setIsLoading(prev => ({ ...prev, google: false }));
    }
  };

  const handleEmailLogin = () => {
    setShowEmailInput(true);
  };

  return (
    <div className="space-y-4">
      <Button
        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white"
        disabled={isLoading.github}
        onClick={handleGithubLogin}
      >
        {isLoading.github ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent" />
        ) : (
          <Github className="w-5 h-5" />
        )}
        GitHubでログイン
      </Button>

      <Button
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isLoading.google}
        onClick={handleGoogleLogin}
      >
        {isLoading.google ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M12.545 12.151c0 .269-.023.533-.07.79h-5.336v-1.582h3.046a2.603 2.603 0 0 0-1.125-2.585v-2.146h1.822c1.131 1.012 1.663 2.22 1.663 3.523Z"
            />
            <path
              fill="#ffffff"
              d="M12.545 12.151c0 .269-.023.533-.07.79h-5.336v-1.582h3.046a2.603 2.603 0 0 0-1.125-2.585v-2.146h1.822c1.131 1.012 1.663 2.22 1.663 3.523Z"
            />
            <path
              fill="#ffffff"
              d="M7.036 14.537a4.925 4.925 0 0 0 3.414 1.33a4.96 4.96 0 0 0 3.477-1.294l1.516 1.294a7.392 7.392 0 0 1-4.993 1.933a7.4 7.4 0 0 1-6.656-4.097l1.733-1.346a4.988 4.988 0 0 0 1.51 2.18Z"
            />
            <path
              fill="#ffffff"
              d="M15.927 8.476a7.392 7.392 0 0 1 1.733 4.662a7.385 7.385 0 0 1-1.733 4.732l-1.516-1.294a4.932 4.932 0 0 0 1.315-3.438a4.926 4.926 0 0 0-1.315-3.369l1.516-1.293Z"
            />
            <path
              fill="#ffffff"
              d="M3.534 12.628a4.965 4.965 0 0 0 .765 2.626l-1.733 1.346a7.416 7.416 0 0 1 0-7.944l1.733 1.346a4.965 4.965 0 0 0-.765 2.626Z"
            />
            <path
              fill="#ffffff"
              d="M11.06 7.438a2.6 2.6 0 0 0-1.582-.538a2.626 2.626 0 0 0-2.442 1.694l-1.733-1.347a5.019 5.019 0 0 1 4.175-2.28c1.154 0 2.308.384 3.404 1.152l-1.822 2.146c.013-.6.025-.24.038-.06l-.038-.767Z"
            />
          </svg>
        )}
        Googleでログイン
      </Button>

      <Button
        className="w-full flex items-center justify-center gap-2 bg-melon-600 hover:bg-melon-700 text-white"
        onClick={handleEmailLogin}
      >
        <Mail className="w-5 h-5" />
        メールでログイン
      </Button>
    </div>
  );
};
