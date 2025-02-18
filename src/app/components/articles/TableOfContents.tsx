"use client"; // ✅ 這是 Client Component

export default function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  return (
    <aside className="hidden lg:block w-1/4 bg-white p-6 rounded-md shadow-md sticky top-20 h-fit">
      <h2 className="text-xl font-bold mb-4">目錄</h2>
      <ul className="text-sm text-gray-700 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="hover:text-blue-500 block">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
