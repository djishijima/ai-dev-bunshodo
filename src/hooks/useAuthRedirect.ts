
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { checkAuthSession, supabase } from "@/lib/supabase";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setIsCheckingSession(true);
      try {
        console.log("Checking session on component mount");
        const { data, error } = await checkAuthSession();
        
        if (error) {
          console.error("Error checking auth session:", error);
          toast.error("認証情報の確認中にエラーが発生しました");
          return;
        }
        
        if (data.session) {
          console.log("User is already logged in, redirecting to mypage");
          toast.success("既にログインしています");
          navigate("/mypage");
        } else {
          console.log("No active session found");
        }
      } catch (error) {
        console.error("Unexpected error during session check:", error);
      } finally {
        setIsCheckingSession(false);
      }
    };
    
    checkSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, !!session);
        if (event === 'SIGNED_IN' && session) {
          console.log("User signed in successfully, session:", session);
          toast.success("ログインしました");
          navigate("/mypage");
        } else if (event === 'SIGNED_OUT') {
          console.log("User signed out");
          toast.info("ログアウトしました");
        } else if (event === 'USER_UPDATED') {
          console.log("User profile updated");
        } else if (event === 'PASSWORD_RECOVERY') {
          console.log("Password recovery event");
          toast.info("パスワード復旧プロセスが開始されました");
        } else if (event === 'TOKEN_REFRESHED') {
          console.log("Token refreshed");
        }
        
        // Handle network failures outside of the event switch
        // since it's not a standard auth event type
        if (typeof window !== 'undefined' && !window.navigator.onLine) {
          console.error("Network connection issue detected");
          toast.error("ネットワーク接続エラーが発生しました");
        }
      }
    );
    
    // ハッシュフラグメントからエラーを探す（OAuthリダイレクト後）
    const handleHashParams = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('error=')) {
        // URLからエラーパラメータを抽出
        const params = new URLSearchParams(hash.substring(1));
        const error = params.get('error');
        const errorDescription = params.get('error_description');
        
        if (error) {
          console.error("OAuth error:", error, errorDescription);
          toast.error(`認証エラー: ${errorDescription || error}`);
        }
      }
    };
    
    handleHashParams();
    
    return () => {
      console.log("Cleanup: unsubscribing from auth changes");
      subscription.unsubscribe();
    };
  }, [navigate]);

  return { isCheckingSession };
};
