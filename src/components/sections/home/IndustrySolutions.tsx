"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hammer,
  Heart,
  Store,
  BookOpen,
  Building2,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, type IndustryItem } from "@/data/industries";

const iconStyles: Record<string, { bg: string; color: string }> = {
  hammer:     { bg: "#fff3e0", color: "#e65100" },
  heart:      { bg: "#fce4ec", color: "#c62828" },
  store:      { bg: "#e8f5e9", color: "#2e7d32" },
  "book-open": { bg: "#e3f2fd", color: "#1565c0" },
  "building-2": { bg: "#f3e5f5", color: "#7b1fa2" },
  rocket:     { bg: "#fff8e1", color: "#f57f17" },
};

const cardColors: Record<string, { bg: string; text: string; sub: string; iconBg: string; iconColor: string }> = {
  hammer:      { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#ffe0b2", iconColor: "#e65100" },
  heart:       { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#f8bbd0", iconColor: "#c62828" },
  store:       { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#c8e6c9", iconColor: "#2e7d32" },
  "book-open": { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#bbdefb", iconColor: "#1565c0" },
  "building-2":{ bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#e1bee7", iconColor: "#7b1fa2" },
  rocket:      { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#ffecb3", iconColor: "#f57f17" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  hammer: Hammer,
  heart: Heart,
  store: Store,
  "book-open": BookOpen,
  "building-2": Building2,
  rocket: Rocket,
};

export function IndustrySolutions() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#9ED3DC" }}
    >
      <Container>
        <SectionHeading
          overline="Industries We Serve"
          title="Industry Solutions"
          subtitle="Tailored digital ecosystems designed for the unique challenges and workflows of your industry."
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map((item, i) => (
            <IndustryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustryCard({ item, index }: { item: IndustryItem; index: number }) {
  const Icon = iconMap[item.icon];
  const card = cardColors[item.icon] || { bg: "#E3F2FD", text: "#1c2b3a", sub: "#4a6075", iconBg: "#bbdefb", iconColor: "#1565c0" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={item.href}
        className="group flex flex-col items-center text-center h-full rounded-2xl p-5 sm:p-7 transition-all duration-400 ease-out hover:scale-[1.05] hover:shadow-xl"
        style={{
          backgroundColor: card.bg,
          border: "2px solid transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "transparent";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {Icon && (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
            style={{ backgroundColor: card.iconBg }}
          >
            <Icon className="w-7 h-7" style={{ color: card.iconColor }} />
          </div>
        )}
        <h3
          className="font-heading font-bold mb-2"
          style={{ fontSize: "1.25rem", color: card.text }}
        >
          {item.title}
        </h3>
        <p
          className="leading-relaxed mb-4"
          style={{ fontSize: "1rem", color: card.sub }}
        >
          {item.description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ fontSize: "0.8125rem", color: card.text }}
        >
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </motion.div>
  );
}
