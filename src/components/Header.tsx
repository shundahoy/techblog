import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-40 mx-auto flex items-center justify-center flex-col gap-6">
      <h1 className="text-2xl lg:text-4xl">しゅんでぇの技術ブログ（仮）</h1>
      <nav>
        <ul className="flex justify-center gap-6 text-sm">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/">ブログ</Link>
          </li>
          <li>
            <Link href="/">プロフィール</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
