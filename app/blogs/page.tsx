import BlogsClient from "./BlogsClient";
import { getPosts } from "lib/requests";
import { BlogsType, ApiResponse } from "../../lib/type";

// Define the structure of the API response
interface PostNode {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
    profilePicture: string;
  };
  coverImage: string;
}

interface PostsApiResponse {
  edges: PostNode;
}

export default async function BlogsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await getPosts({});
  console.log(data);

  const formatted: BlogsType[] = data.map(({ node }) => ({
    id: node.id,
    title: node.title,
    brief: node.brief,
    slug: node.slug,
    publishedAt: node.publishedAt,
    author: {
      name: node.author.name,
      profilePicture: node.author.profilePicture,
    },
    coverImage: node.coverImage,
  })) || [];

  return <BlogsClient blogs={formatted || []} />;
}