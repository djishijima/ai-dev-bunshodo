
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
            エンジニア不要で開発
          </span>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
            次世代<span className="text-primary">AI</span>アプリ<br />
            開発プラットフォーム
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            プログラミングの知識ゼロから、
            <span className="text-white font-medium">本格的なアプリケーション</span>を最短で構築できます。
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-6 text-lg font-medium"
            onClick={() => navigate('/template/hello-world')}
          >
            無料テンプレートを見る
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          
          <Button 
            className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-white rounded-md px-8 py-6 text-lg font-medium"
            onClick={() => navigate('/templates')}
          >
            テンプレート一覧
          </Button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-sm mb-16"
        >
          クレジットカード登録不要・インストール不要
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              title: "高速開発",
              desc: "複雑な開発作業を自動化し、ビジネスアイデアの実現にかかる時間を短縮します。"
            },
            {
              title: "プロ品質デザイン",
              desc: "洗練されたUIコンポーネントで、競合に差をつける美しいアプリを構築できます。"
            },
            {
              title: "簡単デプロイ",
              desc: "ワンクリックで本番環境に公開し、ユーザーにすぐに届けることができます。"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-card p-6 rounded-md border border-white/5"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
