import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./article-card";

export function Sidebar() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-lg font-semibold">RELATED GAME</h2>
        <Link
          href="#"
          className="group block overflow-hidden rounded-lg border p-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16">
              <Image
                src="/placeholder.svg"
                alt="Game cover"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:text-primary">
                Dope War - Roll Your Own
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded bg-muted px-2 py-1 text-xs">
                  GAMING
                </span>
                <span className="rounded bg-muted px-2 py-1 text-xs">8.2</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">FEATURED ARTICLES</h2>
        <div className="space-y-4">
          <ArticleCard
            isCompact
            title="Next-Gen Graphics: How Photorealism is Shaping the Future of Gaming"
            image="/placeholder.svg"
            author="Jason Will"
            date="February 24, 2024"
          />
          <ArticleCard
            isCompact
            title="The Evolution of Multiplayer Gaming: From Couch Co-op to Global Connectivity"
            image="/placeholder.svg"
            author="Jason Will"
            date="February 24, 2024"
          />
          <ArticleCard
            isCompact
            title="Retro Revival: Why Classic Games Are Making a Comeback"
            image="/placeholder.svg"
            author="Jason Will"
            date="February 24, 2024"
          />
        </div>
      </section>
    </div>
  );
}
