import Card from "@/components/Card";
import { Pagination } from "@/components/Pagination";
import { TagsPagination } from "@/components/TagsPagination";
import { perPage } from "@/const";
import { client } from "@/lib/client";
import { BLOG } from "@/types/types";
import path from "path";
import React from "react";

export async function generateStaticParams() {
  const tags = await client.getList({ endpoint: "tags" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  let paths: any = [];

  for (const tag of tags.contents) {
    const tagsPosts = await client.getList({
      endpoint: "blogs",
      queries: { filters: `tags[contains]${tag.id}` },
    });

    range(
      1,
      Math.ceil(
        (tagsPosts.totalCount === 0 ? 1 : tagsPosts.totalCount) / perPage
      )
    ).map((repo) => {
      paths.push(`/tag/${tag.id}/${repo}`);
    });
  }

  return paths;
}

async function getPost(params: { page: string; id: string }) {
  const pageNumber = parseInt(params.page);

  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
    queries: {
      offset: (pageNumber - 1) * perPage,
      limit: perPage,
      filters: `tags[contains]${params.id}`,
    },
  });

  return response;
}

interface PageProps {
  params: {
    page: string;
    id: string;
  };
}
const Page = async ({ params }: PageProps) => {
  const blogs = await getPost(params);

  return (
    <main className="min-h-[1000px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
        {blogs.contents.map((blog: BLOG) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>

      <TagsPagination
        totalCount={blogs.totalCount}
        nowPage={parseInt(params.page)}
        tagId={params.id}
      />
    </main>
  );
};

export default Page;
