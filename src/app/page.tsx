import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedGame from "./components/FeaturedGame";
import GamesList from "./components/GamesList";
import ArticleGrid from "./components/ArticleGrid";
import LevelUpBanner from "./components/LevelUpBanner";
import ArticlesSection from "./components/TutorialSection";
import VideosSection from "./components/VideosSection";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[#f0f0f0] bg-[url('/images/new-background.svg')] bg-cover">
        <Header />

        <main className="container mx-auto px-6 py-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedGame />
            <GamesList />
          </div>

          <ArticleGrid />
          <LevelUpBanner />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticlesSection />
            <VideosSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
