"use client";

import { motion } from "framer-motion";
import {
  Target,
  Monitor,
  Bot,
  TrendingUp,
  Building2,
  Layers,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: Target,
    title: "Strategy + Execution",
    description:
      "We don't just plan — we execute. Every strategy is backed by data-driven implementation and measurable results.",
  },
  {
    icon: Monitor,
    title: "Marketing + Technology",
    description:
      "The rare fusion of marketing expertise and technical capability under one roof, eliminating agency fragmentation.",
  },
  {
    icon: Bot,
    title: "AI-Driven Automation",
    description:
      "Leverage intelligent automation to streamline operations, reduce costs, and scale without proportional overhead.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Systems",
    description:
      "Every system we build is engineered to convert visitors into customers and drive measurable revenue growth.",
  },
  {
    icon: Building2,
    title: "Enterprise Scalability",
    description:
      "Architecture designed to grow with your business — from early-stage startup to enterprise-scale operations.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "From branding to development to marketing — a complete digital ecosystem partner for your entire journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[#eaf9f5]/40">
      <Container>
        <SectionHeading
          overline="Core Differentiators"
          title="Why Choose Us"
          subtitle="What makes 247 Digital the right partner for your digital transformation."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(30,90,152,0.18)", transition: { duration: 0.25, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#e8f0fb] border-t-[3px] border-t-[#18c499] cursor-pointer"
            >
              <item.icon className="w-6 h-6 text-[#18c499] mb-4" />
              <h3 className="text-base font-heading font-semibold text-[#1c2b3a] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4a6075] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
