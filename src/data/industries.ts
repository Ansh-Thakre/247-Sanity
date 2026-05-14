export interface IndustryItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const industries: IndustryItem[] = [
  {
    title: "Construction",
    description:
      "CRM, estimation, scheduling, and proposal automation tailored for contractors and builders.",
    icon: "hammer",
    href: "/industries/contractors",
  },
  {
    title: "Healthcare",
    description:
      "Patient management, appointment scheduling, and compliant digital solutions for care providers.",
    icon: "heart",
    href: "/industries",
  },
  {
    title: "Ecommerce",
    description:
      "Scalable online stores, inventory management, and conversion-optimized shopping experiences.",
    icon: "store",
    href: "/industries/ecommerce",
  },
  {
    title: "Education",
    description:
      "Learning platforms, virtual classrooms, and student engagement tools for modern institutions.",
    icon: "book-open",
    href: "/industries",
  },
  {
    title: "Manufacturing",
    description:
      "ERP systems, supply chain automation, and production workflow optimization at scale.",
    icon: "building-2",
    href: "/industries",
  },
  {
    title: "Startups",
    description:
      "MVP development, growth marketing, and scalable technology foundations for new ventures.",
    icon: "rocket",
    href: "/industries/startups",
  },
];
