import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { RelatedArticles } from "@/app/components/articles/related-articles";
import { RelatedVideos } from "@/app/components/articles/related-videos";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src", "contents"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src", "contents", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

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
            <article className="bg-white py-6 px-6 border border-gray-200">
              <div className="max-w-none">
                <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>By {data.author}</span>
                  <span>•</span>
                  <span>{data.date}</span>
                </div>

                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  {mdxContent}
                </div>
              </div>
            </article>

            <div className="mt-8">
              <RelatedArticles />
              <RelatedVideos />
            </div>
          </main>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 py-4 px-4">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
