"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { PlayCircle } from "lucide-react";

interface GameProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string };
  display_media: string[];
  description: string;
  game_studio: string;
}

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function GamePreview(GameProps: GameProps) {
  // 使用 display_media 的第一張作為預設值
  const [selectedMedia, setSelectedMedia] = useState(
    GameProps.display_media?.[0] || ""
  );

  useEffect(() => {
    const timer = setTimeout(
      () => setSelectedMedia(GameProps.display_media[0]),
      500
    ); // 等待圖片過渡完再換圖
    return () => clearTimeout(timer); // 清除定時器，防止記憶體泄漏
  }, [GameProps.display_media]);

  const handleMediaClick = (mediaUrl: string) => {
    setSelectedMedia(mediaUrl);
  };

  // 判斷媒體類型的輔助函數
  const isVideo = (url: string) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  // 渲染媒體內容的組件
  const MediaContent = ({
    src,
    preview,
  }: {
    src: string;
    preview: boolean;
  }) => {
    if (isVideo(src)) {
      return (
        <div className="relative w-full h-full">
          {preview && (
            <PlayCircle className="absolute inset-0 m-auto text-white w-12 h-12" />
          )}
          <div style={{ pointerEvents: "none" }}>
            <ReactPlayer
              url={src}
              playing={!preview} // 保持影片不播放
              controls={!preview} // 不顯示控制器
              width="100%"
              height="100%"
              className="object-cover"
            />
          </div>
        </div>
      );
    }
    return <Image src={src} alt="Game Media" fill className="object-cover" />;
  };

  return (
    <div className="bg-white w-full">
      {/* 主顯示區域 */}
      <div className="relative aspect-video overflow-hidden mb-2">
        <MediaContent src={selectedMedia} preview={false} />
      </div>

      {/* 縮圖選擇區域 */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {GameProps.display_media &&
          GameProps.display_media.map((media, i) => (
            <div
              key={i}
              className="relative shrink-0 cursor-pointer"
              onClick={() => handleMediaClick(media)}
            >
              <div className="relative h-24 w-40 overflow-hidden rounded-none">
                <MediaContent src={media} preview={true} />
              </div>
              {selectedMedia === media && (
                <div className="absolute inset-0 flex items-center justify-center border border-spacing-5 bg-black/40">
                  <div className=" text-white"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
