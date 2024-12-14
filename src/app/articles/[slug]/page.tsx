import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { compileMDX } from "next-mdx-remote/rsc";
import { getBlogPosts } from "../../../lib/post";

export async function generateStaticParams() {
  // 使用 getBlogPosts 獲取文章列表
  const blogPosts = getBlogPosts();
  // console.log(blogPosts.data);

  // 從每篇文章中提取 slug，並轉換為路由參數格式
  return blogPosts.map((post) => ({
    slug: post.slug, // 將 slug 傳遞給靜態路由參數
  }));
}

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), `src/contents/${slug}.mdx`),
    "utf-8"
  );

  const { content, data } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <main>
            <article className="bg-white py-6 px-4 sm:px-6 border border-gray-200 rounded-none">
              <div className="flex-grow container mx-auto">
                <div className="max-w-none">
                  <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    {data.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>By {data.author}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Translated by {data.translateBy}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{data.publishedAt}</span>
                  </div>
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700">
                    <div className="prose max-w-none sm:prose-lg overflow-hidden">
                      {mdxContent}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 py-4 px-4 rounded-none">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
