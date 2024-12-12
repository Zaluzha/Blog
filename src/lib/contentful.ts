// @ts-nocheck
import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful space ID and access token must be defined in environment variables."
  );
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export interface BlogPost {
  sys: {
    id: string;
    type: string; // Added to satisfy EntrySkeletonType
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string; // Changed to lowercase to match common conventions
    contentTypeId: string; // Ensure this is included
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: "blogPost",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error; // Rethrow the error after logging
  }
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  try {
    const response = await client.getEntry<BlogPost>(id);
    return response;
  } catch (error) {
    console.error(`Error fetching blog post with id ${id}:`, error);
    throw error; // Rethrow the error after logging
  }
}
