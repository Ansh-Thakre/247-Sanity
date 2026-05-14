"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { latestPosts, type BlogPostPreview as BlogPost } from "@/data/blog-posts";

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          overline="Blog & Insights"
          title="Latest Articles"
          subtitle="Industry insights, AI trends, SEO strategies, and actionable growth guides from our team."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestPosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1e5a98] hover:text-[#0f3d6e] transition-colors"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(30,90,152,0.18)", transition: { duration: 0.25, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/resources/blog/${post.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl border border-[#e8f0fb] overflow-hidden transition-all duration-300"
      >
        <div
          className={`h-40 bg-linear-to-br ${post.gradient} flex items-end p-4`}
        >
          <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 text-xs font-medium text-white backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-heading font-semibold text-[#1c2b3a] leading-snug mb-2 group-hover:text-[#1e5a98] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-[#4a6075] leading-relaxed flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#e8f0fb] text-xs text-[#4a6075]">
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-[#b5d4f4]" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
