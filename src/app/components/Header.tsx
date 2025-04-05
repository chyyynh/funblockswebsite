"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";

import { useAccount } from "wagmi";
import { Account } from "@/app/components/wagmi/account";
import { WalletOptions } from "@/app/components/wagmi/wallet-option";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

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
            <div className="hidden md:block">
              <Link
                href="https://t.me/FunBlocks_TC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">
                  加入頻道
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
          <ConnectWallet />
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}
