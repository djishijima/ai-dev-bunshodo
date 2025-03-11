
import { User } from "@supabase/supabase-js";
import { NavigateFunction } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavItem } from "./NavItem";

type MobileNavProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
  user: User | null;
  handleLogout: () => Promise<void>;
  navigate: NavigateFunction;
};

export const MobileNav = ({ 
  isMenuOpen, 
  closeMenu, 
  user, 
  handleLogout, 
  navigate 
}: MobileNavProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-16 overflow-y-auto">
      <div className="flex flex-col items-center gap-8 p-8">
        <NavItem to="/templates" onClick={closeMenu} isMobile>
          テンプレート一覧
        </NavItem>
        
        <NavItem to="/setup-guide" onClick={closeMenu} isMobile>
          セットアップガイド
        </NavItem>
        
        <NavItem to="/pricing" onClick={closeMenu} isMobile>
          アプリ開発のご依頼
        </NavItem>
        
        {user ? (
          <>
            <NavItem to="/mypage" onClick={closeMenu} isMobile>
              マイページ
            </NavItem>
            
            <Button 
              variant="outline" 
              className="bg-secondary border-white/10 text-white hover:bg-secondary/80 w-full mt-4 py-6 text-lg"
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
            className="bg-secondary border-white/10 text-white hover:bg-secondary/80 w-full mt-4 py-6 text-lg"
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
  );
};
