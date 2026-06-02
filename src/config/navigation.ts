import type { NavItem } from "@/types/navigation";

export const mainNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
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
