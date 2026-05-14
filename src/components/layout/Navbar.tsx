"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNavItems } from "@/config/navigation";
import type { NavItem } from "@/types/navigation";

export function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {mainNavItems.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
}

function NavLink({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-slate hover:text-ink transition-colors rounded-lg"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate hover:text-ink transition-colors rounded-lg"
      >
        {item.label}
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white rounded-xl shadow-lg border border-border-light py-2 min-w-[220px]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-slate hover:text-ink hover:bg-surface transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
