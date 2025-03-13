
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client"; // Use the consistent Supabase client
import { FormEvent, useState } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

type EmailLoginFormProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isLoading: { email: boolean };
  setIsLoading: React.Dispatch<React.SetStateAction<{ github: boolean; google: boolean; email: boolean }>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setShowEmailInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EmailLoginForm = ({ 
  email, 
  setEmail, 
  isLoading, 
  setIsLoading,
  setError,
  setShowEmailInput
}: EmailLoginFormProps) => {
  const [localError, setLocalError] = useState("");
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLocalError("");
    
    if (!email.trim()) {
      setLocalError("メールアドレスを入力してください");
      return;
    }
    
    if (!validateEmail(email)) {
      setLocalError("有効なメールアドレスを入力してください");
      return;
    }

    setIsLoading(prev => ({ ...prev, email: true }));
    setError("");
    
    try {
      console.log("Starting Email login process for:", email);
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          // Don't include any default user data at all
          emailRedirectTo: `${window.location.origin}/mypage`
        }
      });

      console.log("Email login response:", { data, error });

      if (error) {
        console.error('Email login error:', error);
        setLocalError(`メールログイン失敗: ${error.message}`);
        throw error;
      }

      if (data) {
        toast.success("認証メールを送信しました。メールをご確認ください。");
        setEmail("");
        setShowEmailInput(false);
      }
    } catch (error: any) {
      console.error('Error:', error);
      const errorMessage = error?.message || "不明なエラーが発生しました";
      setLocalError(`メールログイン失敗: ${errorMessage}`);
      toast.error("メールでのログインに失敗しました。ネットワーク接続を確認してください。");
    } finally {
      setIsLoading(prev => ({ ...prev, email: false }));
    }
  };

  return (
    <form onSubmit={handleEmailLogin} className="mt-4 space-y-4">
      {localError && <ErrorDisplay error={localError} />}
      
      <div className="space-y-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (localError) setLocalError("");
          }}
          placeholder="メールアドレスを入力"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          aria-invalid={!!localError}
          required
        />
        <Button 
          type="submit"
          variant="premium"
          className="w-full"
          disabled={isLoading.email}
        >
          {isLoading.email ? (
            <span className="flex items-center justify-center">
              <span className="animate-pulse mr-2">●</span> 送信中...
            </span>
          ) : (
            "認証メールを送信"
          )}
        </Button>
      </div>
      <p className="text-xs text-white/70 text-center">
        ※ 入力したメールアドレスに認証リンクが送信されます
      </p>
    </form>
  );
};
