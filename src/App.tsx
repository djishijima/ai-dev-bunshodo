
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetail from "./pages/TemplateDetail";
import PricingPage from "./pages/PricingPage";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import SetupGuidePage from "./pages/SetupGuidePage";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Google Analytics pageview tracking
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', 'G-RJSYBPJH5H', {
          page_path: window.location.pathname
        });
        window.gtag('config', 'G-0JXPSCHN89', {
          page_path: window.location.pathname
        });
      }
    };

    // Initial page load
    handleRouteChange();

    // Listen for location changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/template/:id" element={<TemplateDetail />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/setup-guide" element={<SetupGuidePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
