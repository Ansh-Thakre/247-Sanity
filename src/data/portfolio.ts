export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  metric: string;
  metricLabel: string;
  gradient: string;
}

export const portfolioHighlights: PortfolioItem[] = [
  {
    title: "BuildRight CRM Platform",
    category: "SaaS",
    description:
      "Custom CRM for construction companies with estimation, scheduling, and proposal modules.",
    metric: "+280%",
    metricLabel: "Lead Conversion",
    gradient: "from-[#1e5a98] to-[#0f3d6e]",
  },
  {
    title: "ShopVerse Ecommerce",
    category: "Ecommerce",
    description:
      "Full-stack ecommerce platform with AI-powered recommendations and multi-vendor support.",
    metric: "3x",
    metricLabel: "Revenue Growth",
    gradient: "from-[#18c499] to-[#0f6e56]",
  },
  {
    title: "GreenLeaf Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity redesign including logo, visual system, and packaging for eco brand.",
    metric: "+450%",
    metricLabel: "Brand Recall",
    gradient: "from-[#f4a726] to-[#854f0b]",
  },
  {
    title: "AutoFlow Marketing Suite",
    category: "Automation",
    description:
      "AI-powered marketing automation platform with email, SMS, and WhatsApp campaign management.",
    metric: "10M+",
    metricLabel: "Leads Generated",
    gradient: "from-[#3a80c8] to-[#1e5a98]",
  },
];
