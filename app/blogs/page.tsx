

import BlogsClient from "./BlogsClient";
import { getPosts } from "lib/requests";

export default async function BlogsPage() {
  const edges = await getPosts({});
  //@ts-ignore
  const formatted = edges.map(({ node }: any) => ({
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

  console.log(formatted);

  return <BlogsClient blogs={formatted} />;
}

