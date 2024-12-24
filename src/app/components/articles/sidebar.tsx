import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./article-card";
import { getBlogPosts, formatDate } from "../../../lib/post";

const allBlogs = getBlogPosts();

interface SidebarProps {
  related_game: string;
  related_tag: string[];
}

export function Sidebar() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-xl font-semibold">推薦遊戲</h2>
        <Link
          href="#"
          className="group block overflow-hidden rounded-none border p-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 aspect-square">
              <Image
                src="/images/games/dopewars.jpg"
                alt="Game cover"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:text-primary">
                Dope War - Roll Your Own
              </h3>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">推薦文章</h2>
        <div className="space-y-4">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .slice(0, 5) // 只選前三篇文章
            .map((article, i) => (
              <ArticleCard
                key={i}
                isCompact
                title={article.data.title} // 使用動態資料
                author={article.data.author}
                link={article.data.link}
                publishedAt={formatDate(article.data.publishedAt, false)} // 格式化日期
              />
            ))}
        </div>
      </section>
    </div>
  );
}
