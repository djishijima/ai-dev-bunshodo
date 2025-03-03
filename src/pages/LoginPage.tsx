
import { NavBar } from "@/components/NavBar";
import { useState } from "react";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { LoginButtons } from "@/components/auth/LoginButtons";
import { EmailLoginForm } from "@/components/auth/EmailLoginForm";
import { ErrorDisplay } from "@/components/auth/ErrorDisplay";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState({
    github: false,
    google: false,
    email: false
  });
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [error, setError] = useState("");
  
  // Handle auth state checking and redirection
  const { isCheckingSession } = useAuthRedirect();

  return (
    <div className="min-h-screen bg-gradient-to-b from-melon-700 to-melon-900">
      <NavBar />
      <div className="max-w-md mx-auto px-4 pt-32">
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">ログイン</h1>
          
          {isCheckingSession ? (
            <div className="text-center py-4">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              <p className="text-white/70 mt-2">認証情報を確認中...</p>
            </div>
          ) : (
            <>
              <ErrorDisplay error={error} />
              
              <LoginButtons 
                isLoading={isLoading} 
                setIsLoading={setIsLoading} 
                setError={setError}
                setShowEmailInput={setShowEmailInput}
              />

              {showEmailInput && (
                <EmailLoginForm 
                  email={email}
                  setEmail={setEmail}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  setError={setError}
                  setShowEmailInput={setShowEmailInput}
                />
              )}

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-transparent px-2 text-white/70">または</span>
                </div>
              </div>

              <p className="text-sm text-white/70 text-center">
                アカウントをお持ちでない場合は<br />
                上記の方法でそのまま新規登録できます
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
