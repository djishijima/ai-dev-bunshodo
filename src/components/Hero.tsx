
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Code, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

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
          <Star className="w-5 h-5 text-[#D946EF]" />
          <span className="text-[#D946EF] font-medium bg-secondary/40 px-4 py-1 rounded-full text-sm backdrop-blur-md border border-[#D946EF]/20">
            エンジニア不要！たった10分で完成
          </span>
          <Star className="w-5 h-5 text-[#D946EF]" />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 gradient-text leading-tight">
          爆速AIアプリ構築
          <br />
          <span className="text-4xl">誰でも簡単 APIアプリ開発</span>
        </h1>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          「こんなサービス、あったらいいな…」<br />
          そう思ったことはありませんか？<br />
          <span className="font-bold text-[#D946EF]">いますぐ</span>それを実現できます！
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="premium-button text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => navigate('/template/hello-world')}
            >
              無料テンプレートで始める
            </Button>
            <Button 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-lg px-8 py-6 rounded-xl w-full sm:w-auto
                       transition-all duration-300 hover:border-[#8B5CF6]/30"
              onClick={() => navigate('/templates')}
            >
              テンプレート一覧
            </Button>
          </div>
          <span className="text-white/60 text-sm">※ クレジットカード不要・インストール不要</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <motion.div 
            className="glass-card p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full animated-gradient-bg mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">エンジニア不要</h3>
            <p className="text-white/80 text-sm">プログラミング知識は一切不要！直感的な操作で簡単開発。</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full animated-gradient-bg mx-auto mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">API連携済み</h3>
            <p className="text-white/80 text-sm">OpenAI、Stripe、Supabaseなど主要APIと接続完了。</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full animated-gradient-bg mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">10分で完成</h3>
            <p className="text-white/80 text-sm">詳しい解説動画で、誰でも簡単にアプリが作れます。</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
