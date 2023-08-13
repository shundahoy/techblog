import { perPage } from "@/const";
import { client } from "@/lib/client";
import { Pagination } from "@/components/Pagination";
import Card from "@/components/Card";
import { BLOG } from "@/types/types";

async function getPosts() {
  const response = await client.getList({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "blogs",
    queries: { offset: 0, limit: perPage },
  });

  return response;
}

export default async function Home() {
  const blogs = await getPosts();

  return (
    <main className="min-h-[1000px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
        {blogs.contents.map((blog: BLOG) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>

      <Pagination totalCount={blogs.totalCount} nowPage={1} />
    </main>
  );
}
