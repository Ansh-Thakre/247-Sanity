import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { BLOG_CARD_GRADIENT } from "@/data/blog-posts";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/sanity/fetch";
import { siteConfig } from "@/config/site";

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const heroImage = post.detailImage || post.image;

  return (
    <>
      <section
        className={`relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-linear-to-br ${BLOG_CARD_GRADIENT}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <Container className="relative z-10 max-w-4xl">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-white backdrop-blur-sm mb-4">
            {post.category}
          </span>
          <h1 className="font-heading font-bold text-white text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.15] tracking-tight break-words text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed break-words">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-white/75">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 shrink-0" />
              {post.author}
            </span>
            {formattedDate && (
              <>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
                <span>{formattedDate}</span>
              </>
            )}
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 shrink-0" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      {heroImage && (
        <section className="relative z-10 -mt-6 md:-mt-8 pb-8 md:pb-10 bg-surface">
          <Container>
            <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-white p-3 sm:p-4 shadow-[0_8px_40px_rgba(30,90,152,0.1)] overflow-hidden">
              <div className="flex items-center justify-center w-full min-h-[12rem] max-h-[min(70vh,32rem)] bg-surface/60 rounded-xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt={post.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto max-h-[min(70vh,32rem)] object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="relative py-8 md:py-12 bg-surface">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-deep-mint/5 blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-light/5 blur-[120px]" />
        </div>

        <Container className="relative z-10">
          <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-6 sm:p-8 md:p-12 shadow-[0_2px_24px_rgba(30,90,152,0.06)] overflow-hidden">
            <div className="space-y-8">
              {post.content.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2 className="font-heading font-bold text-wordmark text-xl sm:text-2xl mb-4 leading-snug break-words">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-sm sm:text-base text-slate leading-relaxed break-words"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-slate break-words">
                Published by{" "}
                <span className="font-semibold text-ink">{post.author}</span> ·{" "}
                {siteConfig.name}
              </p>
              <Link
                href="/resources/blog"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                More articles
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <BrandCTA
        title="Turn insights into measurable growth"
        description="Ready to apply these strategies? Book a free strategy call with our team."
        className="pt-10 md:pt-14 pb-24"
      />
    </>
  );
}
