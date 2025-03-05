
import { NavBar } from "@/components/NavBar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppRequestChat } from "@/components/AppRequestChat";

const PricingPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  // Automatically open the chat when the page loads
  useEffect(() => {
    setIsChatOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto pt-24 px-4 pb-16"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-foreground">
          アプリ開発のご依頼
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          AIアシスタントがあなたのアプリ開発の要件をヒアリングします。
          チャットでご要望をお聞かせください。
        </p>

        <div className="w-full max-w-5xl mx-auto">
          <AppRequestChat isOpen={isChatOpen} fullPage={true} />
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;
