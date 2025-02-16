export interface BlogsType {
  id: number;
  title?: string;
  content?: string;
  author?: string;
  filePath?: string;
  publishedAt?: string;
  coverImage?: string | null;
}

export const Blogs: BlogsType[] = [];
