import Link from "next/link";

interface ArticleCardProps {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  isCompact?: boolean;
}

export function ArticleCard({
  title,
  date,
  author,
  excerpt,
  isCompact = false,
}: ArticleCardProps) {
  return (
    <Link href="#" className="group block">
      <div className={`flex ${isCompact ? "gap-3" : "flex-col gap-4"}`}>
        <div className="flex-1">
          <h3
            className={`font-semibold ${
              isCompact ? "text-sm" : "text-xl"
            } group-hover:text-primary`}
          >
            {title}
          </h3>
          {!isCompact && excerpt && (
            <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
          )}
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
