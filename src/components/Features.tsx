
import { motion } from "framer-motion";
import { Code2, Zap, Lock, Puzzle, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "驚異の開発スピード",
    description: "プログラミング知識不要。直感的な操作で、最短10分でビジネスアプリが完成します。"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "API連携完了済み",
    description: "OpenAI、Stripe、Supabaseなど、人気のAPIとの連携がすでに完了。すぐに使えます。"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "安心のセキュリティ",
    description: "業界標準のセキュリティ対策を実装済み。大手企業でも安心してご利用いただけます。"
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "柔軟なカスタマイズ",
    description: "ビジネスのニーズに合わせて、自由に機能の追加・変更が可能です。"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "豊富なテンプレート",
    description: "様々なビジネスモデルに対応したテンプレートをご用意。カスタマイズも自由自在。"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "手厚いサポート",
    description: "導入から運用まで、専門スタッフが丁寧にサポート。困ったときもお任せください。"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          ビジネスの可能性を解き放つ
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-2xl mx-auto">
          「難しそう...」「プログラミングできないし...」そんな心配は一切不要！
          <br />
          複雑な設定は全部おまかせで、驚くほどスムーズにスタートできます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{feature.title}</h3>
              <p className="text-white/70 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
