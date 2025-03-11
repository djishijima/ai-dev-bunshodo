
import { User } from "@supabase/supabase-js";
import { NavigateFunction } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavItem } from "./NavItem";

type DesktopNavProps = {
  user: User | null;
  handleLogout: () => Promise<void>;
  navigate: NavigateFunction;
};

export const DesktopNav = ({ user, handleLogout, navigate }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center gap-6">
      <NavItem to="/templates">テンプレート一覧</NavItem>
      <NavItem to="/setup-guide">セットアップガイド</NavItem>
      <NavItem to="/pricing">アプリ開発のご依頼</NavItem>
      
      {user ? (
        <>
          <NavItem to="/mypage">マイページ</NavItem>
          
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
  );
};
