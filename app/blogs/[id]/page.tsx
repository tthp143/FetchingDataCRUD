import { notFound } from "next/navigation";
import { getBlogs } from "@/app/lib/blogs";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogId = Number(id);

  if (!Number.isInteger(blogId) || blogId < 1) {
    notFound();
  }

  const blogs = await getBlogs();
  const blog = blogs.find((item) => item.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>{blog.title}</h1>
    </main>
  );
}
