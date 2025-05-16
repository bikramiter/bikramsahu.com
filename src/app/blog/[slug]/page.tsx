import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { notFound } from "next/navigation";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/app/blog/posts");
  const filenames = fs.readdirSync(postsDir);
  return filenames.map((name) => ({ slug: name.replace(/\.md$/, "") }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), "src/app/blog/posts", `${slug}.md`);

  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  const processed = await remark().use(gfm).use(html).process(content);
  const htmlString = processed.toString();

  return (
    <div className="px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{data.date}</p>

        <article
          className="prose prose-lg prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      </div>
    </div>
  );
}
