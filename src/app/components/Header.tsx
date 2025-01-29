"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white relative z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between md:justify-start gap-4">
          <div className="md:w-auto w-full text-left">
            <Link href="/" aria-label="Go to homepage" className="inline-block">
              <Image
                src="/images/funblocks_logo.svg"
                alt="FUN BLOCKS Logo"
                width={120}
                height={30}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-end">
            <Link
              href="/games"
              className="text-sm font-medium hover:text-blue-600"
            >
              遊戲
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium hover:text-blue-600"
            >
              文章
            </Link>

            <Link
              href="/tutorials"
              className="text-sm font-medium hover:text-blue-600"
            >
              攻略
            </Link>
            <Link
              href="https://www.youtube.com/@0xfunblocks"
              className="text-sm font-medium hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              影片
            </Link>
            <div className="hidden md:block">
              <Link
                href="https://t.me/FunBlocks_TC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">
                  立即加入
                </Button>
              </Link>
            </div>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
      <div className="w-full">
        <Image
          src="/images/header.svg"
          alt="Header SVG"
          width={1440}
          height={200}
          className="hidden sm:block w-full"
        />
        <Image
          src="/images/header_mobile.svg"
          alt="Header Mobile SVG"
          width={768}
          height={200}
          className="block sm:hidden w-full" // 手機版顯示
        />
      </div>
    </header>
  );
}
