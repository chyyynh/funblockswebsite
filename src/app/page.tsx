import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedGame from "./components/FeaturedGame";
import GamesList from "./components/GamesList";
import ArticleGrid from "./components/ArticleGrid";
import LevelUpBanner from "./components/LevelUpBanner";
import ArticlesSection from "./components/ArticlesSection";
import VideosSection from "./components/VideosSection";
import GuidesSection from "./components/GuidesSection";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] bg-[url('/images/background.svg')] bg-repeat">
      <Head>
        <title>我的網站標題</title>
        <meta name="description" content="這是一個介紹我的網站的描述。" />
        <meta property="og:title" content="我的網站標題" />
        <meta
          property="og:description"
          content="這是一個介紹我的網站的描述。"
        />
        <meta property="og:image" content="/images/share.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

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

        <GuidesSection />
      </main>

      <Footer />
    </div>
  );
}
