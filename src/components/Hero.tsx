
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Code, Star } from "lucide-react";

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
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-6 h-6 text-yellow-400" />
          <span className="text-yellow-400 font-semibold bg-secondary px-4 py-1 rounded-full">エンジニア不要！たった10分で完成</span>
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          まるで魔法！
          <br />
          API活用ビジネスアプリ
        </h1>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          「こんなサービス、あったらいいな…」そのアイデア、もう温める必要はありません！
          <br />
          面倒なAPI連携は<span className="font-bold text-cyan-400">すべて完了済み</span>。
          <br />
          まるでブロックを組み立てるように、あなたのひらめきをカタチに。
        </p>
        <div className="flex flex-col items-center gap-6 mb-12">
          <Button className="premium-button text-lg px-8 py-6">
            無料でデモを体験
          </Button>
          <span className="text-white/60 text-sm">※ クレジットカード不要・インストール不要</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="glass-card p-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mx-auto mb-3">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white/80">プログラミング知識不要</p>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mx-auto mb-3">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white/80">API連携完了済み</p>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mx-auto mb-3">
              <Star className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white/80">手厚いサポート付き</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
