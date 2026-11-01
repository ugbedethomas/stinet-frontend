import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const featuredArticle = {
  title: "Why Growing Manufacturers Need More Than Spreadsheets to Manage Operations",
  excerpt:
    "Discover why growing manufacturing operations may need more connected ways to manage procurement, inventory, production and reporting.",
  category: "Manufacturing & Operations",
  imageUrl: "/images/article-featured.svg",
  imageAlt: "Featured manufacturing insight placeholder",
  href: "/insights",
};

const supportingArticles = [
  {
    title: "What Should a Business Look for Before Choosing an ERP System?",
    excerpt: "A practical guide to evaluating business requirements and implementation readiness.",
    category: "Business Systems & ERP",
    imageUrl: "/images/article-erp.svg",
    imageAlt: "ERP article placeholder",
    href: "/insights",
  },
  {
    title: "Five Business Processes You Could Start Automating Today",
    excerpt: "Explore common repetitive activities that may benefit from automation.",
    category: "AI & Automation",
    imageUrl: "/images/article-automation.svg",
    imageAlt: "Automation article placeholder",
    href: "/insights",
  },
  {
    title: "Digital Transformation Is More Than Buying New Software",
    excerpt: "Understand the importance of people, processes and business objectives.",
    category: "Digital Transformation",
    imageUrl: "/images/article-transformation.svg",
    imageAlt: "Digital transformation article placeholder",
    href: "/insights",
  },
];

export function Insights() {
  return (
    <section aria-labelledby="insights-heading" className="w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Insights
          </p>
          <Heading level="h2" variant="h2" className="mb-4 text-neutral-900">
            Ideas That Move Businesses Forward.
          </Heading>
          <Text variant="body-lg" tone="muted">
            Practical knowledge, technology perspectives and ideas to help
            businesses make smarter decisions.
          </Text>
        </div>

        <div className="mb-8">
          <ArticleCard
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            category={featuredArticle.category}
            imageUrl={featuredArticle.imageUrl}
            imageAlt={featuredArticle.imageAlt}
            href={featuredArticle.href}
            featured
          />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportingArticles.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              href={article.href}
            />
          ))}
        </div>

        <NewsletterForm />

        <div className="mt-10 flex justify-center">
          <Button href="/insights" variant="secondary" size="lg">
            Explore All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}