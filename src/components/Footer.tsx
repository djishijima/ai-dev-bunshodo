
import { NavLink } from "react-router-dom";
import { Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AI開発プラットフォーム</h3>
            <p className="text-sm text-white/70">
              誰でも簡単にAIアプリケーションを<br />開発できるプラットフォーム
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">テンプレート</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/template/hello-world" className="text-sm text-white/70 hover:text-white">
                  無料テンプレート
                </NavLink>
              </li>
              <li>
                <NavLink to="/templates" className="text-sm text-white/70 hover:text-white">
                  テンプレート一覧
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">サポート</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/setup-guide" className="text-sm text-white/70 hover:text-white">
                  セットアップガイド
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white">
                  ドキュメント
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="text-center text-sm text-white/50">
          © 2024 AI開発プラットフォーム. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
