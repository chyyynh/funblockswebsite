import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      data,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src/contents"));
}

export function getBlogPostbySlug(slug: string) {
  const { data, content } = readMDXFile(
    path.join(process.cwd(), `src/contents/${slug}.mdx`)
  );

  return {
    data,
    slug,
    content,
  };
}
