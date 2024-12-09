import { Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedGame from "./components/FeaturedGame";
import GamesList from "./components/GamesList";
import ArticleGrid from "./components/ArticleGrid";
import LevelUpBanner from "./components/LevelUpBanner";
import ReviewsSection from "./components/ReviewsSection";
import VideosSection from "./components/VideosSection";
import GuidesSection from "./components/GuidesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] bg-[url('/images/background.svg')] bg-repeat">
      <Header />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturedGame />
          <GamesList />
        </div>

        <ArticleGrid />
        <LevelUpBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReviewsSection />
          <VideosSection />
        </div>

        <GuidesSection />
      </main>

      <Footer />
    </div>
  );
}
