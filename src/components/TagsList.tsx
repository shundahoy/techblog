import { client } from "@/lib/client";
import Link from "next/link";
import React from "react";

async function getTags() {
  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "tags",
  });

  return response;
}

const TagsList = async () => {
  const tags = await getTags();
  return (
    <ul className="rounded border-gray-600 border-solid border">
      <li className="px-4 py-4 bg-gray-500">
        <h3>タグ一覧</h3>
      </li>
      {tags.contents.map((tag) => (
        <li className="px-4 py-4 border-b border-gray-600 border-solid text-sm">
          <Link className="block" href={`/tag/${tag.slug}`}>
            #{tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
