
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

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
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-8 h-8 text-[#8B5CF6]" />
          <span className="text-[#8B5CF6] font-semibold">驚異の開発スピード</span>
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          10分で立ち上げる
          <br />
          フルスタックSaaS
        </h1>
        <p className="text-xl text-white/80 mb-8">
          すべてのAPI連携が完了しているため、アイデアを即座にプロダクト化できます。
          <br />
          面倒な設定作業はもう必要ありません。
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
