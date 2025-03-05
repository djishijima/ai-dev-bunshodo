
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// 要件定義のステップ
type RequirementStep = {
  id: string;
  question: string;
  field: keyof RequirementData;
  options?: string[];
};

// 要件定義データの型
type RequirementData = {
  appType: string;
  features: string;
  userType: string;
  deadline: string;
  budget: string;
  otherRequirements: string;
};

// 要件定義の質問ステップ
const requirementSteps: RequirementStep[] = [
  {
    id: "appType",
    question: "どのようなアプリやウェブサイトを作りたいですか？",
    field: "appType",
    options: ["Webアプリ", "モバイルアプリ", "ECサイト", "コーポレートサイト", "その他"]
  },
  {
    id: "features",
    question: "どのような機能が必要ですか？",
    field: "features",
    options: ["ユーザー認証", "決済機能", "予約システム", "SNS連携", "チャット機能", "その他"]
  },
  {
    id: "userType",
    question: "アプリの主なユーザーは誰ですか？",
    field: "userType",
    options: ["一般消費者", "企業（BtoB）", "学生", "高齢者", "その他"]
  },
  {
    id: "deadline",
    question: "リリース希望時期はありますか？",
    field: "deadline",
    options: ["24時間納品（特急）", "1週間以内", "1ヶ月以内", "3ヶ月以内", "急ぎではない"]
  },
  {
    id: "budget",
    question: "予算はどれくらいをお考えですか？",
    field: "budget",
    options: ["10万円以下", "50万円以下", "100万円以下", "100万円以上", "予算は柔軟に検討可能"]
  },
  {
    id: "otherRequirements",
    question: "その他、何か特別な要件やご希望はありますか？",
    field: "otherRequirements",
    options: ["特になし", "デザインにこだわりたい", "セキュリティを重視", "高速なパフォーマンスが必要", "その他"]
  }
];

interface AppRequestChatProps {
  isOpen: boolean;
  onClose?: () => void;
  fullPage?: boolean;
}

export function AppRequestChat({ isOpen, onClose, fullPage = false }: AppRequestChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "こんにちは！AIアシスタントです。あなたのアプリ開発のお手伝いをします。まずは要件を伺っていきますね。",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [requirementData, setRequirementData] = useState<RequirementData>({
    appType: "",
    features: "",
    userType: "",
    deadline: "",
    budget: "",
    otherRequirements: ""
  });
  const [isComplete, setIsComplete] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [lastResponseTime, setLastResponseTime] = useState<Date | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // メッセージが送信されたときにスクロールする
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 初回ステップの質問を表示
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      setTimeout(() => {
        addBotMessage(`${requirementSteps[0].question}\n選択肢から選ぶか、自由に入力してください。`);
      }, 1000);
    }
  }, [isOpen]);

  // 一定時間無応答の場合、フォローアップメッセージを送信
  useEffect(() => {
    if (!isTyping && !isComplete && lastResponseTime) {
      const followUpTimer = setTimeout(() => {
        const now = new Date();
        const timeDiff = now.getTime() - lastResponseTime.getTime();
        
        // 30秒経過しても応答がない場合
        if (timeDiff > 30000) {
          const currentOptions = requirementSteps[currentStep].options;
          if (currentOptions && currentOptions.length > 0) {
            addBotMessage(`お選びいただけるものはありますか？\n例えば「${currentOptions[0]}」や「${currentOptions[1]}」などはいかがでしょうか？`);
          } else {
            addBotMessage("何かお手伝いできることはありますか？");
          }
          setLastResponseTime(now);
        }
      }, 30000); // 30秒後
      
      return () => clearTimeout(followUpTimer);
    }
  }, [lastResponseTime, isTyping, isComplete, currentStep]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (content: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        content,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setLastResponseTime(new Date());
    }, 1000);
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
    
    // 現在のステップのフィールドに回答を保存
    const currentField = requirementSteps[currentStep].field;
    setRequirementData(prev => ({
      ...prev,
      [currentField]: input
    }));
    
    setInput("");
    
    // 次のステップがあれば進む、なければ完了
    if (currentStep < requirementSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      
      // 次の質問を送信
      setTimeout(() => {
        const nextQuestion = requirementSteps[currentStep + 1].question;
        addBotMessage(`${nextQuestion}\n選択肢から選ぶか、自由に入力してください。`);
      }, 1000);
    } else {
      // 全ての質問が完了
      setIsComplete(true);
      
      // 要件確認メッセージを送信
      setTimeout(() => {
        addBotMessage("ありがとうございます！以下の内容で要件をまとめました。これでよろしいですか？\n\n" + 
          Object.entries(requirementData).map(([key, value]) => {
            const fieldName = requirementSteps.find(step => step.field === key)?.question || key;
            return `【${fieldName}】\n${value || input}`;
          }).join("\n\n") + 
          "\n\n内容を確認し、よろしければ「送信する」を選択してください。"
        );
      }, 1000);
    }
  };

  const handleOptionSelect = (option: string) => {
    // オプションを選択した場合の処理
    const userMessage: Message = {
      id: Date.now().toString(),
      content: option,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // 現在のステップのフィールドに回答を保存
    const currentField = requirementSteps[currentStep].field;
    setRequirementData(prev => ({
      ...prev,
      [currentField]: option
    }));
    
    // 次のステップがあれば進む、なければ完了
    if (currentStep < requirementSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      
      // 次の質問を送信
      setTimeout(() => {
        const nextQuestion = requirementSteps[currentStep + 1].question;
        const responseWithHelp = `${nextQuestion}\n選択肢から選ぶか、自由に入力してください。`;
        addBotMessage(responseWithHelp);
      }, 1000);
    } else {
      // 全ての質問が完了
      setIsComplete(true);
      
      // 要件確認メッセージを送信
      setTimeout(() => {
        addBotMessage("ありがとうございます！以下の内容で要件をまとめました。これでよろしいですか？\n\n" + 
          Object.entries(requirementData).map(([key, value]) => {
            const fieldName = requirementSteps.find(step => step.field === key)?.question || key;
            return `【${fieldName}】\n${value}`;
          }).join("\n\n") + 
          "\n\n内容を確認し、よろしければ「送信する」を選択してください。"
        );
      }, 1000);
    }
  };

  const handleSubmitRequirements = () => {
    setShowConfirmDialog(true);
  };

  const sendRequirementsToServer = async () => {
    setIsSending(true);
    
    try {
      // ここで実際にサーバーに送信する処理を実装
      // 今回はモックとして成功したことにする
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 送信成功
      toast.success("要件定義が送信されました！担当者からご連絡いたします。");
      setShowConfirmDialog(false);
      
      // 最後のメッセージを追加
      const deliveryMessage = requirementData.deadline === "24時間納品（特急）" 
        ? "要件定義が送信されました！24時間以内に納品いたします。ご協力ありがとうございました。" 
        : "要件定義が送信されました！担当者から48時間以内にご連絡いたします。ご協力ありがとうございました。";
      addBotMessage(deliveryMessage);
      
      // ステートをリセット
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
        setMessages([{
          id: "1",
          content: "こんにちは！AIアシスタントです。あなたのアプリ開発のお手伝いをします。まずは要件を伺っていきますね。",
          sender: "bot",
          timestamp: new Date(),
        }]);
        setCurrentStep(0);
        setRequirementData({
          appType: "",
          features: "",
          userType: "",
          deadline: "",
          budget: "",
          otherRequirements: ""
        });
        setIsComplete(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error sending requirements:", error);
      toast.error("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSending(false);
    }
  };

  // 現在のステップのオプションを取得
  const currentOptions = currentStep < requirementSteps.length 
    ? requirementSteps[currentStep].options 
    : undefined;

  // フルページ表示モードとポップアップモードで異なるスタイルを適用
  const containerClasses = fullPage
    ? "w-full h-[600px] bg-card rounded-lg shadow-lg border border-border flex flex-col"
    : "fixed bottom-4 right-4 w-[90%] sm:w-[450px] h-[600px] bg-card rounded-lg shadow-xl border border-border flex flex-col z-50";

  if (!isOpen && !fullPage) {
    return null;
  }

  return (
    <>
      {fullPage ? (
        <div className={containerClasses}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">アプリ開発 AI アシスタント</h3>
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
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
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
                    <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {currentOptions && !isTyping && !isComplete && (
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {currentOptions.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className="text-sm"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {isComplete ? (
            <div className="p-4 border-t border-border">
              <Button 
                className="w-full gap-2"
                variant="premium"
                onClick={handleSubmitRequirements}
              >
                要件を送信する <Check className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="p-4 border-t border-border">
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
                  disabled={isTyping}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="bg-primary hover:bg-primary/90"
                  disabled={isTyping || input.trim() === ""}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={containerClasses}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">アプリ開発 AI アシスタント</h3>
              {onClose && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 rounded-full"
                  aria-label="Close chat"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              )}
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
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
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
                      <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-background/50 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {currentOptions && !isTyping && !isComplete && (
              <div className="p-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {currentOptions.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className="text-sm"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {isComplete ? (
              <div className="p-4 border-t border-border">
                <Button 
                  className="w-full gap-2"
                  variant="premium"
                  onClick={handleSubmitRequirements}
                >
                  要件を送信する <Check className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="p-4 border-t border-border">
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
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={isTyping || input.trim() === ""}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* 確認ダイアログ */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>お客様情報の入力</DialogTitle>
            <DialogDescription>
              要件を送信するために、以下の情報をご入力ください。
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                お名前
              </label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="山田 太郎"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              キャンセル
            </Button>
            <Button 
              variant="premium" 
              onClick={sendRequirementsToServer} 
              disabled={!userName || !userEmail || isSending}
            >
              {isSending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  送信中...
                </>
              ) : (
                "送信する"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
