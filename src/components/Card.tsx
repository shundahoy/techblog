import { BLOG } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  blog: BLOG;
}
const Card = ({ blog }: PageProps) => {
  return (
    <div className="w-full bg-gray-900 rounded-2xl overflow-hidden pb-4 border border-gray-700 border-solid">
      <div className="w-full relative" style={{ paddingBottom: "60%" }}>
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
            <Link
              key={tag.id}
              href={`/tag/${tag.id}/1`}
              className="text-xs text-gray-400"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
