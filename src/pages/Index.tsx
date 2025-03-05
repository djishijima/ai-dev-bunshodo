import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { TemplatesGrid } from "@/components/TemplatesGrid";
import { ApiShowcase } from "@/components/ApiShowcase";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative max-w-[100vw] overflow-hidden"
    >
      <div className="absolute inset-0 bg-background min-h-screen" />
      
      {/* グラデーションバックグラウンド効果 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20" />
      
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Features />
        <ApiShowcase />
        <TemplatesGrid />
        <Pricing />
      </div>
    </motion.div>
  );
};

export default Index;
