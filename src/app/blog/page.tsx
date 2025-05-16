import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Blog: Finding Your First 100 Customers
      </h1>
      <p className="mb-6 text-gray-700">
        Here you&apos;ll find actionable guides and insights on how small
        businesses can find their first 100 customers using automation and AI.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.frontmatter.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{post.frontmatter.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
