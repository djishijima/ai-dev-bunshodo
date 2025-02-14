
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">コードマーケット</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#templates" className="text-gray-700 hover:text-gray-900 transition-colors">
              テンプレート
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              機能
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              料金
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">ログイン</Button>
            <Button className="premium-button">今すぐ始める</Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
