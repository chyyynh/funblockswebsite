import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeaturedGame() {
  return (
    <Card className="col-span-1 md:col-span-2 overflow-hidden border border-black rounded-none">
      {/* 移動端布局 */}
      <div className="md:hidden">
        <div className="flex p-4 gap-4">
          <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
            <Image
              src="/images/bolt-banner.jpg"
              alt="BOLT Game"
              fill
              objectFit="cover"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex items-center gap-2 mb-2"></div>
            <h3 className="text-lg font-bold mb-1 line-clamp-2">
              BOLT：Solana生態ECS全鏈遊戲引擎
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              BOLT是Magicblock團隊為Solana生態開發的全鏈遊戲引擎。
            </p>
            <div className="flex gap-2 mt-auto">
              <Button
                size="sm"
                className="text-xs px-2 py-1 h-7 bg-blue-600 hover:bg-blue-700"
              >
                Play
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs px-2 py-1 h-7"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 桌面端布局 */}
      <div className="hidden md:flex md:flex-row">
        <div className="relative aspect-square w-[400px] p-4">
          <div className="relative aspect-square h-full rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/images/bolt-banner.jpg"
              alt="BOLT Game"
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">BOLT</span>
            </div>
            <h2 className="text-xl font-medium">BOLT</h2>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            BOLT：Solana生態ECS全鏈遊戲引擎
          </h3>
          <p className="text-base text-muted-foreground flex-grow">
            BOLT是Magicblock團隊為Solana生態開發的全鏈遊戲引擎。
          </p>
          <div className="flex gap-2 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Play</Button>
            <Button variant="outline">Explore</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
