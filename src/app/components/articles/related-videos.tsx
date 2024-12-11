import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export function RelatedVideos() {
  return (
    <section className="bg-white border border-gray-200 py-6 px-6">
      <h2 className="text-lg font-bold mb-4">RELATED VIDEOS</h2>
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <Link key={i} href="#" className="group block">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <PlayCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="mt-2 font-medium group-hover:text-primary">
              Lost Survivor and the Emergence of On-chain Arcades
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Lost Survivor() is the first game in the Realms Autonomous Worlds
              ecosystem. It was developed by LootRealms...
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
