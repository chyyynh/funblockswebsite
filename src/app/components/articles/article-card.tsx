import Link from "next/link";

interface ArticleCardProps {
  title: string;
  publishedAt: string;
  author: string;
  translateBy?: string;
  summary?: string;
  link: string;
  OrginalLink?: string;
  isCompact?: boolean;
}

export function ArticleCard({
  title,
  publishedAt,
  author,
  summary,
  link,
  isCompact,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${link}`} className="group block hover:underline">
      <div
        className={`flex ${
          isCompact ? "gap-3" : "flex-col gap-4"
        } group-hover:bg-[#F3B43B]`}
      >
        <div className="flex-1">
          <h3
            className={`font-semibold ${
              isCompact ? "text-lg" : "text-xl"
            } group-hover:text-primary`}
          >
            {title}
          </h3>
          {!isCompact && summary && (
            <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
          )}
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{author}</span>
            <span>•</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
