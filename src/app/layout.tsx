import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "しゅんだほいの技術ブログ",
  description: "React,Next,Laravel,Golang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="">
        <Header />
        <div className="container mx-auto grid grid-cols-4 gap-8 pt-8">
          <div className="col-span-3 px-4">{children}</div>
          <div className="col-span-1 px-4">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
