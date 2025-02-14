
import { TemplateCard } from "./TemplateCard";
import { motion } from "framer-motion";
import { templates } from "@/data/templates";
import { Code2, Zap, Globe, CloudCog, Globe2 } from "lucide-react";

export const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">アプリテンプレート一覧</h2>
        <p className="text-center text-white/80 mb-12">
          すぐに使える実用的なアプリケーションを<br />
          手頃な価格で提供しています
        </p>
        
        {/* グローバルスタンダードの説明 */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {templates.map((template, index) => (
            <TemplateCard key={template.title} {...template} index={index} />
          ))}
        </div>

        {/* 10分で完成できる理由の説明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-xl mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            本当に10分で完成できるの？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">完全なソースコード</h4>
                  <p className="text-white/80">
                    必要なコード、設定ファイル、環境構築手順が全て含まれています。コピー＆ペーストだけで動作する状態です。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">動画による解説</h4>
                  <p className="text-white/80">
                    セットアップから公開までの手順を、ステップバイステップで解説する動画が付属します。
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">無料のホスティング</h4>
                  <p className="text-white/80">
                    Vercel、Netlifyなどの無料プランを利用することで、個人利用であれば追加コストなく公開できます。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <CloudCog className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">インフラ構成</h4>
                  <p className="text-white/80">
                    APIの利用料金以外のインフラコストは、個人利用の範囲内であれば、ほぼゼロで運用可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">利用時の注意点</h4>
            <ul className="text-white/80 space-y-2">
              <li>• 無料プランには、アクセス数や機能の制限があります</li>
              <li>• 商用利用の場合は、各プラットフォームの利用規約をご確認ください</li>
              <li>• APIの利用量に応じて、APIプロバイダーの料金が発生する場合があります</li>
            </ul>
          </div>
        </motion.div>

        {/* 応用展開セクション */}
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
      </motion.div>
    </section>
  );
};
