
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client"; // Use the consistent Supabase client
import { NavLogo } from "./navigation/NavLogo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

// Define a type for the User based on what we need
type User = {
  id: string;
  email?: string;
};

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
    // モバイルメニューを開いたときに背景スクロールを防止
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLogo closeMenu={closeMenu} />
          
          {/* Desktop Navigation */}
          <DesktopNav 
            user={user} 
            handleLogout={handleLogout} 
            navigate={navigate} 
          />

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

      {/* Mobile Navigation */}
      <MobileNav 
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        user={user}
        handleLogout={handleLogout}
        navigate={navigate}
      />
    </nav>
  );
};
