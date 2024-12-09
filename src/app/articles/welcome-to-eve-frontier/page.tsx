import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/sidebar";
import { RelatedArticles } from "@/app/components/related-articles";
import { RelatedVideos } from "@/app/components/related-videos";
import Image from "next/image";

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Footer />
    </div>
  );
}
