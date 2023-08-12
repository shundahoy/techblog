import Footer from "./components/Footer";
import Header from "./components/Header";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
