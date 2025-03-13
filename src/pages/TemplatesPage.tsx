
import { NavBar } from "@/components/NavBar";
import { TemplatesGrid } from "@/components/TemplatesGrid";
import { motion } from "framer-motion";

const TemplatesPage = () => {
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
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-24">
          <h1 className="text-4xl font-bold text-center mb-12">テンプレート一覧</h1>
          <TemplatesGrid />
        </div>
      </div>
    </motion.div>
  );
};

export default TemplatesPage;
