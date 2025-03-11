
import { NavLink as RouterNavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
};

export const NavItem = ({ to, onClick, children, isMobile = false }: NavItemProps) => {
  const baseClasses = isMobile 
    ? "text-xl transition-colors py-4" 
    : "text-sm transition-colors";

  return (
    <RouterNavLink 
      to={to} 
      className={({ isActive }) => 
        `${baseClasses} ${isActive 
          ? 'text-white' + (isMobile ? ' font-semibold' : '') 
          : 'text-muted-foreground hover:text-white'}`
      }
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  );
};
