
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { checkAuthSession, supabase } from "@/lib/supabase";

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      console.log("Checking session on component mount");
      const { data } = await checkAuthSession();
      
      if (data.session) {
        console.log("User is already logged in, redirecting to mypage");
        toast.success("既にログインしています");
        navigate("/mypage");
      } else {
        console.log("No active session found");
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
        }
      }
    );
    
    return () => {
      console.log("Cleanup: unsubscribing from auth changes");
      subscription.unsubscribe();
    };
  }, [navigate]);
};
