
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="pt-32 pb-24 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div 
          className="inline-flex items-center bg-secondary/40 border border-purple/10 rounded-full px-3 py-1.5 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Sparkles className="w-4 h-4 text-purple-light mr-2" />
          <span className="text-sm font-medium text-white/80">10分でAIアプリが構築可能</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight"
          variants={fadeIn}
        >
          <span className="gradient-text">AI時代の</span><br />
          <span className="text-white">アプリ開発プラットフォーム</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl mx-auto"
          variants={fadeIn}
        >
          エンジニアリングの知識ゼロから、<br />
          <span className="text-white font-medium">本格的なAIアプリケーション</span>を構築できます。
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn}>
            <Button 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-6 text-lg font-medium
                        shadow-[0_4px_14px_rgba(138,92,245,0.25)] transition-all"
              onClick={() => navigate('/template/hello-world')}
            >
              無料テンプレートで始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Button 
              className="w-full sm:w-auto bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white rounded-md px-8 py-6 text-lg font-medium
                        transition-all hover:border-purple/20"
              onClick={() => navigate('/templates')}
            >
              テンプレート一覧
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-white/50 text-sm mb-16"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          クレジットカード登録不要・インストール不要
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "AIが自動構築",
              desc: "AIが最適なコードを自動生成し、開発プロセスを短縮します。"
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "高品質デザイン",
              desc: "プロ品質のUIコンポーネントで美しいアプリを構築できます。"
            },
            {
              icon: <ArrowRight className="w-5 h-5" />,
              title: "即時デプロイ",
              desc: "ワンクリックで本番環境にデプロイし、すぐに公開できます。"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="glass-card card-shine-effect p-6 rounded-md group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm text-center">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
