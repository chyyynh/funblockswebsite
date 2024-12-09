import { ArticleCard } from "./article-card";

export function RelatedArticles() {
  return (
    <section className="bg-white border border-gray-200 py-6 px-6 mb-6">
      <h2 className="text-lg font-bold mb-4">RELATED ARTICLES</h2>
      <div className="space-y-6">
        <ArticleCard
          title="The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity"
          image="/placeholder.svg"
          author="Jason Will"
          date="February 24, 2024"
          excerpt="In the ever-evolving world of video games, staying ahead of the curve is not just about keeping your software updated..."
        />
        <ArticleCard
          title="Next-Gen Graphics: How Photorealism is Shaping the Future of Gaming"
          image="/placeholder.svg"
          author="Jason Will"
          date="February 24, 2024"
          excerpt="Video games continue to captivate the hearts of players with their unique aesthetics, art styles, and gameplay mechanics..."
        />
        <ArticleCard
          title="Retro Revival: Why Classic Games Are Making a Comeback in the Digital Age"
          image="/placeholder.svg"
          author="Jason Will"
          date="February 24, 2024"
          excerpt="The gaming industry is a dynamic and exciting world, rich with opportunities for exploration, competition, and community building..."
        />
      </div>
    </section>
  );
}
