import { getBlogPosts } from "@/sanity/fetch";
import { BlogPageClient } from "./BlogPageClient";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogPageClient posts={posts} />;
}
