import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedGame from "./components/FeaturedGame";
import GamesList from "./components/GamesList";
import ArticleGrid from "./components/ArticleGrid";
import LevelUpBanner from "./components/LevelUpBanner";
import ArticlesSection from "./components/TutorialSection";
import VideosSection from "./components/VideosSection";
// import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] bg-[url('/images/background.svg')] bg-repeat">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturedGame />
          <GamesList />
        </div>

        <ArticleGrid />
        <LevelUpBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ArticlesSection />
          <VideosSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
