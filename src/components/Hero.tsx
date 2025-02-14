
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-4 text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text">
          数分でSaaSを構築
        </h1>
        <p className="text-xl text-white/80 mb-8">
          AIとAPI統合済みのプレミアムソースコードテンプレート。
          次のプロジェクトをかつてないスピードで立ち上げましょう。
        </p>
        <div className="flex justify-center gap-4">
          <Button className="premium-button">
            テンプレートを見る
          </Button>
          <Button variant="outline" className="px-6 py-3 rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20">
            詳しく見る
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
};
