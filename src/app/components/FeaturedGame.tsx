import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeaturedGame() {
  return (
    <Card className="col-span-1 md:col-span-2 overflow-hidden border border-black rounded-none">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-square w-full md:w-[400px] p-4">
          <div className="relative w-full h-full rounded-lg border-2 border-gray-200 overflow-hidden">
            <Image
              src="/images/bolt-banner.jpg"
              alt="BOLT Game"
              fill
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
            BOLT: Solana ecological ECS full-chain game engine
          </h3>
          <p className="text-base text-muted-foreground flex-grow">
            BOLT is a full-chain game engine developed by the Magicblock team
            for the Solana ecosystem. This...
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
