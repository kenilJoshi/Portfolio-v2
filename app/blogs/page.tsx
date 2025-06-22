import BlogsClient from "./BlogsClient";
import { getPosts } from "lib/requests";
import { BlogsType } from "lib/type";

export default async function BlogsPage() {
  const edges = await getPosts({});
  console.log(edges);

  const formatted: BlogsType[] = edges.map(({ node }: any) => ({
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
  }));

  return <BlogsClient blogs={formatted} />;
}
