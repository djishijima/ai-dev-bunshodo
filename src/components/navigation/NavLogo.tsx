
import { PlusCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavLogoProps = {
  closeMenu: () => void;
};

export const NavLogo = ({ closeMenu }: NavLogoProps) => {
  return (
    <div className="flex items-center space-x-2">
      <PlusCircle className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium text-primary">Plus+Program</span>
      <NavLink 
        to="/" 
        className="ml-4 text-xl md:text-2xl font-bold text-white hover:text-white/80 transition-colors" 
        onClick={closeMenu}
      >
        AI開発プラットフォーム
      </NavLink>
    </div>
  );
};
