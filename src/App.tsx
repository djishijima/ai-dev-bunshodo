
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import TemplateDetail from "./pages/TemplateDetail";
import AuthCallback from "./pages/AuthCallback";
import AdminPage from "./pages/AdminPage";

// Google Analytics tracking
function GoogleAnalytics() {
  const location = useLocation();
  
  useEffect(() => {
    // Track pageview on route change
    if (window.gtag) {
      window.gtag('config', 'G-RJSYBPJH5H', {
        page_path: location.pathname + location.search
      });
      
      // Second tracking ID
      window.gtag('config', 'G-0JXPSCHN89', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/template/:id" element={<TemplateDetail />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <SonnerToaster closeButton position="top-right" />
    </Router>
  );
}

export default App;
