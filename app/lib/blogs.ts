import { z } from "zod";

const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
});

const blogsSchema = z.array(blogSchema);

export type Blog = z.infer<typeof blogSchema>;

export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch("https://api.vercel.app/blog");

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`);
  }

  const data: unknown = await response.json();
  return blogsSchema.parse(data);
}
