"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { brandVoice } from "@/config/brand";
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
          <Button href="/portfolio" variant="outline" size="md">
            View Full Portfolio
          </Button>
          <Button
            href="/case-studies"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {brandVoice.ctaCaseStudies}
          </Button>
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
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div
        className={`h-44 bg-linear-to-br ${item.gradient} flex items-end p-5`}
      >
        <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 text-xs font-medium text-white backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-base font-heading font-semibold text-ink mb-1.5">
          {item.title}
        </h3>
        <p className="text-sm text-slate leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex items-baseline gap-2 pt-3 border-t border-border">
          <span className="font-mono text-xl font-medium text-primary">
            {item.metric}
          </span>
          <span className="text-xs text-slate">{item.metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}
