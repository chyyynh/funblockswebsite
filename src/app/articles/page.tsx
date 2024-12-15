import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, formatDate } from "../../lib/post";

const allBlogs = getBlogPosts().sort((a, b) => {
  if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt)) {
    return -1;
  }
  return 1;
});

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <div className="space-y-4">
              {allBlogs
                .sort((a, b) => {
                  if (
                    new Date(a.data.publishedAt) > new Date(b.data.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((article, i) => (
                  <article
                    key={i}
                    className="flex flex-col md:flex-row gap-6 bg-white p-6 border border-gray-200 hover:bg-[#F3B43B] transition-colors overflow-hidden"
                  >
                    <div className="flex-1 min-w-0 order-last md:order-first">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>
                          {formatDate(article.data.publishedAt, false)}
                        </span>
                        <span> </span>
                        <span>by {article.data.author}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                        <Link
                          href={`/articles/${article.data.link}`}
                          className="hover:underline"
                        >
                          {article.data.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.data.summary}
                      </p>
                    </div>

                    {article.data.image && (
                      <div className="relative w-full md:w-48 aspect-[16/9] order-first md:order-last">
                        <Image
                          src={article.data.image}
                          alt=""
                          fill
                          className="object-cover rounded-none"
                        />
                      </div>
                    )}
                  </article>
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
