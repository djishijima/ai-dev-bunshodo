
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TemplatesGrid } from "@/components/TemplatesGrid";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <NavBar />
      <Hero />
      <TemplatesGrid />
    </motion.div>
  );
};

export default Index;
