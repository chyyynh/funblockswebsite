import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-2 shadow-lg z-20000">
      <nav className="flex flex-col space-y-2 px-4">
        <Link
          href="/games"
          className="text-sm font-medium py-2 hover:text-blue-600"
        >
          遊戲
        </Link>
        <Link
          href="/articles"
          className="text-sm font-medium py-2 hover:text-blue-600"
        >
          文章
        </Link>
        <Link
          href="https://www.youtube.com/@0xfunblocks"
          className="text-sm font-medium py-2 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          影片
        </Link>
        <Link
          href="/events"
          className="text-sm font-medium py-2 hover:text-blue-600"
        >
          攻略
        </Link>
        <Link href="/funcraftguild" className="mt-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            立即遊玩
          </Button>
        </Link>
      </nav>
    </div>
  );
}
