import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from '@/lib/getMarkdownContent';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import fs from 'fs';
import path from 'path';

interface ArticleProps {
  content: string;
  data: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    coverImage: string;
  };
}

export default function ArticlePage({ content, data }: ArticleProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <article className="prose max-w-none">
          <h1>{data.title}</h1>
          <p>{data.excerpt}</p>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/contents'));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  console.log(paths); // Debugging: Check generated paths
  return { paths, fallback: 'blocking' }; // Consider changing fallback to 'blocking' if needed
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getMarkdownContent(params?.slug as string);

  return {
    props: {
      content,
      data,
    },
  };
};