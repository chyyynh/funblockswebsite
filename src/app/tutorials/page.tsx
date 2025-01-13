import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import { formatDate } from "../../lib/post";
import { getAllTutorials } from "@/lib/supabase/getStaticProps";

async function fetchAndSort() {
  const articles = await getAllTutorials();
  articles.sort((a, b) => {
    if (new Date(a.created_at) > new Date(b.created_at)) {
      return -1;
    }
    return 1;
  });
  return articles;
}

const allTutorials = await fetchAndSort();

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1] bg-[url('/images/background.svg')]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <div className="space-y-4">
              {allTutorials.map((tutorial, i) => (
                <Link
                  key={i}
                  href={`/tutorials/${tutorial.metadata.link}`}
                  className="block group"
                >
                  <article className="flex items-center gap-4 bg-white p-4 border border-gray-200 group-hover:bg-[#F3B43B] transition-colors overflow-hidden">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
                        <span>{formatDate(tutorial.created_at, false)}</span>
                        <span className="hidden sm:inline"> • </span>
                        <span className="hidden sm:inline">
                          by {tutorial.metadata.author}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                        {tutorial.metadata.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 text-sm sm:text-base">
                        {tutorial.metadata.summary}
                      </p>
                    </div>

                    {tutorial.metadata.image && (
                      <div className="relative w-24 sm:w-32 md:w-48 shrink-0 aspect-[16/9]">
                        <Image
                          src={tutorial.metadata.image}
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

          <aside className="hidden lg:block space-y-6">
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
