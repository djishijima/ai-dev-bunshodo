
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { FormEvent } from "react";

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
  
  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("メールアドレスを入力してください");
      return;
    }

    setIsLoading(prev => ({ ...prev, email: true }));
    setError("");
    
    try {
      console.log("Starting Email login process for:", email);
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/mypage`
        }
      });

      console.log("Email login response:", { data, error });

      if (error) {
        console.error('Email login error:', error);
        setError(`メールログイン失敗: ${error.message}`);
        throw error;
      }

      if (data) {
        toast.success("認証メールを送信しました。メールをご確認ください。");
        setEmail("");
        setShowEmailInput(false);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("メールでのログインに失敗しました。ネットワーク接続を確認してください。");
    } finally {
      setIsLoading(prev => ({ ...prev, email: false }));
    }
  };

  return (
    <form onSubmit={handleEmailLogin} className="mt-4 space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレスを入力"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          required
        />
        <Button 
          type="submit"
          variant="premium"
          className="w-full"
          disabled={isLoading.email}
        >
          {isLoading.email ? "送信中..." : "認証メールを送信"}
        </Button>
      </div>
      <p className="text-xs text-white/70 text-center">
        ※ 入力したメールアドレスに認証リンクが送信されます
      </p>
    </form>
  );
};
