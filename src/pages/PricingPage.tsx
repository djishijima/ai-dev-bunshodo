
import { NavBar } from "@/components/NavBar";
import { motion } from "framer-motion";
import { Check, ChevronRight, Code, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  // 価格表示を日本円形式に整形するヘルパー関数
  const formatPrice = (price: number) => {
    return price.toLocaleString('ja-JP');
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto pt-32 px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-foreground">
          料金プラン
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          ニーズに合わせた最適なプランをお選びください
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* テンプレートからの構築プラン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
              <Code className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">テンプレート構築</h2>
            <p className="text-muted-foreground mb-6">既存のテンプレートを元に、簡単なカスタマイズで迅速に開発</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">¥{formatPrice(49800)}</span>
              <span className="text-muted-foreground">（一括払い）</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">テンプレート選択し放題</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">基本的なカスタマイズ</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">迅速な納品（2週間以内）</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">1回の修正対応</span>
              </div>
            </div>

            <Button 
              className="w-full gap-2"
              onClick={() => navigate('/templates')}
            >
              テンプレートを見る <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* アプリリクエストプラン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-primary relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </span>
            </div>
            
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">アプリリクエスト</h2>
            <p className="text-muted-foreground mb-6">ご要望に合わせた新規アプリケーションの設計と開発</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">¥{formatPrice(198000)}</span>
              <span className="text-muted-foreground">（一括払い）</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">要件のヒアリング</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">UI/UXデザイン</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">フルカスタムコーディング</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">3回の修正対応</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">テスト・デプロイサポート</span>
              </div>
            </div>

            <Button 
              variant="premium"
              className="w-full gap-2"
              onClick={() => navigate('/contact')}
            >
              お問い合わせ <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* フル開発プラン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground">フル開発</h2>
            <p className="text-muted-foreground mb-6">ビジネス要件に合わせた高度なカスタム開発ソリューション</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">¥{formatPrice(498000)}〜</span>
              <span className="text-muted-foreground">（要相談）</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">詳細な要件定義</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">高度なシステム設計</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">API・バックエンド開発</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">セキュリティ対策</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">保守・運用サポート</span>
              </div>
            </div>

            <Button 
              className="w-full gap-2"
              onClick={() => navigate('/contact')}
            >
              お問い合わせ <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="bg-card/50 p-8 rounded-2xl border border-border my-16">
          <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
            すべてのプランに含まれる特典
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">ソースコード完全版</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">技術サポート</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">アップデート無料</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 mb-24">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            お客様に最適なソリューションをご提案します
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            ご不明な点やカスタムプランについてのご相談は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
          <Button 
            variant="premium"
            size="lg"
            className="gap-2"
            onClick={() => navigate('/contact')}
          >
            無料相談する <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;
