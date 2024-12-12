import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Sidebar } from "@/app/components/articles/sidebar";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "這些不是你要找的機器人 — 1kx",
    author: "Raf (from 1kx)",
    translateBy: "chiny",
    summary:
      "機器人被視為惡棍——漏洞的利用者、為人類建構的系統中的騙子。但這就是故事的全部嗎？",
    publishedAt: "2024-10-17",
    image: "/images/articles/bots-not-looking-for.png",
    link: "these-arent-the-bot-you-looking-for",
  },
  {
    title: "Quarry：为自主世界而生的新一代计算环境",
    author: "Lattice",
    translateBy: "Funblocks",
    summary:
      "“它能运行《毁灭战士（Doom）》吗？” 是计算领域广为流传的一句口号，促使人们尝试在各种设备上运行这款开源第一人称射击游戏，从老款 Mac 电脑到 Peloton 健身器材，甚至到拖拉机。到目前为止，区块链在实现这一功能上大多未能达标，而这一功能被视为衡量硬件设备复杂性的非正式标准。",
    date: "2024-10-17",
    image: "/images/quarry-cover.jpg",
    link: "these-arent-the-bot-you-looking-for",
  },
  {
    title: "Bankless：Biomes 正为主宰自主世界做好准备",
    author: "William M. Peaster",
    translateBy: "Funblocks",
    summary:
      "Biomes，一个自主世界项目，正准备在链上向《我的世界》发起一场关键挑战。自主遊戲的經濟革命",
    date: "2024-10-17",
    image: "/images/articles/bankless-biomes.jpg",
    link: "these-arent-the-bot-you-looking-for",
  },
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1]">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <main>
            <div className="space-y-4">
              {articles.map((article, i) => (
                <article
                  key={i}
                  className="flex flex-col md:flex-row gap-6 bg-white p-6 border border-gray-200 hover:bg-gray-50 transition-colors overflow-hidden"
                >
                  <div className="flex-1 min-w-0 order-last md:order-first">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>by {article.author}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                      <Link
                        href={`/articles/${article.link}`}
                        className="hover:underline"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>

                  {article.image && (
                    <div className="relative w-full md:w-48 aspect-[16/9] order-first md:order-last">
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </main>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 py-4 px-4 rounded-none">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
