import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RelatedBadges from "@/app/components/articles/related-badge";
import remarkGfm from "remark-gfm";
import { Sidebar } from "@/app/components/articles/sidebar";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  getArticleBySlug,
  getAllArticleSlugs,
} from "@/lib/supabase/getArticleBySlug";
// import { getStaticProps } from "@/lib/supabase/getStaticProps";

export const revalidate = 300; // Revalidate every 30 minutes

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs;
}

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  const { content: mdxContent } = await compileMDX({
    source: article.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] md:bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto gap px-4 py-6 max-w-4xl">
        <main>
          <article className="bg-white py-8 px-6 rounded-none mb-8">
            <div className="max-w-none">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                {article.metadata.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                <span>原文 {article.metadata.author}</span>
                <span className="hidden sm:inline">•</span>
                <span>編輯 {article.metadata.translatedBy}</span>
                <span className="hidden sm:inline">•</span>
                <span>{article.metadata.publishedAt}</span>
              </div>
              <RelatedBadges related_game={article.related_game} />
              <div className="prose max-w-none sm:prose-lg prose-img:rounded-none overflow-hidden">
                {mdxContent}
              </div>
            </div>
          </article>
        </main>
        <aside className="bg-white p-6 rounded-none shadow-md">
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
