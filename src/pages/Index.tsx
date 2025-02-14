
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TemplatesGrid } from "@/components/TemplatesGrid";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/83bc9aa7-7751-4367-bf96-014ff2a5f5c1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-cyan-900/50 backdrop-blur-sm" />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <TemplatesGrid />
      </div>
    </motion.div>
  );
};

export default Index;
