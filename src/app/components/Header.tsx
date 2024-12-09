import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xl font-bold">
            <Image
              src="/images/funblocks_logo.svg"
              alt="FUN BLOCKS Logo"
              width={120}
              height={30}
              priority
            />
          </div>
          <div className="hidden md:flex relative flex-1 max-w-md">
            <Input
              className="pl-10 bg-[#f5f5f5]"
              placeholder="Search for anything"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <Link
              href="/games"
              className="text-sm font-medium hover:text-blue-600"
            >
              Games
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium hover:text-blue-600"
            >
              Articles
            </Link>
            <Link
              href="https://www.youtube.com/@0xfunblocks"
              className="text-sm font-medium hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Videos
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium hover:text-blue-600"
            >
              Events
            </Link>
          </nav>
          <Link href="/funcraftguild">
            <Button className="bg-blue-600 hover:bg-blue-700">Play Now</Button>
          </Link>
          <button className="md:hidden">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/header.svg"
          alt="Header SVG"
          width={1440}
          height={200}
          className="w-full"
        />
      </div>
    </header>
  );
}
