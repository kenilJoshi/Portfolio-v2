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
    title: "How to Learn React",
    content: "React is a JavaScript library for building user interfaces...",
    author: "Kenil Joshi",
    filePath: "text.mdx",
    publishedAt: "2024-09-23",
    coverImage: null,
  }
];
