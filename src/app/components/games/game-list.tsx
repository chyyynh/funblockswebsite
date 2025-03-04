import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string };
}

interface GameListProps {
  games: GameCardProps[];
}

export function GameList({ games }: GameListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-2 text-left border-b w-12">#</th>
            <th className="py-2 px-4 text-left border-b">Game Name</th>
            <th className="py-2 px-4 text-center border-b">Type</th>
            <th className="py-2 px-4 text-center border-b">Players</th>
            <th className="py-2 px-4 text-center border-b">Follower</th>
            <th className="py-2 px-4 text-center border-b">Release Phase</th>
            <th className="py-2 px-4 text-right border-b">Rating</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {games.map((game: GameCardProps, index: number) => (
            <tr key={game.id}>
              <td className="py-1 px-2 border-b text-gray-500">{index + 1}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-md">
                    <Image
                      src={game.twitter_img.pfp || "/placeholder.svg"}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/games/${game.slug}`}
                      className="font-semibold hover:underline"
                    >
                      {game.title}
                    </Link>
                    <div className="flex items-center gap-1 mt-1">
                      {game.engine && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {game.engine}
                        </span>
                      )}
                      {game.blockchain && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {game.blockchain}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-sm py-1 px-4 border-b text-center text-gray-600">
                {game.type}
              </td>
              <td className="text-sm py-1 px-4 border-b text-center text-gray-600">
                {((game.id * 137) % 1000).toLocaleString()}
              </td>
              <td className="text-sm py-1 px-4 border-b text-center text-gray-600">
                {((game.id * 137) % 1000).toLocaleString()}
              </td>
              <td className="text-sm py-1 px-4 border-b text-center text-gray-600">
                {game.status}
              </td>
              <td className="py-1 px-4 border-b text-right">
                <div className="flex items-center justify-end gap-1">
                  {Array.from({ length: Math.floor(3) }).map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-2 bg-[#F3B43B] rounded-full"
                    ></span>
                  ))}
                  {Array.from({ length: 5 - Math.floor(3) }).map((_, i) => (
                    <span
                      key={`gray-${i}`}
                      className="h-2 w-2 bg-gray-200 rounded-full"
                    ></span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
