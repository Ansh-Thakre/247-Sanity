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
    gradient: "from-primary to-deep-navy",
  },
  {
    title: "ShopVerse Ecommerce",
    category: "Ecommerce",
    description:
      "Full-stack ecommerce platform with AI-powered recommendations and multi-vendor support.",
    metric: "3x",
    metricLabel: "Revenue Growth",
    gradient: "from-deep-mint to-primary-dark",
  },
  {
    title: "GreenLeaf Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity redesign including logo, visual system, and packaging for eco brand.",
    metric: "+450%",
    metricLabel: "Brand Recall",
    gradient: "from-mid-mint to-deep-mint",
  },
  {
    title: "AutoFlow Marketing Suite",
    category: "Automation",
    description:
      "AI-powered marketing automation platform with email, SMS, and WhatsApp campaign management.",
    metric: "10M+",
    metricLabel: "Leads Generated",
    gradient: "from-primary-light to-primary",
  },
];
