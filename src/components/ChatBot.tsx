
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// サンプルの応答メッセージ
const responses = [
  "いらっしゃいませ！RapidSaaSへようこそ。どのようなアプリをお探しですか？",
  "AIテンプレートについて詳しく知りたい場合は、「AIチャットボット」や「AI議事録作成」など具体的なテンプレート名をお伝えください。",
  "テンプレートのカスタマイズやAPIの連携方法についてもご案内できます。お気軽にお尋ねください。",
  "無料テンプレートからお試しいただくこともできます。初めての方にはおすすめです。",
  "商用利用に関するライセンスについてのご質問も承っております。",
  "ご予算や納期に合わせたプランのご提案も可能です。ご要望をお聞かせください。",
  "RapidSaaSのテンプレートは全て最新のテクノロジーを使用しており、高品質なコードで構築されています。",
];

// 特定のキーワードに対する応答
const keywordResponses: Record<string, string> = {
  "ai": "AIテンプレートは人気の商品です。OpenAI APIやDeepSeek AIを活用した様々なテンプレートをご用意しています。",
  "チャットボット": "AIチャットボットテンプレートでは、最新のAIモデルを活用したカスタマーサポートボットを簡単に構築できます。",
  "議事録": "AI議事録作成ツールを使えば、会議の音声を自動で文字起こしし、要点をまとめた議事録を作成できます。",
  "料金": "基本テンプレートは99ドルから、プロフェッショナルテンプレートは199ドルからご利用いただけます。すべて買い切り型で、サブスクリプションはありません。",
  "カスタマイズ": "各テンプレートは簡単にカスタマイズできるように設計されています。詳細な手順書も付属しています。",
  "サポート": "購入後のサポートも充実しています。技術的なご質問にも対応いたします。",
  "デプロイ": "VercelやNetlifyなどの無料ホスティングサービスを使って、簡単にアプリをデプロイできます。詳細な手順も提供しています。",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "いらっしゃいませ！RapidSaaSへようこそ。どのようなアプリをお探しですか？",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // メッセージが送信されたときにスクロールする
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // ユーザーメッセージを追加
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // 返信を生成
    setTimeout(() => {
      let botResponse = "";
      
      // キーワードに基づいた応答を検索
      const lowerInput = input.toLowerCase();
      const matchedKeyword = Object.keys(keywordResponses).find(
        (keyword) => lowerInput.includes(keyword)
      );

      if (matchedKeyword) {
        botResponse = keywordResponses[matchedKeyword];
      } else {
        // ランダムな応答を選択
        botResponse = responses[Math.floor(Math.random() * responses.length)];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 shadow-lg z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 sm:w-96 h-[500px] bg-card rounded-lg shadow-xl border border-white/5 flex flex-col z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <h3 className="font-semibold text-foreground">RapidSaaS 接客アシスタント</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[75%] rounded-lg p-3 bg-secondary text-secondary-foreground">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex space-x-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
