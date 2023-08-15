import { client } from "@/lib/client";
import Image from "next/image";
import React from "react";

const getProfile = async () => {
  const data = await client.get({
    endpoint: `profile`,
    customRequestInit: {
      next: {
        revalidate: 86400,
      },
    },
  });

  return data;
};
const Profile = async () => {
  const profile = await getProfile();
  console.log(profile);

  return (
    <div className="flex items-center flex-col justify-center rounded border-gray-800 border-solid border px-6 py-10 bg-gray-800 mb-6 gap-4">
      <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
        <Image
          src={profile.image.url}
          fill
          alt="プロフィール画像"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-lg">shundahoy</p>
      <p className="text-sm">
        渋谷のIT企業でエンジニアをしています。技術スタックはReact,Next,PHP/Laravel
      </p>
      <ul className="flex flex-wrap gap-4 text-sm">
        <li className="underline">
          <a href={profile.twitter}>Twitter</a>
        </li>
        <li className="underline">
          <a href={profile.github}>github</a>
        </li>
        <li className="underline">
          <a href={profile.instagram}>Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
