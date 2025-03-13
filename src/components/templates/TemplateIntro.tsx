
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export const TemplateIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-xl mb-16"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <Globe2 className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        世界標準の開発手法を、日本語で
      </h3>
      <div className="text-white/80 space-y-4 text-center max-w-3xl mx-auto">
        <p>
          実は、これらの構築手法は<span className="text-cyan-400">海外では当たり前</span>の方法です。
          プログラミング言語は英語をベースにしているため、英語圏では
          誰もが簡単にアプリケーションを開発できる環境が整っています。
        </p>
        <p>
          しかし日本では、プログラミングの技術的な壁に加えて、
          <span className="text-cyan-400">言語の壁</span>が存在します。
        </p>
        <p className="text-lg font-semibold text-white">
          私たちは、この世界標準の開発手法を日本語で提供することで、<br />
          プログラミングの知識がなくても、アイデアを持つ誰もが<br />
          ビジネスで成功できるプラットフォームを目指しています。
        </p>
      </div>
    </motion.div>
  );
};
