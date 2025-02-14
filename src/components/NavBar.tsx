
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
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
              to="/pricing" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
              }
            >
              料金プラン
            </NavLink>
            
            <NavLink 
              to="/mypage" 
              className={({ isActive }) => 
                `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'} transition-colors`
              }
            >
              マイページ
            </NavLink>
            
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              ログイン
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
