export interface BlogPostPreview {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  readTime: string;
  gradient: string;
}

export const latestPosts: BlogPostPreview[] = [
  {
    title: "How AI Is Revolutionizing Digital Marketing in 2026",
    excerpt:
      "Explore how artificial intelligence is reshaping campaign strategies, audience targeting, and content creation for modern businesses.",
    category: "AI Trends",
    date: "2026-05-10",
    slug: "ai-revolutionizing-digital-marketing",
    readTime: "5 min read",
    gradient: "from-[#1e5a98] to-[#3a80c8]",
  },
  {
    title: "10 SEO Strategies That Actually Drive Organic Growth",
    excerpt:
      "Stop chasing algorithm updates. These proven SEO fundamentals deliver compounding traffic gains quarter after quarter.",
    category: "SEO",
    date: "2026-05-05",
    slug: "seo-strategies-drive-growth",
    readTime: "7 min read",
    gradient: "from-[#18c499] to-[#0f6e56]",
  },
  {
    title: "Building Scalable SaaS Products: A Complete Guide",
    excerpt:
      "From architecture decisions to launch strategy — everything you need to know about building SaaS products that scale.",
    category: "Technology",
    date: "2026-04-28",
    slug: "building-scalable-saas-products",
    readTime: "9 min read",
    gradient: "from-[#f4a726] to-[#854f0b]",
  },
];
