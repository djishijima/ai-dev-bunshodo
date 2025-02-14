
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
          <Star className="w-6 h-6 text-yellow-400" />
          <span className="text-yellow-400 font-semibold bg-secondary px-4 py-1 rounded-full">エンジニア不要！たった10分で完成</span>
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          爆速AIアプリ構築
          <br />
          <span className="text-4xl">誰でも簡単 APIアプリ開発</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          「こんなサービス、あったらいいな…」<br />
          そう思ったことはありませんか？<br />
          <span className="font-bold text-cyan-400">いますぐ</span>それを実現できます！
        </p>
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex gap-4">
            <Button 
              className="premium-button text-lg px-8 py-6"
              onClick={() => window.open('#', '_blank')}
            >
              無料デモを試す
            </Button>
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-6"
              onClick={() => navigate('/templates')}
            >
              テンプレート一覧
            </Button>
          </div>
          <span className="text-white/60 text-sm">※ クレジットカード不要・インストール不要</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="glass-card p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mx-auto mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">エンジニア不要</h3>
            <p className="text-white/80 text-sm">プログラミング知識は一切不要！直感的な操作で簡単開発。</p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mx-auto mb-4">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">API連携済み</h3>
            <p className="text-white/80 text-sm">OpenAI、Stripe、Supabaseなど主要APIと接続完了。</p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mx-auto mb-4">
              <Star className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">10分で完成</h3>
            <p className="text-white/80 text-sm">詳しい解説動画で、誰でも簡単にアプリが作れます。</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
