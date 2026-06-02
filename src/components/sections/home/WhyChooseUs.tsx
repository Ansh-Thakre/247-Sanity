"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { brandVoice } from "@/config/brand";
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
    title: "Outcome-Focused",
    description:
      "We lead with results — leads, revenue, and growth. Every strategy connects back to what you actually gain.",
    color: "#1e5a98",
  },
  {
    icon: Monitor,
    title: "Strategy + Execution",
    description:
      "We don't just plan — we execute together. One team for strategy, creative, SEO, and paid media.",
    color: "#1a9e80",
  },
  {
    icon: Bot,
    title: "AEO & GEO Ready",
    description:
      "AEO ensures your business appears when AI tools answer your customers' questions — not just on page one of Google.",
    color: "#2d6ab5",
  },
  {
    icon: TrendingUp,
    title: "Data-Backed Confidence",
    description:
      "Qualified leads, measurable growth, and clear accountability — specific beats general every time.",
    color: "#1e5a98",
  },
  {
    icon: Building2,
    title: "Clear & Jargon-Free",
    description:
      "Plain, direct language on timelines, channels, and ROI. We explain AEO, GEO, and SEO in business terms.",
    color: "#1a9e80",
  },
  {
    icon: Layers,
    title: "Strategic Partner",
    description:
      "We're not a vendor — we're an invested partner. Collaborative tone, shared goals, and transparent reporting.",
    color: "#1a3a5f",
  },
];

export function WhyChooseUs() {
  const leftCards = [differentiators[0], differentiators[2], differentiators[4]];
  const rightCards = [differentiators[1], differentiators[3], differentiators[5]];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white via-pale-blue/20 to-white">
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
            <p className="text-overline mb-3">Why Partner With Us</p>
            <h2 className="font-heading font-bold text-wordmark text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
              Your Strategic Growth{" "}
              <span className="text-primary">Partner</span>
            </h2>
            <p className="mt-5 text-slate text-lead">{brandVoice.partnerLine}</p>
            <div className="mt-8">
              <Button href="/contact#consultation" variant="primary" size="lg">
                {brandVoice.ctaPrimary}
              </Button>
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
      className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-[0_2px_16px_rgba(30,90,152,0.04)] hover:shadow-[0_8px_32px_rgba(30,90,152,0.10)] hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ backgroundColor: `${item.color}12` }}
        >
          <item.icon className="w-[18px] h-[18px]" style={{ color: item.color }} />
        </div>
        <h3 className="font-heading font-bold text-ink text-lg leading-snug">
          {item.title}
        </h3>
      </div>
      <p className="text-sm text-slate leading-relaxed pl-12">
        {item.description}
      </p>
    </motion.div>
  );
}
