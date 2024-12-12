import { Card } from "@/components/Card";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { ArticleWithSlug, getAllArticles } from "@/lib/article";
import { formatDate } from "@/lib/formateDate";
import { Inter } from "next/font/google";
import { getBlogPosts } from "@/lib/contentful";
import Photos from "@/components/Photos";

const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  const posts = await getBlogPosts();
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <main>
      <Hero />
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </main>
  );
}
