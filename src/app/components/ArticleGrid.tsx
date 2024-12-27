import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticles } from "@/lib/supabase/getStaticProps";

const articles = await getAllArticles(3);

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index: number) => (
        <Card key={index} className="border border-black rounded-none h-full">
          <Link
            href={`/articles/${article.metadata.link}`}
            className="hover:underline"
          >
            <CardContent className="p-4 flex flex-col">
              <div className="w-full h-[200px] overflow-hidden mb-4">
                <Image
                  src={article.metadata.image}
                  alt={article.metadata.title}
                  width={400}
                  height={150}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1 min-h-1 line-clamp-2">
                {article.metadata.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {article.metadata.summary}
              </p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
