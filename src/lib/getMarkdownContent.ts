import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(slug: string) {
    try {
      const filePath = path.join(process.cwd(), 'src/contents', `${slug}.md`)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      return { data, content }
    } catch (error) {
      console.error(`Error reading markdown file: ${error}`)
      return {
        data: {
          title: 'Not Found',
          date: '',
          author: '',
          excerpt: '',
          coverImage: '',
        },
        content: '文章不存在'
      }
    }
  }