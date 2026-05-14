"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  ClipboardList,
  FileText,
  Layout,
  Settings,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, type ProductItem } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  calculator: Calculator,
  "clipboard-list": ClipboardList,
  "file-text": FileText,
  layout: Layout,
  settings: Settings,
};

export function ProductEcosystem() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          overline="Products & Platforms"
          title="Our Product Ecosystem"
          subtitle="A suite of interconnected SaaS products designed to power every aspect of your business operations."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: ProductItem;
  index: number;
}) {
  const Icon = iconMap[product.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(30,90,152,0.18)", transition: { duration: 0.25, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-2xl p-6 border border-[#e8f0fb] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-[#e8f0fb] flex items-center justify-center group-hover:bg-[#1e5a98] transition-colors duration-300">
            <Icon className="w-5 h-5 text-[#1e5a98] group-hover:text-white transition-colors duration-300" />
          </div>
        )}
        <h3 className="text-base font-heading font-semibold text-[#1c2b3a]">
          {product.title}
        </h3>
      </div>

      <p className="text-sm text-[#4a6075] leading-relaxed mb-4">
        {product.description}
      </p>

      <ul className="space-y-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-[#1c2b3a]"
          >
            <Check className="w-3.5 h-3.5 text-[#18c499] shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
