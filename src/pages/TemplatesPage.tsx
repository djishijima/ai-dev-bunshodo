import { NavBar } from "@/components/NavBar";
import { TemplatesGrid } from "@/components/TemplatesGrid";
import { motion } from "framer-motion";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen relative max-w-[100vw] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-cyan-900/50 backdrop-blur-sm" />
      <div className="relative z-10">
        <NavBar />
        <div className="pt-16">
          <TemplatesGrid />
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
