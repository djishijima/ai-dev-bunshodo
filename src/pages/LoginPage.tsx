
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("メールアドレスを入力してください");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/mypage`,
        },
      });

      if (error) throw error;

      toast.success("マジックリンクを送信しました！メールをご確認ください。");
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast.error("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <NavBar />
      <div className="max-w-md mx-auto px-4 pt-32">
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">ログイン</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                disabled={isLoading}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              disabled={isLoading}
            >
              {isLoading ? "送信中..." : "マジックリンクを送信"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-white/70 text-center">
            パスワードレスのマジックリンク認証を採用しています。<br />
            メールアドレスを入力すると、ログイン用のリンクが送信されます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
