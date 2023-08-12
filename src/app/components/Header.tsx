import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-40 bg-gray-800 text-gray-300 flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl">shunD_ahoy</h1>
      <nav>
        <ul className="flex justify-center gap-4">
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
