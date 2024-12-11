import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 使用 Next.js 的 Image 組件
    img: (props) => (
      <Image 
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props} 
        alt={props.alt || ''}
      />
    ),
    // 自定義 heading 樣式
    h1: (props) => (
      <h1 className="text-4xl font-bold mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-3xl font-bold mb-3" {...props} />
    ),
    // 代碼塊樣式
    pre: (props) => (
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto" {...props} />
    ),
    // 行內代碼樣式
    code: (props) => (
      <code className="bg-gray-100 text-pink-500 px-1 rounded" {...props} />
    ),
    ...components,
  }
}