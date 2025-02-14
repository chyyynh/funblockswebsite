import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { compileMDX } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { getStaticProps, getStaticParams } from "@/lib/supabase/getStaticProps";

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
    metadataBase: new URL("https://funblocks.xyz"),
    title: `Funblocks | ${article.metadata.title}`,
    description: article.metadata.summary || "Funblocks 专注于全链游戏的媒体",
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.summary || "Funblocks 专注于全链游戏的媒体",
      url: `/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metadata.title,
      description: article.metadata.summary || "Funblocks 专注于全链游戏的媒体",
      images: [article.metadata.image || ""],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { props } = await getStaticProps(slug);
  const article = props.article;

  if (!article) {
    console.error("Error fetching blog post:", props.error);
    return <div>Article not found</div>;
  }

  const { content: mdxContent } = await compileMDX({
    source: article.content,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] md:bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
        <main>
          <article className="bg-white py-8 px-6 rounded-none mb-8">
            <div className="max-w-none">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                {article.metadata.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-0">
                <span>By {article.metadata.author}</span>
                <span className="hidden sm:inline">•</span>
                <span>Translated by {article.metadata.translatedBy}</span>
                <span className="hidden sm:inline">•</span>
                <span>{article.metadata.publishedAt}</span>
              </div>
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
