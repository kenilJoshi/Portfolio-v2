export interface BlogsType {
  id: number;
  title?: string;
  content?: string;
  author?: string;
  filePath?: string;
  publishedAt?: string;
  coverImage?: string | null;
}

export const Blogs: BlogsType[] = [
  {
    id: 1,
    title: "B Tree Indexing Basic Explained",
    content: "What are Database Indexing...",
    author: "Kenil Joshi",
    filePath: "text.mdx",
    publishedAt: "2025-03-16",
    coverImage: null,
  },
];
