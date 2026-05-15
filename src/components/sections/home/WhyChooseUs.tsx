"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Monitor,
  Bot,
  TrendingUp,
  Building2,
  Layers,
} from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Strategy + Execution",
    description:
      "We don't just plan — we execute. Every strategy is backed by data-driven implementation and measurable results.",
    color: "#1e5a98",
  },
  {
    icon: Monitor,
    title: "Marketing + Technology",
    description:
      "The rare fusion of marketing expertise and technical capability under one roof, eliminating agency fragmentation.",
    color: "#18c499",
  },
  {
    icon: Bot,
    title: "AI-Driven Automation",
    description:
      "Leverage intelligent automation to streamline operations, reduce costs, and scale without proportional overhead.",
    color: "#6c5ce7",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Systems",
    description:
      "Every system we build is engineered to convert visitors into customers and drive measurable revenue growth.",
    color: "#1e5a98",
  },
  {
    icon: Building2,
    title: "Enterprise Scalability",
    description:
      "Architecture designed to grow with your business — from early-stage startup to enterprise-scale operations.",
    color: "#18c499",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "From branding to development to marketing — a complete digital ecosystem partner for your entire journey.",
    color: "#6c5ce7",
  },
];

export function WhyChooseUs() {
  const leftCards = [differentiators[0], differentiators[2], differentiators[4]];
  const rightCards = [differentiators[1], differentiators[3], differentiators[5]];

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #89D4FF25 30%, #89D4FF35 60%, #89D4FF20 85%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left column — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#18c499] font-heading mb-3">
              Core Differentiators
            </p>
            <h2
              className="font-heading font-bold text-[#1c2b3a] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Why{" "}
              <span className="text-[#1e5a98]">Choose Us?</span>
            </h2>
            <p className="mt-5 text-[#4a6075] leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              What makes 247 Digital the right partner for your digital
              transformation. We combine strategy, technology, and execution
              under one roof.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-heading font-semibold text-sm bg-[#1e5a98] text-white hover:bg-[#0f3d6e] transition-all duration-300 shadow-lg shadow-[#1e5a98]/20 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right column — staggered bento cards */}
          <div className="lg:col-span-8">
            {/* Mobile: single column stack */}
            <div className="flex flex-col sm:hidden gap-4">
              {differentiators.map((item, i) => (
                <ValueCard key={item.title} item={item} index={i} />
              ))}
            </div>

            {/* Tablet+: two-column offset grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-5">
              {/* Left sub-column */}
              <div className="flex flex-col gap-5 pt-0">
                {leftCards.map((item, i) => (
                  <ValueCard key={item.title} item={item} index={i} />
                ))}
              </div>

              {/* Right sub-column — offset down */}
              <div className="flex flex-col gap-5 pt-10 lg:pt-16">
                {rightCards.map((item, i) => (
                  <ValueCard key={item.title} item={item} index={i + 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  item,
  index,
}: {
  item: (typeof differentiators)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e8f0fb] shadow-[0_2px_16px_rgba(30,90,152,0.04)] hover:shadow-[0_8px_32px_rgba(30,90,152,0.10)] hover:border-[#b5d4f4] transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ backgroundColor: `${item.color}12` }}
        >
          <item.icon className="w-[18px] h-[18px]" style={{ color: item.color }} />
        </div>
        <h3 className="font-heading font-bold text-[#1c2b3a] text-lg leading-snug">
          {item.title}
        </h3>
      </div>
      <p className="text-sm text-[#4a6075] leading-relaxed pl-12">
        {item.description}
      </p>
    </motion.div>
  );
}
