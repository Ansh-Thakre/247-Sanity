"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioHighlights, type PortfolioItem } from "@/data/portfolio";

export function PortfolioShowcase() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          overline="Our Work"
          title="Portfolio & Results"
          subtitle="Real projects, real results. See how we've helped businesses grow through technology and marketing."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {portfolioHighlights.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium border border-[#b5d4f4] text-[#1c2b3a] hover:bg-[#e8f0fb] transition-colors"
          >
            View Full Portfolio
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-[#1e5a98] hover:text-[#0f3d6e] transition-colors"
          >
            Read Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-[#e8f0fb] overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div
        className={`h-44 bg-linear-to-br ${item.gradient} flex items-end p-5`}
      >
        <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 text-xs font-medium text-white backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-base font-heading font-semibold text-[#1c2b3a] mb-1.5">
          {item.title}
        </h3>
        <p className="text-sm text-[#4a6075] leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex items-baseline gap-2 pt-3 border-t border-[#e8f0fb]">
          <span className="font-mono text-xl font-medium text-[#1e5a98]">
            {item.metric}
          </span>
          <span className="text-xs text-[#4a6075]">{item.metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}
