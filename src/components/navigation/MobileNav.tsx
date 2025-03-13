
import { NavigateFunction } from "react-router-dom";
import { NavItem } from "./NavItem";
import { Button } from "@/components/ui/button";

// Define a custom User type that matches what we're using
type User = {
  id: string;
  email?: string;
};

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
  // Only render if the menu is open
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-background z-40 pt-16">
      <div className="flex flex-col items-center space-y-4 p-4">
        <NavItem to="/" onClick={closeMenu}>ホーム</NavItem>
        <NavItem to="/templates" onClick={closeMenu}>テンプレート</NavItem>
        <NavItem to="/pricing" onClick={closeMenu}>料金</NavItem>
        
        {user ? (
          <>
            <NavItem to="/mypage" onClick={closeMenu}>マイページ</NavItem>
            <Button 
              variant="ghost" 
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="text-white hover:text-white hover:bg-primary/20 w-full"
            >
              ログアウト
            </Button>
          </>
        ) : (
          <Button 
            variant="default" 
            onClick={() => {
              navigate("/login");
              closeMenu();
            }}
            className="bg-primary hover:bg-primary/90 w-full"
          >
            ログイン
          </Button>
        )}
      </div>
    </div>
  );
};
