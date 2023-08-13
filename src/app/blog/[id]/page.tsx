import { client } from "@/lib/client";
import { BLOG } from "@/types/types";
import Image from "next/image";
import React from "react";

const getAllContents = async (offset = 0, limit = 10): Promise<BLOG[]> => {
  const data = await client.getList({
    endpoint: `blogs`,
    queries: {
      offset,
      limit,
    },
  });

  if (data.offset + data.limit <= data.totalCount) {
    const contents = await getAllContents(data.offset + data.limit, data.limit);
    return [...data.contents, ...contents];
  }

  return data.contents;
};

export async function generateStaticParams() {
  const contents = await getAllContents();

  const paths = contents.map((post: BLOG) => `/blog/${post.id}`);

  return paths;
}

async function getDetail(params: { id: string }) {
  const response = await client.getListDetail<BLOG>({
    endpoint: "blogs",
    contentId: params.id,
  });

  return response;
}

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const post = await getDetail(params);

  return (
    <main>
      <div className="relative w-full mb-8" style={{ paddingBottom: "60%" }}>
        <Image
          fill={true}
          src={post.cover.url}
          alt={post.title}
          style={{ width: "100%" }}
        />
      </div>
      <h2 className="text-xl sm:text-3xl font-semibold">{post.title}</h2>
    </main>
  );
};

export default Page;
