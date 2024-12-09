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
      <div className="flex-grow container py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <main>
            <article className="prose prose-gray max-w-none dark:prose-invert">
              <h1>
                The Evolution of Multiplayer Gaming: From Couch Co-op to Global
                Connectivity
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>By Jason Will</span>
                <span>•</span>
                <span>February 24, 2024 at 10:50 AM</span>
              </div>

              <h2>Summary</h2>
              <p>
                The journey of multiplayer gaming is a fascinating saga of
                innovation, community, and the ever-evolving relationship
                between technology and social interaction. From the humble
                beginnings of couch co-op to today's vast networks of global
                connectivity, multiplayer gaming has transformed in ways that
                early gamers could hardly have imagined.
              </p>

              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Multiplayer gaming illustration"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>The Early Days: Couch Co-op and Local Multiplayer</h2>
              <p>
                Multiplayer gaming has its roots in the local co-op and
                competitive experiences of the late 20th century. Games like
                "Pong" laid the foundations, but it was titles such as "Contra"
                and "Street Fighter II" that truly epitomized the era of couch
                multiplayer gaming.
              </p>

              <h2>The Rise of Online Multiplayer</h2>
              <p>
                The advent of the internet revolutionized many aspects of daily
                life, and gaming was no exception. Online multiplayer gaming has
                gained massive attention in the 1990s with the rise of PC gaming
                platforms.
              </p>

              <h2>The Console Online Explosion</h2>
              <p>
                While PC gamers enjoyed the early benefits of online
                multiplayer, console gaming was not far behind. The launch of
                services like Xbox Live and PlayStation Network brought online
                multiplayer to the living room.
              </p>

              <h2>Conclusion</h2>
              <p>
                The evolution of multiplayer gaming from couch co-op to global
                connectivity reflects broader changes in society's relationship
                with technology, entertainment, and each other.
              </p>
            </article>

            <RelatedArticles />
            <RelatedVideos />
          </main>

          <aside>
            <Sidebar />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
