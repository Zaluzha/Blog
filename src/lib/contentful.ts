import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    Image: string;
    contentTypeId: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await client.getEntries<BlogPost>({
    content_type: "blogPost",
  });
  return response.items;
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  const response = await client.getEntry<BlogPost>(id);
  return response;
}
