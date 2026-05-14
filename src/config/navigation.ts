import type { NavItem } from "@/types/navigation";

export const mainNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Branding & Creative", href: "/services/branding" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "SaaS Solutions", href: "/services/saas-solutions" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Social Media", href: "/services/social-media" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Contractors", href: "/industries/contractors" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "Enterprise", href: "/industries/enterprise" },
      { label: "Startups", href: "/industries/startups" },
      { label: "SMEs", href: "/industries/sme" },
      { label: "Professional Services", href: "/industries/professional-services" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
];
