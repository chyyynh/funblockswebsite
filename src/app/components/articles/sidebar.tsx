import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./article-card";
import { formatDate } from "../../../lib/post";
import { getServerSideProps } from "@/lib/supabase/getStaticProps";

const allBlogs = await getServerSideProps(5);

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
                src="/images/dopewars.jpg"
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
          {allBlogs.map((article, i) => (
            <ArticleCard
              key={i}
              isCompact
              title={article.metadata.title} // 使用動態資料
              author={article.metadata.author}
              link={article.metadata.link}
              publishedAt={formatDate(article.metadata.publishedAt, false)} // 格式化日期
            />
          ))}
        </div>
      </section>
    </div>
  );
}
