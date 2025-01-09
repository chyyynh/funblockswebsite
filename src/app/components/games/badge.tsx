import Image from "next/image";

interface TechBadgeProps {
  type: string;
  className?: string;
}

const techLogos: Record<string, string> = {
  Dojo: "/images/dojo_logo.jpg",
  Starknet: "/images/starknet_logo.png",
  MUD: "/images/mud.jpg",
  Redstone: "/images/redstone.png",
  ProofofPlay: "/images/proofofplay.png",
  // 可以繼續添加更多的技術 logo
};

export function Badge({ type, className = "" }: TechBadgeProps) {
  const hasLogo = type in techLogos;

  return (
    <span
      className={`text-[15px] sm:text-sm px-1 sm:px-2 py-0.5 rounded-none inline-flex items-center gap-1 ${className}`}
    >
      {hasLogo && (
        <Image
          src={techLogos[type]}
          alt={type}
          width={12}
          height={12}
          className="object-contain"
        />
      )}
      {type}
    </span>
  );
}
