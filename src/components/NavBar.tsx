
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Menu, PlusCircle, X } from "lucide-react";

export const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <PlusCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Plus+Program</span>
            <NavLink to="/" className="ml-4 text-xl md:text-2xl font-bold text-white hover:text-white/80 transition-colors" onClick={closeMenu}>
              AI開発プラットフォーム
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/templates" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'} transition-colors`
              }
            >
              テンプレート一覧
            </NavLink>
            
            <NavLink 
              to="/setup-guide" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'} transition-colors`
              }
            >
              セットアップガイド
            </NavLink>
            
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'} transition-colors`
              }
            >
              アプリ開発のご依頼
            </NavLink>
            
            {user ? (
              <>
                <NavLink 
                  to="/mypage" 
                  className={({ isActive }) => 
                    `text-sm ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'} transition-colors`
                  }
                >
                  マイページ
                </NavLink>
                
                <Button 
                  variant="outline" 
                  className="bg-secondary border-white/10 text-white hover:bg-secondary/80"
                  onClick={handleLogout}
                >
                  ログアウト
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="bg-secondary border-white/10 text-white hover:bg-secondary/80"
                onClick={() => navigate("/login")}
              >
                ログイン
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-16">
          <div className="flex flex-col items-center gap-6 p-6">
            <NavLink 
              to="/templates" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-white font-semibold' : 'text-muted-foreground'} transition-colors py-3`
              }
              onClick={closeMenu}
            >
              テンプレート一覧
            </NavLink>
            
            <NavLink 
              to="/setup-guide" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-white font-semibold' : 'text-muted-foreground'} transition-colors py-3`
              }
              onClick={closeMenu}
            >
              セットアップガイド
            </NavLink>
            
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-white font-semibold' : 'text-muted-foreground'} transition-colors py-3`
              }
              onClick={closeMenu}
            >
              アプリ開発のご依頼
            </NavLink>
            
            {user ? (
              <>
                <NavLink 
                  to="/mypage" 
                  className={({ isActive }) => 
                    `text-lg ${isActive ? 'text-white font-semibold' : 'text-muted-foreground'} transition-colors py-3`
                  }
                  onClick={closeMenu}
                >
                  マイページ
                </NavLink>
                
                <Button 
                  variant="outline" 
                  className="bg-secondary border-white/10 text-white hover:bg-secondary/80 w-full mt-4"
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                >
                  ログアウト
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="bg-secondary border-white/10 text-white hover:bg-secondary/80 w-full mt-4"
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
              >
                ログイン
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
