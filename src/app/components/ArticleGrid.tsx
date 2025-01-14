import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticles } from "@/lib/supabase/getStaticProps";

const articles = await getAllArticles(3);

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {articles.map((article, index: number) => (
        <Link
          key={index}
          href={`/articles/${article.metadata.link}`}
          className="hover:underline"
        >
          <Card className="border border-black rounded-none h-full hover:bg-[#F3B43B]">
            <CardContent className="p-4">
              <div className="flex flex-row gap-4 md:flex-col md:gap-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {article.metadata.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2 text-sm">
                    {article.metadata.summary}
                  </p>
                </div>
                <div className="relative w-24 shrink-0 aspect-[16/9] md:w-full md:h-[200px] md:mb-4 md:order-first">
                  <Image
                    src={article.metadata.image}
                    alt={article.metadata.title}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
