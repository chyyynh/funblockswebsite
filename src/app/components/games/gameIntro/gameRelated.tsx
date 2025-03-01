import { ArticleCard } from "@/app/components/articles/article-card";
import { formatDate } from "@/lib/post";
import { Separator } from "@/components/ui/separator";
import { getRelatedArticle } from "@/lib/supabase/getArticleBySlug";

interface GameProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  last_release_date: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string; doc?: string; discord?: string };
  description: string;
  game_studio: string;
  tags: string[];
}

export async function GameRelated(GameProps: GameProps) {
  const related_article = await getRelatedArticle(GameProps.id);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold py-0.5">
          {GameProps.title} 相關文章
        </h2>
        <Separator className="border-b-2 border-gray-400 mb-4" />

        <div className="space-y-4">
          {related_article &&
            related_article.map((article, i) => (
              <ArticleCard
                key={i}
                isCompact
                title={article.metadata.title}
                author={article.metadata.author}
                link={article.metadata.link}
                publishedAt={formatDate(article.metadata.publishedAt, false)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
