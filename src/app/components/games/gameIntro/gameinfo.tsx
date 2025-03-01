import Image from "next/image";
import Link from "next/link";

import { IoMdDocument } from "react-icons/io";
import { FaGlobe, FaTwitter, FaDiscord } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface GameProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  last_release_date: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string; doc?: string; discord?: string };
  description: string;
  game_studio: string;
  tags: string[];
}

export function GameInfo(GameProps: GameProps) {
  return (
    <div className="bg-white rounded-none w-full">
      <div className="relative aspect-video overflow-hidden rounded-none">
        <Image
          src={GameProps.twitter_img.banner}
          alt="Game Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <p className="text-black text-sm mt-2 mb-2">{GameProps.description}</p>

      <Separator />

      {/* 遊戲相關連結 */}
      <div className="space-y-1 text-xl mt-1 mb-1">
        <div className="flex text-slate-400 justify-start gap-2">
          {GameProps.link.website && (
            <Link
              href={GameProps.link.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="hover:text-[#175BDB]" />
            </Link>
          )}
          {GameProps.link.doc && (
            <Link
              href={GameProps.link.doc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdDocument className="hover:text-[#175BDB]" />
            </Link>
          )}
          {GameProps.link.twitter && (
            <Link
              href={GameProps.link.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-[#175BDB]" />
            </Link>
          )}
          {GameProps.link.discord && (
            <Link
              href={GameProps.link.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="hover:text-[#175BDB]" />
            </Link>
          )}
        </div>
      </div>

      <Separator />

      {/* 遊戲相關資訊 */}
      <div className="space-y-1 text-sm mt-2 mb-2">
        <div className="flex justify-between">
          <span className="text-slate-400">遊戲工作室:</span>
          <span className="text-[#175BDB]">
            {GameProps.game_studio ? GameProps.game_studio : GameProps.title}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">上次更新日期:</span>
          <span className="text-[#175BDB]">
            {GameProps.last_release_date ? GameProps.last_release_date : "-"}
          </span>
        </div>
      </div>
      {/* 遊戲標籤 */}
      <div className="flex justify-between">
        <span className="text-sm text-slate-400">遊戲標籤:</span>
        <div className="flex gap-2">
          {GameProps.tags &&
            Array.isArray(GameProps.tags) &&
            GameProps.tags.length > 0 &&
            GameProps.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs text-[#175BDB]"
              >
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
