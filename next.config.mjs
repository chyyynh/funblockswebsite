import createMDX from '@next/mdx'
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // 如果你要使用 frontmatter，設置為 true
    providerImportSource: "@mdx-js/react",
  }
})
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}
 
export default withMDX(nextConfig)