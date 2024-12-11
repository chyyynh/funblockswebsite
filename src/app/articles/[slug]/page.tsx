// src/app/articles/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

// 替換 getStaticPaths
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/contents'))
  return files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace('.mdx', '')
    }))
}

// 替換 getStaticProps，改用服務器組件
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/contents', `${slug}.mdx`),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  // 動態導入 MDX 內容
  const MDXContent = await import(`@/contents/${slug}.mdx`)

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{frontMatter.title}</h1>
      <div className="text-gray-500 mb-8">
        {frontMatter.date} · {frontMatter.author}
      </div>
      <MDXContent.default />
    </article>
  )
}