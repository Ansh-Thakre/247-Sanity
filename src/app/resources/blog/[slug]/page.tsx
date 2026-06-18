import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BrandCTA } from "@/components/ui/BrandCTA";
import {
  BLOG_CARD_GRADIENT,
  getAllPostSlugs,
  getPostBySlug,
} from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section
        className={`relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-linear-to-br ${BLOG_CARD_GRADIENT}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <Container className="relative z-10">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 min-w-0 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-white backdrop-blur-sm mb-4">
                {post.category}
              </span>
              <h1 className="font-heading font-bold text-white text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.15] tracking-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-white/75">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
                <span>{formattedDate}</span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {post.image && (
              <div className="relative w-full sm:max-w-lg lg:w-[min(55%,32rem)] xl:max-w-2xl aspect-4/3 rounded-2xl overflow-hidden shrink-0 border border-white/25 shadow-[0_12px_40px_rgba(13,31,60,0.2)]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                  priority
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="relative py-12 md:py-16 bg-surface">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-deep-mint/5 blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-light/5 blur-[120px]" />
        </div>

        <Container className="relative z-10">
          <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-8 md:p-12 shadow-[0_2px_24px_rgba(30,90,152,0.06)]">
            <div className="space-y-8">
              {post.content.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2 className="font-heading font-bold text-wordmark text-xl sm:text-2xl mb-4 leading-snug">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-sm sm:text-base text-slate leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-slate">
                Published by{" "}
                <span className="font-semibold text-ink">{post.author}</span> ·{" "}
                {siteConfig.name}
              </p>
              <Link
                href="/resources/blog"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
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
