
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";

export const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 現在のユーザー状態を取得
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // ユーザー状態の変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("ログアウトしました");
      navigate("/");
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error("ログアウトに失敗しました");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            RapidSaaS
          </NavLink>
          
          <div className="flex items-center gap-6">
            <NavLink 
              to="/templates" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
              }
            >
              テンプレート一覧
            </NavLink>
            
            <NavLink 
              to="/setup-guide" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
              }
            >
              セットアップガイド
            </NavLink>
            
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
              }
            >
              料金プラン
            </NavLink>
            
            {user ? (
              <>
                <NavLink 
                  to="/mypage" 
                  className={({ isActive }) => 
                    `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
                  }
                >
                  マイページ
                </NavLink>
                
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={handleLogout}
                >
                  ログアウト
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => navigate("/login")}
              >
                ログイン
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
