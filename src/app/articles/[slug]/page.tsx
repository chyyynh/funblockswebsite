import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { compileMDX } from "next-mdx-remote/rsc";
import { Metadata } from "next"; // 需要從 next 中導入 Metadata 類型
import { getStaticProps, getStaticParams } from "@/lib/supabase/getStaticProps";
// import { createClient } from "@supabase/supabase-js";
// import { getBlogPosts, getBlogPostbySlug } from "../../../lib/post";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

export async function generateStaticParams() {
  const allslug = await getStaticParams();
  return allslug;
}

export type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const { props } = await getStaticProps(slug);
  const article = props.article;

  if (!article) {
    console.error("Error fetching blog posts:", props.error);
  }

  return {
    title: `Funblocks | ${article.metadata.title}`, // 設定動態標題
    description: "單頁面描述",
    openGraph: {
      title: "單頁面標題 (OG)",
      description: "單頁面描述 (OG)",
      url: "https://你的網站網址.com/特定頁面",
      images: [
        {
          url: "/specific-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "單頁面圖片描述",
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { props } = await getStaticProps(slug);
  const article = props.article;

  if (!article) {
    console.error("Error fetching blog post:", props.error);
    return <div>{article}</div>;
  }

  const { content: mdxContent } = await compileMDX({
    source: article.content,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <article className="bg-white py-6 px-4 sm:px-6 border border-gray-200 rounded-none">
              <div className="flex-grow container mx-auto">
                <div className="max-w-none">
                  <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    {article.metadata.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>By {article.metadata.author}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Translated by {article.metadata.translateBy}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{article.metadata.publishedAt}</span>
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
