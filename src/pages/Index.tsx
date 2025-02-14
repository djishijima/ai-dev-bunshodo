
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
      style={{
        backgroundImage: 'url("/lovable-uploads/d6723242-0839-4de3-b94d-94999fb55762.png")',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-cyan-900/50 backdrop-blur-sm" />
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
