
import { NavigateFunction } from "react-router-dom";
import { NavItem } from "./NavItem";
import { Button } from "@/components/ui/button";

// Define a custom User type that matches what we're using
type User = {
  id: string;
  email?: string;
};

type DesktopNavProps = {
  user: User | null;
  handleLogout: () => Promise<void>;
  navigate: NavigateFunction;
};

export const DesktopNav = ({ user, handleLogout, navigate }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-4">
      <NavItem to="/">ホーム</NavItem>
      <NavItem to="/templates">テンプレート</NavItem>
      <NavItem to="/pricing">料金</NavItem>
      
      {user ? (
        <>
          <NavItem to="/mypage">マイページ</NavItem>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-white hover:text-white hover:bg-primary/20"
          >
            ログアウト
          </Button>
        </>
      ) : (
        <Button 
          variant="default" 
          onClick={() => navigate("/login")}
          className="bg-primary hover:bg-primary/90"
        >
          ログイン
        </Button>
      )}
    </div>
  );
};
