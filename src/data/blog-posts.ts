export interface BlogPostPreview {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  readTime: string;
  gradient: string;
}

export const allPosts: BlogPostPreview[] = [
  {
    title: "How AI Is Revolutionizing Digital Marketing in 2026",
    excerpt:
      "Explore how artificial intelligence is reshaping campaign strategies, audience targeting, and content creation for modern businesses.",
    category: "AI Trends",
    date: "2026-05-10",
    slug: "ai-revolutionizing-digital-marketing",
    readTime: "5 min read",
    gradient: "from-primary to-primary-light",
  },
  {
    title: "10 SEO Strategies That Actually Drive Organic Growth",
    excerpt:
      "Stop chasing algorithm updates. These proven SEO fundamentals deliver compounding traffic gains quarter after quarter.",
    category: "SEO",
    date: "2026-05-05",
    slug: "seo-strategies-drive-growth",
    readTime: "7 min read",
    gradient: "from-deep-mint to-deep-navy",
  },
  {
    title: "AEO: Appear in AI-Generated Answers",
    excerpt:
      "Structured content strategy for ChatGPT, Perplexity, and voice search — where your customers are searching next.",
    category: "AEO",
    date: "2026-04-28",
    slug: "aeo-ai-generated-answers",
    readTime: "9 min read",
    gradient: "from-wordmark to-deep-navy",
  },
  {
    title: "Why Your Business Needs Measurable Marketing Systems",
    excerpt:
      "Disconnected tactics cost deals. Learn how qualified leads, attribution, and optimization compound growth.",
    category: "Strategy",
    date: "2026-04-20",
    slug: "measurable-marketing-systems",
    readTime: "6 min read",
    gradient: "from-primary-light to-primary",
  },
  {
    title: "Social Media ROI: Metrics That Matter",
    excerpt:
      "Vanity likes won't pay the bills. Focus on engagement quality, conversion paths, and attribution models that prove channel value.",
    category: "Social Media",
    date: "2026-04-15",
    slug: "social-media-roi-metrics",
    readTime: "5 min read",
    gradient: "from-mid-mint to-deep-mint",
  },
  {
    title: "Content Marketing Playbook for Service Businesses",
    excerpt:
      "A practical framework for thought leadership, case studies, and SEO content that attracts qualified buyers.",
    category: "Content",
    date: "2026-04-08",
    slug: "content-marketing-service-business",
    readTime: "8 min read",
    gradient: "from-primary to-deep-navy",
  },
  {
    title: "Web Performance: Core Web Vitals Explained",
    excerpt:
      "LCP, INP, and CLS demystified — plus actionable fixes to improve rankings, conversions, and user experience on any stack.",
    category: "Technology",
    date: "2026-03-28",
    slug: "core-web-vitals-explained",
    readTime: "7 min read",
    gradient: "from-deep-mint to-primary-dark",
  },
  {
    title: "5 Branding Mistakes That Kill Trust",
    excerpt:
      "Inconsistent visuals, weak messaging, and poor UX signal amateurism. Here's how to build a cohesive brand customers remember.",
    category: "Branding",
    date: "2026-03-15",
    slug: "branding-mistakes-kill-trust",
    readTime: "6 min read",
    gradient: "from-brand-mint to-primary-light",
  },
];

export const featuredPosts = allPosts.slice(0, 3);
export const latestPosts = allPosts.slice(0, 3);
