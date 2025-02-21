// components/MarkdownContent.tsx
"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeUnwrapImages from "rehype-unwrap-images";

const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <div className="prose max-w-none sm:prose-lg overflow-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeUnwrapImages]} // 讓 HTML 可用
        components={{
          iframe: ({ ...props }) => (
            <div className="flex justify-center">
              <div className="relative w-10/12 items-center overflow-hidden rounded-lg aspect-video mb-6">
                <iframe {...props} className="w-full h-full " loading="lazy" />
              </div>
            </div>
          ),
          img: ({ ...props }) => (
            <div className="flex justify-center">
              <figure className="flex flex-col items-center mb-6">
                <img
                  {...props}
                  alt={props.alt || "Image"}
                  className="max-w-full h-auto rounded-none"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-600">
                  {props.alt}
                </figcaption>
              </figure>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
