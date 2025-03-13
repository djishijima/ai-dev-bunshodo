
import { motion } from "framer-motion";

export const ApplicationPossibilities = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-xl"
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        無限の可能性：テンプレートの応用展開
      </h3>
      <p className="text-white/80 mb-6 text-center">
        基本テンプレートを活用して、さらに多くのビジネスチャンスを創出できます
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">言語学習アプリの展開例</h4>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>AI中国語学習パートナー</li>
            <li>AIフランス語会話トレーナー</li>
            <li>AIビジネス韓国語レッスン</li>
            <li>AIスペイン語旅行会話</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">ルートプランナーの展開例</h4>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>トラック配送ルート最適化</li>
            <li>通学路安全プランナー</li>
            <li>観光タクシールート作成</li>
            <li>ジョギング＆ウォーキングコース設計</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-lg">
        <p className="text-white/90 text-center leading-relaxed">
          これらのテンプレートは、あなたのアイデア次第で<br />
          様々なビジネスチャンスに応用できます。<br />
          基本機能を活用し、市場のニーズに合わせた<br />
          カスタマイズを行うことで、新たな価値を創造できます。
        </p>
      </div>
    </motion.div>
  );
};
