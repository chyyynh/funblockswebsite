import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "Web3 Gaming 的未來",
    date: "2024-03-20",
    excerpt: "探討 Web3 遊戲的發展趨勢...",
    image: "/images/articles/web3-gaming.jpg",
  },
  // 添加更多文章...
];

export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Card key={i} className="border border-black rounded-none">
            <CardContent className="p-4">
              <h2 className="font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{article.date}</p>
              <p className="text-sm">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
