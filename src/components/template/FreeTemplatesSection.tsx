
import { useNavigate } from "react-router-dom";
import { Download, ArrowRight, Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { freeTemplates } from "@/data/templates/free-templates";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const FreeTemplatesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">無料テンプレート</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AIアプリ開発の第一歩を踏み出すための無料テンプレートをご用意しました。
            基本的な機能実装から応用まで、段階的に学べるテンプレートです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {freeTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-500 hover:bg-green-600">無料</Badge>
                    <Badge variant="outline" className="bg-white">
                      {template.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-amber-500 mr-1" />
                      <h4 className="font-medium">開発時間</h4>
                    </div>
                    <p className="text-gray-600 pl-6">{template.developmentTime}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-amber-500 mr-1" />
                      <h4 className="font-medium">技術スタック</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {template.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-amber-500 mr-1" />
                      <h4 className="font-medium">主な機能</h4>
                    </div>
                    <ul className="space-y-1 pl-6">
                      {template.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                      {template.features.length > 3 && (
                        <li className="text-sm text-blue-600 pl-6">
                          他{template.features.length - 3}つの機能...
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => navigate(`/template/${template.id}`)}
                  >
                    詳細を見る
                  </Button>
                  <Button 
                    className="gap-2"
                    onClick={() => navigate(`/template/${template.id}`)}
                  >
                    <Download className="w-4 h-4" />
                    ダウンロード
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center">無料テンプレートの使い方</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">1. ダウンロード</h4>
              <p className="text-gray-600">
                無料テンプレートをダウンロードして、ローカル環境に展開します。
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">2. APIキー設定</h4>
              <p className="text-gray-600">
                必要なAPIキーを取得して環境変数に設定します。手順はドキュメントに記載されています。
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">3. カスタマイズ</h4>
              <p className="text-gray-600">
                自分のニーズに合わせてコードをカスタマイズします。コードは理解しやすい構成になっています。
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              className="px-8 py-6 text-lg gap-2" 
              onClick={() => navigate('/templates')}
            >
              すべてのテンプレートを見る
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
