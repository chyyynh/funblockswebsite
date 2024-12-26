import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { formatDate } from "../../lib/post";
import { getAllArticles } from "@/lib/supabase/getStaticProps";

async function fetchAndSortArticles() {
  const articles = await getAllArticles();
  articles.sort((a, b) => {
    if (new Date(a.created_at) > new Date(b.created_at)) {
      return -1;
    }
    return 1;
  });
  return articles;
}

const allBlogs = await fetchAndSortArticles();

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <div className="space-y-4">
              {allBlogs.map((article, i) => (
                <Link
                  key={i}
                  href={`/articles/${article.metadata.link}`}
                  className="block group"
                >
                  <article className="flex flex-row gap-6 bg-white p-6 border border-gray-200 group-hover:bg-[#F3B43B] transition-colors overflow-hidden">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>{formatDate(article.created_at, false)}</span>
                        <span> • </span>
                        <span>by {article.metadata.author}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                        {article.metadata.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700">
                        {article.metadata.summary}
                      </p>
                    </div>

                    {article.metadata.image && (
                      <div className="relative w-32 md:w-48 shrink-0 aspect-[16/9]">
                        <Image
                          src={article.metadata.image}
                          alt=""
                          fill
                          className="object-cover rounded-none"
                        />
                      </div>
                    )}
                  </article>
                </Link>
              ))}
            </div>
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
