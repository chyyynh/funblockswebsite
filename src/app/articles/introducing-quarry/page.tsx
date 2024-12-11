import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/games/sidebar";
import { RelatedArticles } from "@/app/components/articles/related-articles";
import { RelatedVideos } from "@/app/components/articles/related-videos";
import Image from "next/image";

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <main>
            <article className="bg-white py-6 px-6 border border-gray-200">
              <div className="max-w-none">
                <h1 className="text-2xl font-bold mb-2">
                  Playerchain 架構 - 作者：5p0rt5BEArD
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>By 5p0rt5BEArD</span>
                  <span>•</span>
                  <span>February 24, 2024 at 10:50 AM</span>
                </div>

                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <h2 className="text-lg font-bold mt-6 mb-3">Summary</h2>
                  <p>
                    The journey of multiplayer gaming is a fascinating saga of
                    innovation, community, and the ever-evolving relationship
                    between technology and social interaction. From the humble
                    beginnings of couch co-op to todays vast networks of global
                    connectivity, multiplayer gaming has transformed in ways
                    that early gamers could hardly have imagined. Multiplayer
                    gaming has its roots in the local co-op and competitive
                    experiences of the late 20th century. Games like Pong laid
                    the foundations, but it was titles such as Contra and Street
                    Fighter II that truly epitomized the era of couch
                    multiplayer gaming. These games required players to be
                    physically present in the same room, sharing a screen and
                    often, in the case of co-op games, working together to
                    achieve a common goal. This format fostered a sense of
                    camaraderie and interaction that became a defining
                    characteristic of early video gaming culture.
                  </p>

                  <div className="relative w-full h-[300px] my-6">
                    <Image
                      src="/placeholder.svg"
                      alt="Multiplayer gaming illustration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-lg font-bold mt-6 mb-3">
                    The Early Days: Couch Co-op and Local Multiplayer
                  </h2>
                  <p>
                    Multiplayer gaming has its roots in the local co-op and
                    competitive experiences of the late 20th century. Games like
                    Pong laid the foundations, but it was titles such as Contra
                    and Street Fighter II that truly epitomized the era of couch
                    multiplayer gaming. These games required players to be
                    physically present in the same room, sharing a screen and
                    often, in the case of co-op games, working together to
                    achieve a common goal. This format fostered a sense of
                    camaraderie and immediate social interaction that became a
                    defining characteristic of early video gaming culture.
                  </p>

                  <h2 className="text-lg font-bold mt-6 mb-3">
                    The Rise of Online Multiplayer
                  </h2>
                  <p>
                    The advent of the internet revolutionized many aspects of
                    daily life, and gaming was no exception. Online multiplayer
                    gaming has gained massive attention in the 1990s with the
                    rise of PC gaming platforms. Games like Doom allowed players
                    to connect via local networks (LANs) or even over primitive
                    internet connections for global play. This era saw the birth
                    of massively multiplayer online games (MMOs), like EverQuest
                    and World of Warcraft, which broadened gaming horizons and
                    let players share their virtual worlds with thousands of
                    other players in real-time.
                  </p>

                  <h2 className="text-lg font-bold mt-6 mb-3">
                    The Console Online Explosion
                  </h2>
                  <p>
                    While PC gamers enjoyed the early benefits of online
                    multiplayer, console gaming was not far behind. The launch
                    of services like Xbox Live and PlayStation Network brought
                    online multiplayer to the living room, making it easier than
                    ever for console gamers to connect with one another online.
                    This era democratized online gaming, making it a standard
                    feature rather than a niche or luxury experience.
                  </p>

                  <h2 className="text-lg font-bold mt-6 mb-3">Conclusion</h2>
                  <p>
                    The evolution of multiplayer gaming from couch co-op to
                    global connectivity reflects broader changes in societys
                    relationship with technology, entertainment, and each other.
                    As multiplayer gaming continues to evolve, it remains a
                    testament to the human desire for connection, competition,
                    and shared experiences. In every pixelated battle fought,
                    every virtual world explored, and every high score achieved
                    together, multiplayer gaming celebrates the joy of
                    connecting with others through the universal language of
                    play.
                  </p>
                </div>
              </div>
            </article>

            <div className="mt-8">
              <RelatedArticles />
              <RelatedVideos />
            </div>
          </main>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 py-4 px-4">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
