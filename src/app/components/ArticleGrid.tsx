import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticles } from "@/lib/supabase/getStaticProps";

const articles = await getAllArticles(3);

export default function ArticleGrid() {
  return (
    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
      {articles.map((article, index: number) => (
        <Card key={index} className="border border-black rounded-none h-full">
          <Link
            href={`/articles/${article.metadata.link}`}
            className="hover:underline"
          >
            <CardContent className="p-4">
              <div className="flex flex-row gap-4 md:flex-col">
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
          </Link>
        </Card>
      ))}
    </div>
  );
}
