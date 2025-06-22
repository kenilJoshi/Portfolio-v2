import request, { gql } from "graphql-request";
import { GetPostByIdResponse, GetPostsResponse, PublicationName } from "./type";

const endpoint = process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getBlogName() {
  const query = gql`
    query getBlogName($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        title
        displayTitle
        favicon
      }
    }
  `;
  const response = await request<PublicationName>(endpoint || "", query, {
    publicationId,
  });

  return {
    title: response.publication.title,
    displayTitle: response.publication.displayTitle,
    favicon: response.publication.favicon,
  };
}

export async function getPosts({ first = 9, pageParam = "" }) {
  const query = gql`
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint || "", query, {
    publicationId,
    first,
    after: pageParam,
  });

  return response.publication.posts.edges;
}

export async function getPostById(postId: string) {
  const query = gql`
    query GetPostById($postId: ID!) {
      post(id: $postId) {
        id
        title
        slug
        publishedAt
        brief
        content {
          html
        }
        coverImage {
          url
        }
        author {
          name
          profilePicture
        }
      }
    }
  `;
  const response = await request<GetPostByIdResponse>(endpoint || "", query, {
    postId,
  });
  console.log(response);

  return response;
}
