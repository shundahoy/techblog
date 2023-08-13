import Card from "@/components/Card";
import { Pagination } from "@/components/Pagination";
import { perPage } from "@/const";
import { client } from "@/lib/client";
import { BLOG } from "@/types/types";
import React from "react";

export async function generateStaticParams() {
  const repos = await client.getList({ endpoint: "blogs" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / perPage)).map(
    (repo) => `/blog/page/${repo}`
  );

  return paths;
}

async function getPost(params: { page: string }) {
  const pageNumber = parseInt(params.page);

  const response = await client.getList({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "blogs",
    queries: { offset: (pageNumber - 1) * perPage, limit: perPage },
  });

  return response;
}

interface PageProps {
  params: {
    page: string;
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

      <Pagination
        totalCount={blogs.totalCount}
        nowPage={parseInt(params.page)}
      />
    </main>
  );
};

export default Page;
