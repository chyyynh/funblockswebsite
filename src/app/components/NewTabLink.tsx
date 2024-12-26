import Link from "next/link";

interface NewTabLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NewTabLink({ href, children, className }: NewTabLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    </Link>
  );
}
