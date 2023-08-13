import { BLOG } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  blog: BLOG;
}
const Card = ({ blog }: PageProps) => {
  return (
    <div className="w-full bg-gray-800 rounded-2xl overflow-hidden pb-4 border-2 border-gray-500 border-solid">
      <div className="w-full h-40 relative">
        <Image
          src={blog.cover.url}
          fill={true}
          alt={blog.title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-4 mt-4">
        <Link href={`/blog/${blog.id}`}>
          <h2>{blog.title}</h2>
        </Link>
        <div className="mt-4 flex gap-2 flex-wrap">
          {blog.tags.map((tag) => (
            <Link href={`/tag/${tag.slug}`} className="text-xs text-gray-400">
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;