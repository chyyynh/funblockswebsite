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
  PoP: "/images/proofofplay.png",
  Custom: "/images/selfbuild.png",
  unknown: "/images/unknown.svg",
  Keystone: "/images/keystone.png",
  ABS: "/images/abstract.png",
  Base: "/images/base.png",
  // 可以繼續添加更多的技術 logo
};

export function Badge({ type, className = "" }: TechBadgeProps) {
  const hasLogo = type in techLogos;

  return (
    <span
      className={`text-xs md:text-sm p-1 rounded-none inline-flex items-center gap-1 ${className}`}
    >
      {hasLogo && (
        <Image
          src={techLogos[type]}
          alt={type}
          width={15}
          height={15}
          className="object-contain"
        />
      )}
      <div className="text-sm">{type}</div>
    </span>
  );
}

export function onlyBadge({ type }: TechBadgeProps) {
  const hasLogo = type in techLogos;

  return (
    <span>
      {hasLogo && (
        <Image
          src={techLogos[type]}
          alt={type}
          width={15}
          height={15}
          className="object-contain"
        />
      )}
      <div className="text-sm">{type}</div>
    </span>
  );
}
