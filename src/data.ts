// data.ts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "First Post",
    slug: "first-post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    slug: "second-post",
    content: "This is the content of the second post.",
  },
];
